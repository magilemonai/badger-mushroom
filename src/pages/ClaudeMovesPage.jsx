import { useState } from 'react'
import { Link } from 'react-router-dom'

const prompts = [
  {
    step: 'Move 1 · Talk to it',
    title: 'Start a new chat',
    text: 'Write a short limerick about a dog who is afraid of the mailman.',
  },
  {
    step: 'Move 2 · Talk back',
    title: 'Then reply in the same chat',
    text: 'Make it funnier, and make her a chihuahua.',
    note: 'Claude knows who "her" is because it\'s the same conversation. If your dog came out a "he," swap the word and it works the same.',
  },
  {
    step: 'Move 3 · Real details',
    title: 'Dinner from your fridge',
    before: 'Plan three weeknight dinners using mostly what I already have: ',
    blank: "[what's in your fridge right now]",
    after: '. Keep each under 30 minutes. Give me a short shopping list for anything missing. Keep the whole answer short.',
    note: 'Swap in your real list. The video used eggs, half a bag of spinach, a can of chickpeas, rice, a block of feta, two lemons, garlic, and some tired cherry tomatoes.',
  },
]

const moves = [
  { title: 'Talk to it.', text: "Type like you're texting a friend, with no magic words needed." },
  { title: 'Talk back.', text: 'If something\'s off, reply in the same chat with what to change: "shorter," "warmer," "give me three options." Claude keeps the context, so you don\'t have to start over.' },
  { title: 'Real details.', text: "What's in your fridge, who it's for, where you're going. You can add files and photos from the + button." },
  { title: 'Check the work.', text: 'Hold what comes back against what you asked for, every time. Claude can be confidently wrong, and totals are a good place to look. In the video, a made-up expense summary said $63, and the items added up to $78.' },
  { title: 'Claim your API credits.', text: "If you're on Max or Team, your plan includes monthly credits for the Claude API. Details below.", tag: 'Pro tip' },
]

const credits = [
  { plan: 'Max 5x', amount: '$100/mo' },
  { plan: 'Max 20x', amount: '$200/mo' },
  { plan: 'Team', detail: '$20 per Standard seat, $100 per Premium seat, pooled', amount: 'up to $500/mo' },
]

const videoPrompt = `I want to make a 60-second vertical video that teaches [your topic] to [who it's for]. Think social media short: packed with useful information, and fun to watch. Build it in code with Remotion, in a new folder.

1. Script first. Write about 150 spoken words in short numbered lines, one idea per line, with a hook in the first three seconds. Shape it as [five quick tips]. Show me the script before you build anything.

2. Keep it real. Any answer, number or product detail on screen has to be real: generate it or look it up, and tell me the source. Label anything made up as made up, on screen.

3. Voice: use ElevenLabs if I give you an API key, otherwise a placeholder voice so we can check the timing. Time the captions and animations to the words.

4. Style: 1080x1920, big captions of 1-3 words that work with the sound off, a title card for each point, quick cuts on a steady beat, music under the voice, and an end card that recaps every point. Keep the important stuff in the middle of the frame so it also crops to 4:5 for LinkedIn.

5. Before the final render, show me a still from each section. Then export a 9:16 and a 4:5 version, with the audio leveled for social.

Ask me what you need to know before you start.`

function promptText(p) {
  return p.text || p.before + p.blank + p.after
}

function withBlanks(text) {
  return text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith('[') ? (
      <span key={i} className="text-terracotta font-medium">{part}</span>
    ) : (
      part
    )
  )
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const t = document.createElement('textarea')
      t.value = text
      document.body.appendChild(t)
      t.select()
      try { document.execCommand('copy') } catch { /* nothing else to try */ }
      t.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`w-full sm:w-auto min-h-11 px-6 rounded-full text-sm font-medium transition-colors cursor-pointer ${
        copied ? 'bg-terracotta text-pearl' : 'bg-forest text-pearl hover:bg-charcoal'
      }`}
    >
      {copied ? 'Copied' : 'Copy prompt'}
    </button>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
      {children}
    </p>
  )
}

