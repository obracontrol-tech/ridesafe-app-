// ════════════════════════════════════════════════════════════════
//  RideSafe AI — Service Worker v2
//  PWA completo: precache + tile cache + offline fallback
// ════════════════════════════════════════════════════════════════

const APP_VERSION  = 'ridesafe-app-v2';
const TILE_CACHE   = 'ridesafe-tiles-v2';
const FONT_CACHE   = 'ridesafe-fonts-v1';

// Recursos de la app que se precargan en la instalación
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
];

// ── INSTALL: precachear el app shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_VERSION)
      .then(cache => {
        // addAll falla si cualquier recurso falla — usamos add individual
        return Promise.allSettled(
          APP_SHELL.map(url => cache.add(url).catch(() => null))
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: limpiar caches antiguas ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== APP_VERSION && k !== TILE_CACHE && k !== FONT_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: estrategia por tipo de recurso ──
self.addEventListener('fetch', event => {
  const url = event.request.url;

  // 1. Tiles de mapa → Cache First (offline primero)
  if (isTileRequest(url)) {
    event.respondWith(tileStrategy(event.request));
    return;
  }

  // 2. Fuentes Google → Cache First
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(event.request, FONT_CACHE));
    return;
  }

  // 3. App Shell → Cache First con fallback a red
  if (isAppShell(url)) {
    event.respondWith(cacheFirst(event.request, APP_VERSION));
    return;
  }

  // 4. Firebase / Nominatim / APIs externas → Network First (no cachear datos vivos)
  if (isExternalAPI(url)) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // 5. Todo lo demás → Stale While Revalidate
  event.respondWith(staleWhileRevalidate(event.request));
});

// ── Clasificadores de URL ──
function isTileRequest(url) {
  return url.includes('basemaps.cartocdn.com') ||
         url.includes('tile.openstreetmap.org') ||
         url.includes('opentopomap.org') ||
         url.includes('arcgisonline.com/ArcGIS');
}
function isAppShell(url) {
  return url.includes(self.location.origin) || APP_SHELL.includes(url);
}
function isExternalAPI(url) {
  return url.includes('nominatim.openstreetmap.org') ||
         url.includes('firebaseio.com') ||
         url.includes('googleapis.com/');
}

// ── Estrategias de caché ──

// Cache First: sirve desde caché, si falla va a red y guarda
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return offlineFallback(request);
  }
}

// Network First: intenta red, si falla usa caché
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || offlineFallback(request);
  }
}

// Stale While Revalidate: sirve caché inmediatamente, actualiza en background
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      caches.open(APP_VERSION).then(cache => cache.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached);
  return cached || fetchPromise;
}

// Tiles: cache first con límite de tiempo (7 días)
async function tileStrategy(request) {
  const cache = await caches.open(TILE_CACHE);
  const cached = await cache.match(request);
  if (cached) {
    const dateHeader = cached.headers.get('date');
    if (dateHeader) {
      const age = Date.now() - new Date(dateHeader).getTime();
      if (age < 7 * 24 * 60 * 60 * 1000) return cached; // < 7 días → usar caché
    } else {
      return cached; // sin fecha → confiar en caché
    }
  }
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return cached || new Response('', { status: 503, statusText: 'Tile offline' });
  }
}

// Fallback offline: página o imagen vacía
function offlineFallback(request) {
  if (request.destination === 'document') {
    return caches.match('./index.html');
  }
  if (request.destination === 'image') {
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  return new Response('', { status: 503 });
}

// ── Mensajes desde la app (gestión de zonas offline) ──
self.addEventListener('message', event => {
  const { type, tiles, zoneId } = event.data || {};

  if (type === 'CACHE_ZONE') {
    cacheZoneTiles(tiles, zoneId, event.source);
  }
  if (type === 'DELETE_ZONE') {
    // Limpiamos tiles marcados con el prefijo de zona
    deleteZone(event.source);
  }
  if (type === 'GET_CACHE_SIZE') {
    getCacheSize().then(size =>
      event.source.postMessage({ type: 'CACHE_SIZE', size })
    );
  }
  if (type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function cacheZoneTiles(tiles, zoneId, client) {
  const cache = await caches.open(TILE_CACHE);
  let done = 0;
  const total = tiles.length;

  for (const url of tiles) {
    try {
      if (!await cache.match(url)) {
        const res = await fetch(url);
        if (res.ok) await cache.put(url, res.clone());
      }
    } catch { /* tile no disponible, continuar */ }

    done++;
    if (done % 5 === 0 || done === total) {
      client.postMessage({ type: 'CACHE_PROGRESS', zoneId, done, total });
    }
    // Pausa pequeña para no saturar la red
    if (done % 20 === 0) await sleep(50);
  }
  client.postMessage({ type: 'CACHE_DONE', zoneId, total });
}

async function deleteZone(client) {
  // Borrar toda la caché de tiles (se regenera al navegar)
  await caches.delete(TILE_CACHE);
  client.postMessage({ type: 'DELETE_DONE' });
}

async function getCacheSize() {
  try {
    const est = await navigator.storage.estimate();
    return est.usage || 0;
  } catch { return 0; }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
