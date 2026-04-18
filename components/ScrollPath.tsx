"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollPathProps {
  /** SVG viewBox string, e.g. "0 0 1000 800" */
  viewBox?: string;
  /** The SVG path `d` attribute */
  pathD: string;
  /** Color of the leading "progress" path */
  progressColor?: string;
  /** Color of the trailing "track" path */
  trackColor?: string;
  /** Stroke width in SVG units */
  strokeWidth?: number;
  /** Gap size as a fraction of total path length (0–1) */
  gap?: number;
  /** Total scroll height of the section, e.g. "300vh" */
  scrollHeight?: string;
  /** Height of the sticky viewport window */
  stickyHeight?: string;
  /** SVG preserveAspectRatio */
  preserveAspectRatio?: string;
  /** GSAP scrub value — true = instant, number = lag in seconds */
  scrub?: boolean | number;
  /** Anything placed here renders above the SVG */
  children?: React.ReactNode;
  /** Extra className on the outer scroll section */
  className?: string;
}

export default function ScrollPath({
  viewBox = "0 0 1000 800",
  pathD,
  progressColor = "#7a3c1f",
  trackColor = "#000000",
  strokeWidth = 4,
  gap = 0.03,
  scrollHeight = "300vh",
  stickyHeight = "100vh",
  preserveAspectRatio = "xMidYMid meet",
  scrub = 0.5,
  children,
  className = "",
}: ScrollPathProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);
  const trackPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progressPath = progressPathRef.current;
    const trackPath = trackPathRef.current;
    if (!section || !progressPath || !trackPath) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub,
        onUpdate: (self) => {
          const p = self.progress;

          // Progress (leading) path — grows from start
          const brownEnd = Math.max(0, p - gap / 2);
          progressPath.style.strokeDashoffset = String(1 - brownEnd);

          // Track (trailing) path — shrinks from start
          const blackStart = Math.min(1, p + gap / 2);
          const blackLength = Math.max(0, 1 - blackStart);
          trackPath.setAttribute(
            "stroke-dasharray",
            `0 ${blackStart} ${blackLength}`
          );
        },
      });
    }, section);

    return () => ctx.revert();
  }, [gap, scrub]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{ height: scrollHeight, position: "relative" }}
    >
      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: stickyHeight,
        }}
      >
        {/* ── SVG layer — sits behind everything ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <svg
            viewBox={viewBox}
            preserveAspectRatio={preserveAspectRatio}
            style={{ width: "100%", height: "100%" }}
          >
            {/* Black "future" track */}
            <path
              ref={trackPathRef}
              d={pathD}
              fill="none"
              stroke={trackColor}
              strokeWidth={strokeWidth}
              pathLength="1"
              strokeDasharray={`0 ${gap / 2} ${1 - gap / 2}`}
            />

            {/* Colored "progress" path */}
            <path
              ref={progressPathRef}
              d={pathD}
              fill="none"
              stroke={progressColor}
              strokeWidth={strokeWidth}
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* ── Children layer — sits above the SVG ── */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
