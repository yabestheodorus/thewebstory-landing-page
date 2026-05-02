'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import BeforeAfterSlider from './BeforeAfterSlider'
import { Dictionary } from "@/dictionaries/en";

export default function TransformationSection({ dict }: { dict: Dictionary['hero'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.t-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 bg-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Label & Title */}
        <div className="t-content text-center mb-16">
          <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-stabilo mb-4">
            {dict.what_we_build}
          </div>
          <h2 className="text-h2 font-bold text-ink">
            The power of <span className="italic font-serif">transformation.</span>
          </h2>
        </div>

        {/* The Slider */}
        <div className="t-content relative aspect-[16/10] md:aspect-[16/8] rounded-2xl overflow-hidden shadow-2xl border border-ink/5">
          <BeforeAfterSlider dragLabel={dict.label_drag} />
        </div>

        {/* Pills / Categories */}
        <div className="t-content flex flex-wrap justify-center gap-3 mt-12">
          {dict.pills.map((label: string, i: number) => (
            <div
              key={label}
              className={`font-mono text-[0.65rem] tracking-widest uppercase py-2 px-5 rounded-full border ${
                i === 0
                ? 'border-stabilo bg-stabilo text-off'
                : 'border-ink/10 bg-off/50 text-muted-warm'
              }`}
            >
              {label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
