import { Link } from 'react-router-dom'
import DeckleEdge from './DeckleEdge'

// Dark graphite full-bleed moment: one line from the published essays,
// cream on charcoal, between the warm sections.
export default function QuoteBand() {
  return (
    <section aria-label="Pull quote" className="relative">
      <DeckleEdge className="text-charcoal bg-linen" />
      <div className="graphite-band py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-cream leading-snug">
            “Because the feeling is the story. The events are just evidence.”
          </p>
          <Link
            to="/blog/q1-2026"
            className="inline-block mt-6 font-mono text-xs tracking-widest uppercase text-muted-sage hover:text-cream transition-colors"
          >
            From the Q1 retrospective
          </Link>
        </div>
      </div>
      <DeckleEdge flip className="text-charcoal bg-sage-wash/40 -mt-px" />
    </section>
  )
}
