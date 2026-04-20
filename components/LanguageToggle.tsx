'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLanguage = (newLang: string) => {
    if (newLang === currentLang) return

    // Replace /[lang]/... with /[newLang]/...
    const pathParts = pathname.split('/')
    pathParts[1] = newLang
    const newPath = pathParts.join('/')
    
    router.push(newPath)
  }

  return (
    <div className="flex items-center gap-1 bg-ink/5 dark:bg-white/5 p-1 rounded-full border border-ink/10 dark:border-white/10 backdrop-blur-sm">
      {['en', 'id'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`
            relative px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase transition-colors duration-300
            ${currentLang === lang ? 'text-off dark:text-white' : 'text-ink/60 dark:text-white/50 hover:text-ink dark:hover:text-white'}
          `}
        >
          {currentLang === lang && (
            <motion.div
              layoutId="lang-active"
              className="absolute inset-0 bg-ink dark:bg-stabilo rounded-full -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {lang}
        </button>
      ))}
    </div>
  )
}
