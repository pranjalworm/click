importScripts('workbox-v4.3.1/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;


registerRoute(
  new RegExp('/assets/images/'),
  new CacheFirst()
);

// the precache manifest will be injected into the following line
self.workbox.precaching.precacheAndRoute([]);