'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/lib/gsap'
import { ArrowUpRight, TrendingUp, Zap, Gauge } from 'lucide-react'
import { Dictionary } from '@/dictionaries/en'
import Link from 'next/link'
import Image from 'next/image'
import { IoSearch } from 'react-icons/io5'
import { RiDoubleQuotesL } from 'react-icons/ri'

interface HeroSectionProps {
  lang: string
  dict: Dictionary['hero']
}

export default function HeroSection({ lang, dict }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    const tl = gsap.timeline({ defaults: { ease } })

    const split = new SplitText('.h-headline', { type: 'lines,words', linesClass: 'overflow-hidden' })

    tl.from('.h-bg-line', { scaleX: 0, opacity: 0, duration: 1.5, stagger: 0.2, ease: 'expo.out' })
      .from('.h-eyebrow', { x: -20, opacity: 0, duration: 0.6 }, '-=1.2')
      .from(split.words, { y: '105%', opacity: 0, duration: 0.9, stagger: 0.02, ease: 'power4.out' }, '-=1.0')
      .from('.h-subheadline', { y: 20, opacity: 0, duration: 0.7 }, '-=0.7')
      .from('.h-cta-button', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.5')
      .from('.h-quote', { x: -30, opacity: 0, duration: 0.8 }, '-=0.4')
      .from('.h-visual-platform', { y: 20, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.2')
      .from('.h-phone-mockup', { y: 20, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.3')
      .from(['.h-logo-card', '.h-typo-card', '.h-palette-card', '.h-premium-card'], { opacity: 0, y: 10, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, '-=1')
      .from('.h-ticker-bar', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')

    return () => {
      split.revert()
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col min-h-[110vh] lg:min-h-screen bg-off text-ink overflow-hidden pt-20"
    >
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="h-bg-line absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/5 to-transparent origin-left" />
        <div className="h-bg-line absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-ink/5 to-transparent origin-left" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(var(--color-stabilo-rgb),0.03)_0%,transparent_70%)]" />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grow flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="w-full max-w-screen grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="flex flex-col">
            <div className="h-eyebrow flex items-center gap-2 mb-8 md:mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-stabilo" />
              <span className="label-meta text-[14px] tracking-[0.2em] font-bold text-ink/60 uppercase">
                <span className="text-accent">{dict.overline.split(' — ')[0]}</span>
                {dict.overline.includes(' — ') && ` — ${dict.overline.split(' — ')[1]}`}
              </span>
            </div>

            <h1 className="h-headline font-plus-jakarta font-semibold  leading-[1.2] text-ink mb-10 text-[clamp(3rem,7.5vw,5.5rem)]">
              From &nbsp; ordinary <br />
              <div className="flex items-baseline gap-5 ">
                to
                <span className="text-white overflow-hidden bg-stabilo rounded-2xl font-plus-jakarta italic font-bold pr-8  lowercase mt-4 tracking-[-0.04em]">
                  premium
                </span>

              </div>
            </h1>

            <p className="h-subheadline text-[clamp(1rem,2vw,1.1rem)] text-ink/80 leading-relaxed max-w-[45ch] mb-12 font-normal">
              {dict.subheadline}
            </p>

            <div className="h-cta-group flex flex-wrap items-center gap-4 mb-12">
              <Link
                href={`/${lang}/contact`}
                className="h-cta-button group relative inline-flex items-center bg-linear-to-r from-0% to-100% from-stabilo to-stabilo-soft text-white pl-8 pr-4 py-4 rounded-xl overflow-hidden shadow-lg shadow-stabilo/25 active:scale-[0.98]"
              >
                <div className="relative z-10 label-fn font-normal! tracking-wide text-[20px]! overflow-hidden ">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">{dict.cta_primary}</span>
                  <span className="block absolute top-full transition-transform duration-500 group-hover:-translate-y-full">{dict.cta_primary}</span>
                </div>
                <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 mx-4 transition-transform duration-500 group-hover:rotate-45" />

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>

              <Link
                href={`/${lang}/work`}
                className="h-cta-button group relative inline-flex items-center justify-between bg-white/50 backdrop-blur-sm border border-ink/10 text-ink pl-8 pr-4 py-4 rounded-xl overflow-hidden active:scale-[0.98]"
              >
                <div className="relative z-10 label-fn font-bold tracking-wide text-[20px]! overflow-hidden h-[1.25em]">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">{dict.cta_secondary}</span>
                  <span className="block absolute top-full transition-transform duration-500 group-hover:-translate-y-full">{dict.cta_secondary}</span>
                </div>
                <ArrowUpRight strokeWidth={1.5} className="w-6 h-6 mx-4 transition-transform duration-500 group-hover:rotate-45" />

              </Link>
            </div>

            {/* Quote Block */}
            <div className="h-quote w-fit group relative inline-flex items-center gap-8 bg-card border border-black/5 rounded-[20px] py-5 px-8 shadow-sm hover:shadow-md transition-shadow duration-500">
              <div className="shrink-0 -translate-y-1">
                <RiDoubleQuotesL size={70} className='text-stabilo translate-y-0.5' />
              </div>
              <p className="font-plus-jakarta text-[24px]  text-ink/70 -translate-y-0.5  font-medium max-w-[16ch]">
                {dict.quote.replace(/"/g, '')}
              </p>
            </div>
          </div>

          {/* Right: Curated design system showcase */}
          <div className="hidden lg:block relative w-full h-[600px]">
            {/* Desktop Mockup (Base) */}
            <div className="h-visual-platform absolute top-0 left-0 w-[90%] bg-card border border-ink/10 rounded-2xl shadow-2xl shadow-ink/15 overflow-hidden z-10 origin-top-left">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-warm/50 border-b border-ink/5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-off/70 border border-ink/5 label-meta text-ink/40 text-center truncate">
                  celune.id
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative aspect-4/3 bg-warm">
                <Image
                  src="/images/screenshots/celune_img.png"
                  alt="Célune Skincare — Desktop"
                  fill
                  className="object-cover object-top"
                  sizes="480px"
                  priority
                />
              </div>
            </div>

            {/* Design Spec Strip (Independent Floating Card) */}
            <div className="h-premium-card absolute left-4 bottom-12 w-[85%] grid grid-cols-3 divide-x divide-ink/5 bg-white/80 backdrop-blur-md border border-ink/10 rounded-xl shadow-xl z-50 overflow-hidden">
              {/* Typeface */}
              <div className="flex items-center gap-3 px-5 py-4">
                <span className="font-aktiv-grotesk text-4xl font-bold tracking-[-0.05em] leading-none text-ink">Aa</span>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="label-meta">Type</span>
                  <span className="font-aktiv-grotesk text-xs font-semibold leading-tight truncate">Plus Jakarta</span>
                </div>
              </div>

              {/* Palette */}
              <div className="flex flex-col gap-2 px-5 py-4">
                <span className="label-meta">Palette</span>
                <div className="flex gap-1.5">
                  <span className="w-5 h-5 rounded-sm bg-[#F1EDE9] border border-ink/10" />
                  <span className="w-5 h-5 rounded-sm bg-[#D9C3A6]" />
                  <span className="w-5 h-5 rounded-sm bg-[#8B6F4E]" />
                  <span className="w-5 h-5 rounded-sm bg-[#2A2520]" />
                </div>
              </div>

              {/* Outcome */}
              <div className="flex flex-col gap-1.5 px-5 py-4 justify-center">
                <span className="label-meta">Lift</span>
                <span className="font-aktiv-grotesk text-lg font-bold tracking-[-0.02em] leading-none text-stabilo">+45%</span>
                <span className="font-google text-[10px] text-ink/50 leading-tight">conversion</span>
              </div>
            </div>

            {/* Mobile Browser Mockup (Floating Overlap) */}
            <div className="h-phone-mockup absolute -right-4 top-20 w-[38%] aspect-[9/19] bg-card border border-ink/10 rounded-2xl shadow-2xl z-40 overflow-hidden">
              {/* Browser chrome (Mobile) */}
              <div className="flex items-center gap-1.5 px-3 py-2 bg-warm/50 border-b border-ink/5">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="flex-1 mx-2 px-2 py-0.5 rounded-sm bg-off/70 border border-ink/5 label-meta text-ink/40 text-[8px] text-center truncate">
                  celune.id
                </div>
              </div>

              <div className="relative w-full h-full bg-warm">
                <Image
                  src="/images/screenshots/celune_mobile.png"
                  alt="Célune Skincare — Mobile"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>

            {/* Logo / Branding Card */}
            <div className="h-logo-card absolute -left-8 bottom-32 w-32 bg-white border border-ink/10 rounded-xl p-4 shadow-xl z-30 transform -rotate-6">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-off rounded-full flex items-center justify-center border border-ink/5 overflow-hidden">
                  <span className="font-playfair text-xl font-bold">C</span>
                </div>
                <span className="label-meta text-[10px] text-center">Célune Branding</span>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="h-typo-card absolute left-20 -bottom-4 w-48 bg-white border border-ink/10 rounded-xl p-5 shadow-xl z-20 transform rotate-3">
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-plus-jakarta text-3xl font-bold">Aa</span>
                  <span className="font-plus-jakarta text-xs text-ink/40">Plus Jakarta</span>
                </div>
                <div className="h-px w-full bg-ink/5" />
                <div className="flex flex-col gap-1">
                  <span className="label-meta text-[9px]">The quick brown fox jumps...</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-ink/80" />
                    <span className="w-2 h-2 rounded-full bg-ink/40" />
                    <span className="w-2 h-2 rounded-full bg-ink/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette Card */}
            <div className="h-palette-card absolute right-12 bottom-12 bg-white border border-ink/10 rounded-xl p-4 shadow-xl z-30">
              <div className="flex flex-col gap-3">
                <span className="label-meta text-[9px]">Palette · 01</span>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1 items-center">
                    <div className="w-6 h-6 rounded-sm bg-[#F1EDE9] border border-ink/10" />
                    <span className="text-[7px] font-mono text-ink/40">F1EDE9</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <div className="w-6 h-6 rounded-sm bg-[#D9C3A6]" />
                    <span className="text-[7px] font-mono text-ink/40">D9C3A6</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <div className="w-6 h-6 rounded-sm bg-[#8B6F4E]" />
                    <span className="text-[7px] font-mono text-ink/40">8B6F4E</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles/dots for depth */}
            <div className="h-particle absolute top-10 right-20 w-3 h-3 rounded-full bg-stabilo/20 blur-sm z-0" />
            <div className="h-particle absolute bottom-20 left-1/3 w-4 h-4 rounded-full bg-stabilo/10 blur-md z-0" />
          </div>

          <div className="lg:hidden relative w-full mb-12">
            <div className="bg-card border border-ink/10 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/images/screenshots/celune_img.png" alt="Célune" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stabilo" />
                  <span className="label-meta">Célune Skincare · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Ticker Bar */}
      <div className="relative px-6 md:px-12 lg:px-20 pb-16 ">
        <div className="h-ticker-bar glass-ticker bg-card/80 border-border w-fit rounded-full py-5 px-10 flex items-center justify-center">
          <div className="flex items-center">
            {[
              { icon: TrendingUp, text: 'CONVERSION FOCUSED' },
              { icon: IoSearch, text: 'SEO OPTIMIZED' },
              { icon: Zap, text: 'PERFORMANCE FIRST' },
              { icon: Gauge, text: lang === 'id' ? 'SPEED NOMOR SATU' : 'SPEED NUMBER ONE' }
            ].map((item, i) => (
              <div key={i} className="flex items-center shrink-0 text-ink/70 ">
                {i > 0 && <div className="w-2.5 h-2.5 rounded-full  mx-8 bg-stabilo" />}
                <item.icon className="w-6 h-6 mr-4 " />
                <span className="font-google text-body font-medium  tracking-[-0.02em]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
