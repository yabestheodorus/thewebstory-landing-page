interface SlideUpLabelProps {
  text: string
  className?: string
}

/**
 * Premium text-mask hover effect.
 * Two identical labels stacked — on group hover, both slide up,
 * revealing the second while the first exits the top.
 * Parent MUST have `group` class.
 */
export function SlideUpLabel({ text, className = '' }: SlideUpLabelProps) {
  return (
    <span className={`relative overflow-hidden inline-flex leading-none ${className}`} style={{ height: '1.1em' }}>
      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        <span className="flex items-center pb-0.5" style={{ height: '1.1em' }}>{text}</span>
        <span className="flex items-center" style={{ height: '1.1em' }}>{text}</span>
      </span>
    </span>
  )
}
