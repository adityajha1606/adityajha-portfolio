import { cn } from '@/lib/utils'

type BadgeVariant = 'live' | 'wip' | 'default'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  live:    'text-status-live border border-status-live/30 bg-status-live/10',
  wip:     'text-status-wip border border-status-wip/30 bg-status-wip/10',
  default: 'text-ink-muted border border-obsidian-border',
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[11px] leading-none px-2 py-0.5',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}