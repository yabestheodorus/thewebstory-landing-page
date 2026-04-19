'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Project } from '../projects'
import { accentText, ornamentGlow } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectTestimonialProps {
  project: Project
  dict: Dictionary
}

export function ProjectTestimonial({ project, dict }: ProjectTestimonialProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    gsap.from('.proj-quote-text', {
      y: 26, opacity: 0, duration: 1.1, ease,
      scrollTrigger: { trigger: '.proj-quote-text', start: 'top 85%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-quote-attr', {
      y: 14, opacity: 0, duration: 0.7, ease,
      scrollTrigger: { trigger: '.proj-quote-attr', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
  }, { scope: containerRef })

  if (!project.testimonial) return null

  return (
    <section ref={containerRef} aria-label={dict.project_detail.labels.testimonial} className="border-b border-border px-8 md:px-16 py-28 bg-sand/40 relative overflow-hidden">
      <div className="absolute pointer-events-none select-none rounded-full"
        style={{ width: 700, height: 400, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: ornamentGlow[project.color], filter: 'blur(140px)' }}
      />
      <div className="max-w-3xl mx-auto relative">
        <p className={`font-aktiv-grotesk text-[5rem] leading-none mb-4 select-none ${accentText[project.color]} opacity-25`} aria-hidden="true">"</p>
        <blockquote>
          <p className="proj-quote-text font-aktiv-grotesk text-[clamp(1.375rem,3vw+0.5rem,2.25rem)] font-light leading-[1.35] tracking-[-0.01em] text-ink mb-10">
            {project.testimonial.quote}
          </p>
          <footer className="proj-quote-attr flex items-center gap-4">
            <span className={`w-8 h-px ${accentText[project.color].replace('text-', 'bg-')} opacity-40`} />
            <cite className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm not-italic">
              {project.testimonial.author}
              <span className="mx-2 opacity-40">·</span>
              {project.testimonial.role}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}