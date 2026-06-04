// RideSafe AI — Service Worker Mapas Offline
var CACHE_NAME = 'ridesafe-mapas-v1';

self.addEventListener('fetch', function(event) {
  var url = event.request.url;
  
  // Solo interceptar tiles de OpenStreetMap
  if (url.includes('tile.openstreetmap.org')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(cached) {
          if (cached) return cached;
          // Si no está en caché intentar red
          return fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          }).catch(function() {
            // Sin conexión y sin caché — devolver tile vacío
            return new Response('', { status: 503 });
          });
        });
      })
    );
  }
});
