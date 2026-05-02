import Link from 'next/link'
import type { Project } from '../projects'

interface ProjectIndexRowProps {
  project: Project
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function ProjectIndexRow({ project, isHovered, onMouseEnter, onMouseLeave }: ProjectIndexRowProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-row group grid grid-cols-[48px_1fr_auto] md:grid-cols-[48px_1fr_140px_100px_40px] items-center py-7 border-b border-border relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: isHovered ? 'rgba(253,251,250,0.03)' : 'transparent' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="work-row-line hidden" />
      <div className="work-row-content contents">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-stabilo-soft origin-bottom transition-transform duration-300 scale-y-0 group-hover:scale-y-100" />

        <span className="font-mono text-[0.5625rem] tracking-widest text-muted-warm relative z-10">
          {project.id}
        </span>

        <div className="relative z-10 pr-4 overflow-hidden">
          <h3 className="work-index-title font-aktiv-grotesk text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] font-semibold leading-tight transition-colors duration-300 text-ink group-hover:text-white">
            {project.title}
          </h3>
          <p className="md:hidden font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm mt-0.5">
            {project.category} · {project.year}
          </p>
        </div>

        <span className="hidden md:block font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm relative z-10 transition-colors duration-300 group-hover:text-ink/60">
          {project.category}
        </span>

        <span className="hidden md:block font-mono text-[0.5rem] tracking-widest text-muted-warm relative z-10">
          {project.year}
        </span>

        <div className="relative z-10 flex justify-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H5M12 2V9"
              stroke={isHovered ? 'var(--color-stabilo-soft)' : 'rgba(107,107,107,0.6)'}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}