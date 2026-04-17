import { useEffect, useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import AdTech from './sections/AdTech'
import Creative from './sections/Creative'
import Writing from './sections/Writing'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const Q1_2026 = lazy(() => import('./blog/Q1_2026'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const scrollToHash = () => {
        const el = document.getElementById(id)
        if (el) {
          // Force any scroll animations in this section to become visible
          el.querySelectorAll('.animate-on-scroll').forEach((child) => {
            child.classList.add('is-visible')
          })
          el.scrollIntoView({ behavior: 'auto', block: 'start' })
          return true
        }
        return false
      }
      if (!scrollToHash()) {
        requestAnimationFrame(() => {
          if (!scrollToHash()) setTimeout(scrollToHash, 100)
        })
      }
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function PageviewTracker() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    const fire = () => window.goatcounter?.count?.({ path: pathname })
    if (window.goatcounter?.count) fire()
    else window.addEventListener('load', fire, { once: true })
  }, [pathname, search])
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
      <ScrollManager />
      <PageviewTracker />
      <Suspense fallback={<div className="min-h-svh bg-cream" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/q1-2026" element={<Q1_2026 />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
