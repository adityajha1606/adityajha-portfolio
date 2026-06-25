export function GoldDot({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block h-1 w-1 bg-gold flex-shrink-0 ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}