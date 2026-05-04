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
  const lineRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleX: 0, transformOrigin: 'left', duration: 1.1, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
      })
    }
    if (labelRef.current) {
      gsap.from(labelRef.current, {
        x: -18, opacity: 0, duration: 0.7, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    }
    if (bodyRef.current) {
      gsap.from(bodyRef.current, {
        y: 26, opacity: 0, duration: 0.85, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
      })
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      aria-labelledby={headingId}
      className={`border-b border-border px-8 md:px-16 py-20${hasBg ? ' bg-sand/30' : ''}`}
    >
      <div ref={lineRef} className="h-px w-full bg-border mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
        <div ref={labelRef} className="flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentClass}`}>{number}</span>
          <h2 id={headingId} className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">{title}</h2>
        </div>
        <p ref={bodyRef} className="font-google text-[clamp(1rem,1.2vw+0.5rem,1.1875rem)] leading-[1.85] text-ink max-w-2xl">
          {content}
        </p>
      </div>
    </section>
  )
}