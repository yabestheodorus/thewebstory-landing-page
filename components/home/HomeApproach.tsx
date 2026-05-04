'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { ArrowUpRight } from 'lucide-react'
import { Dictionary } from '@/dictionaries/en'

interface HomeApproachProps {
  lang: string
  dict: Dictionary['approach']
  homeDict: Dictionary['home_approach']
}

/**
 * Compact approach preview for the home page. Full process detail
 * (per-phase deliverables, principles) lives at /[lang]/approach.
 */
export default function HomeApproach({ lang, dict, homeDict }: HomeApproachProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.ha-head > *', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
    })

    gsap.utils.toArray<HTMLElement>('.ha-step').forEach((step, i) => {
      gsap.from(step, {
        y: 16,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.06,
        ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        scrollTrigger: { trigger: step, start: 'top 92%' },
      })
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
      id="approach"
      className="relative text-ink border-t border-border"
    >
      <div className="px-6 md:px-16 pt-24 md:pt-32 pb-20 md:pb-28 max-w-7xl mx-auto">
        {/* Header */}
        <div className="ha-head mb-14 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="label-eyebrow">04 / 06</span>
            <span className="w-6 h-px bg-ink/10" />
            <span className="label-meta">{homeDict.overline}</span>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] items-end gap-8">
            <h2 className="font-aktiv-grotesk text-h1 font-bold leading-[1.0] tracking-[-0.025em] max-w-3xl">
              {homeDict.heading}
            </h2>

            <Link
              href={`/${lang}/approach`}
              className="hidden md:inline-flex items-center gap-2 label-fn text-muted-warm hover:text-ink transition-colors duration-200 group shrink-0"
            >
              {homeDict.cta}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 md:gap-y-0 border-t border-ink/10">
          {dict.steps.map((step, i) => (
            <li
              key={step.id}
              className={`ha-step relative pt-8 md:pt-10 md:pr-8 ${
                i < dict.steps.length - 1 ? 'lg:border-r lg:border-ink/10' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-aktiv-grotesk text-2xl font-bold text-ink tabular-nums">
                  {step.id}
                </span>
                <span className="label-meta text-stabilo">{dict.phase_label}</span>
              </div>

              <h3 className="font-aktiv-grotesk text-lg md:text-xl font-semibold tracking-[-0.015em] leading-snug text-ink mb-3">
                {step.title}
              </h3>

              <p className="font-google text-sm text-muted-warm leading-[1.7] max-w-xs">
                {homeDict.taglines[i]}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile CTA */}
        <div className="md:hidden mt-12">
          <Link
            href={`/${lang}/approach`}
            className="inline-flex items-center gap-2 label-fn text-ink group"
          >
            {homeDict.cta}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
