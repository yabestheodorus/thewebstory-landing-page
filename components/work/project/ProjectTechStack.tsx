'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'
import { accentText, TECH_ICONS } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

interface ProjectTechStackProps {
  project: Project
}

export function ProjectTechStack({ project }: ProjectTechStackProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    gsap.from('.proj-sec-line', {
      scaleX: 0, transformOrigin: 'left', duration: 1.1, ease,
      scrollTrigger: { trigger: '.proj-tags', start: 'top 92%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-label', {
      x: -18, opacity: 0, duration: 0.7, ease,
      scrollTrigger: { trigger: '.proj-tags', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-tag', {
      scale: 0.94, opacity: 0, duration: 0.5, stagger: 0.04, ease,
      scrollTrigger: { trigger: '.proj-tags', start: 'top bottom', toggleActions: 'play none none reverse' },
    })
  }, { scope: containerRef })

  if (!project.techStack?.length) return null

  return (
    <section ref={containerRef} aria-labelledby="proj-tech-heading" className="proj-section border-b border-border px-8 md:px-16 py-16">
      <div className="proj-sec-line h-px w-full bg-border mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
        <div className="proj-sec-label flex flex-col gap-3 pt-1">
          <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>05</span>
          <h2 id="proj-tech-heading" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45">Technology</h2>
        </div>
        <div className="proj-tags flex flex-wrap gap-2">
          {project.techStack.map(tech => {
            const Icon = TECH_ICONS[tech]
            return (
              <span key={tech} className="proj-tag group flex items-center gap-2.5 font-mono text-[0.5625rem] tracking-widest uppercase px-4 py-2.5 border border-border text-ink/55 hover:border-ink/30 hover:text-ink transition-all duration-200">
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