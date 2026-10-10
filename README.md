# Salvation Streams Outreach Missions — Website

A React + Vite + Tailwind implementation of the Salvation Streams marketing site, built from the approved
Google Stitch design.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Tech stack (intentionally small)

- **React 18** + **React Router** — pages and navigation
- **Vite** — dev server / build tool
- **Tailwind CSS** — styling, using the exact color tokens from the approved design
- **lucide-react** — icon set (matches the icon style used throughout the Stitch design)

No state management library, no CMS, no backend — this is a static marketing site. Add a backend later only if
you need dynamic content (e.g. a real events API) or a real payment processor on the Give page.

## Replacing placeholder images

**Every image in the site is a placeholder** generated to be on-brand (navy/sky-blue) and clearly labeled so
nothing looks broken, but nothing here is a real photo.

All image paths are declared in **one file**: `src/data/siteContent.js`. To swap any image for a real photo:

1. Add your real photo to `src/assets/images/` (any filename you like).
2. In `src/data/siteContent.js`, find the matching entry (e.g. `hero.image`, `about.pastorPortrait`,
   `activities[0].image`, etc.) and point it at your new file, e.g.:
   ```js
   image: img('hero-crusade-crowd-REAL.jpg')
   ```
   — or simply **overwrite the existing placeholder file** with your real photo using the exact same filename,
   and no code changes are needed at all.

There is no image logic scattered across components — every `<SmartImage>` just renders whatever path
`siteContent.js` gives it, so content updates never require touching JSX.

### Image inventory (what to shoot / source)

| Location in site | File | Suggested real photo |
|---|---|---|
| Home hero | `hero-crusade-crowd.jpg` | Wide shot of a crusade or outreach crowd |
| About hero | `about-hero-global-unity.jpg` | Diverse congregation / global gathering |
| Pastor portrait | `pastor-john-doe-portrait.jpg` | Professional portrait of the pastor |
| Leadership (x4) | `leader-*.jpg` | Headshots of ministry leadership |
| Activities (x4) | `activity-*.jpg` | Real photos from each program |
| Events (x3) | `event-*.jpg` | Photos from past/upcoming events |
| Testimonies (x4) | `testimony-*.jpg` | Photos/video stills of the people giving testimony |
| Sermons (x4) | `sermon-*.jpg` | Video thumbnails / pastor preaching stills |
| Give page | `give-hands-water.jpg` | Hands, water, or giving-themed image |
| Logos | `logo-horizontal.svg`, `logo-stacked.svg` | Your final vector logo files |

## Editing text content

Like images, all copy (headlines, bios, event details, sermon descriptions, giving fund descriptions, nav
labels, footer links, social URLs) lives in `src/data/siteContent.js`. Pages just read from this file — you
should rarely need to edit `.jsx` files just to change wording.

## Project structure

```
src/
  assets/images/     placeholder images + logos (replace these)
  components/        shared UI: Header, Footer, Button, Section, SmartImage, Icon, AnimatedCounter
  data/
    siteContent.js   ALL site copy + image paths — the single source of truth
  pages/             one file per route (Home, About, Activities, Events, Testimonies, Sermons, Give, ...)
  App.jsx            route definitions
  main.jsx           app entry point
```

## Design decisions carried over from the approved Stitch design

- Color palette: high-contrast **Black / Red / White** system — a near-black canvas (`#08080A`) with
  Signal Red (`#E50914`) as the single accent (links, icons, CTAs) and off-white (`#FAFAFA`) type.
  See `tailwind.config.js`.
- Fonts: Righteous (headings) + Inter (body), loaded via Google Fonts in `index.html`.
- Motion: subtle scroll reveals (`Reveal.jsx` / `Section`), staggered hero entrance, animated nav
  underline, card hover lift, button shine, and a red marquee ticker — all honoring
  `prefers-reduced-motion` (see `src/index.css`).
- Sticky nav with a visually distinct "Give" button, always reachable while scrolling.
- Testimony videos show "Captions on" by default instead of an "Enable Sound" toggle (accessibility fix).
- Impact counters include a visible "Updated [date] — see full impact report" line for credibility.
- Every partner/leadership/testimony image is distinct — no repeated placeholder logos.
- Single H1 per page, consistent heading hierarchy, no duplicated sections.
- Events page includes country/activity filters and a clear "RSVP" vs. "Book Pastor [Charles Owie]" split CTA.
- Give page shows fund designation, one-time/monthly toggle, and a transparent spending breakdown before payment.

## Known TODOs before going live

- Wire the Give page form to a real payment processor (Stripe, Paystack, Pushpay, etc.) — it currently shows a
  demo alert on submit.
- Wire the newsletter/subscribe forms (Sermons page) to a real email provider.
- Replace all placeholder images (see table above).
- Replace `Privacy.jsx` / `Terms.jsx` placeholder text with real legal copy.
- Hook the sermon "Watch Now" buttons up to real video (YouTube embed or hosted video).
- Consider adding real event data from a backend/CMS instead of the static array in `siteContent.js` once the
  ministry needs to update events without a code deploy.
