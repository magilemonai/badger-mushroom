import BlogLayout from '../components/BlogLayout'
import CrunchwrapContent from './Crunchwrap_2026_Content'

export default function Crunchwrap_2026() {
  return (
    <BlogLayout
      title="Crunch App Supreme"
      subtitle="Our household's fourth annual crunchwrap party got its own software this year: QR ordering, a one-button kitchen screen for the chef, and a synced countdown on every phone. 54 wraps, a 19-order rush, and 49 deploys on the day of the party. Ten of them shipped mid-party, most requested by people holding food."
      date="August 17, 2026"
      heroImage="crunch-party-hero"
      heroAlt="The party board, calm and mid-evening: CRUNCH APP SUPREME in outline type, a three-deep order line, sixteen wraps served, a scan-to-order QR code, and the clock reading 6:05 PM"
      sections={[
        { id: 'specific-software', label: 'The Most Specific Software' },
        { id: 'editing-the-party', label: 'Editing the App' },
        { id: 'the-numbers', label: 'The Numbers' },
        { id: 'the-part', label: 'The Fifth Annual' },
      ]}
    >
      <CrunchwrapContent />
    </BlogLayout>
  )
}
