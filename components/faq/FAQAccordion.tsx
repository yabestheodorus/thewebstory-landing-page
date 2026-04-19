'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

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
        className="bg-transparent text-stabilo font-semibold not-italic"
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
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.09,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
        },
      }
    )
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className={`faq-item relative border rounded-2xl overflow-hidden backdrop-blur-md transition-colors duration-300 ${
              isOpen
                ? 'border-stabilo/25 bg-white/60 dark:bg-white/4'
                : 'border-ink/5 dark:border-white/5 bg-white/40 dark:bg-white/2 hover:border-ink/15 dark:hover:border-white/15'
            }`}
          >
            {/* Left accent bar */}
            <motion.div
              className="absolute left-0 top-3 bottom-3 w-0.5 bg-stabilo rounded-full"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ transformOrigin: 'top center' }}
            />

            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-8 py-6 flex items-start justify-between gap-6 text-left"
            >
              <div className="flex gap-5 items-start">
                <span className="font-mono text-[0.575rem] tracking-widest text-stabilo/55 pt-0.75 tabular-nums leading-none select-none shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-aktiv-grotesk text-[1.0625rem] font-semibold text-ink tracking-tight leading-snug">
                  {item.q}
                </span>
              </div>

              <motion.div
                className={`shrink-0 mt-0.5 p-1.5 rounded-full border transition-colors duration-300 ${
                  isOpen
                    ? 'border-stabilo/40 bg-stabilo/10'
                    : 'border-ink/10 dark:border-white/10'
                }`}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
              >
                <Plus
                  className={`w-3.5 h-3.5 transition-colors duration-300 ${
                    isOpen ? 'text-stabilo' : 'text-ink/50'
                  }`}
                />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-7 pt-0 pl-20">
                    <div className="h-px bg-stabilo/10 mb-5" />
                    <p className="font-googlea text-[0.9375rem] text-ink/65 leading-relaxed max-w-2xl">
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
