import { cn } from '@/lib/utils'

export type CardVariant = 'teal' | 'yellow' | 'ink' | 'default' | 'purple' | 'coral' | 'blue' | 'magenta'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: CardVariant
  accent?: 'teal' | 'yellow'
  noHover?: boolean
}

export function Card({
  children,
  className,
  variant = 'default',
  accent,
  noHover = false,
}: CardProps) {
  const base = cn(
    'border-[3px] border-ink p-6',
    !noHover && 'transition-all duration-150',
  )

  const shadowResting = noHover ? '' : 'shadow-[8px_8px_0_var(--color-ink)]'
  const hoverEffect = noHover
    ? ''
    : 'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]'

  const variantClasses: Record<CardVariant, string> = {
    teal: cn('bg-teal text-ink'),
    yellow: cn('bg-strike text-ink'),
    ink: cn(
      'bg-ink text-bone',
      accent === 'teal'
        ? 'shadow-[8px_8px_0_#2E6B5E]'
        : 'shadow-[8px_8px_0_#E8C547]',
      !noHover && 'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]',
    ),
    purple: cn('bg-purple text-ink'),
    coral: cn('bg-coral text-ink'),
    blue: cn('bg-blue text-ink'),
    magenta: cn('bg-magenta text-ink'),
    default: cn('bg-bone text-ink'),
  }

  return (
    <div
      className={cn(
        base,
        variantClasses[variant],
        variant !== 'ink' && shadowResting,
        variant !== 'ink' && hoverEffect,
        className,
      )}
    >
      {children}
    </div>
  )
}