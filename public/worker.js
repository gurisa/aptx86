var cache_static = 's-aptx86-v1';
var cache_source = [
  // 'manifest.json',
  'assets/image/icon/icon-x144.png',
  'assets/image/place/braga.jpg',
  'assets/image/place/citylink.jpg',
  'assets/image/place/mikomall.jpg',
  'assets/image/place/paskal.jpg',
  'assets/image/place/transmart.jpg',
  'assets/image/default/movie.jpg',

  'assets/css/default.css',
  'assets/js/default.js',
  'assets/js/map.js',
  'https://fonts.googleapis.com/css?family=Niramit',
  'https://use.fontawesome.com/releases/v5.4.1/css/all.css',

  'index.html',  
  'index.html?utm_source=native',
  './?utm_source=native',
  '404.html',

  // 'https://www.omdbapi.com/?apikey=ff1d8f00&s=Detective Conan',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
   caches.open(cache_static).then(function(cache) {
      return cache.addAll(cache_source);
   }).catch(function(error) {
      // console.log('Failed to cache resources', error);
   })
  );
});

self.addEventListener('activate', function(event) {
  // return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      else {
        if (event.request.url.endsWith('.jpg') || event.request.url.endsWith('.png')) {
          return fetch('./assets/image/default/movie.jpg');
        }
        else {
          return fetch(event.request).then(function(response) {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return caches.open(cache_static).then(function(cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        }
      }      
    }).catch(function(error) {
      // return caches.open(cache_static).then(function(cache) {
      //   return cache.match('404.html');
      // }).catch((error) => console.log('Error occured', error));
    })
  );
});