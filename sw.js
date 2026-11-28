// A minimal service worker so Chrome will install Sushi Boat as an app (its own home-screen icon,
// opening full screen) instead of a plain browser shortcut. It caches nothing: every request goes
// straight to the network, so new deploys show up as soon as they're live.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
