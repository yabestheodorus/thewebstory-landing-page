'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText, ScrollTrigger } from '@/lib/gsap'

interface Principle {
  title: string
  desc: string
}

interface ApproachPrinciplesProps {
  title: string
  principles: Principle[]
}

export default function ApproachPrinciples({ title, principles }: ApproachPrinciplesProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

    if (isDesktop) {
      const split = new SplitText('.ap-heading', { type: 'lines,words' })
      split.lines.forEach(line => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.from(split.words, {
        y: '110%',
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.ap-heading', start: 'top 82%' },
      })

      gsap.from('.ap-line', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ap-grid', start: 'top 85%' },
      })

      gsap.from('.ap-card', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: '.ap-grid', start: 'top 80%' },
      })

      return () => {
        split.revert()
        ScrollTrigger.getAll().forEach(t => {
          if (t.trigger && containerRef.current?.contains(t.trigger as Node)) t.kill()
        })
      }
    } else {
      gsap.from('.ap-heading', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ap-heading', start: 'top 85%' },
      })
      gsap.from('.ap-card', {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.ap-grid', start: 'top 85%' },
      })
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative bg-ink text-off px-6 md:px-16 pt-24 md:pt-32 pb-24 md:pb-32 border-t border-white/5 overflow-hidden"
    >
      {/* Subtle ambient glow — single, restrained */}
      <div className="absolute top-1/3 -right-40 w-125 h-125 bg-stabilo/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Overline */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">
            Ethos
          </span>
          <span className="w-6 h-px bg-white/15" />
          <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-off/40">
            What we stand for
          </span>
        </div>

        {/* Heading */}
        <h2 className="ap-heading font-plus-jakarta text-display font-bold leading-[0.98] tracking-[-0.03em] mb-16 md:mb-24 max-w-4xl">
          {title.split(' ').map((word, i, arr) => {
            const accent = i === arr.length - 1
            return (
              <span key={i}>
                {accent ? <em className="italic font-light text-off/40">{word}</em> : word}
                {i < arr.length - 1 ? ' ' : ''}
              </span>
            )
          })}
        </h2>

        {/* Top divider */}
        <div className="ap-line h-px w-full bg-white/10 mb-0" />

        {/* Grid of principles */}
        <div className="ap-grid grid grid-cols-1 md:grid-cols-2">
          {principles?.map((item, i) => {
            const isRightCol = i % 2 === 1
            const isBottomRow = i >= principles.length - 2
            return (
              <div
                key={i}
                className={`ap-card group relative px-0 md:px-10 py-12 md:py-14 border-b border-white/10 ${
                  isBottomRow ? 'md:border-b-0' : ''
                } ${isRightCol ? 'md:border-l md:border-white/10' : ''}`}
              >
                {/* Hover stabilo edge */}
                <span className="absolute left-0 top-0 bottom-0 w-px bg-stabilo origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">
                    / 0{i + 1}
                  </span>
                  <span className="w-8 h-px bg-white/15 group-hover:bg-stabilo/60 transition-colors duration-500" />
                </div>

                <h3 className="font-plus-jakarta text-h2 font-semibold tracking-[-0.02em] leading-[1.05] mb-5 text-off">
                  {item.title}
                </h3>

                <p className="font-google text-[0.9375rem] md:text-base leading-[1.8] text-off/55 max-w-md">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
