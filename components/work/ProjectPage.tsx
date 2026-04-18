'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'
import type { Project } from './projects'
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
  SiFramer
} from 'react-icons/si'
import Image from 'next/image'

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

gsap.registerPlugin(ScrollTrigger, SplitText)

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

// Statically present so Tailwind v4 includes them in the build
const colorBg: Record<Project['color'], string> = {
  sand: 'bg-sand',
  warm: 'bg-warm',
  ink: 'bg-ink',
  stabilo: 'bg-stabilo/10',
}

const colorText: Record<Project['color'], string> = {
  sand: 'text-ink',
  warm: 'text-ink',
  ink: 'text-off',
  stabilo: 'text-ink',
}

const accentText: Record<Project['color'], string> = {
  sand: 'text-stabilo',
  warm: 'text-stabilo',
  ink: 'text-stabilo',
  stabilo: 'text-stabilo',
}

// Glow color per project theme — used for hero + testimonial ornaments
const ornamentGlow: Record<Project['color'], string> = {
  sand: 'rgba(124,92,255,0.18)',
  warm: 'rgba(124,92,255,0.15)',
  ink:  'rgba(124,92,255,0.13)',
  stabilo: 'rgba(124,92,255,0.28)',
}

const ornamentOpacity: Record<Project['color'], number> = {
  sand: 0.28,
  warm: 0.26,
  ink:  0.22,
  stabilo: 0.40,
}



const liveLinkClass: Record<Project['color'], string> = {
  sand: 'border-ink/20 text-ink hover:bg-ink/5',
  warm: 'border-ink/20 text-ink hover:bg-ink/5',
  ink: 'border-off/20 text-off hover:bg-off/10',
  stabilo: 'border-ink/20 text-ink hover:bg-ink/5',
}

