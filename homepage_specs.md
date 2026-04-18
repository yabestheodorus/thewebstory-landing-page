# Homepage Design Specifications

This document outlines the visual structure, typography, and color system of the "the unframed studio" homepage.

## Typography

The project uses a clean, modern font stack delivered via Google Fonts and semantic CSS mapping.

### Font Families
- **Primary (Headings)**: `Plus Jakarta Sans`
  - *Utility Class*: `font-plus-jakarta` (also `font-aktiv-grotesk`)
  - *Usage*: Used for headlines, subheadings, and primary UI labels.
- **Secondary (Body)**: `Inter`
  - *Utility Class*: `font-inter` (also `font-google`)
  - *Usage*: Used for body copy, paragraphs, and descriptions.

---

## Color Palette

The site follows a sophisticated "Night Mode" default palette with premium cream accents and a single vibrant purple brand color.

| Name | Hex Code | Description |
| :--- | :--- | :--- |
| **Ink** | `#F6F3EE` | Primary foreground/text color (Off-white/Cream). |
| **Off** | `#0D0D0D` | Deep background color (Pure Dark). |
| **Sand** | `#1A1A1A` | Secondary background / Panel variation. |
| **Warm** | `#2A2A2A` | Tertiary background / Variation. |
| **Stabilo** | `#7C5CFF` | Primary brand accent (Vibrant Purple). |

---

## Homepage Layout Structure

The homepage is composed of six distinct thematic sections organized in a vertical flow.

### 1. Hero Section (`HeroSection.tsx`)
- **Background**: `bg-off`
- **Key Components**: 
  - Marquee Ticker at the top.
  - Rotating headline text.
  - Interative `DotField` and `BeforeAfterSlider`.
- **Navigation**: Clean, fixed Navbar with glassmorphic background.

### 2. Statement Section (`StatementSection.tsx`)
- **Theme**: Our Belief
- **Layout**: Sticky horizontal scroll (Desktop).
- **Background**: `bg-sand`
- **Key Components**:
  - Progress bar at the top.
  - Interactive dashboard widgets (`dash-widget`).
  - Numerical counters and strategy funnel.

### 3. Works Section (`WorksSection.tsx`)
- **Theme**: Portfolio Showcase
- **Layout**: Dynamic Grid.
- **Background**: `bg-off` (Contrast variation).
- **Key Components**:
  - Project cards with hover states.
  - Tech stack icons and detailed project metadata.

### 4. CTA Section (`CTASection.tsx`)
- **Theme**: Get in Touch
- **Background**: `bg-warm`
- **Key Components**:
  - Direct WhatsApp/Email links.
  - Project inquiry form.
  - Social media links in footer.

---

## Visual Rules
1. **Glassmorphism**: Subtle use of `backdrop-blur` (e.g., in `dash-widget` and `Navbar`).
2. **Micro-animations**: GSAP-powered entry transforms and hover states.
3. **Fluid Typography**: Dynamic scaling using `clamp()` logic defined in `globals.css`.
