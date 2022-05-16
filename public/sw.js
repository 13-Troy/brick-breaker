const cacheName = 'v1';
//Registering event
self.addEventListener('install', () => {
  console.log('SW:installer');
});

//Activation event
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//Registering event
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //Make clone of response

        const resClone = res.clone();

        //Open cache
        caches.open(cacheName).then((cache) => {
          //Add response to cache
          cache.put(e.request, resClone);
        });

        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
