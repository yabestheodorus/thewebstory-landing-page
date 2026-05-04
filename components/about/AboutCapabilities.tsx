'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { ArrowUpRight } from 'lucide-react'

export function AboutCapabilities({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.cap-card', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative py-32 px-8 md:px-16 bg-secondary overflow-hidden">
      {/* Ambient glow */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-stabilo/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">{dict.overline}</span>
              <span className="w-8 h-px bg-ink/15" />
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">Core Strengths</span>
            </div>
            <h2 className="font-plus-jakarta text-h1 font-bold leading-tight tracking-[-0.03em] text-ink">
              {dict.title}
            </h2>
          </div>
          <p className="font-google text-sm leading-[1.85] text-muted-warm max-w-xs text-right hidden md:block">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/5 border border-ink/5">
          {dict.items?.map((item: any, i: number) => (
            <div 
              key={i} 
              className="cap-card bg-secondary p-10 md:p-16 flex flex-col gap-10 group hover:bg-white transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.625rem] text-stabilo/40 font-bold tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink/10 group-hover:text-stabilo group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>
              
              <div className="flex flex-col gap-5">
                <h3 className="font-plus-jakarta text-3xl font-bold text-ink tracking-tight group-hover:text-stabilo transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-google text-base leading-relaxed text-muted-warm max-w-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
