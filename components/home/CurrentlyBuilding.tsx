import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export function CurrentlyBuilding() {
  return (
    <Card hover>
      <p className="font-body font-semibold text-gold text-sm uppercase tracking-widest mb-3">
        Currently Building
      </p>

      <h3 className="font-body font-semibold text-ink-primary text-lg mb-2 leading-snug">
        NMDC Event Management &amp; Reporting System
      </h3>

      <p className="font-body font-normal text-sm text-ink-secondary leading-relaxed mb-5">
        Building enterprise event management and reporting software solo for NMDC
        Limited — India&apos;s largest iron ore producer — on a production IIS deployment.
      </p>

      <Link
        href="/now"
        className="font-body text-sm text-gold hover:underline transition-colors duration-150"
      >
        Follow progress on /now →
      </Link>
    </Card>
  )
}