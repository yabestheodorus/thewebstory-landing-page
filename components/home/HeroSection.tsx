"use client";
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, SplitText } from "@/lib/gsap"
import { ArrowRight } from "lucide-react"
import BeforeAfterSlider from "./BeforeAfterSlider"
import DotField from "@/components/reactbits/DotField"
import RotatingText from "@/components/RotatingText"
import { useDevice } from "@/lib/context/DeviceContext"

const TICKER_TEXT =
  'Premium Web Design\u00a0\u00a0×\u00a0\u00a0 Digital Storytelling\u00a0\u00a0×\u00a0\u00a0 2026 Motion Trends\u00a0\u00a0×\u00a0\u00a0 Brand to Direct\u00a0\u00a0×\u00a0\u00a0 Marketplace Migration\u00a0\u00a0×\u00a0\u00a0 Animated Experiences\u00a0\u00a0×\u00a0\u00a0 '

const stats = [
  { val: 'Custom', label: 'Built from scratch' },
  { val: 'SEO', label: 'Search optimized' },
  { val: 'Fast', label: 'Sub-second loads' },
  { val: 'Yours', label: 'Full ownership' },
]
const pills = [
  { label: 'Motion UI', active: true },
  { label: 'Scroll animation', active: true },
  { label: 'Brand identity', active: false },
  { label: 'Direct checkout', active: true },
  { label: 'SEO structure', active: false },
  { label: 'CMS setup', active: false },
]

