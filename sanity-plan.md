# Sanity Integration Plan: Ministry Website

Goal: the client posts blogs, events, and updates from a hosted editor (Sanity Studio). The Vite + React site reads that content from Sanity's API. No GitHub account or rebuild needed for the client.

## 1. Architecture

```
Client (editor) --> Sanity Studio (<name>.sanity.studio) --> Sanity Content Lake
                                                                  |
Visitors --> Vite + React site --(GROQ over HTTPS, CDN)-----------+
```

- Studio is a separate app from the website. It is deployed to Sanity's free hosting with `npx sanity deploy`.
- The website only reads. It uses `@sanity/client` with `useCdn: true`.
- Convention to know: the Studio is configured as code (schemas are TypeScript files), the same way you define entities/DTOs in NestJS. Content shape lives in your repo, content itself lives in Sanity.

## 2. Decisions to lock before coding

| Decision | Choice | Reason |
|---|---|---|
| Studio location | `studio/` folder at the repo root (own `package.json`) | Keeps Studio deps out of the website bundle |
| Dataset | `production`, public | Free plan only allows public datasets. Fine for public site content |
| Fetching | Client-side fetch on the CDN | Site is a Vite SPA, new posts appear instantly |
| API version | Pin a date string, e.g. `2026-03-01` | Query behaviour stays stable until you bump it |
| Images | Sanity asset pipeline + `@sanity/image-url` | Resizing and format conversion via URL params |
| Rich text | Portable Text + `@portabletext/react` | Sanity's body field format |

Free plan limits to be aware of (verify on sanity.io/pricing before launch): 20 seats, 2 public datasets, 10K documents, 1M CDN requests and 250K API requests per month. The Free plan has hard caps with no overages: at the limit, requests are blocked. A church site will not get near these, but do not use `useCdn: false` for public traffic, since uncached API requests have the smaller quota.

## 3. Content model (Studio schemas)

Files: `studio/schemaTypes/*.ts`, registered in `studio/schemaTypes/index.ts`.

**post** (`post.ts`)
- title (string, required)
- slug (slug, source: title, required)
- publishedAt (datetime, required)
- author (string, simple for now; make it a reference only if multiple authors are needed)
- coverImage (image, hotspot enabled, alt text field)
- excerpt (text, max ~200 chars)
- body (array of block + image, i.e. Portable Text)

**event** (`event.ts`)
- title (string, required)
- slug (slug, required)
- startDate (datetime, required)
- endDate (datetime, optional)
- location (string)
- image (image, hotspot, alt text)
- description (Portable Text)
- registrationUrl (url, optional)

**update** (`update.ts`) for short announcements
- title (string, required)
- publishedAt (datetime, required)
- message (text or short Portable Text)
- pinned (boolean, for urgent notices shown at top)
- expiresAt (datetime, optional, so stale notices drop off automatically)

Validation rules: mark required fields with `.required()` so the client cannot publish a half-empty document and break a page.

Studio UX: set `orderings` (newest first) and a `preview` (title + date) on each type. Optionally group them in `deskStructure` as "Blog posts", "Events", "Updates".

## 4. Setup steps

### Phase A: Sanity project and Studio
1. Create a Sanity account and project (sanity.io/manage). Note the **project ID**.
2. From repo root: `npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio`
3. Add the three schema files above and register them. Run `npm run dev` inside `studio/` and test at `http://localhost:3333`.
4. Create 2 to 3 sample documents of each type.
5. Deploy: `npx sanity deploy` inside `studio/`. Pick a hostname. This is the URL the client uses.

### Phase B: Project settings (sanity.io/manage, API tab)
1. Add CORS origins: `http://localhost:5173` (Vite dev) and the production domain. Without this, browser requests fail with a CORS error.
2. Invite the client as **Editor** under Members. Viewers are free, editors use a seat (Free plan has 20).

### Phase C: Website wiring
Files are relative to the website root.

