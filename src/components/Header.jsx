import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { brand, nav } from '../data/siteContent'
import Button from './Button'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ease-enter ${
        scrolled ? 'bg-surface/80 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.95)]' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={brand.logo.horizontal} alt={`${brand.name} logo`} className="h-9 md:h-11 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className="group relative py-1 font-heading text-sm font-semibold">
              {({ isActive }) => (
                <>
                  <span className={`transition-colors duration-200 ${isActive ? 'text-primary' : 'text-ink group-hover:text-primary'}`}>
                    {item.label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 w-full origin-left bg-primary transition-transform duration-300 ease-move ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/give" variant="primary" className="px-6 py-2.5 text-sm">
            Give
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-ink hover:text-primary transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-surface border-t border-white/10 px-4 py-4 flex flex-col gap-1 animate-slide-down">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2.5 px-3 rounded-lg font-heading text-base font-semibold transition-colors ${
                  isActive ? 'text-primary bg-primary/10' : 'text-ink hover:text-primary hover:bg-white/5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button to="/give" variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Give
          </Button>
        </nav>
      )}
    </header>
  )
}
