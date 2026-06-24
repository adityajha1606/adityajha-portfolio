import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'ghost'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  external?: boolean
}

const base =
  'inline-flex items-center gap-1.5 whitespace-nowrap border px-5 py-2.5 font-body text-sm font-medium tracking-[0.04em] no-underline transition-[background-color,color,border-color,box-shadow] duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  gold: cn(
    'bg-gold border-gold text-obsidian',
    'hover:bg-gold-bright hover:border-gold-bright hover:shadow-gold-glow',
    'focus-visible:bg-gold-bright focus-visible:border-gold-bright'
  ),
  ghost: cn(
    'border-obsidian-border bg-transparent text-ink-secondary',
    'hover:border-gold-dim hover:text-ink-primary',
    'focus-visible:border-gold-dim focus-visible:text-ink-primary'
  ),
}

export function Button({
  variant = 'gold',
  href,
  external,
  children,
  className,
  ...rest
}: Props) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    const linkProps = external
      ? { target: '_blank' as const, rel: 'noopener noreferrer' }
      : {}
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}