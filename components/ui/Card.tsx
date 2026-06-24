import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-obsidian-3 border border-obsidian-border p-6',
        hover && [
          'transition-colors duration-200',
          'hover:border-gold-dim',
          'hover:bg-[color-mix(in_srgb,var(--color-gold)_5%,transparent)]',
        ],
        className
      )}
    >
      {children}
    </div>
  )
}