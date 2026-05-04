import type { Project } from '../projects'
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiSanity,
  SiJson,
  SiWhatsapp,
  SiGoogle,
  SiGsap,
  SiVite,
  SiReact,
  SiFramer,
} from 'react-icons/si'

export const TECH_ICONS: Record<string, React.ElementType> = {
  'Next.js': SiNextdotjs,
  'Typescript': SiTypescript,
  'GSAP': SiGsap,
  'ScrollTrigger': SiGsap,
  'Tailwind CSS': SiTailwindcss,
  'Vercel': SiVercel,
  'Sanity CMS': SiSanity,
  'JSON-LD': SiJson,
  'WhatsApp API': SiWhatsapp,
  'SEO': SiGoogle,
  'Vite': SiVite,
  'React': SiReact,
  'Framer Motion': SiFramer,
}

export const colorBg: Record<Project['color'], string> = {
  sand: 'bg-sand',
  warm: 'bg-warm',
  ink: 'bg-ink',
  blaze: 'bg-blaze/10',
}

export const colorText: Record<Project['color'], string> = {
  sand: 'text-ink',
  warm: 'text-ink',
  ink: 'text-off',
  blaze: 'text-ink',
}

export const accentText: Record<Project['color'], string> = {
  sand: 'text-blaze',
  warm: 'text-blaze',
  ink: 'text-blaze',
  blaze: 'text-blaze',
}

export const ornamentGlow: Record<Project['color'], string> = {
  sand: 'rgba(232,93,4,0.12)',
  warm: 'rgba(232,93,4,0.10)',
  ink:  'rgba(232,93,4,0.08)',
  blaze: 'rgba(232,93,4,0.18)',
}

export const ornamentOpacity: Record<Project['color'], number> = {
  sand: 0.28,
  warm: 0.26,
  ink:  0.22,
  blaze: 0.40,
}

export const liveLinkClass: Record<Project['color'], string> = {
  sand: 'border-ink/20 text-ink hover:bg-ink/5',
  warm: 'border-ink/20 text-ink hover:bg-ink/5',
  ink: 'border-off/20 text-off hover:bg-off/10',
  blaze: 'border-ink/20 text-ink hover:bg-ink/5',
}
