import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { ClickableHeading } from '@/components/ui/ClickableHeading'

export function LatestWritingPreview() {
  return (
    <div>
      <ClickableHeading href="/writing" className="mb-6">
        Latest Writing
      </ClickableHeading>

      <Link
        href="/writing/football-player-impact-rating-system"
        className="block group"
      >
        <Card variant="coral" className="p-8">
          <p className="font-display font-extrabold text-xl md:text-2xl mb-3 leading-snug">
            Building a Football Player Impact Rating System with XGBoost
          </p>

          <p className="font-body font-medium text-sm leading-relaxed mb-8">
            From 500,000+ Statsbomb events to a deployed XGBoost model — the
            entire pipeline, the mistakes, and what I learned about feature
            engineering for sports data.
          </p>

          <span className="inline-block font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink group-hover:gap-2 transition-all">
            Read more →
          </span>
        </Card>
      </Link>
    </div>
  )
}