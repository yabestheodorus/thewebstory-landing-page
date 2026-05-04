'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { SlideUpLabel } from '../ui/SlideUpLabel'

export default function FAQHero({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const count = dict.items?.length ?? 0

  useGSAP(() => {
    const split = new SplitText('.faq-title', { type: 'chars' })

    const tl = gsap.timeline()

    tl.from('.faq-overline', {
      opacity: 0,
      y: 8,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        split.chars,
        {
          opacity: 0,
          y: 22,
          stagger: 0.022,
          duration: 0.9,
          ease: 'power4.out',
        },
        '-=0.3'
      )
      .from(
        '.faq-desc',
        {
          opacity: 0,
          y: 10,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.55'
      )
      .from(
        '.faq-badge',
        {
          opacity: 0,
          y: 6,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.45'
      )
      .from(
        '.faq-scroll-hint',
        {
          opacity: 0,
          y: -6,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.3'
      )

    gsap.to('.faq-scroll-line', {
      scaleY: 0.35,
      repeat: -1,
      yoyo: true,
      duration: 1.1,
      ease: 'sine.inOut',
      delay: 1.8,
      transformOrigin: 'top center',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative px-8 md:px-16 pt-32 pb-24 text-center overflow-hidden">

      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-175 h-105 bg-blaze-soft/5.5 dark:bg-blaze-soft/9 rounded-full blur-[130px]" />
      </div>

      {/* Top-left dot grid */}
      <div className="pointer-events-none absolute top-28 left-8 md:left-16 flex flex-col gap-1.5" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-1.5">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="w-0.75 h-0.75 rounded-full bg-ink/12 dark:bg-white/12" />
            ))}
          </div>
        ))}
      </div>

      {/* Top-right dot grid */}
      <div className="pointer-events-none absolute top-28 right-8 md:right-16 flex flex-col gap-1.5" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-1.5">
            {Array.from({ length: 3 }).map((_, j) => (
              <div key={j} className="w-0.75 h-0.75 rounded-full bg-ink/12 dark:bg-white/12" />
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Overline flanked by decorative lines */}
        <div className="faq-overline group inline-flex items-center gap-3 mb-7">
          <div className="h-px w-10 bg-blaze/20" />
          <span className="font-mono text-[0.7rem] font-bold tracking-[0.3em] uppercase text-blaze">
            <SlideUpLabel text={dict.hero_overline} />
          </span>
          <div className="h-px w-10 bg-blaze/20" />
        </div>

        <h1 className="faq-title font-aktiv-grotesk text-[clamp(2.5rem,8vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.1] text-ink mb-10 pb-2">
          {dict.hero_title}
        </h1>

        <p className="faq-desc font-google text-[clamp(1.125rem,1.5vw,1.25rem)] text-ink/60 max-w-2xl mx-auto leading-relaxed mb-16">
          {dict.hero_desc}
        </p>

        {/* Question count badge */}
        <div className="faq-badge group inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-ink/8 bg-white/40 backdrop-blur-sm shadow-sm hover:border-blaze/30 transition-colors cursor-default">
          <span className="w-1.5 h-1.5 rounded-full bg-blaze shrink-0 animate-pulse" />
          <span className="font-mono text-[0.65rem] font-bold tracking-[0.25em] uppercase text-ink/50 group-hover:text-blaze transition-colors">
            <SlideUpLabel text={`${count} Questions`} />
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="faq-scroll-hint absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center" aria-hidden="true">
        <div className="faq-scroll-line w-px h-8 bg-linear-to-b from-blaze-soft/40 to-transparent" />
      </div>

    </div>
  )
}
