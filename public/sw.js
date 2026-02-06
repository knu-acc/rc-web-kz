// Service Worker для кэширования статических ресурсов
const CACHE_NAME = 'rc-web-v2'
const STATIC_CACHE = 'rc-web-static-v2'

const urlsToCache = [
  '/',
  '/landing-page',
  '/corporate-site',
  '/online-store',
  '/portfolio',
  '/contact',
  '/reviews',
  '/website-price',
]

// Установка Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
})

// Активация — удаляем старые кэши
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((n) => n !== CACHE_NAME && n !== STATIC_CACHE)
          .map((n) => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  )
})

// Стратегия: стatics → Cache First, pages → Stale While Revalidate
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Только GET-запросы и наш origin
  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  // Статические ресурсы — Cache First
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|webp|avif|svg|ico|woff2?)$/)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          if (cached) return cached
          return fetch(request).then((response) => {
            if (response.ok) cache.put(request, response.clone())
            return response
          })
        })
      )
    )
    return
  }

  // HTML-страницы — Stale While Revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(request).then((cached) => {
        const fetchPromise = fetch(request)
          .then((response) => {
            if (response.ok) cache.put(request, response.clone())
            return response
          })
          .catch(() => cached)
        return cached || fetchPromise
      })
    )
  )
})
