'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { ArrowRight, Star, ArrowDown } from 'lucide-react'
import { SlideUpLabel } from '@/components/ui/SlideUpLabel'
import { Dictionary } from '@/dictionaries/en'

export default function HeroSection({ dict, lang }: { dict: Dictionary['hero'], lang: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Reveal main items
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } })

    tl.from('.h-chapter', {
      x: -30,
      opacity: 0,
    })

    // Optimize for mobile: remove expensive rotateX on smaller screens
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      tl.from('.h-headline > span:not(.h-decoration)', {
        y: 100,
        rotateX: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
      }, '-=1')
    });

    mm.add("(max-width: 1023px)", () => {
      tl.from('.h-headline > span:not(.h-decoration)', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
      }, '-=1')
    });

    tl.from('.h-body-block', {
      y: 40,
      opacity: 0,
      duration: 1.4
    }, '-=1.2')
      .from('.h-rule', {
        scaleX: 0,
        duration: 1.5,
        ease: 'power4.inOut'
      }, '-=1.4')

    // Ticker scroll with responsive speed
    mm.add({
      isMobile: "(max-width: 768px)",
      isDesktop: "(min-width: 769px)"
    }, (context) => {
      const { isMobile } = context.conditions as any;
      gsap.to('.h-ticker-inner', {
        xPercent: -50,
        ease: 'none',
        duration: isMobile ? 15 : 25,
        repeat: -1
      })
    });

    return () => mm.revert();
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[750px] overflow-hidden bg-muted flex flex-col">
      {/* Dynamic atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 0%, var(--color-blaze-soft) 0%, transparent 70%)',
        }}
      />

      <div className="px-6 md:px-12 lg:px-16 max-w-screen mx-auto flex-1 flex flex-col pt-24 md:pt-28 pb-10">
        {/* Main Content Area: Centered & Space-Optimized */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
          {/* Chapter mark */}
          <div className="h-chapter flex items-center justify-center gap-4 mb-6 md:mb-10 will-change-transform">
            <span className="font-aktiv-grotesk text-2xl md:text-3xl font-bold tabular-nums leading-none text-ink">01</span>
            <span className="w-10 h-px bg-ink/30" />
            <span className="label-eyebrow text-[9px]">The Opening Ritual</span>
          </div>

          <div className="relative group/headline w-full max-w-4xl mx-auto">
            {/* System Status / Metadata */}
            <div className="flex items-center justify-center gap-4 mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1 h-1 rounded-full bg-blaze" />
                ))}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-ink font-bold">Protocol: High-Fidelity Synthesis</span>
            </div>

            <h1 className="h-headline font-aktiv-grotesk font-bold leading-[0.85] tracking-[-0.05em] text-[clamp(4.2rem,12vw,6.5rem)] mb-10 md:mb-12 perspective-1000">
              <span className="block uppercase gpu will-change-transform">
                Crafting
              </span>
              <span className="flex items-center justify-center gap-6 mt-1 gpu will-change-transform">
                <span className="h-decoration w-12 h-px bg-ink/15 hidden sm:block" />
                <span className="font-playfair italic font-light tracking-[-0.03em] text-blaze normal-case">
                  High-Fidelity
                </span>
                <span className="h-decoration w-12 h-px bg-ink/15 hidden sm:block" />
              </span>
              <span className="block mt-1 uppercase gpu will-change-transform">
                Ecosystems<span className="text-blaze">.</span>
              </span>
            </h1>
          </div>

          {/* Testimonial chip */}
          <div className="h-disc-num flex items-center gap-3 bg-card border border-ink/10 rounded-2xl px-4 py-3 shadow-xl shadow-ink/5 w-fit">
            <div className="flex items-center -space-x-2">
              <div className="relative w-7 h-7 rounded-full border-2 border-card overflow-hidden">
                <Image src="/images/screenshots/celune_img.png" alt="" fill className="object-cover" sizes="28px" />
              </div>
              <div className="relative w-7 h-7 rounded-full border-2 border-card overflow-hidden">
                <Image src="/images/screenshots/formique_img.png" alt="" fill className="object-cover" sizes="28px" />
              </div>
              <div className="relative w-7 h-7 rounded-full border-2 border-card overflow-hidden">
                <Image src="/images/screenshots/amannusa_img.png" alt="" fill className="object-cover" sizes="28px" />
              </div>
              <div className="relative w-7 h-7 rounded-full border-2 border-card bg-blaze flex items-center justify-center">
                <span className="font-aktiv-grotesk text-[10px] font-bold text-white">+9</span>
              </div>
            </div>
            <div className="flex flex-col gap-0.5 text-left">
              <div className="flex items-center gap-1 text-blaze">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <span className="font-aktiv-grotesk text-xs font-bold text-ink ml-1">5.0</span>
              </div>
              <span className="label-meta text-ink/60">Across 12 launches</span>
            </div>
          </div>
        </div>

        {/* Divider rule */}
        <div className="h-rule h-px w-full bg-ink/10 my-8 origin-left" />

        {/* Row 2: Subheadline/CTAs + Studio Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-12 items-end relative z-20">
          {/* Subheadline + CTAs Column */}
          <div className="h-body-block md:col-span-7 flex flex-col items-center md:items-start gap-8">
            <p className="font-google text-sm md:text-base leading-[1.6] text-ink/60 max-w-lg text-center md:text-left">
              {dict.subheadline}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 relative z-30">
              <Link
                href={`/${lang}/contact`}
                className="group px-10 py-4 bg-gradient-to-r from-blaze to-[#FF7A00] text-white rounded-2xl font-plus-jakarta text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_8px_24px_rgba(232,93,4,0.2)] hover:shadow-[0_16px_48px_rgba(232,93,4,0.35)] hover:-translate-y-0.5 flex items-center gap-3 relative z-10"
              >
                <SlideUpLabel text={dict.cta_primary} />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              <Link
                href={`/${lang}/work`}
                className="group px-8 py-4 border border-ink/10 text-ink rounded-2xl font-plus-jakarta text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:border-ink/30 hover:-translate-y-0.5 relative z-10"
              >
                <SlideUpLabel text={dict.cta_secondary} />
              </Link>
            </div>
          </div>

          {/* Studio Info Column */}
          <div className="h-body-block md:col-span-5 flex flex-col items-center md:items-end">
            <div className="flex flex-col gap-6 items-center md:items-end text-center md:text-right">
              <div className="flex items-center gap-10">
                {dict.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center md:items-end gap-1">
                    <span className="font-aktiv-grotesk text-2xl font-bold text-ink">{stat.val}</span>
                    <span className="label-meta whitespace-pre-line max-w-[80px] md:max-w-none text-center md:text-right">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="label-meta max-w-[280px] leading-relaxed">
                {dict.meta_location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Absolute Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-500 hidden md:flex">
        <div className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4 text-ink/40" />
        </div>
        <span className="label-meta text-[9px] uppercase tracking-widest">Scroll to explore</span>
      </div>

      {/* Infinity Ticker */}
      <div className="h-rule relative py-10 border-t border-b border-ink/5 bg-muted">
        <div className="flex h-ticker-inner whitespace-nowrap will-change-transform gpu">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-aktiv-grotesk text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase tracking-tighter opacity-[0.03] px-10">
                {dict.ticker}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
