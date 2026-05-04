'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Dictionary } from '@/dictionaries/en'
import { SlideUpLabel } from '@/components/ui/SlideUpLabel'

export default function WorkFooter({ dict, lang }: { dict: Dictionary['work']; lang: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    const split = new SplitText(headingRef.current!, { type: 'chars' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    })

    tl.from(split.chars, {
      y: 40,
      opacity: 0,
      rotateX: -45,
      stagger: 0.02,
      duration: 0.8,
      ease,
    })

    return () => { split.revert() }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative bg-secondary border-t border-ink/10 px-8 md:px-16 py-32 overflow-hidden"
    >
      {/* Atmospheric glow — top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 100% 0%, rgba(244,162,97,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
        {/* Left — heading */}
        <div className="flex flex-col gap-10 max-w-xl">
          <span className="label-eyebrow">{dict.footer_overline}</span>
          <h2 ref={headingRef} className="font-aktiv-grotesk text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.0] tracking-[-0.03em]">
            {dict.footer_heading_1}{' '}
            <em className="font-playfair italic font-light text-blaze">{dict.footer_heading_2}</em>
          </h2>
        </div>

        {/* Right — two CTA buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-5 shrink-0 relative z-10">
          <Link
            href={`/${lang}/contact`}
            className="group px-10 py-5 bg-gradient-to-r from-blaze to-[#FF7A00] text-white rounded-2xl font-plus-jakarta text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_24px_rgba(232,93,4,0.15)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <SlideUpLabel text={dict.footer_cta} />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href={`/${lang}`}
            className="group px-8 py-5 border border-ink/10 text-ink rounded-2xl font-plus-jakarta text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:border-ink/30 hover:-translate-y-0.5 flex items-center justify-center"
          >
            <SlideUpLabel text={dict.footer_back} />
          </Link>
        </div>
      </div>
    </section>
  )
}
