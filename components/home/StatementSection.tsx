'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fees, steps } from './statement/statementData'
import { FeeBreakdown } from './statement/FeeBreakdown'
import { Users, Layout, ShoppingCart, Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

import { Dictionary } from '@/dictionaries/en'

export default function StatementSection({ dict }: { dict: Dictionary['statement'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Reveal text
    gsap.utils.toArray<HTMLElement>('.s-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    // Journey Line Animation
    gsap.from('.s-journey-line', {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      duration: 2.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.s-journey-line',
        start: 'top 70%',
      }
    })

    // Floating icons
    gsap.to('.s-icon-float', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3
    })

    const obj = { val: 0 }
    gsap.to(obj, {
      val: 20,
      duration: 1.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.s-counter',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      onUpdate() {
        const el = document.querySelector<HTMLElement>('.s-counter-val')
        if (el) el.textContent = `${Math.round(obj.val)}%`
      },
    })

    gsap.from('.s-fee', {
      opacity: 0,
      y: 24,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.s-fees',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    let mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      gsap.utils.toArray<HTMLElement>('.s-strategy-row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 65%",
          end: "bottom 35%",
          toggleClass: "is-mobile-active",
        });
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && containerRef.current?.contains(t.trigger as Node)) t.kill()
      })
    }
  }, { scope: containerRef })

  return (
    <div id="statement-section" ref={containerRef} className="relative text-ink overflow-hidden bg-secondary">
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none select-none rounded-full"
        style={{
          width: 900, height: 400, top: 0, left: '50%',
          transform: 'translate(-50%, -40%)',
          background: 'var(--color-blaze-soft)',
          filter: 'blur(160px)',
          opacity: 0.05,
        }}
      />

      {/* ── 1. Hook ───────────────────────────────────────────────── */}
      <div className="relative px-8 md:px-16 pt-28 pb-24 flex flex-col items-center text-center">
        <div className="s-reveal flex items-center gap-3 mb-12">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-blaze">{dict.overline}</span>
          <span className="w-5 h-px bg-ink/20" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">01 / 03</span>
        </div>

        <div className="s-counter flex flex-col items-center gap-3 mb-10">
          <span
            className="s-counter-val font-aktiv-grotesk font-bold leading-none tracking-[-0.04em] text-blaze"
            style={{ fontSize: 'clamp(7rem, 20vw, 15rem)' }}
          >
            0%
          </span>
          <span className="font-mono text-[0.75rem] tracking-[0.2rem] uppercase text-ink/60">
            {dict.metric_label}
          </span>
        </div>

        <h2 className="s-reveal font-plus-jakarta text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-bold leading-tight tracking-[-0.025em] text-ink max-w-2xl mb-5">
          {dict.heading}
        </h2>

        <p className="s-reveal font-google text-[clamp(0.875rem,1vw+0.4rem,1rem)] leading-[1.9] text-ink/65 max-w-lg">
          {dict.description}
        </p>
      </div>

      {/* ── 2. Fee breakdown ──────────────────────────────────────── */}
      <FeeBreakdown fees={fees} dict={dict} />

      {/* ── 3. The Strategy (Enhanced) ───────────────────────────── */}
      <div className="relative px-8 md:px-16 py-40 border-t border-ink/8 overflow-hidden">
        {/* Background Journey Path (Desktop only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl hidden md:block pointer-events-none opacity-20">
          <svg viewBox="0 0 1000 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M100 100C300 100 400 150 500 150C600 150 700 100 900 100"
              stroke="var(--color-blaze)"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="s-journey-line"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="s-reveal flex items-center gap-3 mb-20">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-blaze">{dict.strategy_overline || 'The Strategy'}</span>
            <div className="h-px w-12 bg-ink/10" />
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/40">Efficiency First</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`s-reveal s-strategy-row group relative flex flex-col gap-10 ${i === 1 ? 'md:translate-y-12' : ''}`}
              >
                {/* Large Background Number */}
                <span className="absolute -top-10 -left-6 font-plus-jakarta text-[8rem] font-bold text-ink/[0.03] select-none pointer-events-none group-hover:text-blaze/[0.05] in-[.is-mobile-active]:text-blaze/[0.05] transition-colors duration-700">
                  {step.n}
                </span>

                <div className="flex items-center gap-4">
                  <div className="s-icon-float relative w-20 h-20 flex items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-3xl border border-ink/5 rotate-6 group-hover:rotate-12 in-[.is-mobile-active]:rotate-12 group-hover:border-blaze/30 in-[.is-mobile-active]:border-blaze/30 transition-transform duration-700" />
                    {/* Main Container */}
                    <div className="relative w-full h-full bg-white/40 backdrop-blur-md border border-ink/10 rounded-3xl flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:shadow-blaze/10 group-hover:border-blaze/20 in-[.is-mobile-active]:shadow-xl in-[.is-mobile-active]:shadow-blaze/10 in-[.is-mobile-active]:border-blaze/20 transition-all duration-500">
                      {i === 0 && <Users className="w-8 h-8 text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors duration-500" strokeWidth={1.2} />}
                      {i === 1 && <Layout className="w-8 h-8 text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors duration-500" strokeWidth={1.2} />}
                      {i === 2 && (
                        <div className="relative">
                          <ShoppingCart className="w-8 h-8 text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors duration-500" strokeWidth={1.2} />
                          <div className="absolute -top-1 -right-1 bg-blaze text-white rounded-full p-0.5 scale-0 group-hover:scale-100 in-[.is-mobile-active]:scale-100 transition-transform duration-500 delay-200">
                            <Check className="w-2 h-2" strokeWidth={4} />
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Decorative Dot */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blaze rounded-full border-4 border-background scale-0 group-hover:scale-100 in-[.is-mobile-active]:scale-100 transition-transform duration-500 delay-100" />
                  </div>

                  {i < 2 && (
                    <div className="hidden md:block flex-1 h-px bg-ink/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-blaze/20 translate-x-[-100%] group-hover:translate-x-[100%] in-[.is-mobile-active]:translate-x-[100%] transition-transform duration-1000" />
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="label-meta text-[0.65rem] text-blaze font-bold uppercase tracking-widest">{step.badge}</span>
                    <div className="w-1 h-1 bg-ink/20 rounded-full" />
                    <span className="font-mono text-[0.6rem] text-ink/30 uppercase tracking-tighter">{dict.step_label || 'Step'} {step.n}</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-plus-jakarta text-3xl font-bold tracking-tight text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors duration-300">
                      {step.label}
                    </h3>
                    <p className="font-google text-[1rem] leading-relaxed text-ink/60 max-w-[280px]">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 group/link cursor-pointer">
                    <span className="font-mono text-[0.55rem] tracking-widest uppercase text-ink/40 group-hover/link:text-blaze in-[.is-mobile-active]:text-blaze transition-colors">{dict.learn_more}</span>
                    <ArrowRight className="w-3 h-3 text-ink/20 group-hover/link:text-blaze in-[.is-mobile-active]:text-blaze transition-all group-hover/link:translate-x-1 in-[.is-mobile-active]:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* ── 5. Close ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 py-32 border-t border-ink/8 flex flex-col items-start lg:items-center bg-secondary/30">
        <p className="s-reveal font-aktiv-grotesk font-bold leading-[1.05] tracking-[-0.04em] text-ink text-[clamp(2.5rem,8vw+0.5rem,6rem)] w-full text-left lg:text-center">
          {dict.badges.yours.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-blaze">{dict.badges.yours.split(' ').slice(-1).join(' ')}</span>.
        </p>
        <p className="s-reveal font-aktiv-grotesk italic font-light leading-[1.05] tracking-[-0.04em] text-ink/60 text-[clamp(1.75rem,4vw+0.5rem,3.5rem)] w-full text-left lg:text-center mt-2">
          {dict.steps.s3.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-blaze">{dict.steps.s3.split(' ').slice(-1).join(' ')}</span>
        </p>

        <div className="s-reveal mt-20 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-blaze/30" />
            <span className="font-mono text-[0.625rem] tracking-[0.4em] uppercase text-ink/40">The Transformation Studio</span>
            <div className="w-12 h-px bg-blaze/30" />
          </div>
          <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-blaze font-bold">
            TANGERANG, INDONESIA
          </span>
        </div>
      </div>
    </div>
  )
}
