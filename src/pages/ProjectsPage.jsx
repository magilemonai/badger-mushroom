import { Link } from 'react-router-dom'
import { featured, projects } from '../data/projects'

function ProjectCard({ project, large }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-pearl rounded-xl border border-taupe/50 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {project.image ? (
        <div className={`${large ? 'h-56 sm:h-72' : 'h-48 sm:h-56'} overflow-hidden`}>
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={project.imageAlt || ''}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-2 bg-gradient-to-r from-sage to-forest" />
      )}

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className={`font-display ${large ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} text-charcoal group-hover:text-forest transition-colors`}>
              {project.title}
            </h3>
            <p className="text-sm text-sage font-mono tracking-wide">
              {project.subtitle}
            </p>
          </div>
          <svg
            className="w-5 h-5 text-sage shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>

        <p className="text-sm sm:text-base text-warm-gray leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-sage-wash text-forest text-xs font-mono tracking-wide rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-cream/90 backdrop-blur-md border-b border-taupe/50" />
        <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Cody Wymore
          </Link>
          <span className="font-mono text-xs tracking-widest uppercase text-sage">
            Projects
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
            Things I'm building
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6">
            Projects
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-2xl">
            Side projects built with Claude Code. Part curiosity, part craft,
            part seeing what's possible when you pair human ideas with AI tools.
          </p>
        </div>
      </div>

      {/* Featured */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
          Featured
        </p>
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-pearl rounded-xl border border-taupe/50 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="h-2 bg-gradient-to-r from-terracotta via-sage to-forest" />
          <div className="sm:flex">
            <div className="sm:w-2/5 bg-linen flex items-center justify-center">
              <img
                src={import.meta.env.BASE_URL + 'build-wizard.png'}
                alt="Build something real with AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-charcoal group-hover:text-forest transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-sage font-mono tracking-wide">
                    {featured.subtitle}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-sage shrink-0 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm sm:text-base text-warm-gray leading-relaxed mb-5">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-sage-wash text-forest text-xs font-mono tracking-wide rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* All Projects */}
      <div className="bg-linen py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
            All projects
          </p>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-cream py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
