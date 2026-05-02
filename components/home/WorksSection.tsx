'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ServiceRow } from './works/ServiceRow'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

export default function WorksSection({ dict, lang }: { dict: Dictionary['works'], lang: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.works-header', {
      opacity: 0, y: 32, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
    })
    gsap.from('.works-col-headers', {
      opacity: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.works-col-headers', start: 'top 90%', toggleActions: 'play none none reverse' },
    })
    gsap.utils.toArray<HTMLElement>('.works-row').forEach((row, i) => {
      gsap.from(row, {
        opacity: 0, x: -24, duration: 0.7, ease: 'power3.out', delay: i * 0.07,
        scrollTrigger: { trigger: row, start: 'top 90%', toggleActions: 'play none none reverse' },
      })
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="works-section"
      className="relative text-ink overflow-hidden transition-colors duration-500"
      style={{
        background: [
          'radial-gradient(ellipse 900px 700px at 88% 0%, rgba(184,166,255,0.09) 0%, transparent 58%)',
          'radial-gradient(ellipse 500px 400px at 8% 100%, rgba(184,166,255,0.05) 0%, transparent 65%)',
          'var(--color-off)',
        ].join(', '),
      }}
    >
      {/* Background ornaments */}
      <div className="absolute pointer-events-none select-none rounded-full top-0 right-0"
        style={{ width: 800, height: 800, background: 'var(--color-stabilo-soft)', filter: 'blur(140px)', opacity: 0.13, transform: 'translate(35%,-35%)' }} />
      <div className="absolute pointer-events-none select-none rounded-full bottom-0 left-0"
        style={{ width: 500, height: 500, background: 'var(--color-stabilo-soft)', filter: 'blur(120px)', opacity: 0.07, transform: 'translate(-30%,30%)' }} />

      <svg className="absolute pointer-events-none select-none" style={{ top: '-100px', right: '4%', opacity: 0.18 }} width="560" height="560" viewBox="0 0 560 560" fill="none">
        <circle cx="280" cy="280" r="279" stroke="var(--color-stabilo-soft)" strokeWidth="1" strokeDasharray="4 12" />
        <circle cx="280" cy="280" r="185" stroke="var(--color-ink)" strokeWidth="0.6" strokeDasharray="2 16" />
      </svg>

      <div className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Section header */}
      <div className="works-header px-8 md:px-16 pt-24 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-ink/5">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">02 / 06</span>
            <span className="w-6 h-px bg-ink/10" />
            <span className="label-eyebrow text-muted-warm">{dict.overline}</span>
          </div>
          <h2 className="font-plus-jakarta text-h1 font-bold leading-[1.0] tracking-[-0.025em] text-ink">
            {dict.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-stabilo font-inter">{dict.heading.split(' ').slice(-1)}</span>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
          <span className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm">{dict.services_count}</span>
          <span className="font-aktiv-grotesk font-bold text-[clamp(1.5rem,3vw,2rem)] leading-none">
            {`0${dict.services.length}`}
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="works-col-headers hidden md:grid grid-cols-[48px_1fr_140px_100px_44px] px-8 md:px-16 py-3 border-b border-ink/5">
        <div />
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{dict.labels.service}</span>
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{dict.labels.category}</span>
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">{dict.labels.timeline}</span>
        <div />
      </div>

      {/* Rows */}
      <div>
        {dict.services.map((service, idx) => (
          <ServiceRow
            key={service.id}
            service={service as any}
            labels={dict.labels}
            isActive={activeIdx === idx}
            onMouseEnter={() => setActiveIdx(idx)}
            onMouseLeave={() => setActiveIdx(null)}
            lang={lang}
          />
        ))}
      </div>

      {/* Footer CTA */}
      <div className="px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-ink/5">
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm/40">
          thewebstory.id — Tangerang, Indonesia
        </span>
        <button className="group flex items-center gap-4 font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-ink hover:text-stabilo transition-colors duration-300">
          {dict.cta}
          <span className="h-px w-8 bg-muted-warm group-hover:bg-stabilo group-hover:w-14 inline-block transition-all duration-500" />
        </button>
      </div>
    </section>
  )
}