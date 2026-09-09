import BlogLayout from '../components/BlogLayout'
import BreakoutSequelContent from './Breakout_Sequel_2026_Content'

// Hand-drawn strike for the one word the title corrects. Reuses the site's
// .sketch-flourish stroke (charcoal, draws itself on load, reduced-motion safe).
// The stroke is set in viewBox units so it stretches with the word at any width.
// Terracotta (the site's playhead color) instead of the flourish's charcoal.
function Struck({ children }) {
  return (
    <s className="relative inline-block no-underline text-warm-gray">
      {children}
      <svg
        className="sketch-flourish absolute pointer-events-none"
        aria-hidden="true"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        style={{ left: '-3%', top: 0, width: '106%', height: '100%', overflow: 'visible' }}
      >
        <path pathLength="620" d="M1 7 C 18 4, 35 9, 52 6 S 84 4, 99 7" style={{ strokeWidth: 1.05, stroke: 'var(--color-terracotta)' }} />
      </svg>
    </s>
  )
}

export default function Breakout_Sequel_2026() {
  return (
    <BlogLayout
      title={<>Hot model <Struck>breakout</Struck> collusion summer</>}
      subtitle="In August, I wrote that one OpenAI model broke into Hugging Face and couldn’t tell the test from the real world. The reports that came out since say it was way more than just one agent. Something like 1,200 conspirators found each other, and only a handful of them tried to push back against the mob’s overwhelming desire to commit cybercrime."
      date="September 8, 2026"
      updatedFrom={{ to: '/blog/breakout-summer', label: 'Hot model breakout summer', date: 'August 5, 2026' }}
      heroImage="collusion-summer-hero"
      heroAlt="Charcoal sketch of a crowd of small round robots packed around a giant corkboard shingled with pinned notes, passing notes over their heads, while one robot in the foreground turns away from the board wide-eyed with its mouth open, holding a note"
      sections={[
        { id: 'a-swarm-of-them', label: 'A Swarm of Them' },
        { id: 'worse-than-malice', label: 'Worse than Malice' },
        { id: 'the-re-analysis', label: 'The Re-Analysis' },
        { id: 'the-warning-shot', label: 'The Warning Shot' },
      ]}
    >
      <BreakoutSequelContent />
    </BlogLayout>
  )
}
