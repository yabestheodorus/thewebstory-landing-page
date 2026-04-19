'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Dictionary } from '@/dictionaries/en'

gsap.registerPlugin(ScrollTrigger)

interface FloatingMenuProps {
  lang?: string
  dict?: Dictionary
}

export default function FloatingMenu({ lang = 'en', dict }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: dict?.nav.work || 'Work', href: `/${lang}/work` },
    { label: dict?.nav.services || 'Services', href: `/${lang}/#works-section` },
    { label: dict?.nav.faq || 'FAQ', href: `/${lang}/faq` },
    { label: dict?.nav.contact || 'Contact', href: `/${lang}/#cta-section` },
  ]

  useGSAP(() => {
    gsap.to('.floating-menu-btn', {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: '#statement-section',
        start: 'top top',
        toggleActions: 'play none none reverse',
        immediateRender: true,
      },
    })
  })

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="floating-menu-btn invisible opacity-0 fixed right-6 top-4.5 p-3 rounded-full z-100 bg-stabilo text-off cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-transform duration-150"
      >
        <Menu size={20} />
      </button>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="fm-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-ink/60 dark:bg-black/70 backdrop-blur-sm z-110"
            />

            {/* Panel */}
            <motion.div
              key="fm-panel"
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
              className="fixed top-20 right-6 w-64 bg-off dark:bg-zinc-900 rounded-2xl border border-ink/8 dark:border-white/8 shadow-2xl z-120 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-ink/5 dark:border-white/5">
                <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-stabilo">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full border border-ink/10 dark:border-white/10 flex items-center justify-center hover:border-ink/30 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={13} className="text-ink/60" />
                </button>
              </div>

              {/* Nav links */}
              <ul className="list-none m-0 p-0 py-2">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.28, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-5 py-3.5 font-google text-[0.7rem] font-medium tracking-[0.18em] uppercase text-ink/60 hover:text-ink hover:bg-ink/3 dark:hover:bg-white/3 transition-all duration-150 no-underline"
                    >
                      <span className="font-mono text-[0.55rem] text-stabilo/60 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
