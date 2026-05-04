'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useDevice } from '@/lib/context/DeviceContext'

function LenisSync() {
  useLenis(() => {
    ScrollTrigger.update()
  })

  return null
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always enable lag smoothing for GSAP
    gsap.ticker.lagSmoothing(500, 33)
  }, [])

  const { isMobile } = useDevice()

  // On mobile, native scroll is hardware-accelerated — Lenis only adds JS overhead
  if (isMobile) return <>{children}</>

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        infinite: false,
      }}
    >
      <LenisSync />
      {children}
    </ReactLenis>
  )
}
