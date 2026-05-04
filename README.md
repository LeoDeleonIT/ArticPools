# Arctic Pool & Spa — Premium Marketing Site

A custom, high-conversion marketing site for **Arctic Pool & Spa Services**
(Southwest Florida). Built with **Next.js (App Router) + Tailwind CSS**.

---

## Quick start

```bash
cd arctic-pools
npm install
npm run dev
```

Then open **http://localhost:3000**.

To build for production:

```bash
npm run build
npm start
```

---

## File structure

```
arctic-pools/
├── app/
│   ├── layout.jsx              # Root shell — fonts, navbar, footer, intro
│   ├── globals.css             # Brand tokens + utility classes
│   ├── page.jsx                # Home page (composes all sections)
│   ├── services/page.jsx       # Services detail page
│   ├── about/page.jsx          # About / story page
│   └── contact/page.jsx        # Contact form + map + sidebar
├── components/
│   ├── BubbleIntro.jsx         # Canvas bubble + glass-reveal load animation
│   ├── Navbar.jsx              # Sticky blur navbar + mobile drawer
│   ├── Footer.jsx              # Footer with brand, links, contact
│   ├── FloatingCall.jsx        # Mobile sticky "Call Now" button
│   ├── QuoteModal.jsx          # Quote-request modal (mailto handler)
│   ├── RevealOnScroll.jsx      # Tiny IntersectionObserver wrapper
│   ├── Hero.jsx                # Headline, CTAs, trust strip, parallax bg
│   ├── TrustBar.jsx            # 4-up trust signals card
│   ├── Services.jsx            # Hover-lift service cards
│   ├── VisualProof.jsx         # Real photos w/ brand overlay
│   ├── WhyUs.jsx               # Image + 4 reasons grid
│   ├── Testimonials.jsx        # 3-up review cards
│   └── CTA.jsx                 # Full-width conversion block
├── tailwind.config.js          # Brand colors, animations, shadows
├── postcss.config.js
├── next.config.mjs             # Allows Unsplash/Pexels image hosts
├── jsconfig.json               # `@/*` import alias
└── package.json
```

---

## Brand system

Extracted from the truck wrap photo and codified in `tailwind.config.js`:

| Token        | Hex       | Usage                          |
| ------------ | --------- | ------------------------------ |
| `ink`        | `#04111E` | Page background                |
| `midnight`   | `#072742` | Section backdrops              |
| `deep`       | `#0B3C5D` | Deep electric blue (gradient)  |
| `aqua`       | `#00BFFF` | Glow / accent / hover          |
| `ice`        | `#7FDBFF` | Soft cyan                      |
| `frost`      | `#E6F6FF` | Body text on dark              |

Reusable utility classes live in `app/globals.css`:
`btn-primary`, `btn-ghost`, `card`, `card-hover`, `chip`, `heading-xl`,
`heading-lg`, `text-glow` (animated shimmer gradient), `water-grid`.

---

## Key features

- **Premium load animation** — Canvas-based bubbles rise from the bottom with
  refractive highlights, then a glass-shimmer panel sweeps up to reveal the
  page (~2s, honors `prefers-reduced-motion`). See `components/BubbleIntro.jsx`.
- **Sticky blur navbar** — Transparent at top, blurs on scroll, mobile drawer.
- **Conversion-first hero** — Dual CTAs, inline trust strip, parallax water
  background, floating stat card, animated headline gradient.
- **Service cards** — Glow + lift on hover, animated arrow.
- **Visual proof** — Real Unsplash photos with brand-tinted overlay.
- **Floating mobile call button** — Always-visible tap-to-dial.
- **Quote modal** — Triggered from navbar + CTAs, sends via `mailto:` (swap
  for your API/Worker later).
- **Reveal on scroll** — Tiny IntersectionObserver fade/lift on every section.
- **Map embed** — OpenStreetMap (no API key) on Contact page.
- **Performance** — `next/image`, lazy maps, no animation libraries.

---

## Customizing

- **Phone number** — Search the codebase for `(239) 378-0640` to update.
- **Email** — Search for `service@arcticpools.org`.
- **Photos** — Replace Unsplash URLs with your own (any approved hostname can
  be added in `next.config.mjs`).
- **Quote form** — In `QuoteModal.jsx` and `app/contact/page.jsx`, replace the
  `mailto:` redirect with a `fetch()` to your endpoint.

---

## Deployment

The site deploys cleanly to **Vercel**, **Cloudflare Pages**, or any host
supporting Next.js 14. From the project directory:

```bash
# Vercel
npx vercel

# Cloudflare Pages (build command)
npm run build && npx @cloudflare/next-on-pages
```
