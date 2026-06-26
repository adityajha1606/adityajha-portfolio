import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export function ExperienceHighlight() {
  return (
    <Link href="/experience" className="block group">
      <Card variant="purple" className="p-8 md:p-10">
        <h3 className="font-display font-extrabold text-2xl md:text-3xl text-ink mb-2">
          Software Development Intern
        </h3>

        <p className="font-body font-medium text-lg text-ink mb-1">
          NMDC Limited (Government of India)
        </p>

        <p className="font-body font-medium text-sm mb-4 opacity-60">
          June 2026 – July 2026
        </p>

        <p className="font-body font-medium text-sm leading-relaxed mb-6">
          Sole author of an enterprise event management and reporting system
          deployed on production IIS.
        </p>

        <span className="inline-block font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink group-hover:gap-2 transition-all">
          View full experience →
        </span>
      </Card>
    </Link>
  )
}