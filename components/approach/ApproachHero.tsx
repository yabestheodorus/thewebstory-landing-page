'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'

interface Step {
  id: string
  title: string
  desc: string
  items: string[]
}

interface ApproachHeroProps {
  dict: {
    hero_overline: string
    hero_title: string
    hero_desc: string
    steps: Step[]
  }
}

export default function ApproachHero({ dict }: ApproachHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024
    const tl = gsap.timeline({ defaults: { ease } })

    if (isDesktop) {
      const split = new SplitText('.ah-headline', { type: 'lines,words' })
      split.lines.forEach(line => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      tl.from('.ah-label span', { y: 12, opacity: 0, duration: 0.6, stagger: 0.06 })
        .from(split.words, { y: '110%', opacity: 0, duration: 0.9, stagger: 0.04 }, '-=0.3')
        .from('.ah-body', { y: 16, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.ah-line', { scaleX: 0, transformOrigin: 'left', duration: 1.0 }, '-=0.6')
        .from('.ah-step', { y: 18, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.7')

      return () => split.revert()
    } else {
      tl.from('.ah-label', { y: 10, opacity: 0, duration: 0.45 })
        .from('.ah-headline', { y: 24, opacity: 0, duration: 0.55 }, '-=0.2')
        .from('.ah-body', { y: 16, opacity: 0, duration: 0.5 }, '-=0.25')
        .from('.ah-line', { scaleX: 0, transformOrigin: 'left', duration: 0.7 }, '-=0.3')
        .from('.ah-step', { y: 14, opacity: 0, duration: 0.45, stagger: 0.06 }, '-=0.5')
    }
  }, { scope: containerRef })

  const titleWords = dict.hero_title.split(' ')
  const lastWord = titleWords.slice(-1)[0]
  const restWords = titleWords.slice(0, -1).join(' ')

  return (
    <section
      ref={containerRef}
      className="relative bg-off border-b border-border px-6 md:px-16 pt-32 md:pt-36 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Label row */}
      <div className="ah-label flex items-center gap-3 mb-10 overflow-hidden">
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">
          {dict.hero_overline}
        </span>
        <span className="w-6 h-px bg-ink/10 inline-block" />
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">
          04 / 06
        </span>
        <span className="w-6 h-px bg-ink/10 hidden md:inline-block" />
        <span className="hidden md:inline font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">
          Methodology
        </span>
      </div>

      {/* Headline */}
      <h1 className="ah-headline font-plus-jakarta text-display font-bold leading-[0.98] tracking-[-0.03em] mb-12 md:mb-16 max-w-5xl text-ink">
        {restWords}{' '}
        <em className="italic font-light text-muted-warm">{lastWord}</em>
      </h1>

      {/* Subhead + meta strip */}
      <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end mb-12 md:mb-16">
        <p className="ah-body font-google text-[0.9375rem] md:text-base leading-[1.8] text-muted-warm max-w-xl">
          {dict.hero_desc}
        </p>
        <div className="ah-body flex gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/60">
              Phases
            </span>
            <span className="font-plus-jakarta text-[1.75rem] font-semibold leading-none">
              {dict.steps.length.toString().padStart(2, '0')}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/60">
              Avg. timeline
            </span>
            <span className="font-plus-jakarta text-[1.75rem] font-semibold leading-none">
              4–8 wks
            </span>
          </div>
          <div className="hidden md:flex flex-col gap-1">
            <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-ink/60">
              Mode
            </span>
            <span className="font-plus-jakarta text-[1.75rem] font-semibold leading-none">
              Async-first
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="ah-line h-px w-full bg-border mb-8" />

      {/* Step preview rail */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {dict.steps?.map((step, i) => (
          <div
            key={step.id}
            className="ah-step group flex flex-col gap-2 cursor-default"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-stabilo">
                /{step.id}
              </span>
              <span className="h-px flex-1 bg-ink/10 group-hover:bg-stabilo/60 transition-colors duration-500" />
            </div>
            <span className="font-plus-jakarta text-[0.9375rem] md:text-base font-semibold tracking-[-0.01em] text-ink leading-snug">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
