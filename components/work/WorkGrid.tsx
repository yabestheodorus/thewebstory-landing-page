'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from './projects'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiSanity,
  SiJson,
  SiWhatsapp,
  SiGoogle,
  SiGsap,
  SiVite,
  SiReact,
  SiFramer,
} from 'react-icons/si'

const TECH_ICONS: Record<string, React.ElementType> = {
  'Next.js': SiNextdotjs,
  'Typescript': SiTypescript,
  'GSAP': SiGsap,
  'ScrollTrigger': SiGsap,
  'Tailwind CSS': SiTailwindcss,
  'Vercel': SiVercel,
  'Sanity CMS': SiSanity,
  'JSON-LD': SiJson,
  'WhatsApp API': SiWhatsapp,
  'SEO': SiGoogle,
  'Vite': SiVite,
  'React': SiReact,
  'Framer Motion': SiFramer,
}

export default function WorkGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const splits: SplitText[] = []

    gsap.utils.toArray<HTMLElement>('.work-row').forEach((row) => {
      const line = row.querySelector('.work-row-line')
      const content = row.querySelector('.work-row-content')

      gsap.from(line, {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1,
        ease,
        scrollTrigger: {
          trigger: row,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from(content, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease,
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    gsap.utils.toArray<HTMLElement>('.work-card-featured').forEach((card) => {
      gsap.from(card, {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    gsap.utils.toArray<HTMLElement>('.work-index-title').forEach((el) => {
      const split = new SplitText(el, { type: 'words' })
      splits.push(split)
      gsap.from(split.words, {
        y: '100%',
        opacity: 0,
        duration: 0.7,
        stagger: 0.03,
        ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => splits.forEach(s => s.revert())
  }, { scope: containerRef })

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <div ref={containerRef} className="px-8 md:px-16 py-20 flex flex-col gap-24">

      {/* ── Featured cards ────────────────────────────────────────── */}
      <div>
        <div className="work-row">
          <div className="work-row-line h-px w-full bg-border mb-6" />
          <div className="work-row-content flex items-center justify-between mb-10">
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">Featured</span>
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{featured.length} projects</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {featured.map((project) => {
            const isHovered = hoveredId === project.id
            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="work-card-featured group relative overflow-hidden aspect-[4/3] block bg-sand border border-ink/15 hover:border-stabilo/35 transition-colors duration-300"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Screenshot background */}
                {project.backgroundImage && (
                  <Image
                    src={project.backgroundImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}

                {/* Gradient scrim — always dark at bottom */}
                <div className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.22) 100%)',
                  }}
                />

                {/* Stabilo tint on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,92,255,0.12) 0%, transparent 70%)' }}
                />

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stabilo origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

                {/* Top meta */}
                <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
                  <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/50">
                    {project.category}
                  </span>
                  <span className="font-mono text-[0.5rem] tracking-[0.22em] text-ink/40">
                    {project.year}
                  </span>
                </div>

                {/* Ghost index number */}
                <span
                  className="absolute right-5 bottom-5 font-aktiv-grotesk font-bold leading-none select-none pointer-events-none transition-all duration-500"
                  style={{
                    fontSize: 'clamp(72px, 10vw, 120px)',
                    color: isHovered ? 'rgba(124,92,255,0.12)' : 'rgba(246,243,238,0.05)',
                    transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                  }}
                >
                  {project.id}
                </span>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3">

                  {/* Tech icons — fade in on hover */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.techStack?.slice(0, 6).map(tech => {
                      const Icon = TECH_ICONS[tech]
                      return Icon ? (
                        <span key={tech} title={tech} className="text-ink/45">
                          <Icon size={13} />
                        </span>
                      ) : null
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[0.4375rem] tracking-widest uppercase px-2 py-0.5 border border-ink/15 text-muted-warm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + arrow */}
                  <div className="flex items-end justify-between gap-4">
                    <h2 className="font-aktiv-grotesk text-[clamp(1.625rem,3vw+0.5rem,2.25rem)] font-semibold leading-none text-ink transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h2>
                    <div className="w-9 h-9 border border-ink/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-stabilo/50 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-stabilo/10">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="var(--color-ink)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Description — fade in on hover */}
                  <p className="font-googlea text-[0.8125rem] leading-[1.75] text-ink/55 max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
                    {project.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── Index rows ─────────────────────────────────────────────── */}
      <div>
        <div className="work-row">
          <div className="work-row-line h-px w-full bg-border mb-6" />
          <div className="work-row-content flex items-center justify-between mb-2">
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">All projects</span>
            <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{rest.length} projects</span>
          </div>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-[48px_1fr_140px_100px_40px] py-3 border-b border-border">
          <div />
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">Project</span>
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">Category</span>
          <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-muted-warm">Year</span>
          <div />
        </div>

        {rest.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="work-row group grid grid-cols-[48px_1fr_auto] md:grid-cols-[48px_1fr_140px_100px_40px] items-center py-7 border-b border-border relative overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: hoveredId === project.id ? 'rgba(253,251,250,0.03)' : 'transparent' }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="work-row-line hidden" />
            <div className="work-row-content contents">
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-stabilo origin-bottom transition-transform duration-300 scale-y-0 group-hover:scale-y-100" />

              {/* Index */}
              <span className="font-mono text-[0.5625rem] tracking-widest text-muted-warm relative z-10">
                {project.id}
              </span>

              {/* Title */}
              <div className="relative z-10 pr-4 overflow-hidden">
                <h3 className="work-index-title font-aktiv-grotesk text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] font-semibold leading-tight transition-colors duration-300 text-ink group-hover:text-white">
                  {project.title}
                </h3>
                <p className="md:hidden font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm mt-0.5">
                  {project.category} · {project.year}
                </p>
              </div>

              {/* Category */}
              <span className="hidden md:block font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm relative z-10 transition-colors duration-300 group-hover:text-ink/60">
                {project.category}
              </span>

              {/* Year */}
              <span className="hidden md:block font-mono text-[0.5rem] tracking-widest text-muted-warm relative z-10">
                {project.year}
              </span>

              {/* Arrow */}
              <div
                className="relative z-10 flex justify-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12L12 2M12 2H5M12 2V9"
                    stroke={hoveredId === project.id ? 'var(--color-stabilo)' : 'rgba(107,107,107,0.6)'}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
