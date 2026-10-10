import { Link } from 'react-router-dom'

const variants = {
  // Red is the single action color. Hover inverts to white — high contrast, sleek.
  primary: 'bg-primary text-white hover:bg-white hover:text-navy shadow-glow-sm btn-shine',
  secondary: 'bg-white text-navy hover:bg-primary hover:text-white btn-shine',
  outline: 'border-2 border-white/30 text-ink hover:bg-white hover:text-navy',
  ghost: 'border border-white/25 text-white hover:bg-white/10 hover:border-white/50',
  light: 'bg-white text-navy hover:bg-primary hover:text-white',
}

/**
 * Button — renders as a <Link> when `to` is provided, otherwise a <button>.
 */
export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 font-heading font-semibold px-6 py-3 rounded-lg transition-[background-color,color,transform,box-shadow] duration-200 ease-enter active:scale-[0.97] ${variants[variant]} ${className}`

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
