'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import Image from 'next/image'

const team = [
  {
    name: 'Yabes Theo',
    role: 'Creative Director & Founder',
    image: '/images/person2.png',
    bio: 'Obsessed with the intersection of cinematic motion and conversion engineering.'
  },
  {
    name: 'R. S. Putra',
    role: 'Lead Architect',
    image: '/images/person1.png',
    bio: 'Engineering high-performance digital artifacts that defy layout shifts.'
  }
]

import { Dictionary } from '@/dictionaries/en'

export function AboutTeam({ dict }: { dict: Dictionary['about']['team'] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.team-card', {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-32 px-8 md:px-16 bg-off overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-stabilo">{dict.overline}</span>
              <span className="w-8 h-px bg-ink/15" />
              <span className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-ink/50">Human Factor</span>
            </div>
            <h2 className="font-plus-jakarta text-h1 font-bold leading-tight tracking-[-0.03em] text-ink">
              {dict.title}
            </h2>
          </div>
          <p className="font-google text-sm leading-[1.85] text-muted-warm max-w-xs text-right hidden md:block">
            {dict.description}
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {team.map((member) => (
            <div key={member.name} className="team-card flex flex-col gap-10">
              <div className="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-elastic">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700" 
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-aktiv-grotesk text-2xl font-bold text-ink">{member.name}</h3>
                  <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-stabilo">{member.role}</span>
                </div>
                <p className="font-google text-base leading-relaxed text-muted-warm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
