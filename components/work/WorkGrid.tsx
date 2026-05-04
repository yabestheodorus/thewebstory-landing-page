'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { getProjects } from './projects'
import { FeaturedProjectCard } from './grid/FeaturedProjectCard'
import { ProjectIndexRow } from './grid/ProjectIndexRow'
import { Dictionary } from '@/dictionaries/en'

export default function WorkGrid({ dict, lang }: { dict: Dictionary['work'], lang: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const splits: SplitText[] = []

    // Featured card reveal
    gsap.utils.toArray<HTMLElement>('.work-card-featured').forEach((card) => {
      gsap.from(card, {
        clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease,
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })

    // Section header reveals
    gsap.utils.toArray<HTMLElement>('.wg-section-header').forEach((el) => {
      const line = el.querySelector('.wg-line')
      const content = el.querySelector('.wg-content')

      if (line) {
        gsap.from(line, {
          scaleX: 0, transformOrigin: 'left', duration: 1, ease,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
        })
      }
      if (content) {
        gsap.from(content, {
          opacity: 0, y: 16, duration: 0.8, ease,
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        })
      }
    })

    // Index row title reveals
    gsap.utils.toArray<HTMLElement>('.work-index-title').forEach((el) => {
      const split = new SplitText(el, { type: 'words' })
      splits.push(split)
      gsap.from(split.words, {
        y: '100%', opacity: 0, duration: 0.7, stagger: 0.03, ease,
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    })

    return () => splits.forEach(s => s.revert())
  }, { scope: containerRef })

  const projects = getProjects(lang)
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <div ref={containerRef} className="bg-secondary px-6 md:px-12 lg:px-16 py-24 flex flex-col gap-32">

      {/* Featured cards */}
      <div>
        <div className="wg-section-header mb-12">
          <div className="wg-line h-px w-full bg-ink/10 mb-8" />
          <div className="wg-content flex items-center justify-between">
            <span className="label-eyebrow">{dict.grid_featured_overline}</span>
            <span className="label-meta">{featured.length} {dict.grid_projects_suffix}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>

      {/* Index rows */}
      <div>
        <div className="wg-section-header mb-4">
          <div className="wg-line h-px w-full bg-ink/10 mb-8" />
          <div className="wg-content flex items-center justify-between">
            <span className="label-eyebrow">{dict.grid_all_overline}</span>
            <span className="label-meta">{rest.length} {dict.grid_projects_suffix}</span>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-[48px_1fr_160px_100px_60px] py-4 border-b border-ink/10 mb-2">
          <div />
          <span className="label-meta">{dict.grid_head_project}</span>
          <span className="label-meta">{dict.grid_head_category}</span>
          <span className="label-meta">{dict.grid_head_year}</span>
          <div />
        </div>

        {rest.map((project) => (
          <ProjectIndexRow
            key={project.id}
            project={project}
            isHovered={hoveredId === project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

    </div>
  )
}