'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'
import { accentText, TECH_ICONS } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectTechStackProps {
  project: Project
  dict: Dictionary
}

export function ProjectTechStack({ project, dict }: ProjectTechStackProps) {
  const containerRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLDivElement>(null)

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
    // Animate the whole tags container as one block — no stagger
    if (tagsRef.current) {
      gsap.from(tagsRef.current, {
        y: 20, opacity: 0, duration: 0.8, ease,
        scrollTrigger: { trigger: containerRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
      })
    }
  }, { scope: containerRef })

  if (!project.techStack?.length) return null

  return (
    <section ref={containerRef} aria-labelledby="proj-tech-heading" className="border-b border-border px-8 md:px-16 py-16">
      <div ref={lineRef} className="h-px w-full bg-border mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
        <div ref={labelRef} className="flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>05</span>
          <h2 id="proj-tech-heading" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">
            {dict.project_detail.labels.tech_stack}
          </h2>
        </div>
        <div ref={tagsRef} className="flex flex-wrap gap-2">
          {project.techStack.map(tech => {
            const Icon = TECH_ICONS[tech]
            return (
              <span key={tech} className="group flex items-center gap-2.5 font-mono text-[0.5625rem] tracking-widest uppercase px-4 py-2.5 border border-border text-ink/55 hover:border-ink/30 hover:text-ink transition-all duration-200">
                {Icon && <Icon className="text-xs opacity-70 group-hover:opacity-100 transition-opacity" />}
                {tech}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}