import Link from 'next/link'
import { Card } from '@/components/ui/Card'

const categories = [
  {
    label: 'Languages',
    tools: ['Python', 'TypeScript', 'C#', 'SQL'],
  },
  {
    label: 'Frameworks',
    tools: ['Next.js', 'React', 'ASP.NET Core', 'FastAPI'],
  },
  {
    label: 'ML / Data',
    tools: ['XGBoost', 'Pandas', 'Scikit‑learn'],
  },
  {
    label: 'Tools',
    tools: ['Git', 'Docker', 'SignalR', 'Chart.js'],
  },
]

export function StackPreview() {
  return (
    <Link href="/stack" className="block group">
      <Card variant="default" className="p-8">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-6">
          Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map(({ label, tools }) => (
            <div key={label} className="border-l-[3px] border-strike pl-4">
              <p className="font-body font-medium text-xs uppercase tracking-widest text-ink mb-3">
                {label}
              </p>
              <ul className="flex flex-col gap-1.5">
                {tools.map((tool) => (
                  <li key={tool} className="font-mono text-xs font-bold">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <span className="inline-block mt-8 font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink group-hover:gap-2 transition-all">
          View full stack →
        </span>
      </Card>
    </Link>
  )
}