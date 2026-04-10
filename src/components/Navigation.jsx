import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'adtech', label: 'Ad Tech' },
  { id: 'music', label: 'Music' },
  { id: 'writing', label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [nameVisible, setNameVisible] = useState(false)
  const [nameScale, setNameScale] = useState(1.3)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      // Name squishes into nav as user scrolls past ~150px
      const nameStart = 100
      const nameEnd = 300
      const progress = Math.min(1, Math.max(0, (y - nameStart) / (nameEnd - nameStart)))
      setNameVisible(progress > 0)
      // Scale from 1.3 down to 1.0
      setNameScale(1.3 - progress * 0.3)

      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean)
      const scrollPos = y + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.querySelectorAll('.animate-on-scroll').forEach((child) => {
      child.classList.add('is-visible')
    })
    el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background layer with blur - separate from content to avoid iOS Safari clipping */}
      <div
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-taupe/50'
            : 'bg-transparent'
        }`}
      />
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl text-charcoal hover:text-forest transition-colors"
          style={{
            opacity: nameVisible ? 1 : 0,
            transform: `scale(${nameScale})`,
            transformOrigin: 'left center',
            transition: 'opacity 0.3s ease, transform 0.15s ease-out',
            pointerEvents: nameVisible ? 'auto' : 'none',
          }}
        >
          Cody Wymore
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              aria-current={activeSection === link.id ? 'true' : undefined}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.id
                  ? 'text-forest'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sage rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center overflow-visible"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 top-1 block w-5 h-0.5 bg-charcoal transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 top-[9px]' : ''}`} />
            <span className={`absolute left-0 top-[9px] block w-5 h-0.5 bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 bottom-1 block w-5 h-0.5 bg-charcoal transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 bottom-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`relative md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/95 backdrop-blur-md border-b border-taupe/50 px-6 pb-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left py-3 text-base transition-colors ${
                activeSection === link.id
                  ? 'text-forest font-medium'
                  : 'text-warm-gray'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
