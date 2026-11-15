import { useEffect, useRef } from 'react'

export default function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If the element is already in the viewport, make it visible immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      // 15% of the element, capped at 15% of a screen's height. A wrapper
      // taller than ~6.7 screens can never show 15% of itself at once, so an
      // uncapped threshold left it invisible (Writing on phones).
      { threshold: Math.min(0.15, (0.15 * window.innerHeight) / (rect.height || 1)) }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
