import { useEffect, useRef } from 'react'

// The Score's playhead: a staff line across the top of the page with a
// marker that tracks scroll position, like a cursor moving through a score.
export default function Playhead() {
  const markerRef = useRef(null)
  const fillRef = useRef(null)

  useEffect(() => {
    const marker = markerRef.current
    const fill = fillRef.current
    if (!marker || !fill) return
    let raf = null
    const update = () => {
      raf = null
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      marker.style.left = `${p * 100}%`
      fill.style.transform = `scaleX(${p})`
    }
    const onScroll = () => { if (raf === null) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="playhead-track" aria-hidden="true">
      <div ref={fillRef} className="playhead-fill" />
      <div ref={markerRef} className="playhead-marker">
        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
          <path d="M1,0 L9,0 L5,9 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}
