import { cn } from '@/lib/utils'

interface GoldRuleProps {
  className?: string
}

export function GoldRule({ className }: GoldRuleProps) {
  return (
    <div
      className={cn(
        'h-px bg-gold w-[clamp(120px,20vw,200px)]',
        className
      )}
    />
  )
}