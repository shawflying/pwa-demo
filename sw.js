var cacheStorageKey = 'minimal-pwa-1'

var cacheList = [
    '/',
    "index.html",
    "base.css",
    "head.jpg"
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheStorageKey)
            .then(cache => cache.addAll(cacheList))
            .then(() => self.skipWaiting())
    )
})