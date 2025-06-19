const CACHE_NAME = 'static-cache-v2'
const BASE_PATH = self.location.pathname.startsWith('/portme') ? '/portme' : ''

const ASSETS = [
  `${BASE_PATH}/src/assets/icones/icone-envelope.svg`,
  `${BASE_PATH}/src/assets/icones/icone-github.svg`,
  `${BASE_PATH}/src/assets/icones/icone-instagram.svg`,
  `${BASE_PATH}/src/assets/icones/icone-linkedin.svg`,
  `${BASE_PATH}/src/assets/icones/icone-quebra-cabeca.svg`,
  `${BASE_PATH}/src/assets/icones/icone-telegram.svg`,
  `${BASE_PATH}/src/assets/icones/icone-whatsapp.svg`,
  `${BASE_PATH}/src/assets/icones/icone-x.svg`,
  `${BASE_PATH}/src/assets/image-avatar-laptop.avif`,
  `${BASE_PATH}/src/assets/image-avatar-mobile.avif`,
  `${BASE_PATH}/src/assets/image-avatar-tablet.avif`,
  `${BASE_PATH}/src/assets/image-logo-sethas-laptop.avif`,
  `${BASE_PATH}/src/assets/image-logo-sethas-mobile.avif`,
  `${BASE_PATH}/src/assets/image-logo-sethas-tablet.avif`,
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cacheando recursos:', ASSETS)
        return cache.addAll(ASSETS)
      })
      .catch(err => console.error('[SW] Falha ao cachear:', err))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  )
})
