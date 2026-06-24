import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[12px] leading-none',
        'text-ink-secondary border border-obsidian-border px-2 py-0.5',
        className
      )}
    >
      {children}
    </span>
  )
}