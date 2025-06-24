/* Minimal pass-through service worker */
self.addEventListener('install', (event) => self.skipWaiting());
self.addEventListener('activate', (event) => self.clients.claim());

self.addEventListener('fetch', (event) => {
  // No caching needed; just forward the request.
  event.respondWith(fetch(event.request));
});
