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

  useEffect(() => {
    gsap.ticker.lagSmoothing(500, 33)
  }, [])

  return null
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
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
