// Post-build prerender: renders each route to static HTML inside the built
// docs/index.html shell, with per-route <head> metadata from src/routeMeta.js.
// Result: GitHub Pages serves real 200s for deep links, crawlers and unfurl
// bots see full content and correct og tags, and the SPA mounts over the
// static markup on load. Runs as part of `npm run build`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render, routeMeta } = await import(resolve(root, 'dist-ssr/prerender-entry.js'))

const template = readFileSync(resolve(root, 'docs/index.html'), 'utf8')
const SITE = 'https://codywymore.com'

function esc(s) {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')
}

function buildHead(html, meta, canonicalPath) {
  const url = SITE + (canonicalPath === '/' ? '' : canonicalPath)
  let out = html
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
  out = out.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${esc(meta.description)}" />`
  )
  out = out.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${esc(meta.ogTitle)}" />`
  )
  out = out.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${esc(meta.ogDescription)}" />`
  )
  out = out.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${esc(meta.ogImage)}" />`
  )
  out = out.replace(
    /<meta property="og:image:alt" content="[^"]*" \/>/,
    `<meta property="og:image:alt" content="${esc(meta.ogImageAlt)}" />`
  )
  // Blog heroes are not 1500x727; drop the hardcoded og.jpg dimensions on non-home routes.
  if (canonicalPath !== '/') {
    out = out.replace(/\s*<meta property="og:image:width" content="[^"]*" \/>/, '')
    out = out.replace(/\s*<meta property="og:image:height" content="[^"]*" \/>/, '')
  }
  out = out.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${esc(url)}" />`
  )
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${esc(meta.ogTitle)}" />`
  )
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${esc(meta.ogDescription)}" />`
  )
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*" \/>/,
    `<meta name="twitter:image" content="${esc(meta.ogImage)}" />`
  )
  // Canonical link (insert after og:url; template has none)
  if (!out.includes('rel="canonical"')) {
    out = out.replace(
      /(<meta property="og:url"[^>]*\/>)/,
      `$1\n    <link rel="canonical" href="${esc(url)}" />`
    )
  }
  return out
}

const outputs = {
  '/': ['docs/index.html'],
  '/blog/q1-2026': ['docs/blog/q1-2026.html', 'docs/blog/q1-2026/index.html'],
  '/blog/q2-2026': ['docs/blog/q2-2026.html', 'docs/blog/q2-2026/index.html'],
  '/projects': ['docs/projects.html', 'docs/projects/index.html'],
}

for (const [path, files] of Object.entries(outputs)) {
  const meta = routeMeta[path]
  if (!meta) throw new Error(`No routeMeta for ${path}`)
  const appHtml = render(path)
  let page = buildHead(template, meta, path)
  page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  if (page === template || !page.includes('<div id="root">')) {
    throw new Error(`Injection failed for ${path}`)
  }
  for (const file of files) {
    const target = resolve(root, file)
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, page)
    console.log(`prerendered ${path} -> ${file} (${(page.length / 1024).toFixed(0)}KB)`)
  }
}

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('prerender complete')
