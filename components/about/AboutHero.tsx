'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { Dictionary } from '@/dictionaries/en'

export function AboutHero({ dict }: { dict: Dictionary['about']['hero'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const split = new SplitText('.a-headline', { type: 'lines,words' })

    split.lines.forEach(line => {
      const mask = document.createElement('div')
      mask.style.overflow = 'hidden'
      mask.style.paddingBottom = '0.15em'
      mask.style.marginBottom = '-0.15em'
      line.parentNode?.insertBefore(mask, line)
      mask.appendChild(line)
    })

    const tl = gsap.timeline({ defaults: { ease } })

    tl.from('.a-overline', { y: 20, opacity: 0, duration: 0.8 })
      .from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 1.1,
        stagger: 0.04,
        ease: 'power4.out'
      }, '-=0.5')
      .from('.a-sub', { opacity: 0, y: 15, duration: 0.8 }, '-=0.6')
      .from('.a-hero-bg', { scale: 1.1, opacity: 0, duration: 1.8 }, 0)

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-16 pt-32 pb-20 overflow-hidden">
      {/* Background Ornament */}
      <div className="a-hero-bg absolute inset-0 -z-10 bg-secondary dark:bg-zinc-950">
        <div
          className="absolute inset-x-0 top-0 h-[600px] opacity-10 blur-[150px]"
          style={{ background: 'var(--color-stabilo)' }}
        />
      </div>

      <div className="max-w-6xl">
        <div className="a-overline flex items-center gap-3 mb-8">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">{dict.overline}</span>
          <span className="w-8 h-px bg-ink/15" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-muted-warm">{dict.est}</span>
        </div>

        <h1 className="a-headline font-plus-jakarta text-display font-bold leading-[0.95] tracking-[-0.04em] text-ink mb-12">
          {dict.title_part1} <br />
          <span className="text-ink/60">{dict.title_part2}</span>
        </h1>

        <div className="a-sub grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-end">
          <div className="hidden md:block">
            <div className="w-16 h-px bg-stabilo mb-6" />
            <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-muted-warm leading-relaxed whitespace-pre-line">
              {dict.location}
            </p>
          </div>
          <p className="font-google text-[clamp(1.125rem,1.5vw,1.375rem)] leading-[1.65] text-ink/80 max-w-2xl">
            {dict.description}
          </p>
        </div>
      </div>
    </section>
  )
}
