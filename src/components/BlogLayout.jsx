import { useState, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function BlogLayout({ title, subtitle, date, heroImage, heroAlt, children }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')
  const lightboxRef = useRef(null)
  const articleRef = useRef(null)
  const [readingMinutes, setReadingMinutes] = useState(null)

  useEffect(() => {
    if (!articleRef.current) return
    const text = articleRef.current.innerText || ''
    const words = text.trim().split(/\s+/).length
    setReadingMinutes(Math.max(1, Math.round(words / 220)))
  }, [children])

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null)
    setLightboxAlt('')
  }, [])

  useEffect(() => {
    if (!lightboxSrc) return
    const handleKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightboxSrc, closeLightbox])

  // Center the lightbox scroll position on open (wide images overflow horizontally on mobile)
  const centerLightboxScroll = useCallback(() => {
    const el = lightboxRef.current
    if (!el) return
    el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2
    el.scrollTop = (el.scrollHeight - el.clientHeight) / 2
  }, [])

  const handleProseClick = useCallback((e) => {
    const img = e.target.closest('figure img')
    if (img) {
      setLightboxSrc(img.dataset.zoomSrc || img.currentSrc || img.src)
      setLightboxAlt(img.alt || '')
    }
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-taupe/30">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wide text-forest hover:text-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Cody Wymore
          </Link>
          <span className="font-mono text-xs tracking-wide text-sage">Blog</span>
        </div>
      </header>

      {/* Hero */}
      {heroImage && (
        <div className="pt-24 max-w-4xl mx-auto px-6">
          <div className="aspect-[2/1] rounded-xl overflow-hidden bg-linen">
            <picture>
              <source
                type="image/webp"
                srcSet={`/blog/${heroImage}-sm.webp 800w, /blog/${heroImage}.webp 1600w`}
                sizes="(max-width: 768px) 100vw, 1024px"
              />
              <img
                src={`/blog/${heroImage}.jpg`}
                alt={heroAlt || ''}
                width={1600}
                height={872}
                fetchpriority="high"
                decoding="async"
                className="w-full h-full object-cover cursor-zoom-in hover:opacity-85 transition-opacity"
                onClick={() => { setLightboxSrc(`/blog/${heroImage}.webp`); setLightboxAlt(heroAlt || '') }}
              />
            </picture>
          </div>
        </div>
      )}

      {/* Article */}
      <article className={`max-w-3xl mx-auto px-6 pb-24 ${heroImage ? 'pt-12' : 'pt-28'}`}>
        {/* Title block */}
        <header className="mb-12">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8 pt-6 border-t border-taupe/40 flex items-center gap-4">
            <Link to="/" aria-label="Back to home" className="shrink-0">
              <img
                src="/headshot-xs.webp"
                alt="Cody Wymore"
                width="44"
                height="44"
                className="w-11 h-11 rounded-full object-cover object-top bg-sage-wash ring-2 ring-sage-wash hover:ring-sage transition"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <div className="font-display text-base text-charcoal leading-tight">
                Cody Wymore
              </div>
              <div className="font-mono text-xs tracking-wide text-warm-gray mt-0.5">
                VP, Client Solutions · Innovid
              </div>
            </div>
            <div className="text-right shrink-0">
              {date && (
                <div className="font-mono text-xs tracking-wide text-sage">
                  {date}
                </div>
              )}
              {readingMinutes && (
                <div className="font-mono text-xs tracking-wide text-warm-gray mt-0.5">
                  {readingMinutes} min read
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Body */}
        <div ref={articleRef} className="blog-prose" onClick={handleProseClick}>
          {children}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-taupe/30">
          <Link
            to="/#writing"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-wide text-forest hover:text-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all writing
          </Link>
        </footer>
      </article>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-[100] bg-charcoal/95 overflow-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 rounded-full bg-pearl text-charcoal hover:bg-cream shadow-lg flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-max min-w-full min-h-full flex items-center justify-center p-4 sm:p-8">
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="lightbox-image rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onLoad={centerLightboxScroll}
            />
          </div>
        </div>
      )}
    </div>
  )
}
