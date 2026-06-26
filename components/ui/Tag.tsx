import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  className?: string
  red?: boolean
}

export function Tag({ children, className, red = false }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[11px] font-bold uppercase tracking-[0.05em] px-2 py-0.5 border-2 transition-all duration-150',
        red
          ? 'bg-fault border-fault text-ink'
          : 'bg-transparent border-ink text-ink',
        'hover:-translate-y-[2px] hover:shadow-[4px_4px_0_var(--color-strike)] hover:border-strike',
        className,
      )}
    >
      {children}
    </span>
  )
}