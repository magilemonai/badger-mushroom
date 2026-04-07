import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BlogLayout({ title, subtitle, date, heroImage, heroAlt, children }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const [lightboxAlt, setLightboxAlt] = useState('')

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

  const handleProseClick = useCallback((e) => {
    const img = e.target.closest('figure img')
    if (img) {
      setLightboxSrc(img.src)
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
          <img
            src={heroImage}
            alt={heroAlt || ''}
            className="w-full rounded-xl block cursor-zoom-in hover:opacity-85 transition-opacity"
            onClick={() => { setLightboxSrc(heroImage); setLightboxAlt(heroAlt || '') }}
          />
        </div>
      )}

      {/* Article */}
      <article className={`max-w-3xl mx-auto px-6 pb-24 ${heroImage ? 'pt-12' : 'pt-28'}`}>
        {/* Title block */}
        <header className="mb-12">
          {date && (
            <span className="font-mono text-xs tracking-wide text-sage block mb-3">
              {date}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sage-wash flex items-center justify-center text-forest text-xs font-mono">
              CW
            </div>
            <span className="text-sm text-warm-gray">Cody Wymore</span>
          </div>
        </header>

        {/* Body */}
        <div className="blog-prose" onClick={handleProseClick}>
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
          className="fixed inset-0 z-[100] bg-charcoal/90 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-pearl/20 hover:bg-pearl/40 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-pearl" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
