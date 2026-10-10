import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — fades + lifts its children into view once, on scroll.
 *
 * Motion spec: opacity 0→1 plus a single 18px translate, 600ms, enter curve.
 * Reduced-motion users get an instant, fully-legible state (handled in index.css).
 * Falls back to visible immediately when IntersectionObserver is unavailable.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}
