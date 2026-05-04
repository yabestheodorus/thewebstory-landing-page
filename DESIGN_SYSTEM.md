# thewebstory.id Design System

A high-fidelity, performance-optimized design system for premium editorial web experiences.

---

## 1. Visual Identity

### Color Palette
The palette is built on a foundation of neutral editorial tones with a high-vibrancy "Blaze Orange" accent.

| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Blaze Orange** | `#E85D04` | Primary actions, highlights, branding |
| **Blaze Soft** | `#F4A261` | Secondary glows, gradients |
| **Ink** | `#0D0D0D` | Primary text, heavy UI elements |
| **Background** | `#F7F3F0` | Main site background (sand-toned) |
| **Secondary** | `#E8E4DB` | Section backgrounds, secondary surfaces |
| **Card** | `#F1EDE9` | UI cards, floating elements |

### Typography
We use a blend of geometric and editorial typefaces to create a modern, high-end feel.

*   **Display / Headings**: `Plus Jakarta Sans` (aliased as `Aktiv Grotesk`)
    *   *Scale*: `clamp(4rem, 12vw, 6.5rem)` (Hero), `clamp(2.5rem, 8vw, 5.5rem)` (Section Headings)
    *   *Weight*: Bold (700) / Extra Bold (800)
    *   *Tracking*: `-0.05em` (tight)
*   **Body**: `Inter` (aliased as `Google`)
    *   *Scale*: `1rem` (base), `1.125rem` (lead)
    *   *Leading*: `1.6` - `1.9` (generous line height)
*   **Serif Accent**: `Playfair Display`
    *   *Usage*: Italic highlights in headlines for editorial contrast.
*   **Mono / Metadata**: `ui-monospace` (SF Mono)
    *   *Scale*: `0.625rem` - `0.75rem`
    *   *Tracking*: `0.18em` - `0.4em` (wide)
    *   *Case*: Uppercase

---

## 2. Layout & Spacing

### Grid System
*   **Container**: Max-width `1280px` (7xl).
*   **Padding**: Mobile: `24px` (6), Tablet/Desktop: `48px` - `64px` (12-16).
*   **Section Spacing**: `py-24` to `py-40` for editorial breathability.

### Motion Principles
*   **Easing**: Primary: `expo.out` or `cubic-bezier(0.23, 1, 0.32, 1)`.
*   **Transitions**: Default: `500ms`, Hero: `1200ms`.
*   **Scroll**: Lenis smooth scroll (Desktop only).

---

## 3. Performance Standards

### Mobile Optimization
*   **Backdrop Blur**: Disabled on mobile via `backdrop-blur-safe`.
*   **Hardware Acceleration**: Use `.gpu` utility for elements undergoing frequent animation.
*   **Will-Change**: Use `will-change-transform` for scroll-triggered reveals and tickers.

### CSS Utilities
*   `.gpu`: Forces `translate3d`, `backface-visibility`, and `perspective`.
*   `.label-eyebrow`: The standard 04/06 style metadata label.
*   `.label-meta`: Monospaced technical metadata.

---

## 4. Components

### Navigation
*   **Navbar**: Floating, glassmorphic (Desktop only), transition-aware.
*   **Mobile Menu**: Simplified, non-blur panel for performance.

### Visual Accents
*   **BackgroundGlow**: Absolute-positioned blurs with `will-change-transform`.
*   **SlideUpLabel**: Two-state hover reveal for CTA buttons.
*   **InfinityTicker**: Optimized GSAP marquee with responsive speed.

---

## 5. Development Guidelines
1.  **Tailwind v4**: Use `@theme` for tokens and `@utility` for custom classes.
2.  **i18n**: All text must be sourced from `/dictionaries`.
3.  **Aesthetics**: Prioritize premium feels—avoid browser default colors, use generous whitespace, and implement subtle micro-animations.
