---
name: Digital Sovereign
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#414754'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc0'
  primary: '#0059bb'
  on-primary: '#ffffff'
  primary-container: '#0070ea'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc7ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#595c5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#727577'
  on-tertiary-container: '#fbfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  huge: 80px
---

## Brand & Style

The brand personality is authoritative yet approachable, embodying the "Digital Sovereign" archetype—a state of complete control over one's financial and technical operations. This design system targets sophisticated professionals and enterprises who value precision, clarity, and the absence of friction.

The visual style is **Corporate Modern with a Minimalist lean**. It prioritizes extreme legibility, intentional whitespace, and a high-fidelity finish. Drawing inspiration from industry leaders like Stripe and Mercury, the aesthetic relies on mathematical balance rather than decorative elements. Every component is designed to feel like a high-performance tool: reliable, fast, and premium. The emotional response should be one of "effortless power"—the feeling that the platform is as capable as the user behind it.

## Colors

The palette is anchored by a high-chroma "Electric Blue" primary, used sparingly for calls to action and critical focus states. The foundation is built upon a pristine white workspace (#FFFFFF) supported by a subtle slate-tinted secondary background (#F8FAFC) to create logical zoning in complex layouts.

Typography uses a deep navy-slate (#0F172A) for maximum contrast and readability, while secondary information is relegated to a softer slate (#64748B). All structural elements—dividers, borders, and input strokes—utilize a consistent, low-contrast grey (#E2E8F0) to maintain a cohesive, "unibody" feel across the application.

## Typography

This design system utilizes a dual-font strategy to balance technical precision with extreme readability. **Geist** is employed for headlines, display text, and UI labels, providing a monospaced-inspired geometric clarity that feels "tech-forward." **Inter** is used for all body copy and long-form content, ensuring comfortable reading across all screen sizes.

Hierarchy is established primarily through weight and scale. Negative letter-spacing is applied to larger display sizes to maintain a tight, editorial look. For small labels and captions, we use uppercase Geist with slight tracking increases to ensure legibility in tight spaces.

## Layout & Spacing

This design system is built on a strict **8px linear scale**, ensuring vertical rhythm and consistent alignment. The layout follows a **fluid-to-fixed grid model**: content scales fluently until reaching a 1440px max-width container, at which point it centers.

We use a 12-column grid for desktop views, transitioning to a 1-column layout for mobile. Generous margins (40px on desktop) are critical to achieving the premium, spacious feel of the brand. Horizontal spacing (gutters) is fixed at 24px to provide clear separation of content blocks without breaking the visual flow.

## Elevation & Depth

To maintain a clean and modern aesthetic, depth is communicated through **low-contrast outlines and subtle ambient shadows**. We avoid heavy, dark drop shadows. Instead, we use a layering system:

1.  **Level 0 (Flat):** Main background (#FFFFFF) and secondary background areas (#F8FAFC).
2.  **Level 1 (Subtle):** Cards and containers use a 1px border (#E2E8F0) with no shadow.
3.  **Level 2 (Raised):** Hover states or small popovers use a 1px border and a very soft, diffused shadow: `0px 4px 12px rgba(15, 23, 42, 0.03)`.
4.  **Level 3 (Overlay):** Modals and dropdowns use a slightly more defined shadow: `0px 12px 32px rgba(15, 23, 42, 0.08)` to clearly separate the UI from the background.

Glassmorphism is used only for navigation bars or floating headers, employing a `backdrop-filter: blur(8px)` with a 80% opaque white background.

## Shapes

The shape language is defined as **Rounded**, utilizing a 0.5rem (8px) corner radius as the standard for all primary components (buttons, inputs, cards). This radius provides a professional yet contemporary feel that softens the technical nature of the typography.

- **Standard (8px):** Buttons, Input fields, Small Cards.
- **Large (16px):** Primary content containers, Dashboard widgets.
- **Extra Large (24px):** Hero sections, Large Modals.
- **Pill:** Used exclusively for status badges and tags to distinguish them from interactive buttons.

## Components

### Buttons
Primary buttons use the Brand Color (#017AFD) with white text. Hover states transition to #006AE0. Secondary buttons use a transparent background with a 1px border (#E2E8F0) and Primary Text color. All buttons have an 8px corner radius and height-controlled sizes (Small: 32px, Medium: 40px, Large: 48px).

### Input Fields
Inputs utilize the Secondary Background (#F8FAFC) to create a clear interactive zone against the Main Background. Borders are #E2E8F0, changing to #017AFD on focus with a 2px outer "glow" of 10% opacity.

### Cards
Cards are the primary container. They feature a white background, a 1px border (#E2E8F0), and a 16px corner radius. No shadow is applied unless the card is interactive (hover state).

### Status Chips
Small, pill-shaped elements used for metadata. Use a 10% opacity background of the semantic color (e.g., 10% Primary Blue for "Processing") with full-opacity text of the same color.

### List Items
Interactive lists should have a subtle hover state using #F8FAFC. Use 16px horizontal padding to align with the grid and clear dividers (#E2E8F0) between entries.