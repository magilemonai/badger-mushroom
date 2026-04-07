import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'

const expertise = [
  { label: 'Connected TV', desc: 'CTV isn\'t "digital TV." It\'s a new medium with its own rules. Most brands still buy it like linear — I help them stop doing that.' },
  { label: 'AI & Personalization', desc: 'The gap between an AI demo and an AI workflow is where most companies stall. I close that gap — from pilots to production.' },
  { label: 'Client Solutions', desc: 'The best ad tech is invisible to the advertiser. My team makes complexity disappear so clients can focus on outcomes.' },
  { label: 'Measurement & Analytics', desc: 'Everyone measures impressions. Almost nobody measures whether the creative actually worked. That\'s the problem I care about.' },
]

export default function AdTech() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="adtech" className="bg-sage-wash/40 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={sectionRef} className="animate-on-scroll">
          <SectionLabel number="02" label="Ad Tech" />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Narrative */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6">
                Building the future of advertising
              </h2>

              <p className="text-base sm:text-lg text-warm-gray leading-relaxed mb-6">
                I've spent my career at the intersection of technology and
                storytelling. First at Vindico, now at Innovid, where I lead
                Client Solutions as VP. Our work powers personalized CTV
                advertising for the world's largest brands.
              </p>

              <div className="bg-linen rounded-xl p-6">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-2">
                  Current role
                </p>
                <p className="font-display text-xl text-charcoal">
                  VP, Client Solutions
                </p>
                <p className="text-sm text-warm-gray mt-1">
                  Innovid (Mediaocean) · 13+ years in ad tech
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['CTV', 'AI Strategy', 'Programmatic', 'DCO', 'Measurement'].map(tag => (
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

            {/* Expertise cards */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {expertise.map((item, i) => (
                <div
                  key={item.label}
                  className="bg-pearl rounded-xl p-6 border border-taupe/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="font-semibold text-charcoal mb-2">{item.label}</h3>
                  <p className="text-sm text-warm-gray leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pull quote */}
          <blockquote className="mt-16 max-w-2xl mx-auto text-center">
            <p className="font-display text-xl sm:text-2xl text-charcoal leading-relaxed italic">
              "The jump from a chatbot that summarizes text to an agent that
              can orchestrate complex workflows is not a linear step; it is
              a level-up."
            </p>
            <cite className="block mt-4 text-sm text-warm-gray not-italic">
              From{' '}
              <a
                href="https://www.innovid.com/resources/blog/ai-vertigo-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
              >
                AI Vertigo
              </a>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
