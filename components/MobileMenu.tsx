'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

export default function MobileMenu({ navLinks }: { navLinks: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger — mobile only */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="md:hidden relative w-10 h-10 rounded-full border border-ink/10 hover:border-ink/30 flex items-center justify-center transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.18 }}
          >
            {isOpen
              ? <X size={16} className="text-ink" />
              : <Menu size={16} className="text-ink" />
            }
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 bg-ink/5 dark:bg-black/30 backdrop-blur-sm md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="fixed top-20 left-0 right-0 bg-secondary/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-ink/5 md:hidden z-40 px-6 py-4"
            >
              <ul className="flex flex-col list-none m-0 p-0">
                {navLinks.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.28, ease: 'easeOut' }}
                    className="border-b border-ink/5 last:border-0"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 py-4 label-fn text-ink/55 hover:text-ink transition-colors duration-200 no-underline"
                    >
                      <span className="label-meta tabular-nums text-blaze/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
