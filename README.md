# DGR Multispeciality Hospital — Premium Website

A futuristic, motion-driven website for **DGR Multispeciality Hospital, Giddalur**, built with React, Three.js, GSAP, Framer Motion and Lenis smooth scroll.

## Tech stack
- **React 18** + **Vite** (fast dev server & build)
- **Tailwind CSS** (utility styling, centralized brand tokens)
- **Three.js** + **@react-three/fiber** (hero neural-network particle field)
- **GSAP ScrollTrigger** (pinned horizontal-scroll specialities)
- **Framer Motion** (reveals, stagger, magnetic + hover motion, carousel)
- **Lenis** (smooth scroll, synced to GSAP)
- **lucide-react** (icons)

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```
Node 18+ recommended.

## Project structure
```
index.html                 SEO meta, Open Graph, Hospital JSON-LD schema
tailwind.config.js         ← BRAND PALETTE lives here (one place to retheme)
src/
  main.jsx, App.jsx, index.css
  data/content.js          ← all hospital text, stats, departments (edit here)
  lib/useLenis.js          smooth scroll + GSAP sync
  components/
    Navbar, Hero, NeuralBackground (R3F), EcgCanvas, Marquee, Stats,
    WhyChoose, Specialities (GSAP), Doctor, Facilities, Aarogyasri,
    Emergency, Testimonials, Contact, Footer, ScrollProgress, ui.jsx
public/
    DGR_LOGO.png, favicon.png
```

## Editing content
Almost everything (phone, address, departments, stats, facilities, testimonials)
is in **`src/data/content.js`** — change it there and it updates across the site.

## Colour theme
The whole palette is centralized in **`tailwind.config.js`** under `theme.extend.colors`.
It currently uses the **DGR logo identity (teal / mint / charcoal) on a dark theme**.

> Note: the original brief listed a blue palette (`#0057B8 / #00AEEF / #00D4FF`,
> dark `#030712`). Because you asked earlier for the site to match your logo, the
> default here is the teal/green brand. To switch to the blue palette, change
> `brand`, `mint`, `cyan`, `bg`, and `surface` in `tailwind.config.js` — that's the
> only file you need to touch.

## What's fully built
Hero with interactive 3D neural-network background + mouse parallax, animated
headline, live ECG canvas, smooth scroll, scroll-progress bar, custom glow cursor,
magnetic buttons, count-up stats, why-choose cards, **GSAP pinned horizontal
specialities**, doctor showcase with 3D tilt, facilities grid, Aarogyasri process
flow, full-width emergency section, testimonials carousel, appointment form that
submits to **WhatsApp**, Google-Maps embed, footer + mobile action bar, SEO schema,
and reduced-motion fallbacks throughout.

## Scaffolded / future work (intentionally not faked)
These were in the brief but need real data/services, so they're left as clear
next steps rather than non-functional mock-ups:
- **AI appointment assistant / chatbot / voice search** — needs an LLM/backend.
- **3D hospital building model & virtual tour** — needs a real 3D model (`.glb`).
- **Video testimonials & Google reviews API** — needs media + API keys.
- **Doctor profiles** — currently one founder profile; add real doctors in `content.js`.

## Before going live
- Replace the doctor monogram with a **real photo of Dr. Harinath Reddy**.
- **Verify** the bed/ICU counts and the “first high-speed CT in Giddalur” claim with
  the hospital (current figures come from public listings + the provided brief).
- Set the real domain in `index.html` (`canonical`, Open Graph) and add an OG image.

## Accessibility
Semantic HTML, keyboard-focusable controls with visible focus rings, labelled
form fields and icon buttons, and a full `prefers-reduced-motion` path (no canvas,
cursor, parallax or autoplay when the user opts out).

## TypeScript
This project is written in **TypeScript**. Run `npm run type-check` to type-check, and
`npm run build` (which runs `tsc --noEmit` then `vite build`) for a type-checked production build.
All props, refs, state, events and data (`src/data/content.ts`) are typed.
