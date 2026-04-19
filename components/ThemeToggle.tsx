'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'motion/react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center">
      <div className="w-5 h-5 bg-ink/10 rounded-full animate-pulse" />
    </div>
  )

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-full border border-ink/10 hover:border-ink/30 flex items-center justify-center transition-colors overflow-hidden group"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ y: 20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon size={18} className="text-ink group-hover:text-stabilo transition-colors" />
          ) : (
            <Sun size={18} className="text-ink group-hover:text-stabilo transition-colors" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-stabilo/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  )
}
