// RideSafe AI — Service Worker v3 LIMPIO
const V = 'ridesafe-v3';
const TILES = 'ridesafe-tiles-v3';

const SHELL = [
  './',
  './index.html',
  './manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u).catch(()=>null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== V && k !== TILES).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Tiles — cache first
  if (url.includes('cartocdn.com') || url.includes('opentopomap.org') || url.includes('arcgisonline.com')) {
    e.respondWith(
      caches.open(TILES).then(cache =>
        cache.match(e.request).then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res.ok) cache.put(e.request, res.clone());
            return res;
          }).catch(() => cached || new Response('', {status:503}));
        })
      )
    );
    return;
  }

  // App shell — cache first
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
      .catch(() => caches.match('./index.html'))
  );
});

self.addEventListener('message', e => {
  const { type, tiles, zoneId } = e.data || {};
  if (type === 'CACHE_ZONE') cacheZone(tiles, zoneId, e.source);
  if (type === 'GET_CACHE_SIZE') getSize().then(s => e.source.postMessage({type:'CACHE_SIZE',size:s}));
  if (type === 'SKIP_WAITING') self.skipWaiting();
});

async function cacheZone(tiles, zoneId, client) {
  const cache = await caches.open(TILES);
  let done = 0;
  for (const url of tiles) {
    try { if (!await cache.match(url)) { const r = await fetch(url); if (r.ok) await cache.put(url, r.clone()); } } catch(e) {}
    done++;
    if (done % 5 === 0 || done === tiles.length)
      client.postMessage({type:'CACHE_PROGRESS', zoneId, done, total:tiles.length});
  }
  client.postMessage({type:'CACHE_DONE', zoneId, total:tiles.length});
}

async function getSize() {
  try { const e = await navigator.storage.estimate(); return e.usage || 0; } catch { return 0; }
}
