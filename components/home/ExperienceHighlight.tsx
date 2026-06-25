import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export function ExperienceHighlight() {
  return (
    <Card className="border-gold bg-[color-mix(in_srgb,var(--color-gold)_8%,transparent)] p-8 md:p-10">
      <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink-bright mb-2">
        Software Development Intern
      </h3>

      <p className="font-body text-ink-secondary text-sm mb-1">
        NMDC Limited (Government of India)
      </p>

      <p className="font-body text-ink-secondary text-sm mb-4">
        June 2026 – July 2026
      </p>

      <p className="font-body text-ink-secondary text-sm leading-relaxed mb-6">
        Sole author of an enterprise event management and reporting system
        deployed on production IIS.
      </p>

      <Link
        href="/experience/nmdc"
        className="inline-block font-body text-xs text-gold tracking-wide hover:text-gold-bright transition-colors duration-150"
      >
        View details →
      </Link>
    </Card>
  )
}