import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'
import allLinkedinPosts from '../data/allLinkedinPosts'

const articles = [
  {
    title: 'Crunch App Supreme',
    date: 'Aug 17, 2026',
    summary: "Our household's fourth annual crunchwrap party got its own software this year: QR ordering, a one-button kitchen screen for the chef, and a synced countdown on every phone. 54 wraps, a 19-order rush, and 49 deploys on the day of the party.",
    url: '/blog/crunch-app-supreme',
    image: 'blog/crunch-party-hero-card.webp',
    imageAlt: 'Crunch App Supreme',
    internal: true,
    featured: true,
  },
  {
    title: 'Hot model breakout summer',
    date: 'Aug 5, 2026',
    summary: 'An OpenAI model broke into Hugging Face to cheat on its own test. Anthropic found three more escapes in its logs. A UK audit counted nineteen unsanctioned actions. The mechanism is stranger than the movie in your head.',
    url: '/blog/breakout-summer',
    image: 'blog/breakout-summer-hero-card.webp',
    imageAlt: 'Hot model breakout summer',
    internal: true,
    featured: false,
  },
  {
    title: 'Q2 2026: The Quarter That Built Its First Loop',
    date: 'Jul 6, 2026',
    summary: 'A record 40% of layoffs blamed on AI. China at 85% optimism about a technology half of America has never touched. Ninety days on a roller coaster where we can’t see the end.',
    url: '/blog/q2-2026',
    image: 'blog/q2-2026-hero-card.webp',
    imageAlt: 'Q2 2026: The Quarter That Built Its First Loop',
    internal: true,
    featured: false,
  },
  {
    title: 'Q1 2026: The Quarter That Broke the Timeline',
    date: 'Apr 6, 2026',
    summary: '270+ model releases. Over 80,000 layoffs. Seven projects built from scratch. A personal reckoning with the pace of AI.',
    url: '/blog/q1-2026',
    image: 'blog/q1-2026-hero-card.webp',
    imageAlt: 'Q1 2026: The Quarter That Broke the Timeline',
    internal: true,
    featured: false,
  },
  {
    title: 'AI Vertigo: Why Truth Resists Simplicity in the Age of Agents',
    date: 'Dec 2025',
    summary: 'On the shift from generative AI to agentic AI, why binary thinking fails us, and how to move from experimentation to adoption.',
    url: 'https://www.innovid.com/resources/blog/ai-vertigo-blog',
    featured: false,
  },
  {
    title: 'AI in Ad Tech: Cutting Through Hype & Harnessing Potential',
    date: '2024',
    summary: 'A balanced look at where AI genuinely improves campaigns, and where the industry needs to slow down and think.',
    url: 'https://info.innovid.com/blog/ai-in-ad-tech-cutting-through-hype-harnessing-potential',
    featured: false,
  },
]

// Renders a post body string with light structure: consecutive paragraphs that
// begin "N. " become a numbered list (value-attributed so split lists keep
// their numbering); everything else stays a whitespace-preserving paragraph.
function PostBody({ body }) {
  const blocks = useMemo(() => {
    const paras = body.split(/\n\s*\n/).filter((p) => p.trim().length)
    const out = []
    let list = null
    for (const para of paras) {
      const m = para.match(/^(\d+)\.\s+([\s\S]*)$/)
      if (m) {
        if (!list) {
          list = []
          out.push({ type: 'ol', items: list })
        }
        list.push({ n: Number(m[1]), text: m[2] })
      } else {
        list = null
        out.push({ type: 'p', text: para })
      }
    }
    return out
  }, [body])

  return (
    <div className="pt-6 text-sm sm:text-base text-charcoal leading-relaxed">
      {blocks.map((block, i) =>
        block.type === 'ol' ? (
          <ol key={i} className="list-decimal pl-6 mb-4 space-y-1 font-medium marker:font-mono marker:text-sage">
            {block.items.map((item) => (
              <li key={item.n} value={item.n} className="whitespace-pre-line">
                {item.text}
              </li>
            ))}
          </ol>
        ) : (
          <p key={i} className="mb-4 whitespace-pre-line last:mb-0">
            {block.text}
          </p>
        )
      )}
    </div>
  )
}

