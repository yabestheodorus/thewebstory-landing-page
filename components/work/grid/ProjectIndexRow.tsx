import Link from 'next/link'
import type { Project } from '../projects'
import { SlideUpLabel } from '@/components/ui/SlideUpLabel'

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
      className="group grid grid-cols-[48px_1fr_auto] md:grid-cols-[48px_1fr_160px_100px_60px] items-center py-8 border-b border-ink/8 relative overflow-hidden transition-all duration-500"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Blaze accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blaze origin-bottom transition-transform duration-500 scale-y-0 group-hover:scale-y-100" />

      {/* Subtle bg tint on hover */}
      <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />

      {/* Index number */}
      <span className="label-meta !text-ink/30 relative z-10 group-hover:!text-blaze transition-colors duration-500">
        {project.id}
      </span>

      {/* Title */}
      <div className="relative z-10 pr-4">
        <h3 className="work-index-title font-aktiv-grotesk text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-tight transition-all duration-500 text-ink group-hover:translate-x-2">
          <SlideUpLabel text={project.title} />
        </h3>
        <div className="md:hidden mt-2 flex gap-3">
          <span className="label-meta">{project.category}</span>
          <span className="label-meta opacity-40">{project.year}</span>
        </div>
      </div>

      {/* Category */}
      <span className="hidden md:block label-meta relative z-10 transition-colors duration-500 group-hover:text-ink">
        <SlideUpLabel text={project.category} />
      </span>

      {/* Year */}
      <span className="hidden md:block label-meta relative z-10 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
        {project.year}
      </span>

      {/* Circle arrow */}
      <div className="relative z-10 flex justify-end">
        <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center group-hover:border-blaze group-hover:bg-blaze group-hover:text-white transition-all duration-500">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H5M12 2V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}