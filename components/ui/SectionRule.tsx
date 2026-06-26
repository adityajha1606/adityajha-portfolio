import { cn } from '@/lib/utils'

interface SectionRuleProps {
  className?: string
}

export function SectionRule({ className }: SectionRuleProps) {
  return (
    <hr
      className={cn(
        'border-0 border-t-[3px] border-ink w-full',
        className,
      )}
    />
  )
}