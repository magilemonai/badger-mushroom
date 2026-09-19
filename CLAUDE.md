# codywymore.com — standing contract

Personal site for Cody Wymore, live at https://codywymore.com. React 18 + Vite 5 + Tailwind v4 + react-router-dom, prerendered to static HTML and served by GitHub Pages from `docs/` on `main`. Cody's verdict 2026-09-16 (Hangar Bay audit): refit; contract rewritten to the house template.

## Boot sequence
1. Read `NEXT.md` (the board; the deck parses title lines only).
2. `git log -8 --date=short --format='%ad %s'` is the record; there is no PROGRESS.md.
3. For a new post, read the newest `src/blog/*_2026.jsx` pair as the pattern before writing one.

## Run / verify
- `npm run dev` → http://localhost:3000
- `npm run build` = `vite build && vite build --ssr src/prerender-entry.jsx --outDir dist-ssr && node scripts/prerender.mjs`. The SSR pass renders every route through `src/prerender-entry.jsx` (eager imports; its route table mirrors `src/App.jsx`); `scripts/prerender.mjs` then writes each route as `docs/blog/<slug>.html` and `docs/blog/<slug>/index.html` inside the built shell, with per-route `<head>` tags from `src/routeMeta.js`. `dist-ssr/` is gitignored; `docs/` is committed.
- `npm run preview` previews the build.
- Deploy: build, commit `docs/`, push `main`. `public/CNAME` keeps the domain; `public/404.html` is the SPA fallback for anything the prerender did not emit.
- Mobile is part of done (house rule): check 390px before calling a post shipped.

## Project structure (regenerate from `find src -maxdepth 2`; do not hand-maintain a file list here)
- `src/App.jsx` - router + `PageviewTracker`. The route table lives here and is mirrored in `src/prerender-entry.jsx` and `src/routeMeta.js`; keep all three in sync.
- `src/sections/` - homepage sections (Hero, About, AdTech, Creative, Writing, Projects, Contact).
- `src/blog/<Slug>_2026.jsx` + `<Slug>_2026_Content.jsx` - one pair per post (Q1, Q2, Breakout, Crunchwrap, Breakout_Sequel).
- `src/pages/ProjectsPage.jsx` + `src/data/projects.js` - the /projects page and its cards.
- `src/components/` - BlogLayout, BlogImage, Navigation, SiteNavMenu, Playhead, QuoteBand, DeckleEdge, SectionLabel, useScrollAnimation.
- `src/data/*linkedinPosts*.js` - cross-post data rendered in Writing.
- `public/blog/` - post images. `public/og.jpg` - the site OG image.

## How a blog post ships
1. New pair in `src/blog/`: `<Slug>_2026.jsx` (the page, wraps `BlogLayout` with `heroImage`) + `<Slug>_2026_Content.jsx` (the body, figures through `BlogImage`).
2. Route in all three tables: `src/App.jsx`, `src/prerender-entry.jsx`, `src/routeMeta.js` (title, description, ogTitle, ogDescription, ogImage = `/blog/<slug>-hero.jpg`, ogImageAlt).
3. Images in `public/blog/`. Per `BlogImage.jsx`, every figure is `<name>-sm.webp` (800w) + `<name>.webp` (1600w) + `<name>.jpg` (fallback). Heroes add `<name>-md.webp` (the 1200w tier) and `<name>-card.webp` for the Writing card; `BlogLayout` serves the hero srcset with `fetchpriority="high"`.
4. LCP rule (commit 2026-08-06 "Cut blog hero LCP weight: recompress + add 1200w tier"): recompress the hero and ship all three tiers; do not add hero weight without re-checking LCP.
5. Card in `src/sections/Writing.jsx` (`articles` array: title, date, summary, url, image, featured). The newest post is `featured: true`.
6. Build, check 390px, commit `docs/`, push. Log the publish in LinkedIn's `MASTER.md` (see Pointers); site chrome gets a VoiceCheck pass whenever new copy is added.

## Analytics
- GoatCounter, dashboard https://codywymore.goatcounter.com. `index.html` loads `count.js` with `no_onload: true`; `PageviewTracker` in `src/App.jsx` fires `window.goatcounter.count({ path })` on every route change, so each route is its own row.
- Routes (from `src/App.jsx`): `/`, `/blog/q1-2026`, `/blog/q2-2026`, `/blog/breakout-summer`, `/blog/crunch-app-supreme`, `/blog/collusion-summer`, `/projects`.
- LinkedIn strips UTM params from profile links; measure LinkedIn traffic through the Referrer view (`linkedin.com`).
- `build.codywymore.com` and `inkwood.codywymore.com` (separate repos) report to their own GoatCounter sites, `build.goatcounter.com` and `inkwood.goatcounter.com`, same login.

## Design system
Theme tokens `cream` (background), `sage` (accent), `forest` (dark green), `terracotta` (warm accent), `charcoal` (text). Fonts: DM Serif Display (headings), Inter (body), JetBrains Mono (code). Functional components and Tailwind utilities only; images live in `public/` and are referenced by absolute path.

## Rulings (dated, attributed, newest first)
- Cody's verdict 2026-09-16 (Hangar Bay audit): refit; contract rewritten to the house template.
- Cody's ruling 2026-08-03 (recorded in LinkedIn `MASTER.md`, 8/3 pm row): "Navigating the space between hype and reality" stays in the hero, approved in place; the general metaphorical-navigate ban holds. Same row: essays and cross-posts are audited at publish; site chrome gets a VoiceCheck pass whenever new copy is added.

## Social / link previews
`public/og.jpg` is a 1500×727 landscape crop of the headshot (the face survives LinkedIn's 1.91:1 center-crop). If the headshot changes, regenerate it landscape with the face centered, then re-scrape in LinkedIn Post Inspector to bust the ~7-day cache. Per-post OG images come from `routeMeta.js`.

## Shipped (from `git log`, one line per post)
- 2026-04-27 Inkwood launched at inkwood.codywymore.com; homepage featured card.
- 2026-07-06 "Publish Q2 2026 blog: The Quarter That Built Its First Loop"
- 2026-08-03 "Ship Sketchbook redesign: rebuild docs; drop stray node_modules symlink, harden gitignore"
- 2026-08-06 "Publish blog: Hot model breakout summer"
- 2026-08-17 "Publish blog: Crunch App Supreme"
- 2026-09-08 "Blog: Hot model collusion summer (sequel to breakout summer) + out-of-date band on the original"
- 2026-09-16 "Cross-post four LinkedIn posts: Astra, AI-slop plea, Fable 5.1, Spacesuit"

## Pointers
Cross-post ledger → `~/Desktop/Projects/LinkedIn/MASTER.md` (logs this repo's commits by hash) · Voice → `~/Desktop/Projects/VoiceCheck/` (`/voicecheck` on essays and site chrome) · Board → `NEXT.md`.

- 2026-09-16: the three July NEXT.md bullets were flipped done by the true-up sweep (q2 shared 07-07 per LinkedIn MASTER.md; the two CLAUDE.md asks satisfied by this rewrite).
