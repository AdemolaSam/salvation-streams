---
name: Salvation Streams
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#44474d'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#151715'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a2b29'
  on-tertiary-container: '#92928f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e2df'
  tertiary-fixed-dim: '#c7c7c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#464744'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The design system is built on a narrative of "Timeless Renewal." It balances the weight of spiritual tradition with the energy of a modern movement. The brand personality is professional yet deeply warm, aiming to evoke a sense of calm, hope, and belonging.

The design style is a hybrid of **Minimalism** and **High-Contrast Modern**. It utilizes expansive off-white spaces to represent clarity and peace, punctuated by high-contrast navy and gold to direct focus and signify importance. This approach intentionally avoids traditional cliches, opting instead for an editorial feel that treats faith with sophistication and accessibility.

## Colors

The palette is anchored by three specific tiers:
- **Spiritual Foundation (Primary):** A deep navy (#1A2B48) used for primary typography, navigation backgrounds, and structural elements. It conveys stability and depth.
- **Divine Light (Secondary):** A warm gold/amber (#D4AF37) reserved for accents, call-to-action buttons, and highlights. It represents hope and movement.
- **Pure Canvas (Tertiary/Background):** A soft off-white cream (#FDFCF8) used as the primary surface color to provide a warmer, more inviting experience than a clinical pure white.
- **Functional Slate (Neutral):** A desaturated grey-blue for secondary body text and metadata, ensuring legibility without competing with the primary navy.

## Typography

This design system employs a classic serif-and-sans pair to bridge the gap between ancient wisdom and modern delivery.

**Playfair Display** is used for all headlines and display text. Its high-contrast strokes and elegant apertures provide an editorial, sophisticated look. Headlines should use "Optical Sizing" where possible to maintain elegance at larger scales.

**Inter** is the functional workhorse. It is used for all body text, UI labels, and inputs. It provides exceptional legibility and a systematic, clean feel that keeps the UI from feeling overly decorative. 

For labels and small headers, use Inter in SemiBold with increased letter spacing and uppercase styling to create a distinct hierarchy against serif headlines.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach for desktop to maintain a prestigious, contained feel, transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid with a 1280px max-width. Use generous 64px outer margins to create "breathable" whitespace that emphasizes content.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.

Spacing follows an 8px base unit. Vertical rhythm should prioritize large gaps (`stack-lg`) between major sections to facilitate a meditative browsing experience, while interactive elements use tighter `stack-sm` increments.

## Elevation & Depth

Depth in this design system is achieved through **Ambient Shadows** and **Tonal Layering**. 

Surfaces should feel light and lifted. Use soft, diffused shadows with a slight navy tint (e.g., `rgba(26, 43, 72, 0.08)`) rather than pure black. This prevents the shadows from feeling muddy on the off-white background. 

- **Level 1 (Cards):** Very soft blur (12px) with a subtle Y-offset (4px).
- **Level 2 (Dropdowns/Modals):** Deeper blur (24px) with a larger offset (8px).
- **Level 3 (Interactive Gold):** Active states on buttons may include a soft gold outer glow to signify "warmth" and "light."

## Shapes

The shape language is **Rounded (Level 2)**. This specific radius (0.5rem / 8px) is chosen to soften the "Corporate" feel of the navy blue while maintaining a professional edge that sharper "Pill" shapes might lose.

- **Standard Elements:** 8px radius (Buttons, Input fields).
- **Large Elements:** 16px radius (Cards, Featured imagery).
- **Iconography:** Use a consistent 1.5pt stroke weight with slightly rounded terminals to match the UI's friendliness.

## Components

### Buttons
Primary buttons use the Navy background with White text. Secondary buttons use the Gold background with Navy text for high-impact actions like "Give" or "Join." All buttons should have a 300ms transition on hover, slightly increasing the shadow depth rather than just changing color.

### Cards
Cards are the primary container for sermons and events. They should use the tertiary cream color or pure white, featuring a Level 1 shadow and 16px corner radius. Imagery within cards should have a subtle darkening overlay to ensure headline legibility.

### Donation Blocks
These are high-clarity, information-dense blocks. Use a subtle Gold border (1px) and a slightly different background tint to set them apart. Include a "Click to Copy" interaction for account numbers or links, using a clear "Copied!" tooltip in Gold.

### Input Fields
Fields use a clean Inter-based label and a 1px border in a muted navy-grey. Focus states should shift the border to Gold with a soft 2px outer glow.

### Progress Streams
For movement-focused tracking (e.g., fundraising or mission goals), use a thin Gold progress bar on a Navy track, signifying light cutting through darkness.