import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '../projects'
import { TECH_ICONS } from './techIcons'

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
      className="work-card-featured group relative overflow-hidden aspect-[4/3] block bg-sand border border-ink/15 hover:border-stabilo/35 transition-colors duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {project.backgroundImage && (
        <Image
          src={project.backgroundImage}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}

      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to top, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.55) 45%, rgba(13,13,13,0.22) 100%)',
        }}
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,92,255,0.12) 0%, transparent 70%)' }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-stabilo origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

      <div className="absolute top-5 left-6 right-6 flex items-center justify-between z-10">
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-ink/50">
          {project.category}
        </span>
        <span className="font-mono text-[0.5rem] tracking-[0.22em] text-ink/40">
          {project.year}
        </span>
      </div>

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

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3">
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

        <p className="font-googlea text-[0.8125rem] leading-[1.75] text-ink/55 max-w-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-75">
          {project.description}
        </p>
      </div>
    </Link>
  )
}