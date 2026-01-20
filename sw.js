self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.clients.claim();
});

/*
⚠️ iOS WILL IGNORE THIS without a server push
This is required just for eligibility
*/
self.addEventListener('push', event => {
  const data = event.data?.json() || {};

  self.registration.showNotification('Shopify', {
    body: data.body || 'New order received',
    icon: 'https://files.catbox.moe/roso7g.png'
  });
});
