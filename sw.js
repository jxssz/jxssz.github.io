if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let u={};const o=e=>i(e,l),t={module:{uri:l},exports:u,require:o};n[l]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(s(...e),u)))}}define(["./workbox-c0002b4a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/_...all_.oxumKEa1.js",revision:null},{url:"_nuxt/_id_.QKF0blZy.js",revision:null},{url:"_nuxt/_plugin-vue_export-helper.x3n3nnut.js",revision:null},{url:"_nuxt/default.8Gdpo97_.js",revision:null},{url:"_nuxt/entry.LgLVxmRC.css",revision:null},{url:"_nuxt/entry.sIap5m8L.js",revision:null},{url:"_nuxt/error-404.REMp3gXR.js",revision:null},{url:"_nuxt/error-404.SaR2Zalm.css",revision:null},{url:"_nuxt/error-500.2itWk7wX.css",revision:null},{url:"_nuxt/error-500.UD15ecLM.js",revision:null},{url:"_nuxt/Footer.N0iVV5rz.js",revision:null},{url:"_nuxt/home.8y5VCWcO.js",revision:null},{url:"_nuxt/index.uDXauADZ.js",revision:null},{url:"_nuxt/nuxt-link.T7wStg2U.js",revision:null},{url:"_nuxt/workbox-window.prod.es5.prqDwDSL.js",revision:null},{url:"200",revision:"428d8643cc7d5ef89ce061d929345cb7"},{url:"404",revision:"428d8643cc7d5ef89ce061d929345cb7"},{url:"apple-touch-icon.png",revision:"7af7254d448992daf0f665380021b19f"},{url:"favicon.ico",revision:"77247dda2205ca744ed87e14fc7f7dfa"},{url:"/",revision:"9c8874f2b663727985f494b59f395680"},{url:"maskable-icon.png",revision:"f1575b3df98db81ab80f5109abeded64"},{url:"nuxt.svg",revision:"b0d2bf20c6507a57102f081dd6291526"},{url:"pwa-192x192.png",revision:"bf7cfd2ea70c9599888561437703115a"},{url:"pwa-512x512.png",revision:"0aba0a96ed3d17bafed2f607f7e57037"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"vite.png",revision:"a148cc221d43294c514678fed69c6626"},{url:"_nuxt/builds/latest.json",revision:"ef9a90ddee7af7c6d1112f67417c743f"},{url:"_nuxt/builds/meta/5aaa6c14-c22c-49f9-9ec4-99ebd0c09019.json",revision:null},{url:"manifest.webmanifest",revision:"544dd800901dbc20a8b4ea3c33909df9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{denylist:[/^\/api\//]})),e.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
