interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: '9.4',    label: 'CGPA' },
  { value: '5',      label: 'Projects' },
  { value: '200+',   label: 'LeetCode' },
  { value: 'Top 20', label: 'HackSummit 6.0' },
]

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {STATS.map(({ value, label }) => (
        <div key={label} className="flex flex-col">
          <span
            className="font-display font-bold text-gold leading-none text-[clamp(32px,5vw,56px)]"
            aria-label={`${value} — ${label}`}
          >
            {value}
          </span>
          <span className="font-body text-[12px] text-ink-muted uppercase tracking-wide mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}