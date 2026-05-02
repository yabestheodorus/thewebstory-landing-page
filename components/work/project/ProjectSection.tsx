'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ProjectSectionProps {
  number: string
  title: string
  headingId: string
  content: string
  accentClass: string
  hasBg?: boolean
}

export function ProjectSection({ number, title, headingId, content, accentClass, hasBg }: ProjectSectionProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    gsap.from('.proj-sec-line', {
      scaleX: 0, transformOrigin: 'left', duration: 1.1, ease,
      scrollTrigger: { trigger: '.proj-sec-line', start: 'top 88%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-label', {
      x: -18, opacity: 0, duration: 0.7, ease,
      scrollTrigger: { trigger: '.proj-sec-label', start: 'top 85%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-body', {
      y: 26, opacity: 0, duration: 0.85, stagger: 0.07, ease,
      scrollTrigger: { trigger: '.proj-sec-body', start: 'top 82%', toggleActions: 'play none none reverse' },
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      aria-labelledby={headingId}
      className={`proj-section border-b border-border px-8 md:px-16 py-20${hasBg ? ' bg-sand/30' : ''}`}
    >
      <div className="proj-sec-line h-px w-full bg-border mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
        <div className="proj-sec-label flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentClass}`}>{number}</span>
          <h2 id={headingId} className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">{title}</h2>
        </div>
        <p className="proj-sec-body font-google text-[clamp(1rem,1.2vw+0.5rem,1.1875rem)] leading-[1.85] text-ink max-w-2xl">
          {content}
        </p>
      </div>
    </section>
  )
}