import Image from 'next/image'

interface ServiceRowProps {
  service: {
    id: string
    title: string
    category: string
    deliverable: string
    timeline: string
    description: string
    keywords: string[]
    logos?: { name: string; src: string }[]
  }
  labels: {
    deliverable: string
    timeline: string
    category: string
  }
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export function ServiceRow({ service, labels, isActive, onMouseEnter, onMouseLeave }: ServiceRowProps) {
  return (
    <div
      className="works-row border-b border-ink/10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Main row */}
      <div
        className="relative overflow-hidden grid grid-cols-[48px_1fr_auto] md:grid-cols-[48px_1fr_140px_100px_44px] items-center px-8 md:px-16 py-7 transition-colors duration-300"
        style={{ backgroundColor: isActive ? 'var(--color-sand)' : 'transparent' }}
      >
        {/* Ghost number */}
        <span
          className="absolute right-12 font-aktiv-grotesk font-bold leading-none select-none pointer-events-none transition-all duration-500"
          style={{
            fontSize: 'clamp(80px,12vw,140px)',
            color: isActive ? 'var(--color-stabilo)' : 'var(--color-ink)',
            opacity: isActive ? 0.15 : 0.05,
            transform: isActive ? 'translateY(-6px) scale(1.04)' : 'translateY(0) scale(1)',
          }}
        >
          {service.id}
        </span>

        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-stabilo transition-transform duration-300 origin-bottom"
          style={{ transform: isActive ? 'scaleY(1)' : 'scaleY(0)' }}
        />

        {/* Index */}
        <span className="font-mono text-[0.5625rem] tracking-widest text-muted-warm relative z-10">
          {service.id}
        </span>

        {/* Title + mobile category tag */}
        <div className="flex flex-col gap-1.5 relative z-10 pr-4">
          <span
            className="font-aktiv-grotesk text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] font-semibold leading-tight transition-colors duration-300"
            style={{ color: isActive ? 'var(--color-stabilo)' : 'var(--color-ink)' }}
          >
            {service.title}
          </span>
          <span className="md:hidden font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm">
            {service.category} · {service.timeline}
          </span>
        </div>

        {/* Category — desktop only */}
        <span className="hidden md:block font-mono text-[0.5rem] tracking-widest uppercase text-muted-warm relative z-10">
          {service.category}
        </span>

        {/* Timeline — desktop only */}
        <span className="hidden md:block font-mono text-[0.5rem] tracking-widest text-muted-warm relative z-10">
          {service.timeline}
        </span>

        {/* Arrow */}
        <div
          className="relative z-10 flex justify-end transition-transform duration-300"
          style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 12L12 2M12 2H5M12 2V9"
              stroke={isActive ? 'var(--color-stabilo)' : 'var(--color-ink)'}
              opacity={isActive ? 1 : 0.4}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Expanded content */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isActive ? '320px' : '0px',
          transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div
          className="pb-10 grid md:grid-cols-[1fr_180px] gap-6 md:gap-16 px-8 md:pr-16"
          style={{ paddingLeft: 'calc(2rem + 48px)' }}
        >
          {/* Description + pills */}
          <div className="flex flex-col gap-4 mt-2">
            <p className="font-googlea text-[clamp(0.8125rem,1vw+0.4rem,0.875rem)] leading-[1.85] text-ink/65 max-w-lg">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.keywords.map((kw) => (
                <span key={kw} className="font-mono text-[0.5625rem] tracking-widest uppercase px-2.5 py-1 border border-ink/15 text-muted-warm">
                  {kw}
                </span>
              ))}
            </div>
            {service.logos && (
              <div className="flex flex-wrap gap-5 items-center mt-1">
                {service.logos.map((logo) => (
                  <div key={logo.name} className="relative h-4 w-12 grayscale opacity-25 hover:opacity-50 transition-opacity duration-300">
                    <Image src={logo.src} alt={logo.name} fill className="object-contain" sizes="48px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Meta column */}
          <div className="flex flex-row md:flex-col gap-6 md:gap-4 pt-1 flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">{labels.deliverable}</span>
              <span className="font-mono text-[0.625rem] text-ink/70">{service.deliverable}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">{labels.timeline}</span>
              <span className="font-mono text-[0.625rem] text-ink/70">{service.timeline}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.4375rem] tracking-[0.22em] uppercase text-muted-warm/50">{labels.category}</span>
              <span className="font-mono text-[0.625rem] text-stabilo">{service.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}