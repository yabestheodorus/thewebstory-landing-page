'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const steps = [
  {
    num: '01',
    title: 'Narrative Audit',
    desc: 'We dive deep into your brand DNA, identifying the stories that set you apart and the conversion leaks holding you back.'
  },
  {
    num: '02',
    title: 'Kinetic Blueprint',
    desc: 'We design your digital stage, mapping out every motion and transition to guide the user naturally towards the checkout.'
  },
  {
    num: '03',
    title: 'Performance Build',
    desc: 'Clean code, sub-second loads, and zero layout shift. We engineering the motion so it feels like weightless magic.'
  },
  {
    num: '04',
    title: 'Direct-to-Scale',
    desc: 'Launch with a battle-tested DTC infrastructure and SEO system that puts you in full control of your growth.'
  }
]

export function AboutProcess() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.process-step', {
      opacity: 0,
      x: 30,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-16 bg-off relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">The Path</span>
            <span className="w-8 h-px bg-ink/15" />
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">Our Process</span>
          </div>
          <h2 className="font-aktiv-grotesk text-[clamp(2.5rem,4vw+1rem,3.75rem)] font-bold leading-tight tracking-[-0.03em] text-ink">
            How we <span className="text-ink/35 italic font-light">actually</span> build it.
          </h2>
        </div>
        <p className="font-mono text-[0.625rem] tracking-[0.16em] uppercase text-muted-warm max-w-xs text-right hidden md:block">
          Precision Engineering <br /> & Artistic Disruption.
        </p>
      </div>

      <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {steps.map((step) => (
          <div key={step.num} className="process-step bg-off group p-10 flex flex-col gap-10 hover:bg-sand transition-colors duration-500">
            <span className="font-aktiv-grotesk text-6xl font-bold text-ink/5 group-hover:text-stabilo/20 transition-colors duration-500">
              {step.num}
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="font-aktiv-grotesk text-xl font-bold text-ink">{step.title}</h3>
              <p className="font-googlea text-sm leading-[1.8] text-muted-warm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