export default function ProjectPage({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const resultRefs = useRef<(HTMLSpanElement | null)[]>([])

  const currentIndex = projects.findIndex(p => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    // ─── Hero: SplitText headline with clip-mask per line
    const split = new SplitText('.proj-headline', { type: 'lines,words' })
    split.lines.forEach(line => {
      const mask = document.createElement('div')
      mask.style.overflow = 'hidden'
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
      .from('.proj-preview-bar', { clipPath: 'inset(0 0 100% 0)', duration: 1.2 }, '-=0.35')
      .from('.proj-screenshot-bar', { opacity: 0, y: 24, duration: 0.9 }, '<')

    // ─── Overview strip
    gsap.from('.proj-meta-item', {
      y: 16,
      opacity: 0,
      duration: 0.7,
      stagger: 0.07,
      ease,
      scrollTrigger: {
        trigger: '.proj-overview',
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    })

    // ─── Editorial sections: line + label + body reveals
    gsap.from('.proj-sec-line', {
      scaleX: 0,
      transformOrigin: 'left',
      duration: 1.1,
      ease,
      scrollTrigger: { trigger: '.proj-sec-line', start: 'top 88%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-label', {
      x: -18,
      opacity: 0,
      duration: 0.7,
      ease,
      scrollTrigger: { trigger: '.proj-sec-label', start: 'top 85%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.proj-sec-body', {
      y: 26,
      opacity: 0,
      duration: 0.85,
      stagger: 0.07,
      ease,
      scrollTrigger: { trigger: '.proj-sec-body', start: 'top 82%', toggleActions: 'play none none reverse' },
    })

    // ─── Deliverable cards: staggered clip-path reveal
    gsap.from('.proj-deliverable', {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.85,
      stagger: 0.07,
      ease,
      scrollTrigger: {
        trigger: '.proj-deliverables-grid',
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    })

    // ─── Results: count-up on viewport entry
    if (project.results) {
      project.results.forEach((result, i) => {
        const el = resultRefs.current[i]
        if (!el) return

        const numericValue = parseFloat(result.value)

        gsap.from(el.parentElement, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          delay: i * 0.1,
          ease,
          scrollTrigger: {
            trigger: '.proj-results-grid',
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })

        if (isNaN(numericValue)) return

        const isDecimal = result.value.includes('.')
        const obj = { val: 0 }
        gsap.to(obj, {
          val: numericValue,
          duration: 1.9,
          ease: 'power2.out',
          onUpdate() {
            el.textContent =
              (isDecimal ? obj.val.toFixed(1) : Math.round(obj.val).toString()) +
              (result.suffix ?? '')
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }

    // ─── Technology pills
    gsap.from('.proj-tag', {
      scale: 0.94,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease,
      scrollTrigger: {
        trigger: '.proj-tags',
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
    })

    // ─── Video Showcase
    if (project.videoDesktop || project.videoMobile) {
      gsap.from('.proj-video-desktop', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease,
        scrollTrigger: {
          trigger: '.proj-video-showcase',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
      gsap.from('.proj-video-mobile', {
        y: 80,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease,
        scrollTrigger: {
          trigger: '.proj-video-showcase',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

    }

    // ─── Testimonial
    gsap.from('.proj-quote-text', {
      y: 26,
      opacity: 0,
      duration: 1.1,
      ease,
      scrollTrigger: {
        trigger: '.proj-quote-text',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
    gsap.from('.proj-quote-attr', {
      y: 14,
      opacity: 0,
      duration: 0.7,
      ease,
      scrollTrigger: {
        trigger: '.proj-quote-attr',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })

    // ─── Next project
    gsap.from('.proj-next-body', {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease,
      scrollTrigger: {
        trigger: '.proj-next-body',
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    })
    gsap.from('.proj-next-actions', {
      y: 18,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease,
      scrollTrigger: {
        trigger: '.proj-next-actions',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })

  }, { scope: containerRef })

  return (
    <main ref={containerRef} className="bg-off text-ink min-h-screen relative overflow-x-hidden">

      {/* ══════════════════════════════════════════ HERO */}
      <header className="relative border-b border-border px-8 md:px-16 pt-32 pb-0 overflow-hidden">

        {/* ── Per-project ornaments ───────────────────────────────── */}

        {/* Top glow blob — project-theme tinted */}
        <div className="absolute pointer-events-none select-none rounded-full"
          style={{
            width: 900, height: 500,
            top: -80, left: '50%',
            transform: 'translateX(-50%)',
            background: ornamentGlow[project.color],
            filter: 'blur(130px)',
            opacity: 1,
          }}
        />

        {/* Dashed orbital ring — top-right corner */}
        <svg
          className="absolute pointer-events-none select-none"
          style={{ top: -100, right: '2%', opacity: ornamentOpacity[project.color] }}
          width="700" height="700" viewBox="0 0 700 700" fill="none"
        >
          <circle cx="350" cy="350" r="349" stroke="var(--color-stabilo)" strokeWidth="2" strokeDasharray="6 14" />
          <circle cx="350" cy="350" r="232" stroke="var(--color-ink)" strokeWidth="1.2" strokeDasharray="4 18" />
        </svg>

        {/* Cross marks */}
        <svg className="absolute pointer-events-none select-none"
          style={{ top: '14%', left: '2%', opacity: ornamentOpacity[project.color] * 1.6 }}
          width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-stabilo)" strokeWidth="1.2" />
          <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-stabilo)" strokeWidth="1.2" />
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

        {/* Ghost project title watermark */}
        <span
          className="absolute pointer-events-none select-none font-aktiv-grotesk font-bold leading-none tracking-[-0.05em] whitespace-nowrap"
          style={{
            bottom: '6%', right: '-1%',
            fontSize: 'clamp(80px, 14vw, 180px)',
            color: 'var(--color-stabilo)',
            opacity: ornamentOpacity[project.color] * 0.55,
          }}
          aria-hidden="true"
        >
          {project.title}
        </span>

        {/* Breadcrumb — semantic + schema.org microdata */}
        <nav aria-label="Breadcrumb" className="proj-breadcrumb mb-10">
          <ol
            className="flex items-center gap-2"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className='flex items-center'>
              <Link
                href="/"
                itemProp="item"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm hover:text-ink transition-colors duration-200"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>

            <li className="font-mono text-[0.5625rem] text-muted-warm/40" aria-hidden="true">/</li>

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className='flex items-center'>
              <Link
                href="/work"
                itemProp="item"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm hover:text-ink transition-colors duration-200"
              >
                <span itemProp="name">Work</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>

            <li className="font-mono text-[0.5625rem] text-muted-warm/40 " aria-hidden="true">/</li>

            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className='flex items-center'>
              <span
                itemProp="name"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/50"
              >
                {project.title}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Overline row */}
        <div className="flex flex-wrap items-center gap-3 mb-10 overflow-hidden">
          <span className={`proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase ${accentText[project.color]}`}>
            {project.category}
          </span>
          <span className="proj-overline-item w-6 h-px bg-ink/15 inline-block" aria-hidden="true" />
          <span className="proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">
            {project.client}
          </span>
          <span className="proj-overline-item w-6 h-px bg-ink/15 inline-block" aria-hidden="true" />
          <span className="proj-overline-item font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">
            {project.year}
          </span>
        </div>

        {/* h1 — SplitText target */}
        <h1 className="proj-headline font-aktiv-grotesk text-[clamp(2.875rem,6vw+1rem,6.125rem)] font-bold leading-tight tracking-[-0.03em] mb-16 max-w-5xl">
          {project.headlineHighlights?.length
            ? renderHeadline(project.headline ?? project.title, project.headlineHighlights, accentText[project.color])
            : (project.headline ?? project.title)
          }
        </h1>

        {/* Two-column meta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-border">

          {/* Left: description + tags */}
          <div className="proj-hero-left flex flex-col gap-6">
            <p className="font-googlea text-sm leading-[1.9] text-muted-warm max-w-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2" aria-label="Project tags">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[0.5rem] tracking-widest uppercase px-3 py-1.5 border border-border text-ink/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: quick facts */}
          <div className="proj-hero-right flex flex-col gap-5 md:pl-12 md:border-l md:border-border">
            {[
              { label: 'Client', value: project.client },
              { label: 'Scope', value: project.services?.join(' · ') ?? project.category },
              { label: 'Timeline', value: project.timeline ?? '—' },
              { label: 'Year', value: project.year },
            ].map(item => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/60">
                  {item.label}
                </span>
                <span className="font-googlea text-[0.8125rem] text-ink leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width preview section (Video if available, else colored bar) */}
        {project.videoDesktop || project.videoMobile ? (
          <div className="proj-video-showcase w-full bg-[#0a0a0b] border-y border-border/50 relative overflow-hidden py-16 md:py-28 px-8 flex flex-col items-center">

            {/* Ambient Background Layer — physically oversized so parallax has room without scale */}
            {project.backgroundImage && (
              <div className="proj-video-bg absolute -inset-x-8 -top-16 -bottom-16 z-0 select-none pointer-events-none will-change-transform">
                <Image
                  src={project.backgroundImage}
                  alt=""
                  fill
                  className="object-cover opacity-50"
                />
              </div>
            )}
            {/* Ambient Overlay - Lighter to ensure visibility */}
            <div className="absolute inset-0 bg-[#0a0a0b]/40 z-0 pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">

              {/* Tablet Mockup */}
              {project.videoDesktop && (
                <div className="proj-video-desktop relative w-full md:w-4/5 max-w-5xl aspect-video bg-[#050505] rounded-4xl md:rounded-[3rem] border-10 md:border-18 border-[#1a1a1c] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.7)] z-10 will-change-transform">
                  <video
                    src={project.videoDesktop}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Internal bezel shadow */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] pointer-events-none" />
                </div>
              )}

              {/* Mobile Preview (Layered/Floating on Desktop) */}
              {project.videoMobile && (
                <div className="proj-video-mobile relative w-45 md:w-60 aspect-9/16 bg-[#050505] rounded-[2.5rem] border-8 border-[#1a1a1c] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] md:absolute md:right-8 md:-bottom-16 z-20 will-change-transform hover:scale-105 active:scale-95 transition-transform duration-500 group">
                  <video
                    src={project.videoMobile}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Interactive shine highlight */}
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" /> */}
                </div>
              )}
            </div>

            {/* Visit Link — Integrated into the dark theme */}
            <div className="mt-16 flex justify-center relative z-30">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-mono text-[0.625rem] tracking-[0.2em] uppercase py-4 px-8 bg-white text-black hover:bg-stabilo hover:text-black transition-all duration-300 active:scale-95 shadow-xl"
              >
                Launch Artifact
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ) : project.backgroundImage ? (
          /* Screenshot preview bar */
          <div className="proj-screenshot-bar w-full aspect-9/16 md:aspect-video relative overflow-hidden">
            <img
              src={project.backgroundImage}
              alt={`${project.title} website screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-ink/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 gap-5 z-10 text-center px-8">
              <p className="font-mono text-[0.5rem] tracking-[0.32em] uppercase text-off/50">
                Live project · {project.year}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} — live website`}
                className="inline-flex items-center gap-3 font-mono text-[0.5625rem] tracking-widest uppercase py-3 px-6 border border-off/25 text-off hover:bg-off/10 transition-all duration-200 active:scale-[0.97]"
              >
                Visit {project.title}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        ) : (
          /* Fallback: solid color bar */
          <div
            className={`proj-preview-bar w-full aspect-9/16 md:aspect-video ${colorBg[project.color]} flex items-center justify-center relative overflow-hidden`}
          >
            <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
              <p className={`font-mono text-[0.5rem] tracking-[0.32em] uppercase ${project.color === 'ink' ? 'text-off/35' : 'text-ink/25'}`}>
                Live project · {project.year}
              </p>
              <p className={`font-aktiv-grotesk text-[clamp(2.375rem,5vw+1rem,5rem)] font-bold leading-none ${colorText[project.color]}`}>
                {project.title}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} — live website`}
                className={`inline-flex items-center gap-3 font-mono text-[0.5625rem] tracking-widest uppercase py-3 px-6 border transition-all duration-200 active:scale-[0.97] ${liveLinkClass[project.color]}`}
              >
                Visit {project.title}
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        )}



      </header>

      {/* ══════════════════════════════════════════ OVERVIEW STRIP */}
      <section
        aria-label="Project overview"
        className="proj-overview border-b border-border px-8 md:px-16 py-10"
      >
        <div className="flex flex-wrap gap-y-8 md:flex-nowrap md:divide-x md:divide-border">
          {[
            { label: 'Client', value: project.client },
            { label: 'Category', value: project.category },
            { label: 'Services', value: (project.services ?? project.tags).join(', ') },
            { label: 'Timeline', value: project.timeline ?? '—' },
            { label: 'Year', value: project.year },
          ].map((item, i) => (
            <div
              key={i}
              className="proj-meta-item flex flex-col gap-1.5 w-1/2 md:w-auto md:px-10 first:pl-0 last:pr-0"
            >
              <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/55">
                {item.label}
              </span>
              <span className="font-googlea text-[0.8125rem] text-ink leading-snug">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════ 01 — THE BRIEF */}
      {project.challenge && (
        <section
          aria-labelledby="proj-brief-heading"
          className="proj-section border-b border-border px-8 md:px-16 py-20"
        >
          <div className="proj-sec-line h-px w-full bg-border mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
            <div className="proj-sec-label flex flex-col gap-3 pt-1">
              <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>
                01
              </span>
              <h2
                id="proj-brief-heading"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45"
              >
                The Brief
              </h2>
            </div>
            <p className="proj-sec-body font-googlea text-[clamp(1rem,1.2vw+0.5rem,1.1875rem)] leading-[1.85] text-ink max-w-2xl">
              {project.challenge}
            </p>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════ 02 — THE BUILD */}
      {project.solution && (
        <section
          aria-labelledby="proj-build-heading"
          className="proj-section border-b border-border px-8 md:px-16 py-20 bg-sand/30"
        >
          <div className="proj-sec-line h-px w-full bg-border mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
            <div className="proj-sec-label flex flex-col gap-3 pt-1">
              <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>
                02
              </span>
              <h2
                id="proj-build-heading"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45"
              >
                The Build
              </h2>
            </div>
            <p className="proj-sec-body font-googlea text-[clamp(1rem,1.2vw+0.5rem,1.1875rem)] leading-[1.85] text-ink max-w-2xl">
              {project.solution}
            </p>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════ 03 — DELIVERABLES */}
      {project.deliverables && project.deliverables.length > 0 && (
        <section
          aria-labelledby="proj-deliverables-heading"
          className="proj-section border-b border-border px-8 md:px-16 py-20"
        >
          <div className="proj-sec-line h-px w-full bg-border mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 mb-14">
            <div className="proj-sec-label flex flex-col gap-3 pt-1">
              <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>
                03
              </span>
              <h2
                id="proj-deliverables-heading"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45"
              >
                What We Shipped
              </h2>
            </div>
            <p className="proj-sec-body font-googlea text-[0.8125rem] leading-[1.8] text-muted-warm max-w-md">
              Every component we built, and the brief behind it.
            </p>
          </div>

          {/* Card grid */}
          <div className="proj-deliverables-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {project.deliverables.map((item, i) => (
              <article
                key={i}
                className="proj-deliverable bg-off p-8 flex flex-col gap-5 hover:bg-sand/50 transition-colors duration-300 group"
              >
                <span className={`font-mono text-[0.5rem] tracking-[0.2em] uppercase ${accentText[project.color]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-aktiv-grotesk text-lg font-semibold leading-tight group-hover:text-ink transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-googlea text-xs leading-[1.85] text-muted-warm">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════ 04 — RESULTS */}
      {project.results && project.results.length > 0 && (
        <section
          aria-labelledby="proj-results-heading"
          className="proj-section border-b border-border px-8 md:px-16 py-24"
        >
          <div className="proj-sec-line h-px w-full bg-border mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24 mb-16">
            <div className="proj-sec-label flex flex-col gap-3 pt-1">
              <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>
                04
              </span>
              <h2
                id="proj-results-heading"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45"
              >
                Results
              </h2>
            </div>
            <p className="proj-sec-body font-googlea text-[0.8125rem] leading-[1.8] text-muted-warm max-w-md">
              Measured outcomes from the first 90 days post-launch.
            </p>
          </div>

          <div className="proj-results-grid flex flex-wrap gap-16 md:gap-24 lg:gap-32">
            {project.results.map((result, i) => (
              <div key={i} className="flex flex-col gap-2.5">
                <span
                  ref={el => { resultRefs.current[i] = el }}
                  className={`font-aktiv-grotesk text-[clamp(3.5rem,5.5vw+1rem,6rem)] font-bold leading-none tracking-tight tabular-nums ${accentText[project.color]}`}
                >
                  {result.value}{result.suffix ?? ''}
                </span>
                <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm max-w-40 leading-relaxed">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════ 05 — TECHNOLOGY */}
      {project.techStack && project.techStack.length > 0 && (
        <section
          aria-labelledby="proj-tech-heading"
          className="proj-section border-b border-border px-8 md:px-16 py-16"
        >
          <div className="proj-sec-line h-px w-full bg-border mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 md:gap-24">
            <div className="proj-sec-label flex flex-col gap-3 pt-1">
              <span className={`font-mono text-[0.5rem] tracking-[0.3em] uppercase ${accentText[project.color]}`}>
                05
              </span>
              <h2
                id="proj-tech-heading"
                className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-ink/45"
              >
                Technology
              </h2>
            </div>
            <div className="proj-tags flex flex-wrap gap-2">
              {project.techStack.map(tech => {
                const Icon = TECH_ICONS[tech]
                return (
                  <span
                    key={tech}
                    className="proj-tag group flex items-center gap-2.5 font-mono text-[0.5625rem] tracking-widest uppercase px-4 py-2.5 border border-border text-ink/55 hover:border-ink/30 hover:text-ink transition-all duration-200"
                  >
                    {Icon && <Icon className="text-xs opacity-70 group-hover:opacity-100 transition-opacity" />}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════ TESTIMONIAL */}
      {project.testimonial && (
        <section
          aria-label="Client testimonial"
          className="border-b border-border px-8 md:px-16 py-28 bg-sand/40 relative overflow-hidden"
        >
          {/* Testimonial ambient glow */}
          <div className="absolute pointer-events-none select-none rounded-full"
            style={{
              width: 700, height: 400,
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: ornamentGlow[project.color],
              filter: 'blur(140px)',
            }}
          />
          <div className="max-w-3xl mx-auto relative">
            {/* Opening quote mark */}
            <p
              className={`font-aktiv-grotesk text-[5rem] leading-none mb-4 select-none ${accentText[project.color]} opacity-25`}
              aria-hidden="true"
            >
              "
            </p>
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
      )}

      {/* ══════════════════════════════════════════ NEXT PROJECT */}

      <section
        aria-label="Next project"
        className="border-t border-border px-8 md:px-16 py-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
      >
        <div className="proj-next-body flex flex-col gap-4 max-w-lg">
          <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm/55">
            Next project
          </span>
          <p className={`font-mono text-[0.5rem] tracking-widest uppercase ${accentText[nextProject.color]}`}>
            {nextProject.category}
          </p>
          <h2 className="font-aktiv-grotesk text-[clamp(2rem,4vw+1rem,3rem)] font-bold leading-none tracking-tight">
            {nextProject.title}
          </h2>
          <p className="font-googlea text-[0.8125rem] leading-[1.75] text-muted-warm max-w-sm">
            {nextProject.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
          <Link
            href={`/work/${nextProject.slug}`}
            className="proj-next-actions group flex items-center gap-4 bg-ink text-off font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-8 transition-colors duration-200 hover:bg-stabilo active:scale-[0.97]"
          >
            View case study
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/work"
            className="proj-next-actions flex items-center justify-center border border-border text-ink font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-7 transition-colors duration-200 hover:border-ink/30 active:scale-[0.97]"
          >
            ← All work
          </Link>
        </div>
      </section>

    </main>
  )
}
