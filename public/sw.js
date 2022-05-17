const cacheName = 'v2';
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
        const contentType = res.headers.get('content-type');

        //Make clone of response
        console.log('res sw', contentType);

        if (
          contentType === 'image/png' ||
          contentType === 'font/woff2' ||
          contentType === 'text/html' ||
          contentType === 'text/javascript' ||
          contentType === 'text/plain'
        ) {
          const resClone = res.clone();

          //Open cache
          caches.open(cacheName).then((cache) => {
            //Add response to cache
            cache.put(e.request, resClone);
          });
        }

        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
