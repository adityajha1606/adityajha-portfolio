import { Plus } from 'lucide-react'
import type { ReleaseEntry } from '@/data/skills'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { ClickableHeading } from '@/components/ui/ClickableHeading'

interface ReleaseLogProps {
  releases: ReleaseEntry[]
}

export function ReleaseLog({ releases }: ReleaseLogProps) {
  return (
    <>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
        $ git log --oneline --tags
      </p>
      <ClickableHeading href="/work">Release Log</ClickableHeading>
      <p className="font-body font-medium text-base text-ink/60 max-w-[60ch] mt-4 mb-10">
        Shipped things, versioned like software, because that is easier to be
        honest about than a highlight reel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {releases.map((release) => (
          <Card
            key={`${release.version}-${release.title}`}
            variant={release.tag === 'featured' ? 'yellow' : 'ink'}
            noHover
            className="p-6"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-mono text-xs font-bold tracking-[0.05em] opacity-60">
                {release.version} · {release.date}
              </span>
              {release.tag === 'featured' && <Tag>featured</Tag>}
            </div>

            <h3 className="font-display font-extrabold text-xl tracking-[-0.01em] mb-3">
              {release.title}
            </h3>

            <p
              className={`font-body font-medium text-sm leading-relaxed mb-4 ${
                release.tag === 'featured' ? 'text-ink/75' : 'text-bone/75'
              }`}
            >
              {release.summary}
            </p>

            {release.stack && release.stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {release.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}

        {/* Honest empty state — no invented hackathons or certificates here.
            Swap this for real entries as they happen. */}
        <div className="border-[3px] border-dashed border-ink/25 p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[220px]">
          <Plus aria-hidden="true" className="w-6 h-6 text-ink/30" />
          <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-ink/40">
            Next release
          </p>
          <p className="font-body text-sm text-ink/45 max-w-[26ch]">
            Hackathon, certificate, or competition slot — drop the real one in here.
          </p>
        </div>
      </div>
    </>
  )
}
