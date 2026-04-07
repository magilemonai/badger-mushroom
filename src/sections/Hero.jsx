import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [nameProgress, setNameProgress] = useState(0)
  const nameRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!nameRef.current) return
      const rect = nameRef.current.getBoundingClientRect()
      const start = rect.top + window.scrollY
      const distance = 200
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / distance))
      setNameProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center bg-cream pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Text — 3 columns */}
          <div className="md:col-span-3 order-2 md:order-1">
            <div
              className={`transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
                New York City
              </p>
            </div>

            <div
              ref={nameRef}
              className={`mb-6 transition-all duration-1000 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                opacity: visible ? 1 - nameProgress * 0.6 : 0,
                transform: `translateY(${visible ? 0 : 24}px) scale(${1 - nameProgress * 0.15})`,
                transformOrigin: 'top left',
              }}
            >
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-charcoal leading-[0.9] tracking-tight">
                Cody<br />Wymore
              </h1>
            </div>

            <p
              className={`font-display text-xl sm:text-2xl text-warm-gray leading-snug mb-4 transition-all duration-1000 delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Ad tech strategist.{' '}
              <span className="text-forest">Composer.</span>{' '}
              Builder. <span className="text-terracotta">Early AI builder.</span>
            </p>

            <p
              className={`text-lg sm:text-xl text-warm-gray leading-relaxed max-w-xl mb-8 transition-all duration-1000 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              13 years in ad tech. Seven AI projects in 90 days. An MFA in
              musical theatre writing. Navigating the space between hype and
              reality with equal parts enthusiasm and honesty.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-cream rounded-lg text-sm font-medium hover:bg-charcoal transition-colors"
              >
                Get to know me
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#writing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-cream rounded-lg text-sm font-medium hover:bg-terracotta/85 transition-colors"
              >
                Get the latest
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-taupe text-charcoal rounded-lg text-sm font-medium hover:border-sage hover:text-forest transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Headshot — 2 columns */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center">
            <div
              className={`transition-all duration-1000 delay-200 ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-sage-wash rounded-2xl -z-10" />
                <img
                  src={import.meta.env.BASE_URL + 'Cody-Wymore-Headshot-Cody-Wymore.jpg'}
                  alt="Cody Wymore"
                  className="w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem] object-cover object-top rounded-xl bg-sage-wash"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  onError={(e) => { e.target.src = import.meta.env.BASE_URL + 'headshot.svg' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
