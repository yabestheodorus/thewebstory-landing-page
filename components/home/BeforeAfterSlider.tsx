'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

export default function BeforeAfterSlider({ dragLabel = "Drag the slider" }: { dragLabel?: string }) {
  const [pos, setPos] = useState(65)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()

    // Constraint: only allow dragging between 18% and 82% 
    // to stay within the laptop screen bounds
    const min = rect.width * 0.40
    const max = rect.width * 0.97
    const current = clientX - rect.left

    const clamped = Math.max(min, Math.min(current, max))
    setPos((clamped / rect.width) * 100)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
      ; (e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePos(e.clientX)
  }

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePos(e.clientX)
  }, [updatePos])

  const onPointerUp = () => { dragging.current = false }

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden bg-off"
    >

      <div className="animate-hint-pulse absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] uppercase text-ink/40 bg-off/80 backdrop-blur-md px-3 py-1 rounded-full pointer-events-none">
        <svg width="12" height="6" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-hint-slide shrink-0">
          <path d="M1 4H13M1 4L3.5 1.5M1 4L3.5 6.5M13 4L10.5 1.5M13 4L10.5 6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{dragLabel}</span>
      </div>

      {/* Before (Lofi) — Driving layer (relative) */}
      <div className="relative w-full h-auto">
        <img
          src="/images/lofi.jpeg"
          alt="Before"
          className="w-full h-auto block pointer-events-none"
        />
      </div>

      {/* After (Hifi) — Clipped overlay (absolute) */}
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src="/images/hifi.jpeg"
          alt="After"
          className="w-full h-auto block pointer-events-none"

        />
      </div>

      {/* Cursor */}
      <div className="animate-cursor-float absolute bottom-12.5 right-1/2 w-3.5 h-4.5">
        <svg viewBox="0 0 14 18" fill="none" width="14" height="18">
          <path
            d="M1 1L1 13L4.5 9.5L8.5 16L10.5 15L6.5 8.5L11 7.5L1 1Z"
            fill="var(--color-off)"
            stroke="var(--color-ink)"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="animate-cursor-click absolute bottom-13.5 right-1/2 w-5 h-5 border-[1.5px] border-stabilo rounded-full opacity-0" />

      {/* Draggable scanner divider — bleeds above and below */}
      <div
        className="absolute -top-10 -bottom-10 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-ew-resize z-10 touch-none"
        style={{ left: `${pos}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-0.5 flex-1 rounded-full bg-stabilo" />
        <div className="w-4 h-4 rounded-full bg-stabilo border-2 border-off flex items-center justify-center shrink-0">
          <div className="flex gap-0.5">
            <div className="w-px h-2 bg-off rounded-full" />
            <div className="w-px h-2 bg-off rounded-full" />
          </div>
        </div>
        <div className="w-0.5 flex-1 rounded-full bg-stabilo" />
      </div>
    </div>
  )
}
