'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface Step {
  id: string
  title: string
  desc: string
  items: string[]
}

interface ApproachStepsProps {
  steps: Step[]
}

const STEP_IMAGES = [
  '/images/approach/discovery.png',
  '/images/approach/design.png',
  '/images/approach/engineering.png',
  '/images/approach/launch.png',
]

export default function ApproachSteps({ steps }: ApproachStepsProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const rows = gsap.utils.toArray<HTMLElement>('.as-row')

    rows.forEach(row => {
      const line = row.querySelector('.as-line')
      const num = row.querySelector('.as-num')
      const title = row.querySelector('.as-title')
      const body = row.querySelector('.as-body')
      const items = row.querySelectorAll('.as-item')
      const mark = row.querySelector('.as-mark')

      const tl = gsap.timeline({
        defaults: { ease: 'cubic-bezier(0.23, 1, 0.32, 1)' },
        scrollTrigger: { trigger: row, start: 'top 82%' },
      })

      tl.from(line, { scaleX: 0, transformOrigin: 'left', duration: 0.9 })
        .from(num, { y: 30, opacity: 0, duration: 0.7 }, '-=0.6')
        .from(title, { y: 24, opacity: 0, duration: 0.65 }, '-=0.5')
        .from(body, { y: 16, opacity: 0, duration: 0.55 }, '-=0.45')
        .from(items, { y: 10, opacity: 0, duration: 0.45, stagger: 0.04 }, '-=0.4')
        .from(mark, { opacity: 0, duration: 0.6 }, '-=0.7')
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) t.kill()
      })
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative bg-off px-6 md:px-16 pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section overline */}
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">
            The Process
          </span>
          <span className="w-6 h-px bg-ink/10" />
          <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">
            From brief to launch
          </span>
        </div>

        <div>
          {steps?.map((step, index) => (
            <article
              key={step.id}
              className="as-row group relative grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-x-6 md:gap-x-16 gap-y-8 py-14 md:py-20 border-t border-border first:border-t-0"
            >
              {/* Top accent line */}
              <span className="as-line absolute top-0 left-0 right-0 h-px bg-stabilo-soft/40 origin-left" />

              {/* Big numeric */}
              <div className="as-num row-span-2 md:row-span-2">
                <span className="font-plus-jakarta font-semibold tracking-[-0.04em] text-display leading-none text-ink/90 tabular-nums">
                  {step.id}
                </span>
                <span className="block font-mono text-[0.5rem] tracking-[0.22em] uppercase text-stabilo mt-3">
                  Phase
                </span>
              </div>

              {/* Title row */}
              <h3 className="as-title self-center font-plus-jakarta text-h2 font-bold leading-[1.05] tracking-[-0.025em] text-ink">
                {step.title}
              </h3>

              {/* Tiny image mark */}
              <div className="as-mark hidden md:flex self-center justify-end row-span-2">
                <div className="relative w-28 h-28 lg:w-36 lg:h-36 overflow-hidden rounded-2xl border border-border bg-warm">
                  <Image
                    src={STEP_IMAGES[index]}
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Body + items */}
              <div className="col-span-2 md:col-span-1 md:col-start-2 grid md:grid-cols-[1.4fr_1fr] gap-x-12 gap-y-8">
                <p className="as-body font-google text-[0.9375rem] md:text-base leading-[1.85] text-muted-warm max-w-md">
                  {step.desc}
                </p>

                <ul className="grid grid-cols-1 gap-y-2.5 self-start">
                  {step.items?.map(item => (
                    <li
                      key={item}
                      className="as-item flex items-start gap-3 font-mono text-[0.625rem] tracking-[0.14em] uppercase text-ink/65"
                    >
                      <span className="text-stabilo mt-px">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* Closing rule */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
