'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape (WCAG dialog requirement)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
          scrolled
            ? 'border-obsidian-border bg-obsidian-2/90 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-14 max-w-content items-center justify-between px-8"
        >
          <Link
            href="/"
            aria-label="Aditya Jha — home"
            className="font-display text-xl font-bold tracking-[0.02em] text-gold no-underline"
          >
            AJ
          </Link>

          <ul className="hidden gap-8 md:flex">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      'border-b pb-0.5 font-body text-[13px] font-medium tracking-[0.03em] no-underline transition-colors duration-150',
                      active
                        ? 'border-gold text-gold'
                        : 'border-transparent text-ink-secondary hover:text-gold'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-ink-secondary md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-obsidian-2"
          >
            {links.map(({ href, label }, i) => {
              const active = pathname === href
              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'font-display text-[clamp(1.75rem,6vw,2.5rem)] font-bold tracking-[0.05em] no-underline',
                      active ? 'text-gold' : 'text-ink-secondary'
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}