import { cn } from '@/lib/utils'

export function GoldDot({
  className,
  linkMode = false,
}: {
  className?: string
  linkMode?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-block bg-gold flex-shrink-0 transition-transform duration-300',
        linkMode ? 'h-2 w-2' : 'h-1 w-1',
        linkMode && 'group-hover:rotate-45',
        className
      )}
      aria-hidden="true"
    />
  )
}