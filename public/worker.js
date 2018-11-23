var cache_static = 's-aptx86-v1';
var cache_source = [
  // 'manifest.json',
  'assets/image/icon/icon-x144.png',
  'assets/image/braga.jpg',
  'assets/image/citylink.jpg',
  'assets/image/mikomall.jpg',
  'assets/image/paskal.jpg',
  'assets/image/transmart.jpg',

  'assets/css/default.css',
  'assets/js/default.js',
  'assets/js/map.js',
  'https://fonts.googleapis.com/css?family=Niramit',
  'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',

  'index.html',
  'index.html?utm_source=native',
  '404.html',

  'https://www.omdbapi.com/?apikey=ff1d8f00&s=batman',
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
      console.log(error);
      // return caches.open(cache_static).then(function(cache) {
      //   return cache.match('404.html');
      // });
    })
  );
});