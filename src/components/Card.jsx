import { Card as MTCard } from '@material-tailwind/react'

/**
 * Card — Material Tailwind surface restyled to the red/black/white system.
 *
 * - `hoverable` (default true): lifts the card with a red edge glow on hover
 *   (an "animated card": material elevation + transform spring feel).
 * - Compose with <Reveal> for the entrance animation, or pass your own classes.
 */
export default function Card({ className = '', hoverable = true, children, ...props }) {
  return (
    <MTCard
      variant="filled"
      shadow={false}
      className={`rounded-card border border-white/10 bg-surface-container text-ink shadow-lift ${
        hoverable
          ? 'transition-all duration-300 ease-enter hover:-translate-y-1.5 hover:shadow-glow-sm hover:border-primary/40'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </MTCard>
  )
}