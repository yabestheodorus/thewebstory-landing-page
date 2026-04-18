'use client'

import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: '01',
    title: 'Company Profile Website',
    category: 'Presence',
    deliverable: 'Full website',
    timeline: '2–4 wks',
    description:
      'A premium digital storefront that tells your brand story. Animated, fast, and designed to make first impressions that convert visitors into inquiries.',
    keywords: ['About', 'Services', 'Contact', 'SEO-ready'],
  },
  {
    id: '02',
    title: 'Product Landing Page',
    category: 'Launch',
    deliverable: 'Landing page',
    timeline: '1–2 wks',
    description:
      'One product. One page. One goal — conversion. Motion-driven layouts built to showcase what you sell and drive action fast.',
    keywords: ['Hero section', 'CTA-focused', 'Mobile-first', 'Analytics'],
  },
  {
    id: '03',
    title: 'Product Catalogue',
    category: 'Showcase',
    deliverable: 'Catalogue site',
    timeline: '2–4 wks',
    description:
      'Display your full product line in one place. Customers browse, filter, and enquire — perfect for brands not ready for online checkout yet.',
    keywords: ['Product grid', 'Filters', 'WhatsApp link', 'Enquiry form'],
  },
  {
    id: '04',
    title: 'Online Store',
    category: 'Commerce',
    deliverable: 'E-commerce site',
    timeline: '4–8 wks',
    description:
      'Your own storefront — not a marketplace listing. Cart, checkout, and payment integration you fully own and control.',
    keywords: ['Add to cart', 'Checkout flow', 'Order confirmation', 'Payment gateway'],
  },
  {
    id: '05',
    title: 'Portfolio & Personal Brand',
    category: 'Identity',
    deliverable: 'Portfolio site',
    timeline: '2–3 wks',
    description:
      'For creators, freelancers, and founders who need a digital home. Showcase your work, tell your story, and own your audience.',
    keywords: ['Case studies', 'Gallery', 'Blog-ready', 'Social links'],
  },
  {
    id: '06',
    title: 'Payment Integration',
    category: 'Checkout',
    deliverable: 'Payment system',
    timeline: '1–2 wks',
    description:
      'We connect your site to the gateways Indonesian customers already trust. Verified checkout that feels as safe as any marketplace.',
    keywords: ['GoPay', 'OVO', 'BCA', 'QRIS', 'Visa'],
    logos: [
      { name: 'GoPay', src: '/images/logos/gopay.png' },
      { name: 'OVO', src: '/images/logos/ovo.png' },
      { name: 'BCA', src: '/images/logos/bca.png' },
      { name: 'QRIS', src: '/images/logos/qris.png' },
      { name: 'Visa', src: '/images/logos/visa.png' },
    ],
  },
]
export default function WorksSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.works-header', {
      opacity: 0,
      y: 32,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from('.works-col-headers', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.works-col-headers',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.utils.toArray<HTMLElement>('.works-row').forEach((row, i) => {
      gsap.from(row, {
        opacity: 0,
        x: -24,
        duration: 0.7,
        ease: 'power3.out',
        delay: i * 0.07,
        scrollTrigger: {
          trigger: row,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="works-section"
      className="relative text-off overflow-hidden"
      style={{
        background: [
          'radial-gradient(ellipse 900px 700px at 88% 0%, rgba(124,92,255,0.09) 0%, transparent 58%)',
          'radial-gradient(ellipse 500px 400px at 8% 100%, rgba(124,92,255,0.05) 0%, transparent 65%)',
          '#0D0D0D',
        ].join(', '),
      }}
    >
      {/* ─── Background ornaments ──────────────────────────────────── */}

      {/* Glow blobs — inline so z-index stays above the section background */}
      <div className="absolute pointer-events-none select-none rounded-full top-0 right-0"
        style={{ width: 800, height: 800, background: 'var(--color-stabilo)', filter: 'blur(140px)', opacity: 0.13, transform: 'translate(35%,-35%)' }} />
      <div className="absolute pointer-events-none select-none rounded-full bottom-0 left-0"
        style={{ width: 500, height: 500, background: 'var(--color-stabilo)', filter: 'blur(120px)', opacity: 0.07, transform: 'translate(-30%,30%)' }} />

      {/* Dashed orbital ring — top-right corner, partially cropped */}
      <svg
        className="absolute pointer-events-none select-none"
        style={{ top: '-100px', right: '4%', opacity: 0.18 }}
        width="560" height="560" viewBox="0 0 560 560" fill="none"
      >
        <circle cx="280" cy="280" r="279" stroke="var(--color-stabilo)" strokeWidth="1" strokeDasharray="4 12" />
        <circle cx="280" cy="280" r="185" stroke="var(--color-ink)" strokeWidth="0.6" strokeDasharray="2 16" />
      </svg>

      {/* Scattered cross marks */}
      <svg className="absolute pointer-events-none select-none" style={{ top: '18%', left: '3%', opacity: 0.28 }} width="18" height="18" viewBox="0 0 18 18" fill="none">
        <line x1="9" y1="0" x2="9" y2="18" stroke="var(--color-stabilo)" strokeWidth="1" />
        <line x1="0" y1="9" x2="18" y2="9" stroke="var(--color-stabilo)" strokeWidth="1" />
      </svg>
      <svg className="absolute pointer-events-none select-none" style={{ top: '40%', right: '5%', opacity: 0.18 }} width="24" height="24" viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="0" x2="12" y2="24" stroke="var(--color-ink)" strokeWidth="1" />
        <line x1="0" y1="12" x2="24" y2="12" stroke="var(--color-ink)" strokeWidth="1" />
      </svg>
      <svg className="absolute pointer-events-none select-none" style={{ top: '63%', left: '47%', opacity: 0.14 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="0" x2="7" y2="14" stroke="var(--color-ink)" strokeWidth="1" />
        <line x1="0" y1="7" x2="14" y2="7" stroke="var(--color-ink)" strokeWidth="1" />
      </svg>
      <svg className="absolute pointer-events-none select-none" style={{ bottom: '13%', right: '26%', opacity: 0.22 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
        <line x1="8" y1="0" x2="8" y2="16" stroke="var(--color-stabilo)" strokeWidth="1" />
        <line x1="0" y1="8" x2="16" y2="8" stroke="var(--color-stabilo)" strokeWidth="1" />
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.04,
        }}
      />

      {/* Section header */}
      <div className="works-header px-8 md:px-16 pt-24 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-b border-off/5">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-stabilo">02 / 06</span>
            <span className="w-6 h-px bg-off/10" />
            <span className="font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-muted-warm">Our Expertise</span>
          </div>
          <h2 className="font-aktiv-grotesk text-[clamp(2.625rem,4vw+1rem,4rem)] font-bold leading-none tracking-[-0.025em] text-ink">
            We build websites<br />
            that feel like{' '}
            <em className="italic font-light text-stabilo/60">products.</em>
          </h2>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
          <span className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-muted-warm">Services</span>
          <span className="font-aktiv-grotesk text-7xl font-bold leading-none select-none text-stabilo">
            {`0${services.length}`}
          </span>
        </div>
      </div>

      {/* Column headers */}
      <div className="works-col-headers hidden md:grid grid-cols-[48px_1fr_140px_100px_44px] px-8 md:px-16 py-3 border-b border-off/5">
        <div />
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">Service</span>
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">Category</span>
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm">Timeline</span>
        <div />
      </div>

      {/* Rows */}
      <div>
        {services.map((service, idx) => {
          const isActive = activeIdx === idx
          return (
            <div
              key={service.id}
              className="works-row border-b border-off/5"
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Main row */}
              <div
                className="relative overflow-hidden grid grid-cols-[48px_1fr_auto] md:grid-cols-[48px_1fr_140px_100px_44px] items-center px-8 md:px-16 py-7 transition-colors duration-300"
                style={{ backgroundColor: isActive ? 'rgba(253,251,250,0.03)' : 'transparent' }}
              >
                {/* Ghost number */}
                <span
                  className="absolute right-12 font-aktiv-grotesk font-bold leading-none select-none pointer-events-none transition-all duration-500"
                  style={{
                    fontSize: 'clamp(80px,12vw,140px)',
                    color: isActive ? 'rgba(124,92,255,0.15)' : 'rgba(253,251,250,0.08)',
                    transform: isActive ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
                  }}
                >
                  {service.id}
                </span>

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-stabilo transition-transform duration-300 origin-bottom"
                  style={{ transform: isActive ? 'scaleY(1)' : 'scaleY(0)' }}
                />

                {/* Index */}
                <span className="font-mono text-[0.5625rem] tracking-widest text-muted-warm relative z-10">
                  {service.id}
                </span>

                {/* Title + mobile category tag */}
                <div className="flex flex-col gap-1.5 relative z-10 pr-4">
                  <span
                    className="font-aktiv-grotesk text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] font-semibold leading-tight transition-colors duration-300"
                    style={{ color: isActive ? 'var(--color-stabilo)' : 'var(--color-ink)' }}
                  >
                    {service.title}
                  </span>
                  <span className="md:hidden font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm">
                    {service.category} · {service.timeline}
                  </span>
                </div>

                {/* Category — desktop only */}
                <span className="hidden md:block font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm relative z-10">
                  {service.category}
                </span>

                {/* Timeline — desktop only */}
                <span className="hidden md:block font-mono text-[0.5rem] tracking-widest text-muted-warm relative z-10">
                  {service.timeline}
                </span>

                {/* Arrow */}
                <div
                  className="relative z-10 flex justify-end transition-transform duration-300"
                  style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke={isActive ? 'var(--color-stabilo)' : 'var(--color-off)'} opacity={isActive ? 1 : 0.4} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Expanded content */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: isActive ? '320px' : '0px',
                  transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div
                  className="pb-10 grid md:grid-cols-[1fr_180px] gap-6 md:gap-16 px-8 md:pr-16"
                  style={{ paddingLeft: 'calc(2rem + 48px)' }}
                >
                  {/* Description + pills */}
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="font-googlea text-[clamp(0.8125rem,1vw+0.4rem,0.875rem)] leading-[1.85] text-ink/65 max-w-lg">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((kw) => (
                        <span key={kw} className="font-mono text-[0.5625rem] tracking-widest uppercase px-2.5 py-1 border border-ink/15 text-muted-warm">
                          {kw}
                        </span>
                      ))}
                    </div>
                    {service.logos && (
                      <div className="flex flex-wrap gap-5 items-center mt-1">
                        {service.logos.map((logo) => (
                          <div key={logo.name} className="relative h-4 w-12 grayscale opacity-25 hover:opacity-50 transition-opacity duration-300">
                            <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="48px" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Meta — stacked column on desktop, horizontal strip on mobile */}
                  <div className="flex flex-row md:flex-col gap-6 md:gap-4 pt-1 flex-wrap">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">Deliverable</span>
                      <span className="font-mono text-[0.625rem] text-ink/70">{service.deliverable}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">Timeline</span>
                      <span className="font-mono text-[0.625rem] text-ink/70">{service.timeline}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">Category</span>
                      <span className="font-mono text-[0.625rem] text-stabilo">{service.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-8 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-off/5">
        <span className="font-mono text-[0.5rem] tracking-[0.22em] uppercase text-muted-warm/40">
          Est. 2024 — Jakarta, Indonesia
        </span>
        <button className="group flex items-center gap-4 font-mono text-[0.5625rem] tracking-[0.22em] uppercase text-ink hover:text-stabilo transition-colors duration-300">
          Start a project
          <span className="h-px w-8 bg-muted-warm group-hover:bg-stabilo group-hover:w-14 inline-block transition-all duration-500" />
        </button>
      </div>
    </section>
  )
}
