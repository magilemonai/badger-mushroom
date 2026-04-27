import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'
import { featured, projects } from '../data/projects'

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="bg-cream py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={sectionRef} className="animate-on-scroll">
          <SectionLabel number="05" label="Projects" />

          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            Things I'm building
          </h2>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed mb-12 max-w-2xl">
            Side projects built with Claude Code. Part curiosity, part craft,
            part seeing what's possible when you pair human ideas with AI tools.
          </p>

          {/* Featured project */}
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-pearl rounded-xl border border-taupe/50 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mb-8"
          >
            <div className="h-2 bg-gradient-to-r from-terracotta via-sage to-forest" />
            <div className="sm:flex">
              {/* Visual */}
              <div className="sm:w-2/5 bg-linen flex items-center justify-center">
                <img
                  src="/inkwood-title.png"
                  alt="Inkwood — a typing game"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="sm:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-charcoal group-hover:text-forest transition-colors">
                      {featured.title}
                    </h3>
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
                <p className="text-sm text-warm-gray leading-relaxed mb-5">
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

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-pearl rounded-xl border border-taupe/50 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {project.image ? (
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img
                      src={import.meta.env.BASE_URL + project.image}
                      alt={project.imageAlt || ''}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-2 bg-gradient-to-r from-sage to-forest" />
                )}

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-2xl text-charcoal group-hover:text-forest transition-colors">
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

                  <p className="text-sm text-warm-gray leading-relaxed mb-5">
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
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream rounded-lg text-sm font-medium hover:bg-charcoal transition-colors"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
