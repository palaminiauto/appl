const CACHE_NAME = 'sheets-app-v1';

// Fase di installazione del Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installato');
    self.skipWaiting();
});

// Fase di attivazione
self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Attivato');
    return self.clients.claim();
});

// Intercettazione delle richieste (obbligatorio per la PWA)
self.addEventListener('fetch', (e) => {
    // Lasciamo passare tutte le richieste normalmente
    e.respondWith(fetch(e.request));
});
