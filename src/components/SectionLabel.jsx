// Sketchbook section label: a Fraunces italic numeral beside a hand-drawn rule.
export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-display italic text-xl sm:text-2xl text-terracotta leading-none">
        {number}
      </span>
      <svg viewBox="0 0 48 8" className="w-12 h-2 text-taupe" preserveAspectRatio="none" aria-hidden="true">
        <path d="M1,5 C10,3 20,6 30,4 C38,2.5 44,5 47,3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="font-mono text-sm sm:text-base tracking-widest uppercase text-warm-gray">
        {label}
      </span>
    </div>
  )
}
