import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Compact site-wide navigation dropdown, styled to match the blog TOC's
// jump menu, so essay pages and the homepage share one navigation idiom.
const items = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#adtech', label: 'Ad Tech' },
  { to: '/#music', label: 'Music & Theater' },
  { to: '/#writing', label: 'Writing' },
  { to: '/#projects', label: 'Projects' },
  { to: '/projects', label: 'All projects' },
  { to: '/#contact', label: 'Contact' },
]

export default function SiteNavMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors cursor-pointer py-2"
      >
        Menu
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <nav
          aria-label="Site navigation"
          className="absolute right-0 top-full mt-1 w-52 rounded-lg border border-taupe/60 bg-cream shadow-[0_4px_20px_rgba(44,44,44,0.12)] py-2 z-50"
        >
          {items.map(({ to, label }) => (
            <Link
              key={to + label}
              to={to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-charcoal hover:bg-linen hover:text-forest transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
