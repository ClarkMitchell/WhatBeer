importScripts('/WhatBeer/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "WhatBeer",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/WhatBeer/_nuxt/app.55ba073e1948b961bdbb.js",
    "revision": "37933fb16589be1d6aac357c060e576c"
  },
  {
    "url": "/WhatBeer/_nuxt/layouts/default.ce9cab687f7989621312.js",
    "revision": "1394a178333abb999612615bab550436"
  },
  {
    "url": "/WhatBeer/_nuxt/manifest.278dd1ab4608765e8c64.js",
    "revision": "db2d52de5b314501749a7d355cc35348"
  },
  {
    "url": "/WhatBeer/_nuxt/pages/beer/_id.98d7e8e8974c2c82af45.js",
    "revision": "9df6e8fd6fe375f97c3534eec667c77b"
  },
  {
    "url": "/WhatBeer/_nuxt/pages/index.7b363ce828f9a5c42408.js",
    "revision": "3e56b7a1547da645a1f22e6bf6b30fab"
  },
  {
    "url": "/WhatBeer/_nuxt/vendor.089549ef04497c55cfcc.js",
    "revision": "5b4b3526436cfb74adc63c840c6180ad"
  }
])


workboxSW.router.registerRoute(new RegExp('/WhatBeer/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/WhatBeer/.*'), workboxSW.strategies.networkFirst({}), 'GET')

