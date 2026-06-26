import { cn } from '@/lib/utils'

type CardVariant = 'teal' | 'yellow' | 'ink' | 'default'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: CardVariant
  accent?: 'teal' | 'yellow'
}

export function Card({
  children,
  className,
  variant = 'default',
  accent,
}: CardProps) {
  const base = 'border-[3px] border-ink p-6 transition-all duration-150'

  const variantClasses: Record<CardVariant, string> = {
    teal: cn(
      'bg-teal text-ink',
      'shadow-[8px_8px_0_var(--color-ink)]',
      'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]',
    ),
    yellow: cn(
      'bg-strike text-ink',
      'shadow-[8px_8px_0_var(--color-ink)]',
      'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]',
    ),
    ink: cn(
      'bg-ink text-bone',
      accent === 'teal'
        ? 'shadow-[8px_8px_0_#2E6B5E]'
        : 'shadow-[8px_8px_0_#E8C547]',
      'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]',
    ),
    default: cn(
      'bg-bone text-ink',
      'shadow-[8px_8px_0_var(--color-ink)]',
      'hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px]',
    ),
  }

  return (
    <div className={cn(base, variantClasses[variant], className)}>
      {children}
    </div>
  )
}