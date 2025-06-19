const CACHE_NAME = 'static-cache-v1'
const ASSETS = [
  '/src/assets/icones/icone-envelope.svg',
  '/src/assets/icones/icone-github.svg',
  '/src/assets/icones/icone-instagram.svg',
  '/src/assets/icones/icone-linkedin.svg',
  '/src/assets/icones/icone-quebra-cabeca.svg',
  '/src/assets/icones/icone-telegram.svg',
  '/src/assets/icones/icone-whatsapp.svg',
  '/src/assets/icones/icone-x.svg',
  '/src/assets/image-avatar-laptop.avif',
  '/src/assets/image-avatar-mobile.avif',
  '/src/assets/image-avatar-tablet.avif',
  '/src/assets/image-logo-sethas-laptop.avif',
  '/src/assets/image-logo-sethas-mobile.avif',
  '/src/assets/image-logo-sethas-tablet.avif',
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)))
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  )
})
