# HTML → Next.js Conversion Progress

## Status Key
- DONE ✅
- IN PROGRESS 🔄
- PENDING ⬜

---

## Phase 1: Setup ✅
- [x] Scaffold created (`nextjs-app/` via `create-next-app@latest`) ✅
- [x] Assets copied (favicon.svg, icon-192.svg, icon-512.svg, manifest.json, robots.txt, sitemap.xml → `public/`) ✅
- [x] `next.config.ts` configured (`output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`) ✅

---

## Phase 2: Analysis ✅

### Step 2.1 — All HTML Files Read ✅

| # | Original File | Size | Title |
|---|---|---|---|
| 1 | `index.html` | 15.5 KB | Ajay Shingadiya \| Enterprise Data Engineering & Automation |
| 2 | `about.html` | 9.4 KB | Philosophy & Operational Excellence \| Ajay Shingadiya |
| 3 | `services.html` | 10.4 KB | Professional Services & Technical Specs \| Ajay Shingadiya |
| 4 | `strategic-partners.html` | 11.4 KB | Strategic Partnerships - Enterprise Scalability \| Ajay Shingadiya |
| 5 | `chemical-data.html` | 8.9 KB | Chemical & Pharma Intelligence \| Ajay Shingadiya |
| 6 | `profile.html` | 9.5 KB | Senior Architect Profile - Engineering Excellence \| Ajay Shingadiya |
| 7 | `contact.html` | 11.4 KB | Contact Our Office \| Ajay Shingadiya |
| 8 | `success.html` | 5.5 KB | Message Received \| Ajay Shingadiya |
| 9 | `404.html` | 5.9 KB | 404 page |
| 10 | `offline.html` | 4.0 KB | PWA offline fallback |

### Step 2.2 — Route Mapping ✅

| Original HTML File | Next.js Route | `app/` Path |
|---|---|---|
| `index.html` | `/` | `app/page.tsx` |
| `about.html` | `/about` | `app/about/page.tsx` |
| `services.html` | `/services` | `app/services/page.tsx` |
| `strategic-partners.html` | `/strategic-partners` | `app/strategic-partners/page.tsx` |
| `chemical-data.html` | `/chemical-data` | `app/chemical-data/page.tsx` |
| `profile.html` | `/profile` | `app/profile/page.tsx` |
| `contact.html` | `/contact` | `app/contact/page.tsx` |
| `success.html` | `/success` | `app/success/page.tsx` |
| `404.html` | `/not-found` | `app/not-found.tsx` |

### Step 2.3 — CSS File Map ✅

| Original CSS | How Imported |
|---|---|
| `styles.css` (1425 lines) | → `nextjs-app/app/globals.css` (full copy, verbatim) |
| Inline `<style>` in `strategic-partners.html` | → merged into `globals.css` or kept inline as JSX `<style jsx>` |
| Inline `<style>` in `profile.html` | → merged into `globals.css` |
| Inline `<style>` in `contact.html` | → merged into `globals.css` |
| Inline `<style>` in `success.html` | → merged into `globals.css` |
| Google Fonts `@import` (Space Grotesk + Inter) | → stays in `globals.css` as-is |

> **Note:** `styles.css` uses `@import url("https://fonts.googleapis.com/...")` at line 7. No url() paths for local fonts/images to update — all external or no image refs in CSS.

### Step 2.4 — JavaScript Function Map ✅

| Function/Feature in `main.js` | React Conversion Strategy |
|---|---|
| `initTheme()` — reads `localStorage`, sets `data-theme` attribute | `useEffect` in `layout.tsx` or root client component |
| `toggleTheme()` — flips dark/light theme | `useState` + `useEffect` in `Navbar.tsx` (`'use client'`) |
| `updateThemeIcon()` — updates Lucide icon | Part of Navbar state logic |
| Mobile menu toggle (`.menu-toggle` click) | `useState` in `Navbar.tsx` (`'use client'`) |
| Close menu on outside click | `useEffect` with `document` event listener in `Navbar.tsx` |
| Sticky header on scroll (`.header.scrolled` class) | `useEffect` + `window.addEventListener('scroll')` in `Navbar.tsx` |
| Scroll reveal (`IntersectionObserver` on `.bento-item` etc.) | `useEffect` in each page or a shared `useScrollReveal` hook |
| Particle canvas animation (full canvas API) | `useEffect` in a `ParticleCanvas.tsx` client component |
| Typing effect (`#typed-text`, `data-phrases`) | `useEffect` in each page/hero section (`'use client'`) |
| Counter animation (`[data-count]`, `IntersectionObserver`) | `useEffect` in each page using counters |
| Active nav detection (`window.location.pathname`) | Use Next.js `usePathname()` hook in `Navbar.tsx` |
| Button ripple effect | `useEffect` or inline `onClick` handler |
| `lucide.createIcons()` (CDN global call) | Replace with `lucide-react` npm package — use `<Database />`, `<Zap />` etc. as React components |

