/**
 * Section — consistent vertical rhythm + max-width container used by
 * every page section, so spacing never drifts between pages.
 */
export default function Section({ children, className = '', containerClassName = '', id }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-container mx-auto px-4 md:px-10 ${containerClassName}`}>{children}</div>
    </section>
  )
}
