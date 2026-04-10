import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="bg-linen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={sectionRef} className="animate-on-scroll">
          <SectionLabel number="01" label="About" />

          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8">
            Two worlds, one throughline
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-warm-gray leading-relaxed">
            <p>
              I'm VP, Client Solutions at{' '}
              <a
                href="https://www.innovid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
              >
                Innovid
              </a>{' '}
              (Mediaocean), leading teams at the intersection of AI, connected TV, and advertising. I'm also a trained composer and music director &mdash; MFA from NYU Tisch, decade-plus of shows with{' '}
              <a
                href="https://afterworktheater.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
              >
                AfterWork Theater
              </a>
              .
            </p>

            <p>
              More recently, I went from never opening a terminal to building
              games, apps, and autonomous optimization loops with Claude Code.
              I write openly about what excites me and what concerns me, because
              holding both feelings at once is the only honest response to what's happening.
            </p>

            <p className="text-charcoal font-medium">
              The skills translate more than you'd think: reading a room, timing
              a moment, orchestrating complexity until it feels effortless.
            </p>
          </div>

          {/* Education */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            <div className="bg-pearl rounded-xl p-6 border border-taupe/50">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-2">Education</p>
              <p className="font-display text-lg text-charcoal">Ithaca College</p>
              <p className="text-sm text-warm-gray mt-1">B.M. Music Theory &amp; Composition</p>
            </div>
            <div className="bg-pearl rounded-xl p-6 border border-taupe/50">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-2">Graduate</p>
              <p className="font-display text-lg text-charcoal">NYU Tisch</p>
              <p className="text-sm text-warm-gray mt-1">MFA Musical Theatre Writing</p>
            </div>
          </div>

        </div>
      </div>

      {/* NYT Callout — breaks out of content width */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-pearl rounded-2xl p-8 sm:p-10 lg:p-12 border border-taupe/40 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="shrink-0">
              <span className="font-display text-5xl sm:text-6xl text-terracotta leading-none" aria-hidden="true">
                &ldquo;
              </span>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-3">
                The New York Times · Weddings
              </p>
              <p className="text-base sm:text-lg text-warm-gray leading-relaxed">
                Our love story was featured in{' '}
                <span className="font-medium text-charcoal">The New York Times</span>
                {' '}&mdash; a courtship that started with a production of{' '}
                <em>Ragtime</em> at AfterWork Theater, some suspiciously elaborate
                "leftovers," and a first kiss in Washington Square Park.
              </p>
              <a
                href="https://www.nytimes.com/2024/09/06/style/molly-shoemaker-cody-wymore-wedding.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-terracotta/10 text-terracotta rounded-lg text-sm font-medium hover:bg-terracotta/20 transition-colors"
              >
                Read the story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
