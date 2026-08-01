const CACHE_NAME = 'leef-portfolio-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './manifest.json',
  './assets/images/photo/key_visual_photo_final.jpg',
  './assets/images/photo/bts_meadow_walk.jpg',
  './assets/images/photo/bts_camera_setup.jpg',
  './assets/images/photo/test_shot_1.jpg',
  './assets/images/photo/test_shot_2.jpg',
  './assets/images/photo/raw_composition.jpg',
  './assets/images/ai/key_visual_ai_final.jpg',
  './assets/images/ai/step1_raw_gen.jpg',
  './assets/images/ai/step2_shelf_edit.jpg',
  './assets/images/ai/step3_leef_brand.jpg',
  './assets/images/ai/step4_final_ad.jpg',
  './assets/downloads/high_res/motiv_01_photo_highres.png',
  './assets/downloads/high_res/motiv_01_photo_highres_EN.png',
  './assets/downloads/high_res/motiv_02_ai_highres.png',
  './assets/downloads/web_res/motiv_01_photo_web.png',
  './assets/downloads/web_res/motiv_01_photo_web_EN.png',
  './assets/downloads/web_res/motiv_02_ai_web.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});