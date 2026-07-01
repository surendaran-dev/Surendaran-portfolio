import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bone/80 dark:bg-ink/80 border-b border-black/5 dark:border-white/10">
      <nav className="container-px flex items-center justify-between h-16">
        <NavLink to="/" className="font-display font-bold text-lg tracking-tight">
          SS<span className="text-signal">.</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-signal ${isActive ? 'text-signal' : 'text-slate-muted dark:text-slate-muted'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden grid place-items-center w-9 h-9"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-bone dark:bg-ink">
          <div className="flex flex-col container-px py-4 gap-4 font-mono text-sm uppercase tracking-wide">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1">
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
