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
  )
}
