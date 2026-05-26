const CACHE = 'flyinglogos-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './img/icon.svg',
  './img/supreme.png',
  './img/mertra.png',
  './img/mertra2.png',
  './img/stussy.png',
];

self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));

self.addEventListener('activate', e =>
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))));

self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
