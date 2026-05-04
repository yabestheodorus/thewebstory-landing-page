'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'
import { accentText } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectResultsProps {
  project: Project
  dict: Dictionary
}

export function ProjectResults({ project, dict }: ProjectResultsProps) {
  const containerRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const resultRefs = useRef<(HTMLSpanElement | null)[]>([])

  useGSAP(() => {
    if (!project.results) return
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    if (lineRef.current) {
      gsap.from(lineRef.current, {
        scaleX: 0, transformOrigin: 'left', duration: 1.1, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 92%', toggleActions: 'play none none reverse' },
      })
    }
    if (labelRef.current) {
      gsap.from(labelRef.current, {
        x: -18, opacity: 0, duration: 0.7, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    }
    if (bodyRef.current) {
      gsap.from(bodyRef.current, {
        y: 26, opacity: 0, duration: 0.85, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    }

    project.results.forEach((result, i) => {
      const el = resultRefs.current[i]
      if (!el) return
      const numericValue = parseFloat(result.value)

      gsap.from(el.parentElement, {
        y: 28, opacity: 0, duration: 0.85, delay: i * 0.1, ease,
        scrollTrigger: { trigger: gridRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
      })

      if (isNaN(numericValue)) return
      const isDecimal = result.value.includes('.')
      const obj = { val: 0 }
      gsap.to(obj, {
        val: numericValue, duration: 1.9, ease: 'power2.out',
        onUpdate() {
          el.textContent = (isDecimal ? obj.val.toFixed(1) : Math.round(obj.val).toString()) + (result.suffix ?? '')
        },
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      })
    })
  }, { scope: containerRef })

  if (!project.results?.length) return null

  return (
    <section ref={containerRef} aria-labelledby="proj-results-heading" className="border-b border-border px-8 md:px-16 py-24">
      <div ref={lineRef} className="h-px w-full bg-border mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 mb-16">
        <div ref={labelRef} className="flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>04</span>
          <h2 id="proj-results-heading" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">
            {dict.project_detail.sections.results}
          </h2>
        </div>
        <p ref={bodyRef} className="font-google text-[0.8125rem] leading-[1.8] text-muted-warm max-w-md">
          {dict.project_detail.sections.results_desc}
        </p>
      </div>
      <div ref={gridRef} className="flex flex-wrap gap-16 md:gap-24 lg:gap-32">
        {project.results.map((result, i) => (
          <div key={i} className="flex flex-col gap-2.5">
            <span
              ref={el => { resultRefs.current[i] = el }}
              className={`font-aktiv-grotesk text-[clamp(3.5rem,5.5vw+1rem,6rem)] font-bold leading-none tracking-tight tabular-nums ${accentText[project.color]}`}
            >
              {result.value}{result.suffix ?? ''}
            </span>
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm max-w-40 leading-relaxed">
              {result.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}