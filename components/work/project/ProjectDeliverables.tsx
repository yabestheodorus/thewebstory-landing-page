'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'
import { accentText } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectDeliverablesProps {
  project: Project
  dict: Dictionary
}

export function ProjectDeliverables({ project, dict }: ProjectDeliverablesProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    gsap.from('.proj-sec-line', {
      scaleX: 0, transformOrigin: 'left', duration: 1.1, ease,
      scrollTrigger: { trigger: '.proj-deliverables-grid', start: 'top 92%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-label', {
      x: -18, opacity: 0, duration: 0.7, ease,
      scrollTrigger: { trigger: '.proj-deliverables-grid', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-body', {
      y: 26, opacity: 0, duration: 0.85, ease,
      scrollTrigger: { trigger: '.proj-deliverables-grid', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-deliverable', {
      clipPath: 'inset(0 0 100% 0)', duration: 0.85, stagger: 0.07, ease,
      scrollTrigger: { trigger: '.proj-deliverables-grid', start: 'top 88%', toggleActions: 'play none none reverse' },
    })
  }, { scope: containerRef })

  if (!project.deliverables?.length) return null

  return (
    <section ref={containerRef} aria-labelledby="proj-deliverables-heading" className="proj-section border-b border-border px-8 md:px-16 py-20">
      <div className="proj-sec-line h-px w-full bg-border mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 mb-14">
        <div className="proj-sec-label flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>03</span>
          <h2 id="proj-deliverables-heading" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">
            {dict.project_detail.sections.deliverables}
          </h2>
        </div>
        <p className="proj-sec-body font-googlea text-[0.8125rem] leading-[1.8] text-muted-warm max-w-md">
          {dict.project_detail.sections.deliverables_desc}
        </p>
      </div>
      <div className="proj-deliverables-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {project.deliverables.map((item, i) => (
          <article key={i} className="proj-deliverable bg-off p-8 flex flex-col gap-5 hover:bg-sand/50 transition-colors duration-300 group">
            <span className={`font-mono text-[0.5rem] tracking-[0.2em] uppercase ${accentText[project.color]}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-aktiv-grotesk text-lg font-semibold leading-tight group-hover:text-ink transition-colors duration-200">{item.title}</h3>
              <p className="font-googlea text-xs leading-[1.85] text-muted-warm">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}