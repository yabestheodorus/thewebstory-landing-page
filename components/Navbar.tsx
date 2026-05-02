
import Link from 'next/link'
import Image from 'next/image'
import { Dictionary } from '@/dictionaries/en'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'

interface NavbarProps {
  lang?: string
  dict?: Dictionary
}

const Navbar = ({ lang = 'en', dict }: NavbarProps) => {
  const navLinks = [
    { label: dict?.nav.work || 'Work', href: `/${lang}/work` },
    { label: dict?.nav.approach || 'Approach', href: `/${lang}/approach` },
    { label: lang === 'id' ? 'Tentang' : 'About', href: `/${lang}/about` },
    { label: dict?.nav.contact || 'Contact', href: `/${lang}/contact` },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6 pointer-events-none">
      <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto">
        {/* Left: Branding */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
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
              className="object-contain"
            />
          </div>
        </Link>

        {/* Center: Nav Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 bg-white/80 backdrop-blur-md px-10 py-4 rounded-full border border-ink/5 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="label-fn text-[16px] font-bold text-ink/60 hover:text-stabilo transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <LanguageToggle lang={lang} />
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
