'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectOverviewProps {
  project: Project
  dict: Dictionary
}

export function ProjectOverview({ project, dict }: ProjectOverviewProps) {
  const containerRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!itemsRef.current) return
    gsap.from(itemsRef.current.children, {
      y: 16, opacity: 0, duration: 0.7, stagger: 0.07,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      scrollTrigger: { trigger: containerRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} aria-label="Project overview" className="border-b border-border px-8 md:px-16 py-10">
      <div ref={itemsRef} className="flex flex-wrap gap-y-8 md:flex-nowrap md:divide-x md:divide-border">
        {[
          { label: dict.project_detail.labels.client, value: project.client },
          { label: dict.works.labels.category, value: project.category },
          { label: dict.works.labels.service, value: (project.services ?? project.tags).join(', ') },
          { label: dict.project_detail.labels.timeline, value: project.timeline ?? '—' },
          { label: dict.project_detail.labels.year, value: project.year },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-1.5 w-1/2 md:w-auto md:px-10 first:pl-0 last:pr-0">
            <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/55">{item.label}</span>
            <span className="font-google text-[0.8125rem] text-ink leading-snug">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}