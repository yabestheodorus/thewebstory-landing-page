'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import Link from 'next/link'
import Image from 'next/image'
import { useDevice } from '@/lib/context/DeviceContext'
import type { Project } from '../projects'
import {
  accentText,
  colorBg,
  colorText,
  ornamentGlow,
  ornamentOpacity,
  liveLinkClass,
} from './colorMaps'

function renderHeadline(text: string, highlights: string[], accentClass: string) {
  if (!highlights.length) return text
  const pattern = new RegExp(
    `(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  )
  const parts = text.split(pattern)
  return parts.map((part, i) =>
    highlights.some(h => h.toLowerCase() === part.toLowerCase())
      ? <span key={i} className={accentClass}>{part}</span>
      : part
  )
}

import { Dictionary } from '@/dictionaries/en'

interface ProjectHeroProps {
  project: Project
  dict: Dictionary
  lang: string
}

export function ProjectHero({ project, dict, lang }: ProjectHeroProps) {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const split = new SplitText('.proj-headline', { type: 'lines,words' })
    split.lines.forEach(line => {
      const mask = document.createElement('div')
      mask.style.overflow = 'hidden'
      mask.style.paddingBottom = '0.15em'
      mask.style.marginBottom = '-0.15em'
      line.parentNode?.insertBefore(mask, line)
      mask.appendChild(line)
    })

    const heroTL = gsap.timeline({ defaults: { ease } })
    heroTL
      .from('.proj-breadcrumb', { y: 10, opacity: 0, duration: 0.5 })
      .from('.proj-overline-item', { y: 14, opacity: 0, duration: 0.55, stagger: 0.06 }, '-=0.2')
      .from(split.words, { y: '110%', opacity: 0, duration: 0.95, stagger: 0.035 }, '-=0.3')
      .from('.proj-hero-left', { y: 22, opacity: 0, duration: 0.75 }, '-=0.6')
      .from('.proj-hero-right', { y: 22, opacity: 0, duration: 0.75 }, '-=0.6')

    // Conditionally animate media based on what exists
    if (document.querySelector('.proj-video-showcase')) {
      heroTL.from('.proj-video-showcase', { opacity: 0, scale: 0.98, duration: 1.2 }, '-=0.35')
    } else if (document.querySelector('.proj-screenshot-bar')) {
      heroTL.from('.proj-screenshot-bar', { opacity: 0, y: 24, duration: 0.9 }, '-=0.35')
    } else if (document.querySelector('.proj-preview-bar')) {
      heroTL.from('.proj-preview-bar', { clipPath: 'inset(0 0 100% 0)', duration: 1.2 }, '-=0.35')
    }

    if (project.videoDesktop || project.videoMobile) {
      gsap.from('.proj-video-desktop', {
        y: 40, opacity: 0, duration: 1.2, ease,
        scrollTrigger: { trigger: '.proj-video-showcase', start: 'top 80%', toggleActions: 'play none none reverse' },
      })
      gsap.from('.proj-video-mobile', {
        y: 80, opacity: 0, duration: 1.5, delay: 0.2, ease,
        scrollTrigger: { trigger: '.proj-video-showcase', start: 'top 80%', toggleActions: 'play none none reverse' },
      })
    }
  }, { scope: heroRef })

  return (
    <header ref={heroRef} className="relative border-b border-border px-8 md:px-16 pt-32 pb-0 overflow-hidden">
      {/* Ornaments */}
      <div className="absolute pointer-events-none select-none rounded-full"
        style={{ width: 900, height: 500, top: -80, left: '50%', transform: 'translateX(-50%)', background: ornamentGlow[project.color], filter: 'blur(130px)', opacity: 1 }}
      />
      <svg className="absolute pointer-events-none select-none"
        style={{ top: -100, right: '2%', opacity: ornamentOpacity[project.color] }}
        width="700" height="700" viewBox="0 0 700 700" fill="none">
        <circle cx="350" cy="350" r="349" stroke="var(--color-blaze-soft)" strokeWidth="2" strokeDasharray="6 14" />
        <circle cx="350" cy="350" r="232" stroke="var(--color-ink)" strokeWidth="1.2" strokeDasharray="4 18" />
      </svg>
      <svg className="absolute pointer-events-none select-none"
        style={{ top: '14%', left: '2%', opacity: ornamentOpacity[project.color] * 1.6 }}
        width="20" height="20" viewBox="0 0 20 20" fill="none">
        <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-blaze-soft)" strokeWidth="1.2" />
        <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-blaze-soft)" strokeWidth="1.2" />
      </svg>
      <svg className="absolute pointer-events-none select-none"
        style={{ top: '48%', right: '4%', opacity: ornamentOpacity[project.color] * 1.2 }}
        width="26" height="26" viewBox="0 0 26 26" fill="none">
        <line x1="13" y1="0" x2="13" y2="26" stroke="var(--color-ink)" strokeWidth="1.2" />
        <line x1="0" y1="13" x2="26" y2="13" stroke="var(--color-ink)" strokeWidth="1.2" />
      </svg>
      <svg className="absolute pointer-events-none select-none"
        style={{ bottom: '10%', left: '43%', opacity: ornamentOpacity[project.color] }}
        width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="0" x2="7" y2="14" stroke="var(--color-ink)" strokeWidth="1.2" />
        <line x1="0" y1="7" x2="14" y2="7" stroke="var(--color-ink)" strokeWidth="1.2" />
      </svg>
      <span
        className="absolute pointer-events-none select-none font-aktiv-grotesk font-bold leading-none tracking-[-0.05em] whitespace-nowrap"
        style={{ bottom: '6%', right: '-1%', fontSize: 'clamp(80px, 14vw, 180px)', color: 'var(--color-blaze-soft)', opacity: ornamentOpacity[project.color] * 0.55 }}
        aria-hidden="true"
      >
        {project.title}
      </span>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="proj-breadcrumb mb-10">
        <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
            <Link href={`/${lang}`} itemProp="item" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm hover:text-ink transition-colors duration-200">
              <span itemProp="name">{dict.project_detail.breadcrumb_home}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="font-mono text-[0.5625rem] text-muted-warm/40" aria-hidden="true">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
            <Link href={`/${lang}/work`} itemProp="item" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm hover:text-ink transition-colors duration-200">
              <span itemProp="name">{dict.project_detail.breadcrumb_work}</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li className="font-mono text-[0.5625rem] text-muted-warm/40" aria-hidden="true">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
            <span itemProp="name" className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/50">{project.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* Overline */}
      <div className="flex flex-wrap items-center gap-3 mb-10 overflow-hidden">
        <span className={`proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase ${accentText[project.color]}`}>{project.category}</span>
        <span className="proj-overline-item w-6 h-px bg-ink/15 inline-block" aria-hidden="true" />
        <span className="proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">{project.client}</span>
        <span className="proj-overline-item w-6 h-px bg-ink/15 inline-block" aria-hidden="true" />
        <span className="proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">{project.year}</span>
      </div>

      {/* Headline */}
      <h1 className="proj-headline font-aktiv-grotesk text-[clamp(2.875rem,6vw+1rem,6.125rem)] font-bold leading-tight tracking-[-0.03em] mb-16 max-w-5xl">
        {project.headlineHighlights?.length
          ? renderHeadline(project.headline ?? project.title, project.headlineHighlights, accentText[project.color])
          : (project.headline ?? project.title)
        }
      </h1>

      {/* Two-column meta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-border">
        <div className="proj-hero-left flex flex-col gap-6">
          <p className="font-google text-sm leading-[1.9] text-muted-warm max-w-md">{project.description}</p>
          <div className="flex flex-wrap gap-2" aria-label="Project tags">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-[0.5rem] tracking-widest uppercase px-3 py-1.5 border border-border text-ink/50">{tag}</span>
            ))}
          </div>
        </div>
        <div className="proj-hero-right flex flex-col gap-5 md:pl-12 md:border-l md:border-border">
          {[
            { label: dict.project_detail.labels.client, value: project.client },
            { label: dict.project_detail.labels.scope, value: project.services?.join(' · ') ?? project.category },
            { label: dict.project_detail.labels.timeline, value: project.timeline ?? '—' },
            { label: dict.project_detail.labels.year, value: project.year },
          ].map(item => (
            <div key={item.label} className="flex flex-col gap-0.5">
              <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/60">{item.label}</span>
              <span className="font-google text-[0.8125rem] text-ink leading-snug">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}
      {project.videoDesktop || project.videoMobile ? (
        <div className="proj-video-showcase w-full bg-[#0a0a0b] border-y border-border/50 relative overflow-hidden py-16 md:py-28 px-8 flex flex-col items-center">
          {project.backgroundImage && (
            <div className="proj-video-bg absolute -inset-x-8 -top-16 -bottom-16 z-0 select-none pointer-events-none will-change-transform">
              <Image src={project.backgroundImage} alt="" fill className="object-cover opacity-50" />
            </div>
          )}
          <div className="absolute inset-0 bg-[#0a0a0b]/40 z-0 pointer-events-none" />
          <div className="max-w-7xl w-full mx-auto relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {project.videoDesktop && (
              <div className="proj-video-desktop relative w-full md:w-4/5 max-w-5xl aspect-video bg-[#050505] rounded-4xl md:rounded-[3rem] border-10 md:border-18 border-[#1a1a1c] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.7)] z-10 will-change-transform">
                <video src={project.videoDesktop} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none" />
              </div>
            )}
            {project.videoMobile && (
              <div className="proj-video-mobile relative w-45 md:w-60 aspect-9/16 bg-[#050505] rounded-[2.5rem] border-8 border-[#1a1a1c] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] md:absolute md:right-8 md:-bottom-16 z-20 will-change-transform hover:scale-105 active:scale-95 transition-transform duration-500 group">
                <video src={project.videoMobile} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            )}
          </div>
          <div className="mt-16 flex justify-center relative z-30">
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[0.625rem] tracking-[0.2em] uppercase py-4 px-8 bg-white text-black hover:bg-blaze hover:text-black transition-all duration-300 active:scale-95 shadow-xl">
              {dict.project_detail.cta.launch}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      ) : project.backgroundImage ? (
        <div className="proj-screenshot-bar w-full aspect-9/16 md:aspect-video relative overflow-hidden">
          <img src={project.backgroundImage} alt={`${project.title} website screenshot`} className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-ink/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 gap-5 z-10 text-center px-8">
            <p className="font-mono text-[0.5rem] tracking-[0.32em] uppercase text-off/50">{dict.project_detail.labels.live_project} · {project.year}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} — live website`}
              className="inline-flex items-center gap-3 font-mono text-[0.5625rem] tracking-widest uppercase py-3 px-6 border border-off/25 text-off hover:bg-off/10 transition-all duration-200 active:scale-[0.97]">
              {dict.project_detail.cta.visit} {project.title}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      ) : (
        <div className={`proj-preview-bar w-full aspect-9/16 md:aspect-video ${colorBg[project.color]} flex items-center justify-center relative overflow-hidden`}>
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
            <p className={`font-mono text-[0.5rem] tracking-[0.32em] uppercase ${project.color === 'ink' ? 'text-off/35' : 'text-ink/25'}`}>Live project · {project.year}</p>
            <p className={`font-aktiv-grotesk text-[clamp(2.375rem,5vw+1rem,5rem)] font-bold leading-none ${colorText[project.color]}`}>{project.title}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} — live website`}
              className={`inline-flex items-center gap-3 font-mono text-[0.5625rem] tracking-widest uppercase py-3 px-6 border transition-all duration-200 active:scale-[0.97] ${liveLinkClass[project.color]}`}>
              {dict.project_detail.cta.visit} {project.title}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}