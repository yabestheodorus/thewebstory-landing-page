'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export function AboutManifesto() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.manifesto-text', {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-ink text-off py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="manifesto-text flex items-center gap-3 mb-16">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">The Manifesto</span>
          <span className="w-8 h-px bg-off/15" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-off/50">Our "Why"</span>
        </div>

        <h2 className="manifesto-text font-aktiv-grotesk text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-16">
          Own the stage. <br />
          <span className="text-off/40 italic font-light">Stop renting the audience.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <p className="manifesto-text font-googlea text-lg leading-[1.8] text-off/70">
            Most brands are built on borrowed ground. Marketplaces provide the traffic, but they keep the customer data, the loyalty, and the margin. We believe every brand deserves its own sovereign digital territory.
          </p>
          <p className="manifesto-text font-googlea text-lg leading-[1.8] text-off/70">
            We don&apos;t just build pages; we build conversion-optimized narratives. By blending cinematic motion with ruthless performance engineering, we ensure your brand doesn&apos;t just look premium—it delivers results.
          </p>
        </div>

        <div className="manifesto-text mt-24 flex items-center gap-6">
          <div className="w-12 h-px bg-stabilo" />
          <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-stabilo">Platform Sovereignty</span>
        </div>
      </div>
    </section>
  )
}
