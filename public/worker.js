var cache_version = 'v1';
var cache_static = 's-aptx86-' + cache_version;
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
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA',
  'index.html',
  'index.html?utm_source=native',
  '/',
  '/?utm_source=native',
];

self.addEventListener('install', function(e) {
  console.log('Service worker installing...');
  // e.waitUntil(
  //  caches.open(cache_static).then(function(cache) {
  //    return cache.addAll(cache_source);
  //  }).catch(function(err) {

  //  })
  // );
});

self.addEventListener('activate', function(e) {
  console.log('Service worker activating...');
  // return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // e.respondWith(
  //   caches.match(e.request).then(function(response) {
  //     if (response) {
  //       return response;
  //     }
  //     return fetch(e.request);
  //   }).catch(function(err) {
  //     return caches.open(cache_static).then(function(cache) {
  //       return cache.match('/error');
  //     });
  //   })
  // );
});