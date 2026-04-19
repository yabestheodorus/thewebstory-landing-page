'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#works-section' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-off border-b border-ink/5 z-50">
      <div className="relative w-full py-5 px-6 md:px-10 flex justify-between items-center h-20 max-w-[1440px] mx-auto">

        {/* Left: Icon */}
        <div className="flex-1 flex items-center">
          <Link href="/">
            <img 
              src="/images/icon.png" 
              alt="icon" 
              className="w-10 h-auto object-contain brightness-110 dark:invert-0 invert" 
            />
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/">
            <img 
              src={'/logo.png'} 
              alt='logo' 
              width={200} 
              height={35} 
              className='w-32 md:w-44 h-auto object-contain dark:invert-0 invert' 
            />
          </Link>
        </div>

        {/* Right: Nav links + Theme Toggle */}
        <div className="flex-1 flex justify-end items-center gap-6">
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
        </div>

      </div>
    </nav>
  )
}

export default Navbar
