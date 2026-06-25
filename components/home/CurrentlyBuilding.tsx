import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export function CurrentlyBuilding() {
  return (
    <Card hover>
      <h3 className="font-body font-semibold text-ink-primary text-lg mb-2 leading-snug">
        NMDC Event Management &amp; Reporting System
      </h3>

      <p className="font-body font-normal text-sm text-ink-secondary leading-relaxed mb-5">
        Building enterprise event management and reporting software solo for NMDC
        Limited — India&apos;s largest iron ore producer — on a production IIS deployment.
      </p>

      <Link
        href="/work?status=wip"
        className="inline-block font-body text-xs text-gold tracking-wide hover:text-gold-bright transition-colors duration-150"
      >
        View ongoing projects →
      </Link>
    </Card>
  )
}