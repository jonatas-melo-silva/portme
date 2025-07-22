const CACHE_NAME = 'static-cache-v3'  
const BASE_PATH = self.location.pathname.startsWith('/portme') ? '/portme' : ''

const ASSETS = [
  `${BASE_PATH}/src/assets/icons/envelope.svg`,
  `${BASE_PATH}/src/assets/icons/github.svg`,
  `${BASE_PATH}/src/assets/icons/instagram.svg`,
  `${BASE_PATH}/src/assets/icons/linkedin.svg`,
  `${BASE_PATH}/src/assets/icons/quebra-cabeca.svg`,
  `${BASE_PATH}/src/assets/icons/telegram.svg`,
  `${BASE_PATH}/src/assets/icons/whatsapp.svg`,
  `${BASE_PATH}/src/assets/icons/x.svg`,
  `${BASE_PATH}/src/assets/images/avatar-laptop.avif`,
  `${BASE_PATH}/src/assets/images/avatar-mobile.avif`,
  `${BASE_PATH}/src/assets/images/avatar-tablet.avif`,
  `${BASE_PATH}/src/assets/images/logo-sethas-laptop.avif`,
  `${BASE_PATH}/src/assets/images/logo-sethas-mobile.avif`,
  `${BASE_PATH}/src/assets/images/logo-sethas-tablet.avif`,
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
