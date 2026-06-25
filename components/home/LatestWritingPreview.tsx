import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { GoldDot } from '@/components/ui/GoldDot'

export function LatestWritingPreview() {
  return (
    <div>
      <Link href="/writing" className="group inline-block no-underline mb-6">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold group-hover:text-gold-bright transition-colors duration-150 flex items-center gap-2 border-b border-gold/30 group-hover:border-gold pb-0.5">
          Latest Writing <GoldDot linkMode />
        </h2>
      </Link>

      <Link
        href="/writing/football-player-impact-rating-system"
        className="block group"
      >
        <Card hover className="p-8">
          <p className="font-body font-semibold text-ink-primary mb-3 leading-snug">
            Building a Football Player Impact Rating System with XGBoost
          </p>

          <p className="font-body text-ink-secondary text-sm leading-relaxed mb-8">
            From 500,000+ Statsbomb events to a deployed XGBoost model — the
            entire pipeline, the mistakes, and what I learned about feature
            engineering for sports data.
          </p>

          <span className="inline-block font-body text-xs text-gold tracking-wide group-hover:text-gold-bright transition-colors duration-150">
            Read more →
          </span>
        </Card>
      </Link>
    </div>
  )
}