import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { GoldDot } from '@/components/ui/GoldDot'

export function BeyondCodePreview() {
  return (
    <div>
      <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold mb-6 flex items-center gap-2">
        When I&rsquo;m not building <GoldDot />
      </h2>

      <Link href="/beyond-code" className="block group">
        <Card hover className="p-8">
          <p className="font-body text-ink-secondary leading-relaxed mb-8 prose">
            Films, books, German, and the stuff I&rsquo;m curious about.
          </p>

          <span className="inline-block font-body text-xs text-gold tracking-wide group-hover:text-gold-bright transition-colors duration-150">
            Explore →
          </span>
        </Card>
      </Link>
    </div>
  )
}