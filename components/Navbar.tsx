import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import MobileMenu from './MobileMenu'
import { Dictionary } from '@/dictionaries/en'

interface NavbarProps {
  lang?: string
  dict?: Dictionary
}

const Navbar = ({ lang = 'en', dict }: NavbarProps) => {
  const navLinks = [
    { label: dict?.nav.work || 'Work', href: `/${lang}/work` },
    { label: dict?.nav.services || 'Services', href: `/${lang}/#works-section` },
    { label: dict?.nav.faq || 'FAQ', href: `/${lang}/faq` },
  ]

  return (
    <nav className="fixed top-0 w-full bg-off/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-ink/5 z-50">
      <div className="relative w-full py-5 px-6 md:px-10 flex justify-between items-center h-20 max-w-360 mx-auto">

        {/* Left: Icon + Language Toggle */}
        <div className="flex-1 flex items-center gap-4">
          <Link href={`/${lang}`}>
            <img
              src="/images/icon.png"
              alt="icon"
              className="w-8 md:w-10 h-auto object-contain brightness-110 dark:invert-0 invert"
            />
          </Link>
          <LanguageToggle currentLang={lang} />
        </div>

        {/* Center: Logo — pointer-events-none on wrapper so it never blocks sibling clicks */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-none">
          <Link href={`/${lang}`} className="pointer-events-auto">
            <img
              src="/logo.png"
              alt="logo"
              width={200}
              height={35}
              className="w-32 md:w-44 h-auto object-contain dark:invert-0 invert"
            />
          </Link>
        </div>

        {/* Right: Nav links + controls — z-10 ensures it renders above the absolute logo layer */}
        <div className="flex-1 flex justify-end items-center gap-3 md:gap-5 relative z-10">
          <ul className="hidden md:flex gap-8 items-center list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-google text-[0.625rem] font-medium tracking-[0.2em] text-muted-warm hover:text-ink transition-colors duration-200 no-underline uppercase"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />
          <MobileMenu navLinks={navLinks} />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
