'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/stack', label: 'Stack' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/beyond-code', label: 'Beyond Code' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname])

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Smooth scroll to top when clicking logo on home page
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ════════════════════════════════════════════════
          DESKTOP NAVBAR
      ════════════════════════════════════════════════ */}
      <header className="hidden md:flex items-center justify-between h-16 px-8 bg-bone border-b-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] sticky top-0 z-40">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Aditya Jha — back to top"
          className="font-display font-extrabold text-xl text-ink no-underline uppercase hover:translate-x-[4px] hover:translate-y-[4px] transition-transform duration-150"
        >
          AJ<span className="text-fault">.</span>
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation">
          <ul className="flex gap-2">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'inline-flex items-center font-body font-medium text-sm uppercase tracking-wide px-3 py-2 transition-all duration-150',
                      'hover:translate-x-[4px] hover:translate-y-[4px]',
                      active
                        ? 'bg-ink text-bone border-b-[3px] border-fault'
                        : 'text-ink border-b-[3px] border-transparent hover:border-ink/30'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      {/* ════════════════════════════════════════════════
          MOBILE NAVBAR
      ════════════════════════════════════════════════ */}
      <header className="flex md:hidden items-center justify-between h-14 px-4 bg-ink border-b-[3px] border-ink sticky top-0 z-40">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Aditya Jha — back to top"
          className="font-display font-extrabold text-xl text-bone no-underline uppercase"
        >
          AJ<span className="text-fault">.</span>
        </Link>

        {/* Hamburger / close button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-bone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fault"
        >
          {open ? (
            <span className="text-2xl leading-none">&times;</span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-bone" />
              <span className="block h-0.5 w-5 bg-bone" />
              <span className="block h-0.5 w-5 bg-bone" />
            </span>
          )}
        </button>
      </header>

      {/* ════════════════════════════════════════════════
          MOBILE MENU OVERLAY
      ════════════════════════════════════════════════ */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-ink"
          role="dialog"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'font-display font-extrabold text-[clamp(1.75rem,6vw,2.5rem)] uppercase text-bone no-underline transition-all duration-150',
                  'hover:translate-x-[6px] hover:translate-y-[6px]',
                  active
                    ? 'border-b-[3px] border-fault'
                    : 'border-b-[3px] border-transparent hover:border-bone/30'
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}