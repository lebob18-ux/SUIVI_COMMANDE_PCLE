self.addEventListener('fetch', (event) => {
  // Laisse passer toutes les requêtes réseau normalement
  event.respondWith(fetch(event.request));
});
