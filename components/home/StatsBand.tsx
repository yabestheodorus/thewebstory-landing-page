'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Dictionary } from '@/dictionaries/en'

gsap.registerPlugin(ScrollTrigger)

/**
 * StatsBand
 *
 * Marquee strip of headline stats. Lifted out of the original HeroSection
 * so the hero can do its single job (state the promise + route to action),
 * while the marquee earns its own moment as a trust band right before the
 * StatementSection.
 */
export default function StatsBand({ dict }: { dict: Dictionary['hero'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.stats-band', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="stats-band relative py-7 border-t border-b border-border overflow-hidden bg-off"
    >
      <div className="flex w-max animate-marquee gap-16 md:gap-24">
        {[...dict.stats, ...dict.stats, ...dict.stats, ...dict.stats].map(({ val, label }, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0 px-4">
            <span className="font-aktiv-grotesk text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink leading-none">
              {val}
            </span>
            <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-ink/60">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
