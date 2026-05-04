'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import type { Project } from '../projects'
import { accentText } from './colorMaps'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

interface ProjectNavigationProps {
  nextProject: Project
  dict: Dictionary
  lang: string
}

export function ProjectNavigation({ nextProject, dict, lang }: ProjectNavigationProps) {
  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    gsap.from('.proj-next-body', {
      y: 24, opacity: 0, duration: 0.9, ease,
      scrollTrigger: { trigger: '.proj-next-body', start: 'top 88%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-next-actions', {
      y: 18, opacity: 0, duration: 0.7, stagger: 0.08, ease,
      scrollTrigger: { trigger: '.proj-next-actions', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
  })

  return (
    <section aria-label="Next project" className="border-t border-border px-8 md:px-16 py-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
      <div className="proj-next-body flex flex-col gap-4 max-w-lg">
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm/55">
          {dict.project_detail.labels.next_project}
        </span>
        <p className={`font-mono text-[0.5rem] tracking-widest uppercase ${accentText[nextProject.color]}`}>{nextProject.category}</p>
        <h2 className="font-aktiv-grotesk text-[clamp(2rem,4vw+1rem,3rem)] font-bold leading-none tracking-tight">{nextProject.title}</h2>
        <p className="font-google text-[0.8125rem] leading-[1.75] text-muted-warm max-w-sm">{nextProject.description}</p>
      </div>
      <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
        <Link
          href={`/${lang}/work/${nextProject.slug}`}
          className="proj-next-actions group flex items-center gap-4 bg-ink text-off font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-8 transition-colors duration-200 hover:bg-blaze active:scale-[0.97]"
        >
          {dict.project_detail.cta.next_cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          href={`/${lang}/work`}
          className="proj-next-actions flex items-center justify-center border border-border text-ink font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-7 transition-colors duration-200 hover:border-ink/30 active:scale-[0.97]"
        >
          {dict.nav.work}
        </Link>
      </div>
    </section>
  )
}