
const CACHE='ai-v1127-habeebi-final';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['index.html','manifest.json'])));});
self.addEventListener('activate',e=>{self.clients.claim();e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));});
self.addEventListener('fetch',e=>{
  const url=e.request.url;
  if(url.includes('firestore')||url.includes('alquran')||url.includes('islamic.network')||url.includes('fbsbx')||url.includes('facebook')||url.includes('cdn.fbsbx'))return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
