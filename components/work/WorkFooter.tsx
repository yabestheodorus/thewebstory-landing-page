'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import Link from 'next/link'

export default function WorkFooter() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'

    const split = new SplitText('.work-footer-heading', { type: 'chars' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    })

    tl.from(split.chars, {
      y: 40,
      opacity: 0,
      rotateX: -45,
      stagger: 0.02,
      duration: 0.8,
      ease,
    })
      .from('.work-footer-link', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease,
      }, '-=0.4')
      .from('.work-footer-meta', {
        opacity: 0,
        duration: 1,
      }, '-=0.2')

    return () => {
      split.revert()
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="border-t border-border px-8 md:px-16 py-24 flex flex-col md:flex-row md:items-end justify-between gap-12"
    >
      <div className="flex flex-col gap-8 max-w-lg">
        <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">
          Start your project
        </span>
        <h2 className="work-footer-heading font-aktiv-grotesk text-[clamp(2.25rem,3vw+1rem,3.25rem)] font-bold leading-[1.0] tracking-[-0.025em]">
          Your brand deserves
          <br />
          <em className="italic font-light text-ink/30">its own stage.</em>
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
        <Link
          href="/#cta-section"
          className="work-footer-action group flex items-center gap-4 bg-ink text-off font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-8 transition-colors duration-200 hover:bg-stabilo active:scale-[0.97]"
        >
          Start a project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link
          href="/"
          className="work-footer-action flex items-center justify-center gap-3 border border-border text-ink font-mono text-[0.5625rem] tracking-widest uppercase py-4 px-7 transition-colors duration-200 hover:border-ink/30 active:scale-[0.97]"
        >
          ← Back home
        </Link>
      </div>
    </section>
  )
}
