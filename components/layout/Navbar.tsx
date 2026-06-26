'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0 })
    }
  }

  return (
    <>
      {/* ── Desktop Navbar ── */}
      <header className="hidden md:flex items-center justify-between h-16 px-8 bg-bone border-b-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] sticky top-0 z-40">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Aditya Jha — back to top"
          className="font-display font-extrabold text-xl text-ink no-underline uppercase"
        >
          AJ.
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-2">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'inline-flex items-center font-body font-medium text-sm uppercase tracking-wide px-3 py-2 transition-transform duration-150',
                      'hover:translate-x-[4px] hover:translate-y-[4px]',
                      active
                        ? 'bg-ink text-bone border-b-[3px] border-yellow'
                        : 'text-ink border-b-[3px] border-transparent'
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

      {/* ── Mobile Navbar ── */}
      <header className="flex md:hidden items-center justify-between h-14 px-4 bg-ink border-b-[3px] border-yellow sticky top-0 z-40">
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Aditya Jha — back to top"
          className="font-display font-extrabold text-xl text-bone no-underline uppercase"
        >
          AJ.
        </Link>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-bone"
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

      {/* ── Mobile Menu Overlay ── */}
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
                  'font-display font-extrabold text-[clamp(1.75rem,6vw,2.5rem)] uppercase text-bone no-underline transition-transform duration-150',
                  'hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0_var(--color-yellow)]',
                  active && 'border-b-[3px] border-yellow'
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