import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { GoldDot } from '@/components/ui/GoldDot'

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
    <div>
      <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold mb-6 flex items-center gap-2">
        Stack <GoldDot />
      </h2>

      <Link href="/stack" className="block group">
        <Card hover className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map(({ label, tools }) => (
              <div key={label} className="border-l border-gold pl-4">
                <p className="font-body text-xs uppercase tracking-widest text-gold mb-3">
                  {label}
                </p>

                <ul className="flex flex-col gap-1.5">
                  {tools.map((tool) => (
                    <li
                      key={tool}
                      className="font-mono text-xs text-ink-secondary"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <span className="inline-block mt-8 font-body text-xs text-gold tracking-wide group-hover:text-gold-bright transition-colors duration-150">
            View full stack →
          </span>
        </Card>
      </Link>
    </div>
  )
}