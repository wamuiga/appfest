var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/index.html',
  '/manifest.json',
  'src/push.min.js',
  'src/notifications.js',
  'src/app.js',
  'src/materialize.min.js',
  'src/materialize.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});