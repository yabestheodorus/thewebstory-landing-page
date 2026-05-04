'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Dictionary } from '@/dictionaries/en'

interface HomeServicesProps {
  lang: string
  dict: any
}

export default function HomeServices({ lang, dict }: HomeServicesProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Reveal header
    gsap.from('.hs-head > *', {
      y: 20,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
    })

    // Mobile scroll-triggered active state
    let mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      gsap.utils.toArray<HTMLElement>('.hs-row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 60%",
          end: "bottom 40%",
          toggleClass: "is-mobile-active",
        });
      });

      gsap.utils.toArray<HTMLElement>('.hs-addon-row').forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 70%",
          end: "bottom 30%",
          toggleClass: "is-mobile-active",
        });
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger && sectionRef.current?.contains(t.trigger as Node)) t.kill()
      })
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative text-ink"
    >
      {/* Header */}
      <div className="hs-head px-6 md:px-16 pt-24 md:pt-40 pb-12 md:pb-20 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="label-meta text-[14px] font-bold text-blaze uppercase tracking-[0.3em]">{dict.overline}</span>
        </div>

        <h2 className="font-aktiv-grotesk text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.04em] max-w-4xl">
          {dict.heading}
        </h2>
      </div>

      {/* Services List with Restored Details */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-32">
        <div className="flex flex-col border-t border-ink/5">
          {dict?.packages?.map((pkg: any, i: number) => (
            <Link
              key={pkg.tier}
              href={`/${lang}/services/${pkg.slug}`}
              className="hs-row group relative flex flex-col md:grid md:grid-cols-[1.5fr_1.2fr_auto] gap-y-12 md:gap-y-0 gap-x-16 py-16 md:py-24 border-b border-blaze/60 transition-all duration-500"
            >
              {/* Column 1: Identity & Description */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <span className="font-aktiv-grotesk text-ink/10 font-black text-4xl md:text-6xl tracking-tighter">0{i + 1}</span>
                  <h3 className="font-aktiv-grotesk text-[32px] md:text-[64px] font-bold text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors duration-500 leading-none">
                    {pkg.tier}
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-aktiv-grotesk text-[20px] md:text-[28px] text-ink/80 font-medium leading-tight">
                    {pkg.hero?.subheadline || pkg.tagline}
                  </p>
                  <p className="label-fn text-ink/40 text-[14px] font-medium leading-relaxed max-w-[40ch]">
                    Best for: {pkg.best_for?.heading ? pkg.best_for.points[0] : pkg.best_for}
                  </p>
                </div>
              </div>

              {/* Column 2: Features (Restored) */}
              <div className="flex flex-col gap-6">
                <span className="label-meta text-ink/20 text-[11px] font-black uppercase tracking-[0.2em]">{dict.labels?.whats_included}</span>
                <ul className="flex flex-col gap-4">
                  {(pkg?.what_you_get?.items || pkg?.features || []).slice(0, 5).map((feature: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blaze/40 mt-0.5 shrink-0" />
                      <span className="label-fn text-ink/60 text-[16px] font-medium leading-tight group-hover:text-ink in-[.is-mobile-active]:text-ink transition-colors duration-500">
                        {typeof feature === 'string' ? feature : feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Impact & CTA */}
              <div className="flex flex-col md:items-end justify-between py-2 relative z-10">
                <div className="text-left md:text-right">
                  <span className="label-meta text-ink/20 mb-2 text-xs font-bold uppercase tracking-widest block">{dict.labels?.price_start}</span>
                  <div className="flex flex-col md:items-end">
                    {pkg.original_price && (
                      <span className="text-ink/20 line-through text-sm font-medium mb-1 decoration-blaze/50 block">{pkg.original_price}</span>
                    )}
                    <div className="font-aktiv-grotesk text-ink font-bold text-[36px] md:text-[52px] tracking-tighter leading-none">{pkg.price}</div>
                  </div>
                  <span className="label-meta text-blaze font-black text-[12px] uppercase tracking-[0.2em] mt-3 block">{pkg.delivery} {dict.labels?.delivery_suffix}</span>
                </div>

                <div className="mt-12 md:mt-0 flex items-center justify-center w-16 h-16 rounded-full border border-ink/5 group-hover:bg-blaze group-hover:border-blaze group-hover:text-white in-[.is-mobile-active]:bg-blaze in-[.is-mobile-active]:border-blaze in-[.is-mobile-active]:text-white transition-all duration-500 shadow-sm">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Add-ons List with Details */}
        <div className="mt-20 md:mt-40 flex flex-col">
          <div className="mb-12">
            <h3 className="label-meta text-blaze font-bold text-[14px] tracking-[0.3em] uppercase">{dict.labels?.premium_addons}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {dict?.addons?.map((addon: any) => (
              <Link
                key={addon.name}
                href={`/${lang}/services/${addon.slug}`}
                className="hs-addon-row group flex flex-col gap-6 p-10 md:p-14 rounded-[40px] border border-ink/5 bg-card/30 hover:bg-card/80 hover:border-blaze/20 in-[.is-mobile-active]:bg-card/80 in-[.is-mobile-active]:border-blaze/20 hover:shadow-2xl hover:shadow-blaze/5 in-[.is-mobile-active]:shadow-2xl in-[.is-mobile-active]:shadow-blaze/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blaze/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 in-[.is-mobile-active]:opacity-100 transition-opacity duration-700" />
                <div className="flex items-center justify-between relative z-10">
                  <h4 className="font-aktiv-grotesk text-[28px] md:text-[36px] font-bold text-ink group-hover:text-blaze in-[.is-mobile-active]:text-blaze transition-colors">
                    {addon.name}
                  </h4>
                  <div className="w-12 h-12 rounded-full border border-ink/5 flex items-center justify-center group-hover:bg-blaze group-hover:border-blaze group-hover:text-white in-[.is-mobile-active]:bg-blaze in-[.is-mobile-active]:border-blaze in-[.is-mobile-active]:text-white transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <p className="label-fn text-ink/50 text-[18px] leading-relaxed font-medium relative z-10">
                  {addon.hero?.subheadline || addon.body || addon.description}
                </p>
                <div className="mt-auto pt-8 flex items-end justify-between border-t border-ink/5 relative z-10">
                  <div className="flex flex-col">
                    <span className="label-meta text-ink/20 text-[10px] font-bold uppercase tracking-widest mb-1">{dict.labels?.price_start}</span>
                    <div className="flex flex-col">
                      {addon.original_price && (
                        <span className="text-ink/20 line-through text-xs font-medium decoration-blaze/50 block mb-0.5">{addon.original_price}</span>
                      )}
                      <span className="font-aktiv-grotesk text-ink font-bold text-[24px] tracking-tight leading-none">{addon.price}</span>
                    </div>
                  </div>
                  <span className="label-meta text-blaze text-[11px] font-black uppercase tracking-widest">+{addon.delivery}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Simplified Disclaimer */}
        <div className="mt-32 md:mt-48 text-center max-w-4xl mx-auto border-t border-ink/5 pt-16">
          <p className="label-fn text-ink/30 text-[14px] md:text-[16px] leading-relaxed font-medium italic">
            {dict?.disclaimer?.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
