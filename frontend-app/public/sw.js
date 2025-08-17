if (!self.define) {
  let e,
    s = {};
  const a = (a, t) => (
    (a = new URL(a + ".js", t).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (t, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const o = (e) => a(e, i),
      f = { module: { uri: i }, exports: c, require: o };
    s[i] = Promise.all(t.map((e) => f[e] || o(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/ICON.png", revision: "103bac21fd2593f734371af06fd7f4d9" },
        { url: "/ICON.png", revision: "1133fe12246920c15b5c887510bef556" },
        {
          url: "/Leonardo_Phoenix_10_Create_a_vibrant_futuristic_and_engaging_d_2.jpg",
          revision: "5e7548858a3e14c3261f6f9966878c25",
        },
        {
          url: "/_next/app-build-manifest.json",
          revision: "1b16b1ba745c9313a070c2d3d5792f89",
        },
        {
          url: "/_next/static/Akx9eqtWNvSewfob6Lo2I/_buildManifest.js",
          revision: "58df7bfaa26a65ab9b8b5234c52852f9",
        },
        {
          url: "/_next/static/Akx9eqtWNvSewfob6Lo2I/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/134-db638afa772846be.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/191-89ebd64067a2ab3c.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/195.8025eaa68f6a45e4.js",
          revision: "8025eaa68f6a45e4",
        },
        {
          url: "/_next/static/chunks/236-903f7d04da26c7ef.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/352-1b3b1b7e49b51e99.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/406.4ff1bb329bf57161.js",
          revision: "4ff1bb329bf57161",
        },
        {
          url: "/_next/static/chunks/4bd1b696-5d969e91cffb1be9.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/515-0592f176c87a3695.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/558-1c9c16684d8cbbf5.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/62-3228c388e6f675ae.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/684-0431d2330d6f1750.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/704-025d49e77b8e6c0f.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/9c4e2130-0b44b7bcaf85371b.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/(auth)/login/layout-8fb9db9f58a31a3c.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/(auth)/login/page-9b36fada6d5799cb.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/(auth)/signup/layout-4c1b00bfbff4c3f9.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/(auth)/signup/page-3ffcdac7f04b3352.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/(common)/NotificationsPage/page-ac3553f0c40133d9.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/suport/layout-fbd69d7d7f2d34b1.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(clientpages)/suport/page-302c44cd8db6007d.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(legal)/about/page-2eda222aa49bd5f0.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(legal)/career/page-67e3b1d15ff854f3.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(legal)/contact/page-a82830519195d28a.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(legal)/privacy/page-bc5ec7417c146564.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/(legal)/terms/page-7e6ca363729c4ac9.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-952bd0b91dca6b7d.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/layout-6d36587631c7070b.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/app/page-90a4f91059be9b25.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/ee560e2c-3a959df63b2eb221.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/fc2f6fa8-f66e1488fc192822.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/framework-b326bfe0905a39d9.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/main-9b64a1ceac196f8d.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/main-app-d8a01ccfed685fa8.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/pages/_app-da15c11dea942c36.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-e48a13174bc80086.js",
          revision: "Akx9eqtWNvSewfob6Lo2I",
        },
        {
          url: "/_next/static/css/265103cf7a7db7e1.css",
          revision: "265103cf7a7db7e1",
        },
        {
          url: "/_next/static/media/569ce4b8f30dc480-s.p.woff2",
          revision: "ef6cefb32024deac234e82f932a95cbd",
        },
        {
          url: "/_next/static/media/747892c23ea88013-s.woff2",
          revision: "a0761690ccf4441ace5cec893b82d4ab",
        },
        {
          url: "/_next/static/media/8d697b304b401681-s.woff2",
          revision: "cc728f6c0adb04da0dfcb0fc436a8ae5",
        },
        {
          url: "/_next/static/media/93f479601ee12b01-s.p.woff2",
          revision: "da83d5f06d825c5ae65b7cca706cb312",
        },
        {
          url: "/_next/static/media/9610d9e46709d722-s.woff2",
          revision: "7b7c0ef93df188a852344fc272fc096b",
        },
        {
          url: "/_next/static/media/ba015fad6dcf6784-s.woff2",
          revision: "8ea4f719af3312a055caf09f34c89a77",
        },
        { url: "/b1.jpg", revision: "ae5bca2d53accd588283af9fdbf45493" },
        { url: "/b2.jpg", revision: "2fa9c9928d6e8e7c67db544f6a8d6fb7" },
        { url: "/b3.jpg", revision: "d3493e0ea195e815bd51974fed36b94f" },
        { url: "/b4.jpg", revision: "6f9ecac0b12e03c38b41f8820dcba187" },
        { url: "/file.svg", revision: "d09f95206c3fa0bb9bd9fefabfd0ea71" },
        { url: "/gaming2.png", revision: "1b336088a8a786af4bbad63c7ebf4f9c" },
        { url: "/globe.svg", revision: "2aaafa6a49b6563925fe440891e32717" },
        { url: "/login.jpg", revision: "8565202b94a6cacdec72c90c8941ec1e" },
        { url: "/manifest.json", revision: "4a80f9dbfa008eedc1b2f20ffa9f5710" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/signup.jpg", revision: "3b9ab6ffd97b3b50bbbd90543350f23b" },
        { url: "/vercel.png", revision: "74c2874e37eea89d5216a084a15e0b9e" },
        { url: "/vercel1.svg", revision: "c0af2f507b369b085b35ef4bbe3bcf1e" },
        { url: "/window.svg", revision: "a2760511c65806022ad20adf74370ff3" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: t,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
