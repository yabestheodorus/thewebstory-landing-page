import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../projects'
import { TECH_ICONS } from './techIcons'
import { SlideUpLabel } from '@/components/ui/SlideUpLabel'

interface FeaturedProjectCardProps {
  project: Project
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function FeaturedProjectCard({ project, isHovered, onMouseEnter, onMouseLeave }: FeaturedProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-card-featured group relative overflow-hidden aspect-[4/3] block bg-muted border border-ink/10 transition-all duration-500 hover:border-stabilo/30 rounded-2xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {project.backgroundImage && (
        <Image
          src={project.backgroundImage}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.08]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.1) 100%)',
        }}
      />

      {/* Stabilo accent glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, color-mix(in srgb, var(--color-stabilo), transparent 92%) 0%, transparent 70%)' }}
      />

      {/* Top meta */}
      <div className="absolute top-6 left-8 right-8 flex items-center justify-between z-10">
        <span className="label-meta !text-white/60">{project.category}</span>
        <span className="label-meta !text-white/40">{project.year}</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col gap-4">
        {/* Tech icons on hover */}
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
          {project.techStack?.slice(0, 6).map(tech => {
            const Icon = TECH_ICONS[tech]
            return Icon ? (
              <span key={tech} title={tech} className="text-white/40 hover:text-stabilo transition-colors">
                <Icon size={14} />
              </span>
            ) : null
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-white/10 text-white/50 bg-white/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + circle arrow */}
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-aktiv-grotesk text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none text-white tracking-tight">
            <SlideUpLabel text={project.title} />
          </h2>
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-stabilo group-hover:bg-stabilo group-hover:text-white">
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}