### Step 2.5 — External Scripts / CDN Links ✅

| Original `<head>` Script | Next.js Handling |
|---|---|
| `<script src="https://unpkg.com/lucide@latest">` | **Replace** with `npm install lucide-react` — use named icon imports |
| `<script src="/main.js">` (bottom of body) | Converted to React hooks (see JS map above) |
| Google Fonts `@import` in CSS | Stays in `globals.css` — no change needed |
| JSON-LD `<script type="application/ld+json">` | Add as raw string in `layout.tsx` `<head>` using `dangerouslySetInnerHTML` |

### Step 2.6 — Page-Specific Inline Styles ✅

These pages have `<style>` blocks in their `<head>` that must be migrated:

| File | Inline Classes | Migration Plan |
|---|---|---|
| `strategic-partners.html` | `.partner-badge`, `.service-list-cols`, `.service-item` | Add to `globals.css` |
| `profile.html` | `.profile-grid`, `.profile-card`, `.tech-stack`, `.tech-pill` | Add to `globals.css` |
| `contact.html` | `.contact-grid`, `.form-card`, `.form-group` (styles) | Add to `globals.css` |
| `success.html` | `.success-container`, `.success-icon` | Add to `globals.css` |

### Step 2.7 — Images Referenced ✅

No `<img>` tags with `src` attributes found in any HTML files.
All visual elements use CSS backgrounds, SVG icons (Lucide), and CSS gradients.

**Assets in `public/` (already copied):**
- `favicon.svg`
- `icon-192.svg`
- `icon-512.svg`
- `manifest.json`
- `robots.txt`
- `sitemap.xml`

### Step 2.8 — Shared Components Needed ✅

| Component | File | Used On |
|---|---|---|
| `Navbar` | `app/components/Navbar.tsx` | All pages (via `layout.tsx`) |
| `Footer` | `app/components/Footer.tsx` | All pages (via `layout.tsx`) |
| `ParticleCanvas` | `app/components/ParticleCanvas.tsx` | All pages (via `layout.tsx`) |

All three need `'use client'` directive.

---

## Phase 3: CSS ✅
- [x] `globals.css` created — full `styles.css` (1425 lines) + `--bg-subtle` token added + all 4 pages' inline styles merged (`.partner-badge`, `.service-list-cols`, `.service-item`, `.profile-grid`, `.profile-card`, `.tech-stack`, `.tech-pill`, `.contact-grid`, `.success-container`, `.success-icon`) ✅

---

## Phase 4: Layout ✅
- [x] `layout.tsx` created (with metadata, Json-LD, Google Fonts, global CSS, Navbar, and Footer) ✅

---

## Phase 5: Pages ✅
- [x] `index.html` → `app/page.tsx` ✅
- [x] `about.html` → `app/about/page.tsx` ✅
- [x] `services.html` → `app/services/page.tsx` ✅
- [x] `strategic-partners.html` → `app/strategic-partners/page.tsx` ✅
- [x] `chemical-data.html` → `app/chemical-data/page.tsx` ✅
- [x] `profile.html` → `app/profile/page.tsx` ✅
- [x] `contact.html` → `app/contact/page.tsx` ✅
- [x] `success.html` → `app/success/page.tsx` ✅

---

## Phase 6: JavaScript ✅
- [x] All JS converted (typing effect, counters, scroll reveal, menu) into respective page hooks and shared components. `lucide-react` integration complete. ✅

---

## Phase 7: Components ✅
- [x] `Navbar.tsx` (with theme toggle, mobile menu, active path, sticky scroll) ✅
- [x] `Footer.tsx` (with Lucide icons) ✅
- [x] `ParticleCanvas.tsx` (using Canvas API and refs) ✅

---

## Phase 8: Deploy ⬜
- [x] `lucide-react` installed ✅
- [ ] Pushed to GitHub
- [ ] Vercel configured (Root Directory: `nextjs-app`)
- [ ] Live URL verified
