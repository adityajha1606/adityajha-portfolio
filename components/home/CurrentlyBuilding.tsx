import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { ClickableHeading } from '@/components/ui/ClickableHeading'

export function CurrentlyBuilding() {
  return (
    <div>
      <ClickableHeading href="/work?status=wip" className="mb-6">
        Currently Building
      </ClickableHeading>

      <Link href="/work?status=wip" className="block group">
        <Card variant="ink" accent="yellow" className="p-8">
          <h3 className="font-display font-extrabold text-xl md:text-2xl mb-2 leading-snug">
            HARD COPY v2 &mdash; Neobrutalist Portfolio
          </h3>

          <p className="font-body font-medium text-sm leading-relaxed mb-5">
            Designing and engineering a neobrutalist developer portfolio
            from the ground up — the site you&rsquo;re looking at right now.
            Built with Next.js, TypeScript, Tailwind CSS, and a lot of
            deliberate decisions.
          </p>

          <span className="inline-block font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-bone group-hover:gap-2 transition-all">
            View ongoing projects →
          </span>
        </Card>
      </Link>
    </div>
  )
}