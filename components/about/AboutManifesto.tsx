'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Dictionary } from '@/dictionaries/en'

export function AboutManifesto({ dict }: { dict: Dictionary['about']['manifesto'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.manifesto-text', {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-ink text-off py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="manifesto-text flex items-center gap-3 mb-16">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-blaze">{dict.overline}</span>
          <span className="w-8 h-px bg-off/15" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-off/50">{dict.subtitle}</span>
        </div>

        <h2 className="manifesto-text font-plus-jakarta text-h1 font-bold leading-[1.05] tracking-[-0.03em] mb-16">
          {dict.title_part1} <br />
          <span className="text-off/40 italic font-light">{dict.title_part2}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <p className="manifesto-text font-google text-lg leading-[1.8] text-off/70">
            {dict.text1}
          </p>
          <p className="manifesto-text font-google text-lg leading-[1.8] text-off/70">
            {dict.text2}
          </p>
        </div>

        <div className="manifesto-text mt-24 flex items-center gap-6">
          <div className="w-12 h-px bg-blaze" />
          <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-blaze">{dict.footer}</span>
        </div>
      </div>
    </section>
  )
}
