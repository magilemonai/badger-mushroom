import { useEffect } from 'react'
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
