import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { brand, nav } from '../data/siteContent'
import Button from './Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-container mx-auto px-4 md:px-10 flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={brand.logo.horizontal} alt={`${brand.name} logo`} className="h-9 md:h-11 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? 'text-primary' : 'text-ink-muted hover:text-primary'
                }`
              }
            >
              {item.label}
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
          className="lg:hidden p-2 text-primary"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-black/5 px-4 py-4 flex flex-col gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2.5 px-2 rounded-md text-base font-semibold ${
                  isActive ? 'text-primary bg-surface-container' : 'text-ink-muted'
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
