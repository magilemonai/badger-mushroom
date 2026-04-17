# CLAUDE.md — codywymore.com

Personal website for **Cody Wymore** ([codywymore.com](https://codywymore.com)), hosted on **GitHub Pages** serving from the `docs/` folder on the `main` branch.

## Tech Stack

- **React 18** with functional components and hooks
- **Vite 5** (build tool, dev server on port 3000)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **react-router-dom** for client-side routing

## Project Structure

```
├── index.html              # Entry HTML
├── vite.config.js          # Vite config (builds to docs/)
├── package.json
├── public/                 # Static assets (copied to docs/ on build)
│   ├── CNAME               # codywymore.com
│   ├── 404.html            # SPA fallback for GitHub Pages routing
│   ├── favicon.svg
│   ├── blog/               # Blog-specific images
│   └── *.jpg, *.png, *.svg # Post thumbnails, headshot, etc.
├── src/
│   ├── main.jsx            # App entry point
│   ├── App.jsx             # Router setup
│   ├── index.css           # Global styles + Tailwind imports
│   ├── sections/           # Homepage sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── AdTech.jsx
│   │   ├── Creative.jsx    # Music section
│   │   ├── Writing.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── blog/               # Blog post pages
│   │   ├── Q1_2026.jsx
│   │   └── Q1_2026_Content.jsx
│   ├── components/         # Shared components
│   │   ├── BlogLayout.jsx  # Layout wrapper for blog posts
│   │   ├── Navigation.jsx  # Site navigation
│   │   ├── SectionLabel.jsx
│   │   └── useScrollAnimation.jsx  # Scroll animation hook
│   └── data/               # Content data
│       ├── linkedinPosts.js
│       ├── linkedinPostsMore.js
│       └── allLinkedinPosts.js
└── docs/                   # Build output (GitHub Pages serves this)
```

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build → docs/
npm run preview   # Preview production build locally
```

## Site Architecture

**Homepage** — Single-page layout with sections: Hero, About, Ad Tech, Music (Creative), Writing, Projects, Contact.

**Blog** — Routes under `/blog/` use the `BlogLayout` component. GitHub Pages SPA routing is handled by `public/404.html` which redirects to the app.

## Design System

### Theme Colors
- `cream` — background
- `sage` — accent green
- `forest` — dark green
- `terracotta` — warm accent
- `charcoal` — text/dark

### Fonts
- **DM Serif Display** — headings
- **Inter** — body text
- **JetBrains Mono** — code/monospace

## Conventions

- Functional components with hooks (no class components)
- Tailwind utility classes for all styling (no CSS modules)
- Custom scroll animations via `useScrollAnimation` hook
- Images stored in `public/` and referenced by absolute path
- `docs/` is the build output and must be committed for GitHub Pages deployment

## Deployment

1. Run `npm run build` to regenerate `docs/`
2. Commit and push to `main`
3. GitHub Pages serves from `docs/` on `main`
4. `public/CNAME` ensures the custom domain `codywymore.com` is preserved

## Analytics

- **GoatCounter** (free personal tier) — async script in `index.html`, dashboard at **https://codywymore.goatcounter.com**. No cookies, GDPR-friendly.
- SPA route changes are tracked manually: `count.js` is loaded with `no_onload: true` and a `PageviewTracker` in `src/App.jsx` fires `window.goatcounter.count({ path: pathname })` on every `useLocation()` change. Each route (`/`, `/blog/q1-2026`, `/projects`) shows as its own row.
- LinkedIn **strips UTM params** from profile links, so don't bother tagging the Featured URL — rely on the `Referrer` view in GoatCounter (`linkedin.com`) to measure LinkedIn-driven traffic.
- **`build.codywymore.com`** (separate repo) also reports to the same GoatCounter account. Hostname collection is enabled in GoatCounter settings so the two sites show distinctly in the dashboard instead of colliding on `/`.

## Social / Link Previews

- `public/og.jpg` — **1500×727** landscape Open Graph image (manually cropped from the portrait headshot so the face survives LinkedIn's 1.91:1 center-crop). Referenced in `index.html` via `og:image` and `twitter:image`.
- If the headshot is ever replaced, regenerate `og.jpg` as a landscape crop (~1.91:1 or wider) with the face centered, then re-scrape the link in [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) to bust their ~7-day cache.

## Milestones

- **2026-04-16** — Website linked from LinkedIn profile (Featured section). Watch GoatCounter referrers for a `linkedin.com` traffic bump starting this date.
- **2026-04-17** — Added landscape `og-image.jpg` so the LinkedIn preview actually shows Cody's face. Wired up GoatCounter analytics.
