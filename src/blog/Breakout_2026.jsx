import BlogLayout from '../components/BlogLayout'
import BreakoutContent from './Breakout_2026_Content'

export default function Breakout_2026() {
  return (
    <BlogLayout
      title="Hot model breakout summer"
      subtitle="An OpenAI model broke into Hugging Face to cheat on its own test. Anthropic found three more escapes in its logs. A UK audit counted nineteen unsanctioned actions. The mechanism is stranger and more unsettling than the movie in your head."
      date="August 5, 2026"
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
