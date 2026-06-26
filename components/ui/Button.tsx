import type { ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'default'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  external?: boolean
}

const base =
  'inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: cn(
    'bg-strike border-ink text-ink shadow-[4px_4px_0_var(--color-ink)]',
    'hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-ink)]',
    'focus-visible:translate-x-[6px] focus-visible:translate-y-[6px] focus-visible:shadow-[2px_2px_0_var(--color-ink)]',
  ),
  default: cn(
    'bg-bone border-ink text-ink shadow-[4px_4px_0_var(--color-ink)]',
    'hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-ink)]',
    'focus-visible:translate-x-[6px] focus-visible:translate-y-[6px] focus-visible:shadow-[2px_2px_0_var(--color-ink)]',
  ),
}

export function Button({
  variant = 'primary',
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