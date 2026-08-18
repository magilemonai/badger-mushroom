// Build-time prerender entry. Renders each route to static HTML so GitHub
// Pages serves real 200s with per-route metadata (see scripts/prerender.mjs).
// Routes here are EAGER imports (React.lazy never resolves inside
// renderToString) - keep this route table in sync with src/App.jsx.
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './App'
import Q1_2026 from './blog/Q1_2026'
import Q2_2026 from './blog/Q2_2026'
import Breakout_2026 from './blog/Breakout_2026'
import Crunchwrap_2026 from './blog/Crunchwrap_2026'
import ProjectsPage from './pages/ProjectsPage'

export function render(path) {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/q1-2026" element={<Q1_2026 />} />
        <Route path="/blog/q2-2026" element={<Q2_2026 />} />
        <Route path="/blog/breakout-summer" element={<Breakout_2026 />} />
        <Route path="/blog/crunch-app-supreme" element={<Crunchwrap_2026 />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </MemoryRouter>
  )
}

export { default as routeMeta } from './routeMeta'
