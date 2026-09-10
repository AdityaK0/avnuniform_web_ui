# AVN Uniforms — E-commerce Website

A production-quality e-commerce frontend for **AVN Uniforms**, a uniform manufacturer and
promotional apparel supplier based in Ahmedabad, Gujarat. Built as a fully static React app —
no backend server is required to run it in production.

## Tech Stack

- React 19 (functional components, JSX only — no TypeScript)
- React Router 7 (client-side routing, SPA)
- Vite (dev server + static build)
- Plain CSS with a small design-token system (`src/index.css`) — no CSS framework
- No backend: cart/wishlist persist to `localStorage`; the bulk-order form is architected to
  POST to a real API later (see `src/services/bulkOrderService.js`)

## Getting Started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

## Project Structure

```
src/
  data/          Local "database" — products, categories, business info, nav links.
                 Swap these modules for API calls later; nothing else needs to change.
  context/       Cart / Wishlist / Toast state, persisted to localStorage.
  hooks/         useLocalStorage.
  services/      bulkOrderService.js — stubbed submission, ready to become a real POST.
  utils/         Placeholder image generator, currency formatting.
  components/    layout/, home/, product/, shop/, search/, cart/, common/
  pages/         One file per route (see Routes below).
```

## Routes

`/`, `/shop`, `/category/:slug`, `/product/:slug`, `/cart`, `/wishlist`, `/bulk-order`,
`/about`, `/contact`, plus a catch-all 404.

## Product Images

No real product photography was available at build time. Every product image is a
clearly-labelled placeholder graphic generated on the fly by
`src/utils/placeholderImage.js` (an inline SVG data URI — no external image hosting, no
hotlinked third-party photos). To swap in real photography, replace the `images` entries in
`src/data/products.js` with real file paths and update `src/components/common/ProductImage.jsx`
accordingly — no other component needs to change.

## SEO

Each page sets its own title, meta description, canonical URL, Open Graph/Twitter tags, and
JSON-LD structured data via `src/components/common/Seo.jsx` (a lightweight, dependency-free
alternative to react-helmet). `public/robots.txt` and `public/sitemap.xml` are included.

## Static Deployment

This app builds to plain static files in `dist/` — no Node server is required in production.

- **Netlify / Cloudflare Pages**: `public/_redirects` already routes all paths to `index.html`
  for SPA support.
- **Vercel**: `vercel.json` rewrites all paths to `index.html`.
- **GitHub Pages**: `npm run build` also copies `dist/index.html` to `dist/404.html` (via the
  `postbuild` script) so deep links resolve correctly.

## Business Information

- Email: info@avnuniform.com
- Address: Shop No 8, Laxmi Nagar Complex, Near Komal Worldwide PVT LTD, Shahwadi Narol,
  Ahmedabad, Gujarat 382405, India

Phone and WhatsApp numbers were not provided — the UI shows clearly-labelled placeholders
("coming soon — please email us") instead of inventing contact numbers. Update
`src/data/business.js` once official numbers are available.
