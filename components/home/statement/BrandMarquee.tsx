'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { Brand } from './statementData'

interface BrandMarqueeProps {
  brands: Brand[]
}

export function BrandMarquee({ brands }: BrandMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 28,
        ease: 'none',
      })
    }
  }, { scope: marqueeRef })

  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
      />
      <div ref={marqueeRef} className="flex w-fit items-center gap-4">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={i}
            className="flex items-center px-8 py-5 border border-ink/8 shrink-0 hover:border-stabilo-soft/25 hover:bg-ink/5 transition-all duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}