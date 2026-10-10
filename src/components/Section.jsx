import Reveal from './Reveal'

/**
 * Section — consistent vertical rhythm + max-width container used by
 * every page section, so spacing never drifts between pages.
 *
 * Children fade + lift into view on scroll by default (pass `reveal={false}`
 * to opt out for sections that carry their own animation).
 */
export default function Section({
  children,
  className = '',
  containerClassName = '',
  id,
  reveal = true,
  revealDelay = 0,
}) {
  const inner = (
    <div className={`max-w-container mx-auto px-4 md:px-10 ${containerClassName}`}>{children}</div>
  )

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {reveal ? <Reveal delay={revealDelay}>{inner}</Reveal> : inner}
    </section>
  )
}
