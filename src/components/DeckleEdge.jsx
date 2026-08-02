// Torn-paper section divider: an irregular deckled edge drawn as SVG.
// `fill` is the Tailwind color token of the section BELOW the tear, so the
// edge reads as that section's paper torn over the one above it.
// flip renders the tear upside down for bottom edges.
const DECKLE_PATH =
  'M0,24 L0,10 C40,7 90,14 150,10 C210,6 260,15 320,11 C380,7 430,16 490,12 ' +
  'C550,8 600,15 660,10 C720,5 780,14 840,11 C900,8 950,16 1010,12 ' +
  'C1070,8 1120,14 1180,9 C1240,5 1290,13 1350,10 C1390,8 1420,12 1440,9 L1440,24 Z'

export default function DeckleEdge({ className = '', flip = false }) {
  return (
    <div className={`relative -mb-px ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        className={`block w-full h-4 sm:h-6 ${flip ? 'rotate-180' : ''}`}
      >
        <path d={DECKLE_PATH} fill="currentColor" />
      </svg>
    </div>
  )
}
