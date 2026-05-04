'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Dictionary } from '@/dictionaries/en'
import { SlideUpLabel } from './ui/SlideUpLabel'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'

interface NavbarProps {
  lang?: string
  dict?: Dictionary
}

const Navbar = ({ lang = 'en', dict }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: dict?.nav.work || 'Work', href: `/${lang}/work` },
    { label: dict?.nav.approach || 'Approach', href: `/${lang}/approach` },
    { label: dict?.nav.services || 'Services', href: `/${lang}/services` },
    { label: dict?.nav.about || 'About', href: `/${lang}/about` },
    { label: dict?.nav.faq || 'FAQ', href: `/${lang}/faq` },
    { label: dict?.nav.contact || 'Contact', href: `/${lang}/contact` },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-500 ease-out ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ease-out px-6 py-3 rounded-full border border-transparent ${scrolled ? 'bg-secondary/80 backdrop-blur-safe border-ink/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)]' : ''}`}>
        
        {/* Left: Branding */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group relative z-10">
          <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/icon.png"
              alt="Icon"
              fill
              className="object-contain invert"
            />
          </div>
          <div className="w-px h-4 bg-ink/20 mx-1" />
          <div className="relative w-24 h-6">
            <Image
              src="/logo.png"
              alt="TheWebStory"
              fill
              className="object-contain invert"
            />
          </div>
        </Link>

        {/* Center: Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group label-fn text-[13px] font-bold tracking-widest uppercase text-ink/40 hover:text-ink transition-colors duration-200"
            >
              <SlideUpLabel text={link.label} />
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 relative z-10">
          <LanguageToggle currentLang={lang} />
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
