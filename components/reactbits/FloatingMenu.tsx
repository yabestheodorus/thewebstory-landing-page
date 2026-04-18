'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function FloatingMenu() {

  // Wordmark: scrubbed with navbar fade (0 → 80px scroll)
  useGSAP(() => {

    gsap.to(".navbar-scrolled", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#statement-section",
        start: "top top",
        toggleActions: "play none none reverse",
        immediateRender: true
      },
    })
  })



  return (
    <>
      {/* Right — hamburger */}
      <div
        className="navbar-scrolled fixed right-6 top-[18px] opacity-0 p-3 rounded-full z-[100] bg-stabilo text-off cursor-pointer shadow-lg"
      >
        <Menu size={20} />
      </div>
    </>
  )
}