export default function ClaudeMovesPage() {
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
            Claude moves
          </span>
        </div>
      </nav>

      {/* Hero */}
      <div className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
            From the video
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-charcoal mb-6">
            Five Claude moves
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
            The prompts from the video, ready to copy. Paste them into{' '}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-4 hover:text-charcoal">
              claude.ai
            </a>
            . Moves one to four work on the free plan; the fifth is a pro tip for Max and Team subscribers.
          </p>
        </div>
      </div>

      {/* Prompts */}
      <div className="max-w-3xl mx-auto px-6 pb-16 sm:pb-20">
        <SectionLabel>Try them tonight</SectionLabel>
        <div className="space-y-6">
          {prompts.map((p) => (
            <div key={p.step} className="bg-pearl rounded-xl border border-taupe/50 p-6 sm:p-8">
              <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-2">
                {p.step}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-4">
                {p.title}
              </h2>
              <p className="bg-linen rounded-lg p-4 sm:p-5 text-charcoal leading-relaxed mb-4">
                {p.text || (
                  <>
                    {p.before}
                    <span className="text-terracotta font-medium">{p.blank}</span>
                    {p.after}
                  </>
                )}
              </p>
              {p.note && (
                <p className="text-sm text-warm-gray leading-relaxed mb-5">{p.note}</p>
              )}
              <CopyButton text={promptText(p)} />
            </div>
          ))}
        </div>
      </div>

      {/* The five moves */}
      <div className="bg-linen py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>The five moves</SectionLabel>
          <ol className="bg-pearl rounded-xl border border-taupe/50 divide-y divide-taupe/50">
            {moves.map((m, i) => (
              <li key={m.title} className="flex gap-4 sm:gap-6 p-6 sm:p-8">
                <span className="font-mono text-sm text-sage pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-charcoal font-medium mb-1">
                    {m.title}
                    {m.tag && (
                      <span className="ml-2 px-3 py-0.5 bg-sage-wash text-forest text-xs font-mono tracking-wide rounded-full align-middle whitespace-nowrap">
                        {m.tag}
                      </span>
                    )}
                  </p>
                  <p className="text-warm-gray leading-relaxed">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Pro tip */}
      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Pro tip</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            The API credits in Max and Team
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8">
            Since October 2026, Max and Team plans come with monthly credits for building on the Claude API.
            You only get them if you link a Claude Console organization.
          </p>

          <div className="bg-pearl rounded-xl border border-taupe/50 divide-y divide-taupe/50 mb-10">
            {credits.map((c) => (
              <div key={c.plan} className="flex items-baseline justify-between gap-4 px-6 py-4 sm:px-8">
                <div>
                  <p className="text-charcoal">{c.plan}</p>
                  {c.detail && <p className="text-sm text-warm-gray">{c.detail}</p>}
                </div>
                <p className="font-display text-xl sm:text-2xl text-terracotta whitespace-nowrap">{c.amount}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-2xl text-charcoal mb-4">How to claim them</h3>
          <ol className="list-decimal pl-5 space-y-3 text-warm-gray leading-relaxed mb-10 marker:text-sage marker:font-mono">
            <li>
              On claude.ai in a web browser, open <span className="text-charcoal font-medium whitespace-nowrap">Settings › Billing</span>.
              On Team, it's <span className="text-charcoal font-medium">Organization settings › Billing</span>, and an Owner has to do it.
            </li>
            <li>
              In the <span className="text-charcoal font-medium">API credits</span> section, pick the Console organization that
              should get the credits and link it. You can create one there if you don't have one.
            </li>
            <li>
              The credits show up under <span className="text-charcoal font-medium">Promotional credits</span> on the Billing page at{' '}
              <a href="https://platform.claude.com/settings/billing" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-4 hover:text-charcoal">
                platform.claude.com
              </a>
              . Make an API key and start building.
            </li>
          </ol>

          <h3 className="font-display text-2xl text-charcoal mb-4">The fine print</h3>
          <ul className="list-disc pl-5 space-y-3 text-warm-gray leading-relaxed mb-8 marker:text-sage">
            <li>They don't roll over. Unused credits expire at the end of each billing cycle.</li>
            <li>They cover the Claude API, Managed Agents, the Agent SDK and the Console playground. They don't cover Claude Code or extra usage in the Claude apps.</li>
            <li>New subscribers can claim after 7 days on the plan.</li>
            <li>You can't switch the linked organization yourself (support can), so link the one you'll actually build in.</li>
          </ul>
          <p className="text-sm text-warm-gray leading-relaxed">
            Source:{' '}
            <a href="https://platform.claude.com/docs/en/about-claude/api-credits-for-subscribers" target="_blank" rel="noopener noreferrer" className="text-forest underline underline-offset-4 hover:text-charcoal">
              API credits for Max and Team plans
            </a>
            , Anthropic's docs. Checked October 26, 2026. Plans change, so the docs page wins if it says something different.
          </p>
        </div>
      </div>

      {/* Make your own */}
      <div className="bg-linen py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Make your own</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            A prompt for a video like this one
          </h2>
          <p className="text-warm-gray leading-relaxed mb-8">
            Claude Code made this video: it wrote the script and the animation code in Remotion, a tool for making
            videos with code, and the voice comes from ElevenLabs. Here's a starting prompt for making your own.
            You'll need Claude Code and a computer with Node.js installed. Expect a few rounds of notes after the
            first draft; mine took several.
          </p>
          <div className="bg-pearl rounded-xl border border-taupe/50 p-6 sm:p-8">
            <p className="font-mono text-xs tracking-widest uppercase text-terracotta mb-2">
              Paste into Claude Code
            </p>
            <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-4">
              A 60-second explainer
            </h3>
            <p className="bg-linen rounded-lg p-4 sm:p-5 text-charcoal leading-relaxed whitespace-pre-line mb-4">
              {withBlanks(videoPrompt)}
            </p>
            <p className="text-sm text-warm-gray leading-relaxed mb-5">
              Fill in the colored parts first. Remotion is free for individuals, non-profits and companies with up to
              three employees; bigger companies need its company license.
            </p>
            <CopyButton text={videoPrompt} />
          </div>
        </div>
      </div>

      {/* Safety */}
      <div className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>Before you paste anything</SectionLabel>
          <ul className="list-disc pl-5 space-y-3 text-warm-gray leading-relaxed marker:text-sage">
            <li>Paste only what you'd be comfortable putting in an email. Leave out passwords, account numbers, and other people's private details.</li>
            <li>Decide whether your chats can help train future models: Settings, then Privacy, then "Help improve our AI models." Either choice is fine. Pick it on purpose.</li>
            <li>Claude can be confidently wrong. For anything that matters (money, health, dates), check the facts yourself.</li>
          </ul>
        </div>
      </div>

      {/* Want more */}
      <div className="bg-linen py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-pearl rounded-xl border border-taupe/50 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-terracotta via-sage to-forest" />
            <div className="p-6 sm:p-8">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-3">Want more?</h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                I write about AI on my site, including a quarterly roundup of what changed and what it meant.
                I also make small games you can play in a browser, like a five-minute typing game and an alien game show.
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
      <div className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-warm-gray leading-relaxed mb-6">
            Not affiliated with Anthropic. The Claude answers in the video are real (Claude Opus 5.5, October 2026);
            the interface is recreated. Screens and plans may have changed since.
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