1. Install: `npm i @sanity/client @sanity/image-url @portabletext/react`
2. `.env` (and the host's env settings):
   ```
   VITE_SANITY_PROJECT_ID=xxxx
   VITE_SANITY_DATASET=production
   ```
   These are public values. Never put a write token in the frontend.
3. `src/lib/sanity.js`: `createClient({ projectId, dataset, apiVersion, useCdn: true })` plus an `urlFor(image)` helper built with `imageUrlBuilder`.
4. `src/lib/queries.js`: GROQ strings, kept in one place:
   - Posts list: `*[_type == "post"] | order(publishedAt desc){_id, title, "slug": slug.current, excerpt, coverImage, publishedAt}`
   - Single post: `*[_type == "post" && slug.current == $slug][0]`
   - Upcoming events: `*[_type == "event" && startDate >= now()] | order(startDate asc)`
   - Past events: same filter with `<` and `desc` order
   - Active updates: `*[_type == "update" && (!defined(expiresAt) || expiresAt > now())] | order(pinned desc, publishedAt desc)`
5. `src/hooks/useSanityQuery.js`: small hook returning `{ data, loading, error }`. This is the equivalent of a service layer: components never call the client directly.
6. Components / pages (match to the site's existing structure):
   - `Blog` list page and `BlogPost` detail page (slug route)
   - `Events` page (upcoming first, past collapsed) and optional `EventDetail`
   - `UpdatesBanner` or `Updates` section on the home page
   - `PortableTextRenderer` wrapping `@portabletext/react` with styled block and image components that use the site's Tailwind tokens
7. Handle three states in every page: loading skeleton, error message, empty state ("No upcoming events").
8. Format dates with `Intl.DateTimeFormat` in the church's local timezone.

## 5. SEO and sharing (decide early)
A client-side SPA ships an empty HTML shell. Google can render JS, but link previews (WhatsApp, Facebook) will not see per-post titles or images. For a church where sharing events on WhatsApp is likely, this matters. Options:
1. Accept it (simplest).
2. Prerender at build time: fetch from Sanity during the build and generate static HTML, with a Sanity webhook triggering a rebuild on publish.
3. Move to Astro or Next later, which is a bigger change.

Recommend starting with option 1, then revisit if link previews become a real complaint.

## 6. Client handoff
- Give the client the Studio URL and log in with Google.
- One page guide: create a post, add an image with alt text, publish, edit, unpublish. Note that content only goes live after pressing **Publish**.
- Optional: record a short screen walkthrough.

## 7. Verification checklist
- [ ] Studio deployed and the client can log in as Editor
- [ ] Publishing a post in Studio shows on the site without a redeploy
- [ ] Draft (unpublished) content does not appear on the site
- [ ] Event with a past date moves out of "upcoming"
- [ ] Expired update disappears
- [ ] Images render at the right size, with hotspot cropping working
- [ ] Production domain is in CORS origins
- [ ] Empty and error states look correct (test by temporarily using a wrong project ID)
- [ ] No tokens or secrets in the frontend bundle

## 8. Risks
- **Free plan hard caps**: requests are blocked at quota. Keep `useCdn: true`, avoid refetching on every render, cache lists in memory per session.
- **Public dataset**: anything published is readable by anyone with the project ID. Never store private data (member contact details, prayer requests) in this dataset.
- **Schema changes after content exists**: renaming a field orphans existing data. Add fields freely, but plan renames as migrations.
- **Editor mistakes**: oversized images and missing alt text. Mitigate with required validation and a short guide.

## 9. Needed from the existing site before implementation
- Router in use (React Router? file layout?) and how pages are organised in `src/`
- Hosting and production domain (for CORS, and for a rebuild webhook if used)
- Whether Blog, Events, Updates pages already exist with placeholder or hardcoded content
- Whether the site is JS or TS (the Tailwind config only scans `.js,.jsx`)
