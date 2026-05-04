'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Dictionary } from '@/dictionaries/en'

export default function WorkHero({ dict }: { dict: Dictionary['work'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'expo.out'

    // Split headline for word-by-word reveal
    const split = new SplitText('.wh-heading', { type: 'lines,words' })
    split.lines.forEach(line => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      wrapper.style.paddingBottom = '0.15em'
      wrapper.style.marginBottom = '-0.15em'
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    const tl = gsap.timeline({ defaults: { ease, duration: 1.2 } })

    tl.from('.wh-overline', { y: 20, opacity: 0, duration: 0.8 })
      .from(split.words, {
        y: '110%',
        opacity: 0,
        duration: 1,
        stagger: 0.04,
      }, '-=0.6')
      .from('.wh-rule', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.4,
        ease: 'power4.inOut',
      }, '-=0.7')
      .from('.wh-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
      }, '-=0.9')

    return () => { split.revert() }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative bg-muted overflow-hidden px-8 md:px-16 pt-36 md:pt-44 pb-20"
    >
      {/* Atmospheric glow — bottom-left, matching homepage radial gradient style */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 0% 100%, rgba(244,162,97,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Overline */}
      <div className="wh-overline relative z-10 flex items-center gap-3 mb-12">
        <span className="label-eyebrow">{dict.hero_overline}</span>
        <span className="w-8 h-px bg-ink/15" />
        <span className="label-meta">{dict.hero_year_range}</span>
      </div>

      {/* Headline — simple block layout, no flex-with-dividers that breaks on wrap */}
      <h1 className="wh-heading relative z-10 font-aktiv-grotesk font-bold leading-[0.92] tracking-[-0.04em] text-[clamp(3rem,7vw,7rem)] mb-16 max-w-5xl">
        {dict.hero_headline_1}{' '}
        <em className="font-playfair italic font-light text-blaze">{dict.hero_headline_2}</em>{' '}
        {dict.hero_headline_3}
      </h1>

      {/* Divider */}
      <div className="wh-rule h-px w-full bg-ink/10 mb-10 origin-left" />

      {/* Bottom meta row */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        {/* Stats */}
        <div className="flex gap-10 md:gap-14">
          <div className="wh-meta flex flex-col gap-1.5">
            <span className="font-aktiv-grotesk text-[1.75rem] font-bold leading-none text-ink">{dict.stat_projects_val}</span>
            <span className="label-meta">{dict.stat_projects_label}</span>
          </div>
          <div className="wh-meta flex flex-col gap-1.5">
            <span className="font-aktiv-grotesk text-[1.75rem] font-bold leading-none text-ink">{dict.stat_industries_val}</span>
            <span className="label-meta">{dict.stat_industries_label}</span>
          </div>
          <div className="wh-meta flex flex-col gap-1.5">
            <span className="font-aktiv-grotesk text-[1.75rem] font-bold leading-none text-ink">{dict.stat_launch_val}</span>
            <span className="label-meta">{dict.stat_launch_label}</span>
          </div>
        </div>

        {/* Description */}
        <p className="wh-meta font-google text-sm leading-[1.8] text-ink/50 max-w-xs">
          {dict.hero_desc}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="wh-meta absolute bottom-8 right-8 md:right-16 hidden md:flex items-center gap-3 text-ink/40">
        <span className="label-meta">{dict.scroll_cue}</span>
        <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
          <path d="M1 6h26M20 1l6 5-6 5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
