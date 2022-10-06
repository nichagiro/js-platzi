const VERSION = 'v1';

// cuando se instale el ServiceWorker
self.addEventListener('install', event => {
  event.waitUntil(precache()); //waitUntil es como un await
});

// cuando hayan llamadas get (imagenes, html, css, js)
self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method == 'GET') {
    event.respondWith(cachedResponse(request));  // buscar en cache
    event.waitUntil(updateCache(request));   // actualizar el cache
  }
});

// crea la cache con los archivos
async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/privado.js',
    '/app.js',
    '/files/digimon.mp4',
  ]);
}

// Revisa el cache para obtener la peticion del archivo
async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);  //si ya hay una copia
  return response || fetch(request);
}

// Actualiza el cache
async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response).catch(error => console.log(error));
}

