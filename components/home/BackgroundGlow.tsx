import React from 'react'

interface BackgroundGlowProps {
  color?: string
  opacity?: number
  blur?: string
  size?: string
  className?: string
}

const BackgroundGlow: React.FC<BackgroundGlowProps> = ({
  color = 'var(--color-stabilo-soft)',
  opacity = 0.05,
  blur = '120px',
  size = '600px',
  className = '',
}) => {
  return (
    <div
      className={`absolute pointer-events-none -z-10 rounded-full select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: `blur(${blur})`,
        opacity: opacity,
      }}
    />
  )
}

export default BackgroundGlow
