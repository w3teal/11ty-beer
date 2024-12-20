self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['pwa'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});