export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-mono text-sm sm:text-base tracking-widest uppercase text-warm-gray">
        {number}
      </span>
      <span className="w-10 h-px bg-taupe" />
      <span className="font-mono text-sm sm:text-base tracking-widest uppercase text-warm-gray">
        {label}
      </span>
    </div>
  )
}
