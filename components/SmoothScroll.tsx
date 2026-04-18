'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function LenisSync() {
  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    // Add Lenis to GSAP ticker
    function update(time: number) {
      // Lenis handles its own RAF by default in ReactLenis
      // but we can sync with GSAP's ticker if we want precise alignment.
      // However, for most use cases, useLenis call with ScrollTrigger.update is enough.
    }
    
    // We can also do the manual RAF sync here if desired
    // but the useLenis hook above handles the core ScrollTrigger sync.
    gsap.ticker.lagSmoothing(0);
  }, []);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, 
        duration: 1.5, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <LenisSync />
      {children}
    </ReactLenis>
  )
}
