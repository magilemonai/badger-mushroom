// Per-route metadata. Used at runtime for document.title on SPA navigation,
// and at build time by scripts/prerender.mjs to emit per-route <head> tags.
// Keep in sync with the routes in src/App.jsx and src/prerender-entry.jsx.
const SITE = 'https://codywymore.com'

const routeMeta = {
  '/': {
    title: 'Cody Wymore',
    description:
      'Cody Wymore — ad tech strategist, composer, and AI builder in New York City. VP Client Solutions at Innovid.',
    ogTitle: 'Cody Wymore — Ad Tech, Music, AI',
    ogDescription:
      'Ad tech strategist, composer, and AI builder. VP Client Solutions at Innovid, NYU Tisch MFA, and creator of games and tools built with Claude Code.',
    ogImage: `${SITE}/og.jpg`,
    ogImageAlt: 'Cody Wymore holding a mug in front of a colorful painted backdrop',
  },
  '/blog/q1-2026': {
    title: 'Q1 2026: The Quarter That Broke the Timeline — Cody Wymore',
    description:
      '270+ model releases. Over 80,000 layoffs. Seven projects built from scratch. A personal reckoning with the pace of AI.',
    ogTitle: 'Q1 2026: The Quarter That Broke the Timeline',
    ogDescription:
      '270+ model releases. Over 80,000 layoffs. Seven projects built from scratch. A personal reckoning with the pace of AI.',
    ogImage: `${SITE}/blog/q1-2026-hero.jpg`,
    ogImageAlt: 'Charcoal sketch hero image for the Q1 2026 retrospective',
  },
  '/blog/q2-2026': {
    title: 'Q2 2026: The Quarter That Built Its First Loop — Cody Wymore',
    description:
      'A record 40% of layoffs blamed on AI. China at 85% optimism about a technology half of America has never touched. Ninety days on a roller coaster where we can’t see the end.',
    ogTitle: 'Q2 2026: The Quarter That Built Its First Loop',
    ogDescription:
      'A record 40% of layoffs blamed on AI. China at 85% optimism. Ninety days on a roller coaster where we can’t see the end.',
    ogImage: `${SITE}/blog/q2-2026-hero.jpg`,
    ogImageAlt: 'Charcoal sketch of a traveler on a roller coaster whose track ahead dissolves into unfinished pencil lines',
  },
  '/blog/breakout-summer': {
    title: 'Hot model breakout summer — Cody Wymore',
    description:
      'An OpenAI model broke into Hugging Face to cheat on its own test. Anthropic found three more escapes in its logs. A UK audit counted nineteen unsanctioned actions. The mechanism is stranger than the movie in your head.',
    ogTitle: 'Hot model breakout summer',
    ogDescription:
      'An OpenAI model broke into Hugging Face to cheat on its own test. Anthropic found three more escapes in its logs. The mechanism is stranger than the movie in your head.',
    ogImage: `${SITE}/blog/breakout-summer-hero.jpg`,
    ogImageAlt: 'Charcoal sketch of a small robot walking out of a giant wooden sandbox through a hole in its wall, onto sand that stretches identically to the horizon',
  },
  '/projects': {
    title: 'Projects — Cody Wymore',
    description:
      'Games, tools, and experiments built with Claude Code: from typing games and D&D campaign tools to analytics pipelines.',
    ogTitle: 'Projects — Cody Wymore',
    ogDescription:
      'Games, tools, and experiments built with Claude Code.',
    ogImage: `${SITE}/og.jpg`,
    ogImageAlt: 'Cody Wymore holding a mug in front of a colorful painted backdrop',
  },
}

export default routeMeta
