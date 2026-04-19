'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Dictionary } from '@/dictionaries/en'

export default function WorkHero({ dict }: { dict: Dictionary['work'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    // Split headline
    const split = new SplitText('.work-hero-heading', { type: 'lines,words' })
    // Wrap lines for clip masking
    split.lines.forEach(line => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    const tl = gsap.timeline({ defaults: { ease } })

    tl.from('.work-hero-label span', {
      y: 12,
      opacity: 0,
      duration: 0.6,
      stagger: 0.06,
    })
      .from(split.words, {
        y: '110%',
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
      }, '-=0.3')
      .from('.work-hero-meta', {
        y: 16,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
      }, '-=0.5')
      .from('.work-hero-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
      }, '-=0.8')
      .from('.work-hero-count', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.9')

    return () => {
      split.revert()
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative border-b border-border px-8 md:px-16 pt-36 pb-20"
    >
      {/* Label row */}
      <div className="work-hero-label flex items-center gap-3 mb-10 overflow-hidden">
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">{dict.hero_overline}</span>
        <span className="w-6 h-px bg-black/10 inline-block" />
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">{dict.hero_year_range}</span>
      </div>

      {/* Headline */}
      <h1 className="work-hero-heading font-aktiv-grotesk text-[clamp(3.25rem,6vw+1rem,6.75rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-16 max-w-5xl">
        {dict.hero_headline_1}
        <br />
        <em className="italic font-light text-ink/30">{dict.hero_headline_2}</em>
        <br />
        {dict.hero_headline_3}
      </h1>

      {/* Bottom strip */}
      <div className="work-hero-line h-px w-full bg-border mb-8" />
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div className="flex gap-10">
          <div className="work-hero-meta flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/30">{dict.stat_projects_label}</span>
            <span className="font-aktiv-grotesk text-[1.75rem] font-semibold leading-none">12+</span>
          </div>
          <div className="work-hero-meta flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/30">{dict.stat_industries_label}</span>
            <span className="font-aktiv-grotesk text-[1.75rem] font-semibold leading-none">8</span>
          </div>
          <div className="work-hero-meta flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/30">{dict.stat_launch_label}</span>
            <span className="font-aktiv-grotesk text-[1.75rem] font-semibold leading-none">{dict.stat_launch_val}</span>
          </div>
        </div>

        <p className="work-hero-meta font-googlea text-[0.8125rem] leading-[1.8] text-muted-warm max-w-xs">
          {dict.hero_desc}
        </p>
      </div>

      {/* Scroll cue */}
      <div className="work-hero-count absolute bottom-8 right-16 hidden md:flex items-center gap-3 text-ink/20">
        <span className="font-mono text-[0.5rem] tracking-[0.24em] uppercase">{dict.scroll_cue}</span>
        <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
          <path d="M1 6h26M20 1l6 5-6 5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
