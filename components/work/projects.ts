export type Project = {
  id: string
  slug: string
  title: string
  client: string
  url: string
  year: string
  category: string
  tags: string[]
  description: string
  featured?: boolean
  color: 'sand' | 'warm' | 'ink' | 'stabilo'
  // Case study detail fields
  headline?: string
  headlineHighlights?: string[]
  challenge?: string
  solution?: string
  results?: { value: string; label: string; suffix?: string }[]
  deliverables?: { title: string; description: string }[]
  services?: string[]
  timeline?: string
  techStack?: string[]
  testimonial?: { quote: string; author: string; role: string }
  videoDesktop?: string
  videoMobile?: string
  backgroundImage?: string
  isConcept?: boolean
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'celune',
    title: 'Célune',
    client: 'Célune Skincare (Case Studies)',
    url: 'https://celune.yabestheo.dev',
    year: '2026',
    category: 'E-commerce',
    tags: ['Online Store', 'Motion UI', 'Checkout'],
    description:
      'A botanical skincare brand elevated from social selling to a fully-owned online store with editorial-grade product showcases and integrated payment.',
    featured: true,
    color: 'sand',
    headline: 'From social selling to a store that converts while you sleep.',
    headlineHighlights: ['converts while you sleep'],
    challenge:
      'Célune was managing orders through Instagram DMs and WhatsApp — no cart, no checkout, no customer data ownership. As demand grew, the manual process became a bottleneck. High-intent browsers dropped off when buying meant sending a message and waiting for a reply.',
    solution:
      'We built a fully-owned e-commerce experience with an editorial design language that matches the brand\'s botanical identity. GSAP-powered scroll animations, countdown-driven product launches, and a streamlined checkout through Midtrans — GoPay, OVO, and bank transfer — all on a mobile-first layout designed for the way Indonesian customers actually shop.',
    results: [
      { value: '3', label: 'Weeks to launch' },
      { value: '45', suffix: '%', label: 'Reduction in manual DMs' },
      { value: '1', label: 'Fully-owned sales engine' },
    ],
    deliverables: [
      { title: 'Product Catalogue', description: 'Editorial product pages with skin-condition filters, ratings, and dynamic pricing display.' },
      { title: 'Checkout & Payment', description: 'Cart-to-confirmation flow with GoPay, OVO, and bank transfer integrated through Midtrans.' },
      { title: 'Motion UI System', description: 'GSAP-powered page transitions, scroll reveals, countdown timers, and hover micro-interactions across every section.' },
      { title: 'Mobile-First Layout', description: 'Touch-optimised navigation, swipe product galleries, and sticky purchase CTAs built for mobile-dominant traffic.' },
    ],
    services: ['UX & Visual Design', 'Frontend Development', 'Motion UI', 'SEO'],
    timeline: '3 weeks',
    techStack: ['Next.js', 'Typescript', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"We used to lose customers somewhere between the DMs. Now the store closes sales at 2am while we sleep."',
      author: 'Founder',
      role: 'Célune Skincare',
    },
    backgroundImage: '/images/screenshots/celune_img.png',
    videoDesktop: '/videos/celune_desktop.mp4',
    videoMobile: '/videos/celune_phone.mp4',
  },

  {
    id: '02',
    slug: 'formique',
    title: 'Formique',
    client: 'Formique Architecture  (Case Studies)',
    url: 'https://formique.yabestheo.dev',
    year: '2026',
    category: 'Company Profile',
    tags: ['Architecture', 'Motion UI', 'Scroll Animation'],
    description:
      'A portfolio piece — a scroll-driven company profile for a fictional architecture studio specialising in residential cluster housing across Indonesia.',
    featured: true,
    color: 'ink',
    headline: 'An architecture studio website built to feel as considered as the buildings.',
    headlineHighlights: ['as considered as the buildings'],
    challenge:
      'Architecture firms in Indonesia often rely on generic WordPress templates or marketplace listings that flatten their work into thumbnail grids. The brief was to design a studio website where the digital experience reflects the same spatial awareness and material sensibility as the built projects.',
    solution:
      'We designed a scroll-driven company profile with GSAP-powered section transitions that mirror architectural movement — slow reveals, deliberate pacing, and generous whitespace. Project showcases use parallax imagery and pinned layouts that let each residential cluster breathe on screen the way it would in person.',
    results: [
      { value: '6', suffix: '+', label: 'Scroll sequences' },
      { value: '1', label: 'Seamless experience' },
      { value: '2', label: 'Weeks to build' },
    ],
    deliverables: [
      { title: 'Scroll-Driven Layout', description: 'Pinned hero, parallax project imagery, and choreographed section reveals that guide the visitor through the studio narrative.' },
      { title: 'Project Showcases', description: 'Full-bleed image layouts for residential cluster projects with location tags, specs, and smooth gallery transitions.' },
      { title: 'Motion Typography', description: 'GSAP-animated headlines with staggered character reveals and slow easing tuned to match the architectural tone.' },
      { title: 'Mobile-First Build', description: 'Reduced motion for mobile, touch-friendly navigation, and optimised image loading for Indonesian mobile networks.' },
    ],
    services: ['Company Profile Design', 'Scroll Animation', 'Motion UI', 'Frontend Development', 'SEO'],
    timeline: '2 weeks',
    techStack: ['Next.js', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vercel'],
    backgroundImage: '/images/screenshots/formique_img.png',
    videoDesktop: '/videos/formique_desktop.mp4',
    videoMobile: '/videos/formique_phone.mp4',
  },
  {
    id: '03',
    slug: 'aman-nusa',
    title: 'Aman Nusa',
    client: 'Aman Nusa Travel',
    url: 'https://amannusa.yabestheo.dev',
    year: '2024',
    category: 'Brand Experience',
    tags: ['Identity', 'UX Design', 'Editorial'],
    description: 'An editorial approach to high-end curation. Discover the soul of the archipelago through the lens of Aman Nusa.',
    color: 'sand',
    headline: "Indonesia's Hidden Treasures",
    headlineHighlights: ['Hidden Treasures'],
    challenge: 'Aman Nusa had a decade of heritage in physical luxury travel but lacked a digital identity that matched the soul of their curation. They needed a way to convey the "unseen" stories and ancient landscapes to a global discerning audience through a lens of high-fidelity editorial design.',
    solution: 'A full digital brand identity translated to the web: editorial grid layouts, curated typeface pairing, a Sanity-powered journal, and an inquiry flow that reflects the privacy and personal care of a private concierge.',
    results: [
      { value: '4', label: 'Weeks to launch' },
      { value: '0', suffix: '%', label: 'Platform commission' },
      { value: '100', suffix: '%', label: 'Data ownership' },
    ],
    deliverables: [
      { title: 'Brand Identity System', description: 'Typography scale, colour palette, spacing tokens, and editorial usage guidelines.' },
      { title: 'Editorial Website', description: 'Lookbook-style layout with curated destination pages, a signature itinerary section, and an editorial journal.' },
      { title: 'CMS Integration', description: 'Headless Sanity CMS so the team updates journals and destination details without a developer.' },
      { title: 'Inquiry Flow', description: 'High-touch consultation booking with real-time concierge availability and personal preference modeling.' },
    ],
    services: ['Brand Identity', 'UX Design', 'Frontend Development', 'Sanity CMS', 'Editorial Typography'],
    timeline: '4 weeks',
    techStack: ['Next.js', 'Sanity CMS', 'GSAP', 'Tailwind CSS', 'Vercel'],
    testimonial: {
      quote: '"Aman Nusa didn\'t just show us Indonesia; they allowed us to feel its heartbeat. The attention to detail and cultural reverence is something I\'ve never experienced with any other agency."',
      author: 'Julian Vercetti',
      role: 'Architect & Cultural Historian',
    },
    backgroundImage: '/images/screenshots/amannusa_img.png',
    videoDesktop: '/videos/amannusa_desktop.mp4',
    videoMobile: '/videos/amannusa_phone.mp4',
  },
  {
    id: '04',
    slug: 'zentry',
    title: 'Zentry',
    client: 'Zentry (Case Study)',
    url: 'https://zentry.yabestheo.dev',
    year: '2025',
    featured: true,
    color: 'stabilo',
    category: 'Gamified Experience',
    tags: ['Motion UI', 'WebGL', 'Gamification'],
    description: 'An immersive, award-winning gamified landing page clone. Featuring complex GSAP motion systems, scroll-driven video orchestration, and a non-linear "metaverse" narrative.',
    headline: 'The Metagame Layer: A digital odyssey into the metaverse of play.',
    headlineHighlights: ['digital odyssey', 'metaverse of play'],
    challenge: "Traditional gaming sites are often static and fail to capture the kinetic energy of the games they represent. The challenge was to build a web experience that feels like a playable environment, maintaining 60fps performance while orchestrating heavy video and motion assets.",
    solution: 'We implemented a sophisticated motion architecture using GSAP ScrollTrigger and Framer Motion. This included a custom video-preloader, parallax-scrolling hero sections, and WebGL-powered transitions that guide users through the Zentry universe with fluid, high-fidelity pacing.',
    results: [
      { value: 'SOTD', label: 'Reference Standard' },
      { value: '60', suffix: 'fps', label: 'Motion Performance' },
      { value: '100', label: 'Performance Score' },
    ],
    deliverables: [
      { title: 'Gamified UI', description: 'Interactive interface with hover-triggered audio-visuals and dynamic grid transitions.' },
      { title: 'Motion Orchestra', description: 'Deep integration of GSAP and Framer Motion for frame-accurate scroll animations.' },
      { title: 'Video Engine', description: 'Optimized multi-video playback system with seamless transitions and low-latency loading.' },
    ],
    services: ['Frontend Development', 'Motion UI Design', 'Gamification', 'Performance Engineering'],
    timeline: '3 weeks',
    techStack: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    backgroundImage: '/images/screenshots/zentry_img.png',
    videoDesktop: '/videos/zentry_desktop.mp4',
    videoMobile: '/videos/zentry_phone.mp4',
    isConcept: true,
  },
  {
    id: '07',
    slug: 'kinetic-monolith',
    title: 'Kinetic Monolith',
    client: 'Performance Artifacts',
    url: 'https://kinetic.yabestheo.dev',
    year: '2026',
    category: 'High-Performance Web',
    tags: ['Motion UI', 'Performance', 'WebGL'],
    description: 'A high-performance digital artifact showcasing advanced motion systems and layout transitions with zero layout shift.',
    color: 'warm',
    featured: true,
    headline: 'Engineering the edge of performance.',
    headlineHighlights: ['edge of performance'],
    challenge: 'Most motion-heavy websites sacrifice performance for aesthetics. The challenge was to build a system where complex layout transformations and heavy motion occur without dropping frame rates or compromising the user experience on low-power devices.',
    solution: 'We built a monolithic motion architecture using specialized transition logic. By leveraging pre-calculated layout states and efficient render loops, we achieved a fluid, high-fidelity experience that maintains 60fps even during complex transformations.',
    results: [
      { value: '60', suffix: 'fps', label: 'Consistent Performance' },
      { value: '0.1', suffix: 's', label: 'Interactive Latency' },
      { value: '100', label: 'Performance Score' },
    ],
    deliverables: [
      { title: 'Motion Engine', description: 'Custom transition logic optimized for high-frequency updates and variable refresh rates.' },
      { title: 'Layout Orchestration', description: 'System for managing complex component states and transitions without layout shift.' },
      { title: 'Artifact Interface', description: 'A sleek, dashboard-like UI designed for professional metrics and artifact visualization.' },
    ],
    services: ['Performance Optimization', 'Motion Systems', 'Frontend Engineering'],
    timeline: '2 weeks',
    techStack: ['React', 'Typescript', 'Framer Motion', 'Vite', 'Tailwind CSS'],
    videoDesktop: '/videos/kinetic_desktop.mp4',
    videoMobile: '/videos/kinetic_phone.mp4',
    backgroundImage: '/images/screenshots/kinetic_img.png',
    isConcept: true,
  },
]
