import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'

const featured = {
  title: 'AI Build Wizard',
  subtitle: 'Build something real with AI in under 60 minutes',
  description:
    'A guided, step-by-step tool that helps anyone — from AI newbies to experienced practitioners — build a working artifact or coded tool using Claude. It interviews you first, then walks you through four modules with copy/paste prompts. No coding experience required. Built with Claude Code.',
  url: 'https://build.codywymore.com',
  tags: ['Tool', 'Claude Code', 'AI Education'],
}

const projects = [
  {
    title: 'Valisar',
    subtitle: 'An SNES-style RPG adventure',
    description:
      'A 32-bit top-down RPG set in the world of my homebrew D&D campaign. Three playable characters, original music, and hand-crafted pixel art. Built entirely with Claude Code.',
    url: 'https://magilemonai.github.io/reimagined-barnacle/',
    tags: ['Game', 'Claude Code', 'RPG'],
    image: 'post-dnd-game.png',
    imageAlt: 'Valisar RPG gameplay screenshot',
  },
  {
    title: 'Last Light',
    subtitle: 'A harbor defense game',
    description:
      'Guide ships safely to harbor while fighting back dark creatures from the deep. Playable on web and mobile. Built iteratively using a Karpathy loop — autonomous AI optimization running overnight.',
    url: 'https://magilemonai.github.io/last-light/',
    tags: ['Game', 'Claude Code', 'Karpathy Loop'],
    image: 'last-light.png',
    imageAlt: 'Last Light — a lighthouse keeper\'s vigil against the dark',
  },
  {
    title: 'Who Wants to Zorp a Blorginaire?',
    subtitle: 'A 5-minute alien gameshow',
    description:
      'A short, silly web trivia gameshow hosted by an alien named Zorp. Quick to play, hard to take seriously. Built with Claude Code.',
    url: 'https://lnkd.in/gXHStG7d',
    tags: ['Game', 'Claude Code', 'Trivia'],
    image: 'zorp-gameshow.jpg',
    imageAlt: 'Zorp alien gameshow screenshot',
  },
  {
    title: 'Numinous',
    subtitle: 'An immersive experience',
    description:
      'An atmospheric, interactive web experience exploring the numinous. Built with Claude Code.',
    url: 'https://magilemonai.github.io/upgraded-waffle/',
    tags: ['Experience', 'Claude Code', 'Creative'],
  },
]

export default function Projects() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="projects" className="bg-cream py-24 sm:py-32">
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
                  src="/build-wizard.png"
                  alt="Build something real with AI"
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
        </div>
      </div>
    </section>
  )
}
