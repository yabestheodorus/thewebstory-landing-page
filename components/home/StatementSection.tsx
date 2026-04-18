'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BRANDS = [
  { name: 'GoPay', logo: '/images/logos/gopay.png' },
  { name: 'Dana', logo: '/images/logos/dana.png' },
  { name: 'OVO', logo: '/images/logos/ovo.png' },
  { name: 'Shopee', logo: '/images/logos/shopee.png' },
  { name: 'BCA', logo: '/images/logos/bca.png' },
  { name: 'Mandiri', logo: '/images/logos/mandiri.png' },
  { name: 'BNI', logo: '/images/logos/bni.png' },
  { name: 'QRIS', logo: '/images/logos/qris.png' },
  { name: 'Visa', logo: '/images/logos/visa.png' },
  { name: 'Mastercard', logo: '/images/logos/mastercard.png' },
]

const fees = [
  { label: 'Platform Commission', value: '15%', note: 'per transaction' },
  { label: 'Ad Performance', value: '8%', note: 'avg. spend per GMV' },
  { label: 'Campaign Vouchers', value: '3%', note: 'avg. discount cost' },
]

const steps = [
  { n: '01', badge: 'Acquisition', label: 'Marketplace', desc: 'Let them bring you the traffic.', accent: false },
  { n: '02', badge: 'Retention', label: 'Your Website', desc: 'Convert them on your own terms.', accent: true },
  { n: '03', badge: '100% Yours', label: 'Repeat Purchase', desc: '100% of revenue stays yours.', accent: false },
]

export default function StatementSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Scroll-triggered text reveals
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

    // Counter
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

    // Fee cells stagger
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

    // Step cards stagger
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

    // Marquee
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      })
    }
  }, { scope: containerRef })

  return (
    <div
      id="statement-section"
      ref={containerRef}
      className="relative bg-off text-ink overflow-hidden"
    >
      {/* Ambient glow — top center */}
      <div
        className="absolute pointer-events-none select-none rounded-full"
        style={{
          width: 900,
          height: 400,
          top: 0,
          left: '50%',
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

        {/* Giant counter */}
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
      <div className="s-fees border-t border-ink/8">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {fees.map((fee, i) => (
            <div
              key={fee.label}
              className="s-fee px-8 md:px-12 py-12 flex flex-col items-center gap-3 border-b md:border-b-0 md:border-r border-ink/8 last:border-0"
            >
              <span className="font-mono text-[0.625rem] tracking-[0.2rem] uppercase text-ink/50">
                {String(i + 1).padStart(2, '0')} — {fee.label}
              </span>
              <span
                className="font-aktiv-grotesk font-bold leading-none tracking-[-0.03em] text-ink"
                style={{ fontSize: 'clamp(2.75rem, 4vw + 1rem, 4rem)' }}
              >
                {fee.value}
              </span>
              <span className="font-mono text-[0.625rem] tracking-[0.14em] text-ink/40">{fee.note}</span>
            </div>
          ))}
        </div>
      </div>

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

        <div className="s-steps grid grid-cols-1 md:grid-cols-3 border border-ink/8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="s-step relative px-8 py-10 flex flex-col items-center lg:items-start gap-4 border-b md:border-b-0 md:border-r border-ink/8 last:border-0 overflow-hidden"
            >
              {step.accent && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(124,92,255,0.07) 0%, transparent 75%)',
                  }}
                />
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.625rem] tracking-widest text-ink/50">{step.n}</span>
                {step.accent && (
                  <span className="font-mono text-[0.4375rem] tracking-[0.2em] uppercase px-2 py-0.5 border border-stabilo/30 text-stabilo">
                    Key
                  </span>
                )}
              </div>
              <span className="font-mono text-[0.625rem] tracking-[0.18em] uppercase text-ink/50">{step.badge}</span>
              <span
                className={`font-aktiv-grotesk text-[clamp(1.25rem,1.5vw+0.5rem,1.5rem)] font-semibold leading-tight ${step.accent ? 'text-stabilo' : 'text-ink'}`}
              >
                {step.label}
              </span>
              <p className="font-googlea text-[0.8125rem] leading-[1.8] text-ink/60 mt-auto">{step.desc}</p>
            </div>
          ))}
        </div>
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

        {/* Logo marquee */}
        <div className="relative overflow-hidden py-2">
          <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }} />
          <div ref={marqueeRef} className="flex w-fit items-center gap-4">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={i}
                className="flex items-center px-8 py-5 border border-ink/8 shrink-0 hover:border-stabilo/25 hover:bg-ink/5 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={brand.logo} alt={brand.name} className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 object-contain" />
              </div>
            ))}
          </div>
        </div>
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
          <span
            className=" text-ink/40 inline mx-2"
          >
            renting
          </span>
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
