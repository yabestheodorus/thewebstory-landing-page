'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Check, X } from 'lucide-react'

export function WhyUs({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.comparison-row', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative py-32 px-8 md:px-16 bg-secondary overflow-hidden">
      {/* Ambient glow */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stabilo/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">{dict.overline}</span>
            <span className="w-8 h-px bg-ink/15" />
          </div>
          <h2 className="font-plus-jakarta text-h2 md:text-h1 font-bold leading-tight tracking-[-0.03em] text-ink mb-6">
            {dict.title}
          </h2>
          <p className="font-google text-lg leading-relaxed text-muted-warm max-w-2xl">
            {dict.description}
          </p>
        </div>

        <div className="flex flex-col border-t border-ink/10">
          {dict.comparison?.map((item: any, i: number) => (
            <div 
              key={i} 
              className="comparison-row grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] border-b border-ink/5 py-12 md:py-16 gap-8 items-start hover:bg-white transition-colors duration-500 px-4 -mx-4 group"
            >
              <div>
                <h3 className="font-plus-jakarta text-xl font-bold text-ink mb-2">
                  {item.label}
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-stabilo">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span className="font-mono text-[0.625rem] tracking-widest uppercase font-bold">thewebstory</span>
                </div>
                <p className="font-google text-sm leading-relaxed text-ink/80 pr-4">
                  {item.us}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-ink/10 group-hover:text-ink/20 transition-colors">
                  <X className="w-4 h-4 stroke-[3]" />
                  <span className="font-mono text-[0.625rem] tracking-widest uppercase font-bold">Generic Builders</span>
                </div>
                <p className="font-google text-sm leading-relaxed text-muted-warm pr-4">
                  {item.them}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
