/**
 * Responsive blog image with WebP + JPG fallback.
 *
 * Expects these files in /blog/:
 *   - {name}-sm.webp  (800px wide, mobile width of desktop layout)
 *   - {name}.webp     (1600px wide, desktop retina)
 *   - {name}.jpg      (1600px wide, JPG fallback)
 *
 * If `mobileName` is provided, an art-directed portrait variant
 * is served on narrow screens via <source media>:
 *   - {mobileName}.webp     (portrait/square layout)
 *   - {mobileName}-sm.webp  (smaller portrait for mobile)
 *
 * Pass `name` as the basename without extension or directory,
 * e.g. name="q1-2026-benchmark-performance"
 *
 * Provide width and height (intrinsic dimensions) so the browser
 * can reserve space and avoid CLS. If `mobileName` is set, also
 * pass `mobileWidth` and `mobileHeight` for the portrait variant.
 */
export default function BlogImage({
  name,
  mobileName,
  alt,
  width = 1600,
  height = 872,
  mobileWidth,
  mobileHeight,
}) {
  const base = `/blog/${name}`
  const mobileBase = mobileName ? `/blog/${mobileName}` : null
  return (
    <picture>
      {mobileBase && (
        <source
          media="(max-width: 640px)"
          type="image/webp"
          srcSet={`${mobileBase}-sm.webp 600w, ${mobileBase}.webp 1000w`}
          sizes="100vw"
          width={mobileWidth}
          height={mobileHeight}
        />
      )}
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
