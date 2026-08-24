self.addEventListener("install", event => {
    console.log("NutriHierro instalada");
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});