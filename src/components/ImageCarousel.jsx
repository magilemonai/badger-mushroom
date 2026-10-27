import { useRef, useState } from 'react'

function Arrow({ direction, disabled, onClick }) {
  const prev = direction === 'prev'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={prev ? 'Previous slide' : 'Next slide'}
      className={`absolute top-1/2 -translate-y-1/2 ${prev ? 'left-2' : 'right-2'} w-11 h-11 rounded-full bg-pearl/90 border border-taupe/50 shadow-md flex items-center justify-center text-forest transition-opacity cursor-pointer disabled:opacity-0 disabled:pointer-events-none hover:bg-pearl`}
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={prev ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )
}

export default function ImageCarousel({ images, alts = [] }) {
  const track = useRef(null)
  const [index, setIndex] = useState(0)
  const last = images.length - 1

  const go = (i) => {
    const el = track.current
    if (!el) return
    const next = Math.max(0, Math.min(last, i))
    el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = track.current
    if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth))
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(index - 1)
    }
  }

  return (
    <div className="mx-auto max-w-md" role="region" aria-roledescription="carousel" aria-label="Image carousel">
      <div className="relative">
        <div
          ref={track}
          onScroll={onScroll}
          onKeyDown={onKeyDown}
          tabIndex={0}
          className="flex overflow-x-auto snap-x snap-mandatory rounded-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-light"
        >
          {images.map((img, i) => (
            <img
              key={img}
              src={import.meta.env.BASE_URL + img}
              alt={alts[i] || ''}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full shrink-0 snap-center object-contain"
            />
          ))}
        </div>
        <Arrow direction="prev" disabled={index === 0} onClick={() => go(index - 1)} />
        <Arrow direction="next" disabled={index === last} onClick={() => go(index + 1)} />
      </div>

      <div className="flex items-center justify-center gap-1 mt-3">
        {images.map((img, i) => (
          <button
            key={img}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="p-1.5 cursor-pointer"
          >
            <span className={`block w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-forest' : 'bg-taupe'}`} />
          </button>
        ))}
        <span className="ml-2 font-mono text-xs text-sage tabular-nums" aria-live="polite">
          {index + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
