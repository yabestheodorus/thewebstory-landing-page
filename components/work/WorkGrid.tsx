'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { projects } from './projects'
import { FeaturedProjectCard } from './grid/FeaturedProjectCard'
import { ProjectIndexRow } from './grid/ProjectIndexRow'
import { Dictionary } from '@/dictionaries/en'

export default function WorkGrid({ dict }: { dict: Dictionary['work'] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const splits: SplitText[] = []

    gsap.utils.toArray<HTMLElement>('.work-row').forEach((row) => {
      const line = row.querySelector('.work-row-line')
      const content = row.querySelector('.work-row-content')

      gsap.from(line, {
        scaleX: 0, transformOrigin: 'left', duration: 1, ease,
        scrollTrigger: { trigger: row, start: 'top 88%', toggleActions: 'play none none reverse' },
      })
      gsap.from(content, {
        opacity: 0, y: 24, duration: 0.8, ease,
        scrollTrigger: { trigger: row, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })

    gsap.utils.toArray<HTMLElement>('.work-card-featured').forEach((card) => {
      gsap.from(card, {
        clipPath: 'inset(0 0 100% 0)', duration: 1.2, ease,
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
      })
    })

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

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <div ref={containerRef} className="px-8 md:px-16 py-20 flex flex-col gap-24">

      {/* Featured cards */}
      <div>
        <div className="work-row">
          <div className="work-row-line h-px w-full bg-border mb-6" />
          <div className="work-row-content flex items-center justify-between mb-10">
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{dict.grid_featured_overline}</span>
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{featured.length} {dict.grid_projects_suffix}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
        <div className="work-row">
          <div className="work-row-line h-px w-full bg-border mb-6" />
          <div className="work-row-content flex items-center justify-between mb-2">
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{dict.grid_all_overline}</span>
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{rest.length} {dict.grid_projects_suffix}</span>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-[48px_1fr_140px_100px_40px] py-3 border-b border-border">
          <div />
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">{dict.grid_head_project}</span>
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">{dict.grid_head_category}</span>
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">{dict.grid_head_year}</span>
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