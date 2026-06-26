// components/ui/ClickableHeading.tsx
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ClickableHeadingProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ClickableHeading({ href, children, className }: ClickableHeadingProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-3 no-underline pb-0.5',
        className,
      )}
    >
      <span className="relative inline-flex items-baseline">
        {/* Opening bracket */}
        <span
          aria-hidden="true"
          className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-display font-extrabold text-[1.6em] text-ink mr-[0.05em] leading-none"
        >
          [
        </span>

        {/* Heading text */}
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink m-0 leading-none">
          {children}
        </h2>

        {/* Closing bracket */}
        <span
          aria-hidden="true"
          className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-150 font-display font-extrabold text-[1.6em] text-ink ml-[0.05em] leading-none"
        >
          ]
        </span>

        {/* Arrow – large, bold, fades on hover */}
        <span
          aria-hidden="true"
          className="inline-block opacity-100 group-hover:opacity-0 transition-opacity duration-150 font-display font-extrabold text-[1.4em] text-ink ml-[0.3em] leading-none"
        >
          ↗
        </span>
      </span>

      {/* Yellow dot REMOVED */}
      {/* Underline on hover REMOVED – no more border-b border-transparent hover:border-strike */}
    </Link>
  )
}