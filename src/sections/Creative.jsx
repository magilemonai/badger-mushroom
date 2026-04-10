import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'

const shows = [
  { title: 'Urinetown', year: '2023', role: 'Music Director' },
  { title: 'Ragtime', year: '2018', role: 'Music Director' },
  { title: 'Into the Woods', year: '2016', role: 'Music Director' },
  { title: 'Godspell', year: '2016', role: 'Music Director' },
  { title: 'Little Shop of Horrors', year: '2015', role: 'Music Director' },
  { title: 'Hairspray', year: '2014', role: 'Music Director' },
]

const roles = [
  {
    title: 'Music Director',
    desc: 'Leading pit bands, coaching singers, and shaping the musical identity of a production from first rehearsal to closing night.',
  },
  {
    title: 'Composer',
    desc: 'Writing original music for theater. Trained at NYU Tisch\'s Graduate Musical Theatre Writing Program, one of the most respected programs in the country.',
  },
  {
    title: 'Arranger',
    desc: 'Taking existing scores and reimagining them for the ensembles and spaces we actually have. Making a 7-piece band sound like an orchestra is its own art form.',
  },
]

export default function Creative() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="music" className="bg-cream py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="animate-on-scroll">
          <SectionLabel number="03" label="Music &amp; Theater" />

          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6">
              The other half of the story
            </h2>
            <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
              Music isn't my hobby. It's a second career I've been building
              for twenty years. I compose, arrange, and direct music with{' '}
              <a
                href="https://afterworktheater.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
              >
                AfterWork Theater
              </a>
              , a NYC nonprofit that proves theater belongs to everyone,
              not just professionals.
            </p>
          </div>

          {/* Role cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {roles.map((role, i) => (
              <div
                key={role.title}
                className="bg-pearl rounded-xl p-6 border border-taupe/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-sage-wash flex items-center justify-center mb-4">
                  <span className="text-forest text-lg" aria-hidden="true">
                    {role.title === 'Composer' ? '♪' : role.title === 'Arranger' ? '♫' : '🎹'}
                  </span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">{role.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          {/* Shows list */}
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
              Selected productions · AfterWork Theater
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {shows.map((show) => (
                <div
                  key={show.title}
                  className="flex items-baseline justify-between bg-pearl rounded-lg px-5 py-4 border border-taupe/30"
                >
                  <div>
                    <span className="font-display text-lg text-charcoal">{show.title}</span>
                    <span className="text-xs text-warm-gray ml-2">{show.role}</span>
                  </div>
                  <span className="font-mono text-xs text-sage">{show.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
