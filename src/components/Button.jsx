import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent text-primary-dark hover:bg-accent-hover shadow-sm',
  secondary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary/5',
  ghost: 'border border-white/30 text-white hover:bg-white/10',
}

/**
 * Button — renders as a <Link> when `to` is provided, otherwise a <button>.
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 active:scale-[0.98] ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
