import { Link } from 'react-router-dom'

const EDGAR =
  'https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm'

// Order: the five that weren't posted first, the posted one last.
const videos = [
  {
    id: 'wild',
    name: 'Wild',
    title: 'A natural history',
    text: 'A nature documentary played completely straight: field-guide cards, binoculars on the loss, and a herd that turns out to be ants marching toward the Nasdaq.',
    meta: '60 s · documentary strings',
  },
  {
    id: 'overture',
    name: 'Overture',
    title: 'Opening night',
    text: 'The filing as a Broadway opening: revenue in marquee bulbs, an audience gasp at the loss, and the share classes as the cast list.',
    meta: '60 s · pit-orchestra overture',
  },
  {
    id: 'gameshow',
    name: 'Game show',
    title: 'Read the Fine Print!',
    text: 'Three questions from the filing, A, B or C, with a countdown to answer. Play along and keep score.',
    meta: '60 s · retro game-show theme',
  },
  {
    id: 'slam',
    name: 'Slam',
    title: 'Feed-native',
    text: 'Giant type cut to a 120 bpm beat, with an ending that loops right back to the opening line.',
    meta: '58 s · 120 bpm drive',
  },
  {
    id: 'sketchbook',
    name: 'Sketchbook',
    title: 'The house style',
    text: 'This site in motion: cream paper, pencil lines that draw themselves, watercolor washes. The calmest of the six.',
    meta: '60 s · acoustic underscore',
  },
  {
    id: 'redline',
    name: 'Redline',
    title: 'The annotated filing',
    text: 'The real S-1 pages under a highlighter and a red pen, with plain-English notes in the margin.',
    meta: '60 s · investigative underscore',
    tag: 'Posted on LinkedIn',
  },
]

const facts = [
  {
    label: 'Revenue',
    text: '$16.3 billion in the first half of 2026, up from $1.2 billion in the first half of 2025.',
    cite: 'p. 22',
  },
  {
    label: 'The loss',
    text: '$80.7 billion over the same six months. Almost all of it is two non-cash accounting marks. Notes that convert into stock (plus a few similar instruments) got more valuable as the company did, and the books record that as a $72.4 billion loss; a second mark on other financial instruments adds $8.7 billion. The operating loss was $693 million, and $1.1 billion of interest income offset part of the total. Cash from operations was positive: $3.9 billion.',
    cite: 'p. 22 and footnote 2; cash flow statement',
  },
  {
    label: 'Customers',
    text: 'About 250 customers spent $10 million or more each over the twelve months to September 30, and more than 1,900 spent $1 million or more.',
    cite: 'pp. 8–9',
  },
  {
    label: 'Who controls it',
    text: 'Shares sold to the public (Class A) get one vote each. A single Class F share, issued to an LLC of the seven co-founders, carries 50.1% of shareholder votes on general matters. A separate Long-Term Benefit Trust can elect most of the board.',
    cite: 'pp. 12–15',
  },
  {
    label: 'The fund',
    text: 'About 847 million non-voting shares, 5% of the company on a fully diluted basis, are set aside in the Anthropic Public Benefit Fund, a subsidiary the company owns.',
    cite: 'p. 12',
  },
  {
    label: 'The risk',
    text: '“Our AI models may behave in unintended, misaligned, or autonomous ways, including by taking harmful actions that no user or third party directed.”',
    cite: 'p. 16',
  },
  {
    label: 'The listing',
    text: 'Ticker ANT on the Nasdaq Global Select Market. The price and the share count are still blank.',
    cite: 'cover page',
  },
]

// One video at a time, and one GoatCounter event per video per visit.
const counted = new Set()

function onPlay(e, v) {
  document.querySelectorAll('video').forEach((el) => {
    if (el !== e.currentTarget) el.pause()
  })
  if (!counted.has(v.id)) {
    counted.add(v.id)
    window.goatcounter?.count?.({ path: `s1-play-${v.id}`, title: `S-1 video: ${v.name}`, event: true })
  }
}

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
      {children}
    </p>
  )
}

