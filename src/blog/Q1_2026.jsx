import BlogLayout from '../components/BlogLayout'
import Q1Content from './Q1_2026_Content'

export default function Q1_2026() {
  return (
    <BlogLayout
      title="Q1 2026: The Quarter That Broke the Timeline"
      subtitle="270+ model releases. Over 80,000 layoffs. Seven projects built from scratch. A personal reckoning with the pace of AI."
      date="April 6, 2026"
      heroImage="q1-2026-hero"
      heroAlt="Q1 2026: The Quarter That Broke the Timeline"
      sections={[
        { id: 'the-pace', label: 'The Pace' },
        { id: 'the-personal-timeline', label: 'The Personal Timeline' },
        { id: 'the-noise', label: 'The Noise' },
        { id: 'the-infrastructure', label: 'The Infrastructure' },
        { id: 'the-geopolitics', label: 'The Geopolitics' },
        { id: 'the-pattern', label: 'The Pattern' },
        { id: 'what-survived-the-blur', label: 'What Survived the Blur' },
      ]}
    >
      <Q1Content />
    </BlogLayout>
  )
}
