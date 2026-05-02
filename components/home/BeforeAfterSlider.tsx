'use client'

import { useRef, useState, useCallback } from 'react'

export default function BeforeAfterSlider({ dragLabel = "Drag the slider" }: { dragLabel?: string }) {
  const [pos, setPos] = useState(65)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()

    const min = rect.width * 0.03
    const max = rect.width * 0.97
    const current = clientX - rect.left

    const clamped = Math.max(min, Math.min(current, max))
    setPos((clamped / rect.width) * 100)
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
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
      className="relative w-full h-full select-none overflow-hidden bg-off"
    >
      {/* Before (Lofi) — Base layer */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/lofi.jpeg"
          alt="Before"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* After (Hifi) — Clipped overlay */}
      <div
        className="absolute inset-0 z-10 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src="/images/hifi.jpeg"
          alt="After"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Draggable scanner divider */}
      <div
        className="absolute -top-10 -bottom-10 -translate-x-1/2 flex flex-col items-center cursor-ew-resize z-20 touch-none"
        style={{ left: `${pos}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-0.5 flex-1 bg-stabilo" />
        <div className="w-8 h-8 rounded-full bg-stabilo border-4 border-white shadow-lg flex items-center justify-center shrink-0">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-white rounded-full" />
            <div className="w-0.5 h-3 bg-white rounded-full" />
          </div>
        </div>
        <div className="w-0.5 flex-1 bg-stabilo" />
      </div>
    </div>
  )
}
