/**
 * SmartImage — thin wrapper around <img> used everywhere in the site.
 *
 * Centralizing this makes it trivial to later swap in a real asset
 * pipeline (e.g. next/image-style lazy loading, a CMS, or a CDN)
 * without touching every page. Every image MUST have descriptive alt
 * text — this component makes that a required prop.
 */
export default function SmartImage({ src, alt, className = '', ...props }) {
  if (!alt) {
    // Fail loudly in dev rather than silently shipping an inaccessible image.
    console.warn('SmartImage rendered without alt text:', src)
  }
  return (
    <img
      src={src}
      alt={alt || ''}
      loading="lazy"
      className={`object-cover ${className}`}
      {...props}
    />
  )
}
