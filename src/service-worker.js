importScripts('workbox-v4.3.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { StaleWhileRevalidate } = workbox.strategies;

registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'image-cache'
  })
);

// the precache manifest will be injected into the following line
self.workbox.precaching.precacheAndRoute([]);