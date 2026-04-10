import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionLabel from '../components/SectionLabel'
import useScrollAnimation from '../components/useScrollAnimation'
import allLinkedinPosts from '../data/allLinkedinPosts'

const articles = [
  {
    title: 'Q1 2026: The Quarter That Broke the Timeline',
    date: 'Apr 6, 2026',
    summary: '270+ model releases. Over 80,000 layoffs. Seven projects built from scratch. A personal reckoning with the pace of AI.',
    url: '/blog/q1-2026',
    image: 'blog/q1-2026-hero.jpg',
    imageAlt: 'Q1 2026: The Quarter That Broke the Timeline',
    internal: true,
    featured: true,
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
                    className={`max-h-96 rounded-lg object-contain ${postImages.length > 1 ? 'flex-1 min-w-0' : 'max-w-full mx-auto block'}`}
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
          <div className="pt-6 text-sm sm:text-base text-charcoal leading-relaxed whitespace-pre-line">
            {post.body}
          </div>
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

export default function Writing() {
  const sectionRef = useScrollAnimation()
  const [showOlder, setShowOlder] = useState(false)

  const recentPosts = allLinkedinPosts.slice(0, VISIBLE_COUNT)
  const olderPosts = allLinkedinPosts.slice(VISIBLE_COUNT)

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
          <div className="space-y-4 mb-16">
            {articles.map((article) => {
              const cardClass = `block rounded-xl p-6 sm:p-8 border transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-md ${
                article.featured
                  ? 'bg-pearl border-sage/30 border-l-4 border-l-sage'
                  : 'bg-pearl border-taupe/50'
              }`
              const cardContent = (
                <>
                  {article.image && (
                    <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 max-h-64 overflow-hidden rounded-t-xl">
                      <img
                        src={import.meta.env.BASE_URL + article.image}
                        alt={article.imageAlt || ''}
                        className="w-full block object-cover object-top"
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
          <h3 className="font-mono text-sm sm:text-base tracking-widest text-sage uppercase mb-6">
            LinkedIn
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <LinkedInPost key={post.url} post={post} />
            ))}
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
                {showOlder ? 'Hide' : 'Show'} older posts ({olderPosts.length})
              </button>
              {showOlder && (
                <div className="space-y-4 mt-4">
                  {olderPosts.map((post) => (
                    <LinkedInPost key={post.url} post={post} />
                  ))}
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
