
const CACHE='ai-v1126';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['index.html','manifest.json'])));});
self.addEventListener('activate',e=>{self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.url.includes('firestore')||e.request.url.includes('alquran')||e.request.url.includes('islamic.network'))return; e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));});