export default function HeroSection() {
  const { isMobile } = useDevice();
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.23, 1, 0.32, 1)'
    
    // Split the headline into words for a premium reveal
    const split = new SplitText('.h-headline', { type: 'lines,words' })
    split.lines.forEach(line => {
      const mask = document.createElement('div')
      mask.style.overflow = 'hidden'
      line.parentNode?.insertBefore(mask, line)
      mask.appendChild(line)
    })

    const tl = gsap.timeline({ defaults: { ease } })

    tl.from('.h-ticker', { y: -40, opacity: 0, duration: 0.8 })
      .from('.h-side', { x: -20, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.h-overline', { y: 14, opacity: 0, duration: 0.65 }, '-=0.5')
      .from(split.words, { 
        y: '100%', 
        opacity: 0, 
        duration: 0.9, 
        stagger: 0.035, 
        ease: 'power3.out' 
      }, '-=0.4')
      .from('.h-body', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
      .from('.h-cta', { y: 15, opacity: 0, duration: 0.75, stagger: 0.12 }, '-=0.5')
      .from('.h-right', { x: 40, opacity: 0, duration: 1.2, ease: 'expo.out' }, '-=1.2')
      .from('.h-stats', { y: 40, opacity: 0, duration: 0.9 }, '-=0.7')
      .from('.h-meta', { opacity: 0, duration: 0.6 }, '-=0.3')
    
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative flex flex-col min-h-screen bg-off text-ink overflow-hidden">

      {/* Ticker */}
      <div className="h-ticker relative w-full max-w-full bg-ink text-off py-2.25 overflow-hidden whitespace-nowrap border-b border-border">
        <span className="animate-ticker inline-block font-mono text-[0.625rem] tracking-[0.14em] uppercase">
          {TICKER_TEXT}{TICKER_TEXT}
        </span>
      </div>

      {/* Hero grid */}
      <div className="flex flex-col  lg:grid lg:grid-cols-2 xl:grid-cols-[56px_1fr_1fr] grow">

        {/* Side column — Only on Desktop */}
        <div className="h-side hidden xl:flex  flex-col items-center justify-center py-5 gap-5">
          <span className="font-mono text-[0.5625rem] text-muted-warm tracking-widest [writing-mode:vertical-rl] rotate-180">
            01 / 06
          </span>
          <span className="font-mono text-[0.5625rem] text-muted-warm tracking-widest [writing-mode:vertical-rl] rotate-180">
            Studio
          </span>
        </div>

        {/* Left content */}
        <div className="pt-10 px-6 pb-12 md:p-10 lg:p-12 xl:pt-12 xl:pr-12 xl:pb-10 xl:pl-10 flex flex-col justify-between min-w-0">
          <div className="flex flex-col justify-center items-center lg:items-start h-full relative">
            {/* Overline */}
            <div className="h-overline flex items-center gap-2.5 mb-8">
              <div className="w-7 h-px bg-muted-warm" />
              <span className="font-mono text-[0.5625rem] font-normal tracking-[0.22em] uppercase text-muted-warm">
                Web Design Agency — Jakarta
              </span>
            </div>

            {/* Headline */}
            <h1 className="h-headline font-aktiv-grotesk text-[clamp(2.25rem,6vw+0.5rem,3.875rem)] font-bold leading-[1.1] md:leading-none tracking-[-0.02em] text-ink mb-7 text-center lg:text-left mt-36 lg:mt-0">
              Every brand has a <span className="text-muted-warm">story.</span>
              <br />
              We give yours a{' '}
              <RotatingText
                texts={[
                  'stage.',
                  'home.',
                  'voice.',
                  'future.',
                ]}
                mainClassName="relative inline-block bg-stabilo/80 w-fit px-3 md:px-5 py-1 mt-2 text-ink/90 overflow-hidden rounded-lg font-bold"
                staggerFrom="last"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3500}
                splitBy="characters"
                auto
                loop
              />
            </h1>

            {/* Body copy */}
            <p className="h-body font-google text-sm leading-[1.75] text-muted-warm max-w-[480px] lg:max-w-[420px] mb-10 mt-6 lg:mt-0 text-center lg:text-left ">
              We build immersive, motion-driven websites that turn your brand&apos;s narrative into a high-conversion digital reality.
            </p>

            {/* CTAs */}
            <div className="flex px-6 gap-8 sm:gap-12 xl:absolute xl:bottom-4 xl:inset-x-0 mt-8 xl:mt-0 mb-10 lg:mb-0 w-full justify-between">
              <div className="h-cta group cursor-pointer flex flex-col">
                <div className="flex items-center gap-x-4 font-medium font-google ">
                  View Works
                  <ArrowRight className="group-hover:rotate-0 -rotate-45  duration-300" />
                </div>
                <div className="flex items-center h-0.5 gap-x-0.5 pr-1 mt-1">
                  <div className="w-1 h-full bg-ink" /><div className="group-hover:grow w-4 duration-300 h-full bg-ink" />
                </div>
              </div>

              <div className="h-cta group cursor-pointer flex flex-col">
                <div className="flex items-center gap-x-4 font-medium font-google ">
                  Start project
                  <ArrowRight className="group-hover:rotate-0 -rotate-45  duration-300" />
                </div>
                <div className="flex items-center h-0.5 gap-x-0.5 pr-1 mt-1">
                  <div className="w-1 h-full bg-ink" /><div className="group-hover:grow w-4 duration-300 h-full bg-ink" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right content */}
        <div className="h-right relative flex flex-col justify-between bg-off pb-10 xl:pb-0 overflow-hidden">

          <div className="absolute top-0 left-0 w-full h-full">
            <DotField
              dotRadius={2.5}
              dotSpacing={20}
              cursorRadius={350}
              cursorForce={0.1}
              bulgeOnly
              bulgeStrength={67}
              glowRadius={160}
              sparkle={false}
              waveAmplitude={0}
              gradientFrom="rgba(8, 7, 10, 0.12)"
              gradientTo="rgba(8, 7, 10, 0.05)"
              glowColor="rgba(0,0,0,0)"
            />
          </div>

          {/* Label */}
          <div className="pt-7 px-7 flex items-center justify-between mb-5">
            <div className="font-mono text-[0.5625rem] tracking-[0.16em] uppercase text-muted-warm">
              What we build
            </div>

          </div>

          {/* Before / After slider */}
          <BeforeAfterSlider />


          {/* Pills + client strip */}
          <div className="pt-5 px-7 pb-6">
            <div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
              {pills.map(({ label, active }) => (
                <div
                  key={label}
                  className={`font-mono text-[0.5625rem] tracking-widest uppercase py-1.5 px-3.5 border ${active
                    ? 'border-stabilo bg-stabilo text-ink'
                    : 'border-ink/[0.12] bg-off text-muted-warm'
                    }`}
                >
                  {label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Stats Marquee — Full Width */}
      <div className="h-stats relative py-7 border-t border-b border-border overflow-hidden bg-off">
        <div className="flex w-max animate-marquee gap-16 md:gap-24">
          {[...stats, ...stats, ...stats, ...stats].map(({ val, label }, i) => (
            <div key={i} className="flex items-center gap-5 shrink-0 px-4">
              <span className="font-aktiv-grotesk text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink leading-none">
                {val}
              </span>
              <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-ink/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom meta */}
      <div className="h-meta py-6 px-6 md:px-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="font-mono text-[0.625rem] tracking-[0.14em] uppercase text-ink flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2">
          <span>Est. 2024</span>
          <span className="text-stabilo font-bold text-2xl">·</span>
          <span>Design — Motion — Conversion</span>
          <span className="text-stabilo font-bold text-2xl">·</span>
          <span>2026 Trend Forward</span>
        </div>
        <div className="font-aktiv-grotesk italic text-[0.875rem] text-ink/80 text-center md:text-right">
          &quot;Your brand deserves its own stage.&quot;
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-sand pointer-events-none" />

    </div>
  )
}
