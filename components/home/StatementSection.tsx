'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BRANDS, fees, steps } from './statement/statementData'
import { FeeBreakdown } from './statement/FeeBreakdown'
import { StrategySteps } from './statement/StrategySteps'
import { BrandMarquee } from './statement/BrandMarquee'

gsap.registerPlugin(ScrollTrigger)

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
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

    gsap.from('.s-step', {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.s-steps',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  }, { scope: containerRef })

  return (
    <div id="statement-section" ref={containerRef} className="relative bg-off text-ink overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none select-none rounded-full"
        style={{
          width: 900, height: 400, top: 0, left: '50%',
          transform: 'translate(-50%, -40%)',
          background: 'var(--color-stabilo)',
          filter: 'blur(160px)',
          opacity: 0.055,
        }}
      />

      {/* ── 1. Hook ───────────────────────────────────────────────── */}
      <div className="relative px-8 md:px-16 pt-28 pb-24 flex flex-col items-center text-center">
        <div className="s-reveal flex items-center gap-3 mb-12">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">Our Belief</span>
          <span className="w-5 h-px bg-ink/20" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">01 / 03</span>
        </div>

        <div className="s-counter flex flex-col items-center gap-3 mb-10">
          <span
            className="s-counter-val font-aktiv-grotesk font-bold leading-none tracking-[-0.04em] text-stabilo"
            style={{ fontSize: 'clamp(7rem, 20vw, 15rem)' }}
          >
            0%
          </span>
          <span className="font-mono text-[0.75rem] tracking-[0.2rem] uppercase text-ink/60">
            of your GMV lost to marketplace fees
          </span>
        </div>

        <h2 className="s-reveal font-aktiv-grotesk text-[clamp(1.5rem,2.5vw+0.5rem,2.5rem)] font-bold leading-tight tracking-[-0.025em] text-ink max-w-2xl mb-5">
          Every sale on Shopee, Tokopedia, or Lazada costs you
          {' '}<em className="italic font-light text-ink/50">before you see a single rupiah.</em>
        </h2>

        <p className="s-reveal font-googlea text-[clamp(0.875rem,1vw+0.4rem,1rem)] leading-[1.9] text-ink/65 max-w-lg">
          Platform commissions, ad budgets, voucher campaigns — they compound silently. You&apos;re not building your business on those platforms. You&apos;re building theirs.
        </p>
      </div>

      {/* ── 2. Fee breakdown ──────────────────────────────────────── */}
      <FeeBreakdown fees={fees} />

      {/* ── 3. The Strategy ───────────────────────────────────────── */}
      <div className="px-8 md:px-16 pt-24 pb-20 border-t border-ink/8">
        <div className="s-reveal flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">The Fix</span>
          <span className="w-5 h-px bg-ink/20" />
          <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">02 / 03</span>
        </div>

        <h2 className="s-reveal font-aktiv-grotesk text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-bold leading-none tracking-[-0.03em] text-ink mb-16">
          The <span className="text-stabilo">smarter</span> play:{' '}
          <em className="italic font-light text-ink/45">use both.</em>
        </h2>

        <StrategySteps steps={steps} />
      </div>

      {/* ── 4. Trust ──────────────────────────────────────────────── */}
      <div className="border-t border-ink/8 pt-20 pb-24">
        <div className="px-8 md:px-16 mb-12">
          <div className="s-reveal flex items-center gap-3 mb-8">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">Trust</span>
            <span className="w-5 h-px bg-ink/20" />
            <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">03 / 03</span>
          </div>
          <h2 className="s-reveal font-aktiv-grotesk text-[clamp(2rem,4vw+0.5rem,3.5rem)] font-bold leading-none tracking-[-0.03em] text-ink mb-5">
            You&apos;re not starting{' '}
            <em className="italic font-light text-ink/45">from zero.</em>
          </h2>
          <p className="s-reveal font-googlea text-[clamp(0.875rem,1vw+0.4rem,1rem)] leading-[1.85] text-ink/65 max-w-lg">
            We connect your site to the payment gateways Indonesian customers already trust — the same checkout they tap every day on the marketplaces.
          </p>
        </div>

        <BrandMarquee brands={BRANDS} />
      </div>

      {/* ── 5. Close ──────────────────────────────────────────────── */}
      <div className="px-8 md:px-16 py-28 border-t border-ink/8 flex flex-col items-center text-center">
        <div className="s-reveal">
          <span
            className="font-aktiv-grotesk font-bold leading-[1.05] tracking-[-0.04em] text-ink block"
            style={{ fontSize: 'clamp(2.75rem, 8vw + 0.5rem, 6rem)' }}
          >
            Own your <span className="text-stabilo">customers</span>.
          </span>
        </div>
        <div className="s-reveal font-aktiv-grotesk italic font-light leading-[1.05] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(2.75rem, 8vw + 0.5rem, 6rem)' }}>
          Stop
          <span className=" text-ink/40 inline mx-2">renting</span>
          them.
        </div>
        <div className="s-reveal mt-14 flex items-center gap-5">
          <div className="w-10 h-px bg-stabilo/60" />
          <span className="font-mono text-[0.625rem] tracking-[0.3em] uppercase text-stabilo/70">
            theunframed Studio — Jakarta, 2026
          </span>
          <div className="w-10 h-px bg-stabilo/60" />
        </div>
      </div>
    </div>
  )
}