export default function S1Page() {
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
            S-1, six ways
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-40 sm:pb-14">
        <div className="max-w-6xl mx-auto px-6 [&>*]:max-w-3xl">
          <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
            Form S-1 · Filed Oct 26, 2026
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6">
            Anthropic's <span className="whitespace-nowrap">S-1</span>, six ways
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
            Same filing, same facts, six completely different videos, each with its own script, voice and score.
            I posted the red-pen one on LinkedIn. Here's the whole set.
          </p>
        </div>
      </div>

      {/* Videos */}
      <div className="max-w-6xl mx-auto px-6 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((v) => (
            <article key={v.id} className="bg-pearl rounded-xl border border-taupe/50 overflow-hidden flex flex-col">
              <video
                className="w-full aspect-[4/5] bg-charcoal block"
                controls
                playsInline
                preload="none"
                poster={`/s1/${v.id}.jpg`}
                onPlay={(e) => onPlay(e, v)}
              >
                <source src={`/s1/${v.id}.mp4`} type="video/mp4" />
              </video>
              <div className="p-5 sm:p-6">
                <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-2">
                  {v.name}
                  {v.tag && (
                    <span className="ml-2 px-3 py-0.5 bg-sage-wash text-forest text-xs font-mono tracking-wide normal-case rounded-full align-middle whitespace-nowrap">
                      {v.tag}
                    </span>
                  )}
                </p>
                <h2 className="font-display text-2xl text-charcoal mb-2">{v.title}</h2>
                <p className="text-warm-gray leading-relaxed mb-3">{v.text}</p>
                <p className="font-mono text-xs text-sage">{v.meta}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="text-sm text-warm-gray leading-relaxed mt-6">
          Try one with the sound off too. That's how most people meet a video in the feed.
        </p>
      </div>

      {/* The facts */}
      <div className="bg-linen py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>What's in the filing</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            The numbers all six share
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8">
            Every number in the videos comes from the S-1 itself, with page numbers so you can check them.
          </p>
          <dl className="bg-pearl rounded-xl border border-taupe/50 divide-y divide-taupe/50">
            {facts.map((f) => (
              <div key={f.label} className="p-6 sm:p-8">
                <dt className="font-mono text-xs tracking-widest uppercase text-terracotta mb-2">{f.label}</dt>
                <dd className="text-charcoal leading-relaxed">
                  {f.text} <span className="text-sm text-sage whitespace-nowrap">({f.cite})</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-warm-gray leading-relaxed mt-6">
            Read the whole thing on{' '}
            <a href={EDGAR} target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-4 hover:text-charcoal">
              SEC EDGAR
            </a>
            . It runs past 400 pages, and the risk factors alone take up about 95 of them.
          </p>
        </div>
      </div>

      {/* How they were made */}
      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>How they were made</SectionLabel>
          <p className="text-warm-gray leading-relaxed mb-4">
            Claude Code wrote the six scripts and the animation code, in Remotion, from my brief. ElevenLabs made the
            voices, the music and the sound effects. Before anything was voiced, a separate Claude agent checked every
            script line against a fact sheet built from the filing.
          </p>
          <p className="text-warm-gray leading-relaxed mb-8">
            Want to make one? The starter prompt is on the{' '}
            <Link to="/claude-moves" className="text-forest underline underline-offset-4 hover:text-charcoal">
              Five Claude moves
            </Link>{' '}
            page.
          </p>

          <div className="bg-pearl rounded-xl border border-taupe/50 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-terracotta via-sage to-forest" />
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-3">Want more?</h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                I write about AI on my site, including a quarterly roundup of what changed and what it meant.
                I also make small games you can play in a browser.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#writing"
                  className="inline-flex items-center justify-center min-h-11 px-6 rounded-full bg-forest text-pearl text-sm font-medium hover:bg-charcoal transition-colors"
                >
                  Read the writing
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center min-h-11 px-6 rounded-full border border-forest text-forest text-sm font-medium hover:bg-sage-wash transition-colors"
                >
                  Play the games
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-linen py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-warm-gray leading-relaxed mb-6">
            Not affiliated with Anthropic. Not investment advice. Source for every number: Anthropic, PBC, Form S-1,
            filed with the SEC on October 26, 2026.
          </p>
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
