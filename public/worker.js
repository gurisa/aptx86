var cache_static = 's-aptx86-v1';
var cache_source = [
  'manifest.json',
  'assets/image/favicon.png',
  'assets/css/default.css',
  'assets/js/default.js',
  'assets/js/map.js',
  
  'https://fonts.googleapis.com/css?family=Niramit',
  'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
  // 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA',
  'index.html',
  'index.html?utm_source=native',
  '404.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
   caches.open(cache_static).then(function(cache) {
      return cache.addAll(cache_source);
   }).catch(function(error) {
      console.log('Failed to cache resources', error);
   })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service worker activating...');
  // return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // event.respondWith(
  //   fetch(event.request).then(function(response) {
  //     if (response.status == 404) {
  //       return fetch('404.html');
  //     }
  //     return response;
  //   }).catch(function() {
  //     return new Response('Offline page');
  //   })
  // );
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }).catch(function(error) {
      return caches.open(cache_static).then(function(cache) {
        return cache.match('404.html');
      });
    })
  );
});