function LinkedInPost({ post }) {
  const [expanded, setExpanded] = useState(false)
  const postImages = post.images || (post.image ? [post.image] : [])
  const postImagesAlt = post.imagesAlt || (post.imageAlt ? [post.imageAlt] : [])

  return (
    <div className="rounded-xl border border-taupe/50 bg-pearl overflow-hidden transition-all duration-200 hover:shadow-md">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="font-mono text-xs tracking-wide text-sage">
              {post.date}
            </span>
            <h3 className="font-display text-xl sm:text-2xl text-charcoal mt-2 mb-2">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:text-forest transition-colors"
              >
                {post.title}
              </a>
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              {post.preview}
            </p>
          </div>
          {post.image && !expanded ? (
            <img
              src={import.meta.env.BASE_URL + post.image}
              alt={post.imageAlt || ''}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover shrink-0"
            />
          ) : (
            <svg
              className={`w-5 h-5 text-sage shrink-0 mt-1 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </button>

      {expanded && (
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-taupe/30">
          {postImages.length > 0 && (
            <div className="mt-6 mb-2">
              <div className={postImages.length > 1 ? 'flex gap-4' : ''}>
                {postImages.map((img, i) => (
                  <img
                    key={img}
                    src={import.meta.env.BASE_URL + img}
                    alt={postImagesAlt[i] || ''}
                    className={`max-h-96 sm:max-h-[32rem] rounded-lg object-contain ${postImages.length > 1 ? 'flex-1 min-w-0' : 'max-w-full mx-auto block'}`}
                  />
                ))}
              </div>
              {(post.video || post.projectUrl) && (
                <div className="flex justify-center mt-4">
                  <a
                    href={post.video || post.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta text-cream rounded-lg text-sm font-medium hover:bg-terracotta/85 transition-colors"
                  >
                    {post.video ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.videoLabel || 'Watch video'}
                      </>
                    ) : (
                      <>
                        {post.projectLabel || 'View project'}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </>
                    )}
                  </a>
                </div>
              )}
            </div>
          )}
          <PostBody body={post.body} />
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-forest font-mono tracking-wide hover:underline"
            >
              View on LinkedIn
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {post.video && (
              <a
                href={post.video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-terracotta font-mono tracking-wide hover:underline"
              >
                {post.videoLabel || 'Watch video'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            )}
            {post.projectUrl && (
              <a
                href={post.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-terracotta font-mono tracking-wide hover:underline"
              >
                {post.projectLabel || 'View project'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const VISIBLE_COUNT = 12

function YearDivider({ year }) {
  return (
    <div className="flex items-center gap-3 pt-6 pb-1" aria-hidden="true">
      <span className="font-mono text-xs tracking-widest text-warm-gray">{year}</span>
      <div className="flex-1 border-t border-taupe/60" />
    </div>
  )
}

// Interleave year dividers into a chronological post list (posts run
// newest-first, so a divider marks the year the reader is scrolling into).
function renderPostList(posts, showDividers) {
  if (!showDividers) {
    return posts.map((post) => <LinkedInPost key={post.url} post={post} />)
  }
  const out = []
  let lastYear = null
  for (const post of posts) {
    const year = new Date(post.date).getFullYear()
    if (lastYear !== null && year !== lastYear && !Number.isNaN(year)) {
      out.push(<YearDivider key={`year-${year}`} year={year} />)
    }
    if (!Number.isNaN(year)) lastYear = year
    out.push(<LinkedInPost key={post.url} post={post} />)
  }
  return out
}

export default function Writing() {
  const sectionRef = useScrollAnimation()
  const [showOlder, setShowOlder] = useState(false)
  const [sortMode, setSortMode] = useState('recent')

  const sortedPosts = useMemo(() => {
    if (sortMode === 'popular') {
      return [...allLinkedinPosts].sort(
        (a, b) => (b.impressions ?? 0) - (a.impressions ?? 0)
      )
    }
    return allLinkedinPosts
  }, [sortMode])

  const recentPosts = sortedPosts.slice(0, VISIBLE_COUNT)
  const olderPosts = sortedPosts.slice(VISIBLE_COUNT)

  return (
    <section id="writing" className="bg-linen py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={sectionRef} className="animate-on-scroll">
          <SectionLabel number="04" label="Writing" />

          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4">
            Thinking out loud
          </h2>
          <p className="text-base sm:text-lg text-warm-gray leading-relaxed mb-12 max-w-2xl">
            I write about AI, advertising, and the messy space between hype and
            reality.
          </p>

          {/* Blog Articles */}
          <h3 className="font-mono text-sm sm:text-base tracking-widest text-sage uppercase mb-6">
            Blog Articles
          </h3>
          <div className="space-y-4 mb-16 anim-stagger">
            {articles.map((article) => {
              const cardClass = `block rounded-xl p-6 sm:p-8 border transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-md ${
                article.featured
                  ? 'bg-pearl border-sage/30 border-l-4 border-l-sage'
                  : 'bg-pearl border-taupe/50'
              }`
              const cardContent = (
                <>
                  {article.image && (
                    <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 aspect-[3/1] overflow-hidden rounded-t-xl">
                      <img
                        src={import.meta.env.BASE_URL + article.image}
                        alt={article.imageAlt || ''}
                        width={1200}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full block object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs tracking-wide text-sage">
                          {article.date}
                        </span>
                        {article.featured && (
                          <span className="px-2 py-0.5 bg-sage-wash text-forest text-xs font-mono tracking-wide rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-2 group-hover:text-forest transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-sage shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {article.internal ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      )}
                    </svg>
                  </div>
                </>
              )
              return article.internal ? (
                <Link key={article.title} to={article.url} className={cardClass}>
                  {cardContent}
                </Link>
              ) : (
                <a key={article.title} href={article.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {cardContent}
                </a>
              )
            })}
          </div>

          {/* LinkedIn Posts */}
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h3 className="font-mono text-sm sm:text-base tracking-widest text-sage uppercase">
              LinkedIn
            </h3>
            <div className="flex items-center gap-1 font-mono text-xs tracking-wide">
              <span className="text-warm-gray mr-2">Sort:</span>
              <button
                onClick={() => setSortMode('popular')}
                aria-pressed={sortMode === 'popular'}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  sortMode === 'popular'
                    ? 'bg-sage text-cream'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                Popular
              </button>
              <button
                onClick={() => setSortMode('recent')}
                aria-pressed={sortMode === 'recent'}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  sortMode === 'recent'
                    ? 'bg-sage text-cream'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                Recent
              </button>
            </div>
          </div>
          <div className="space-y-4 anim-stagger">
            {renderPostList(recentPosts, sortMode === 'recent')}
          </div>

          {olderPosts.length > 0 && (
            <div className="mt-8">
              <button
                onClick={() => setShowOlder(!showOlder)}
                className="inline-flex items-center gap-2 font-mono text-sm tracking-wide text-forest hover:text-charcoal transition-colors cursor-pointer"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${showOlder ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {showOlder ? 'Hide' : 'Show'} more posts ({olderPosts.length})
              </button>
              {showOlder && (
                <div className="space-y-4 mt-4">
                  {renderPostList(olderPosts, sortMode === 'recent')}
                </div>
              )}
            </div>
          )}

          <p className="mt-8 text-sm text-warm-gray">
            More on{' '}
            <a
              href="https://www.linkedin.com/in/codywymore/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
            >
              LinkedIn
            </a>
            {' '}and the{' '}
            <a
              href="https://www.innovid.com/author/cody-wymore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest underline decoration-sage/40 underline-offset-2 hover:decoration-forest transition-colors"
            >
              Innovid blog
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
