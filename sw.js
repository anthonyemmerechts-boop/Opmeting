/* Ve.Ra+ Werfopmeting - offline cache. Verhoog VERSION bij elke nieuwe versie van de app. */
const VERSION = "werfopmeting-v13";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "fenestrio-template.xlsx"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  /* De app zelf: eerst de nieuwste versie, maar hoogstens 3 seconden wachten op een traag netwerk. */
  if (e.request.mode === "navigate") {
    const net = fetch(e.request).then(res => { if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put("index.html", copy)); } return res; });
    const traag = new Promise(ok => setTimeout(ok, 3000)).then(() => caches.match("index.html"));
    e.respondWith(Promise.race([net.catch(() => caches.match("index.html")), traag]).then(r => r || net));
    return;
  }
  e.respondWith(
    caches.match(e.request, {ignoreSearch: true}).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.ok && new URL(e.request.url).origin === location.origin) {
          const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
