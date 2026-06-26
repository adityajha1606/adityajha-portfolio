import Link from 'next/link'
import { Card } from '@/components/ui/Card'

export function BeyondCodePreview() {
  return (
    <Link href="/beyond-code" className="block group">
      <Card variant="magenta" className="p-8">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-6">
          When I&rsquo;m not building
        </h2>

        <p className="font-body font-medium text-sm leading-relaxed mb-8">
          Films, books, German, and the stuff I&rsquo;m curious about.
        </p>

        <span className="inline-block font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink group-hover:gap-2 transition-all">
          Explore →
        </span>
      </Card>
    </Link>
  )
}