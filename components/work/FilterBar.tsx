import { cn } from '@/lib/utils'

interface FilterBarProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export function FilterBar({ categories, active, onChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-6 flex-wrap" role="tablist" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = category === active
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              'font-body text-[13px] font-medium transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2',
              isActive
                ? 'text-gold border-b border-gold pb-0.5'
                : 'text-ink-secondary hover:text-gold'
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}