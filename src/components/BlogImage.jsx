/**
 * Responsive blog image with WebP + JPG fallback.
 *
 * Expects these files in /blog/:
 *   - {name}-sm.webp  (800px wide, mobile)
 *   - {name}.webp     (1600px wide, desktop retina)
 *   - {name}.jpg      (1600px wide, JPG fallback)
 *
 * Pass `name` as the basename without extension or directory,
 * e.g. name="q1-2026-benchmark-performance"
 *
 * Provide width and height (intrinsic dimensions) so the browser
 * can reserve space and avoid CLS.
 */
export default function BlogImage({ name, alt, width = 1600, height = 872 }) {
  const base = `/blog/${name}`
  return (
    <>
      <picture>
        <source
          type="image/webp"
          srcSet={`${base}-sm.webp 800w, ${base}.webp 1600w`}
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <img
          src={`${base}.jpg`}
          data-zoom-src={`${base}.webp`}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <span className="blog-zoom-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
        Tap to zoom
      </span>
    </>
  )
}
