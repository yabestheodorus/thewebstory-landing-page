'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { SlideUpLabel } from '../ui/SlideUpLabel'

// Keywords to highlight across both EN and ID answers
const KEYWORD_RE = new RegExp(
  [
    '100%',
    '2[–\\-]3\\s*(?:weeks?|minggu)',
    '4[–\\-]6\\s*(?:weeks?|minggu)',
    'Next\\.js',
    '\\bGSAP\\b',
    '\\bSEO\\b',
    'platform sovereignty',
    'kedaulatan platform',
    'your domain',
    'your assets',
    'the codebase',
    'DP 50%',
    '50/50',
    'Sanity',
    'Vercel',
    'Cloudflare',
  ].join('|'),
  'gi'
)

function HighlightedText({ text }: { text: string }) {
  const parts: React.ReactNode[] = []
  let last = 0
  const re = new RegExp(KEYWORD_RE.source, KEYWORD_RE.flags)
  let match: RegExpExecArray | null

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <mark
        key={match.index}
        className="bg-transparent text-blaze font-semibold not-italic underline decoration-blaze/30 underline-offset-4"
      >
        {match[0]}
      </mark>
    )
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))

  return <>{parts}</>
}

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const faqItems = containerRef.current?.querySelectorAll('.faq-item')
    if (!faqItems?.length) return

    gsap.fromTo(
      faqItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`faq-item group relative border rounded-[2rem] overflow-hidden transition-all duration-500 ${
              isOpen
                ? 'border-blaze/30 bg-white shadow-2xl shadow-blaze/5'
                : 'border-ink/5 bg-white/40 hover:border-ink/15 hover:bg-white/60'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-10 py-8 flex items-center justify-between gap-8 text-left"
            >
              <div className="flex gap-8 items-center">
                <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-blaze/40 tabular-nums select-none shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`font-plus-jakarta text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-blaze' : 'text-ink'}`}>
                  <SlideUpLabel text={item.q} className={isOpen ? 'text-blaze' : ''} />
                </span>
              </div>

              <div
                className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${
                  isOpen
                    ? 'border-blaze bg-blaze text-white rotate-180'
                    : 'border-ink/10 text-ink/40 group-hover:border-blaze group-hover:text-blaze'
                }`}
              >
                {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-10 pt-0 pl-[calc(2.5rem+3rem+2.5rem)]">
                    <div className="h-px bg-blaze/10 mb-8" />
                    <p className="font-google text-lg text-ink/65 leading-relaxed max-w-3xl">
                      <HighlightedText text={item.a} />
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
