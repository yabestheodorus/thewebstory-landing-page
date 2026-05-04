import React from 'react'

interface BackgroundGlowProps {
  color?: string
  opacity?: number
  blur?: string
  size?: string
  className?: string
}

const BackgroundGlow: React.FC<BackgroundGlowProps> = ({
  color = 'var(--color-blaze-soft)',
  opacity = 0.05,
  blur = '120px',
  size = '600px',
  className = '',
}) => {
  return (
    <div
      className={`absolute pointer-events-none -z-10 rounded-full select-none will-change-transform ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: `blur(${blur})`,
        opacity: opacity,
        transform: 'translate3d(0,0,0)', // Force GPU acceleration
      }}
    />
  )
}

export default BackgroundGlow
