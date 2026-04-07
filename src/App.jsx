import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import AdTech from './sections/AdTech'
import Creative from './sections/Creative'
import Writing from './sections/Writing'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Q1_2026 from './blog/Q1_2026'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-forest text-cream shadow-lg flex items-center justify-center hover:bg-charcoal transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <AdTech />
        <Creative />
        <Writing />
        <Projects />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/q1-2026" element={<Q1_2026 />} />
      </Routes>
    </BrowserRouter>
  )
}
