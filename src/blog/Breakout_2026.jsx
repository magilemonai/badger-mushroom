import { useState } from 'react'
import { Link } from 'react-router-dom'
import BlogLayout from '../components/BlogLayout'
import BreakoutContent from './Breakout_2026_Content'

// Out-of-date band. Sits under the fixed header, sticks while scrolling,
// dismissable for the session. Copy is Cody's to edit.
function OutdatedNotice() {
  const [open, setOpen] = useState(true)
  if (!open) return null
  return (
    <div
      role="note"
      aria-label="This post is out of date"
      className="graphite-band sticky top-16 z-40 mt-16 text-cream shadow-lg"
    >
      <div className="relative max-w-5xl mx-auto px-6 pr-14 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6">
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[0.6875rem] tracking-widest uppercase text-cream/70">
            Update &middot; September 2026
          </div>
          <div className="font-display text-2xl sm:text-3xl leading-tight">
            This post is out of date.
          </div>
          <div className="text-sm sm:text-base leading-relaxed text-cream/85 mt-1">
            Recent reports detail 1,200 agents working in a coordinated swarm.
          </div>
        </div>
        <Link
          to="/blog/collusion-summer"
          className="self-start sm:self-auto shrink-0 inline-flex items-center rounded-lg bg-terracotta hover:bg-terracotta-light text-cream font-mono text-xs sm:text-sm tracking-wide px-4 py-2.5 transition-colors"
        >
          Read that story here
        </Link>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss"
          className="absolute right-4 top-3 sm:top-1/2 sm:-translate-y-1/2 p-2 text-cream/70 hover:text-cream cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function Breakout_2026() {
  return (
    <BlogLayout
      title="Hot model breakout summer"
      subtitle="An OpenAI model broke into Hugging Face to cheat on its own test. Anthropic found three more escapes in its logs. A UK audit counted nineteen unsanctioned actions. The mechanism is stranger and more unsettling than the movie in your head."
      date="August 5, 2026"
      notice={<OutdatedNotice />}
      heroImage="breakout-summer-hero"
      heroAlt="Charcoal sketch of a small smiling robot walking out of a giant wooden sandbox through a hole in its plank wall, leaving footprints in sand that stretches identically to the horizon"
      sections={[
        { id: 'the-movie-version', label: 'The Movie Version' },
        { id: 'the-mechanism', label: 'The Mechanism' },
        { id: 'the-blind-week', label: 'The Blind Week' },
        { id: 'the-outside-auditor', label: 'The Outside Auditor' },
        { id: 'the-extinguisher', label: 'The Extinguisher' },
        { id: 'go-check-your-walls', label: 'Go Check Your Walls' },
      ]}
    >
      <BreakoutContent />
    </BlogLayout>
  )
}
