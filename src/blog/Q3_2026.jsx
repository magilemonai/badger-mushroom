import BlogLayout from '../components/BlogLayout'
import Q3Content from './Q3_2026_Content'

export default function Q3_2026() {
  return (
    <BlogLayout
      title="Q3 2026: The Quarter We Looked for the Brakes"
      subtitle="I spent the summer building weird little games as fast as the models would let me. Then a 27-year-old researcher quit his job and his posts were viewed 153 million times. The labs said out loud that they should slow down, Washington called it a hoax, and three in four voters don't want a data center near their house. Let's look back at the last ninety days of corkscrews."
      date="October 2, 2026"
      heroImage="q3-2026-hero"
      heroAlt="Charcoal sketch of a traveler with a backpack riding a riveted roller-coaster car past a wall of gears with a large Q3 built into it, sketching in a notebook, while a woman in the car ahead hauls on a hand-brake lever; the track corkscrews into fog and a faint car hangs in the air beyond it"
      sections={[
        { id: 'the-escape', label: 'The Escape' },
        { id: 'the-alarm', label: 'The Alarm' },
        { id: 'the-pace', label: 'The Pace' },
        { id: 'the-open-frontier', label: 'The Open Frontier' },
        { id: 'the-friction', label: 'The Friction' },
        { id: 'the-grid', label: 'The Grid' },
        { id: 'the-brakes', label: 'The Brakes' },
      ]}
    >
      <Q3Content />
    </BlogLayout>
  )
}
