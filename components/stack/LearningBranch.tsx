import type { LearningItem, ReadingItem } from '@/data/stack'

interface LearningBranchProps {
  learningItems: LearningItem[]
  readingItems: ReadingItem[]
}

const statusBadge: Record<string, string> = {
  'in progress':   'bg-strike text-ink border-[2px] border-ink',      // yellow tag
  'starting soon': 'bg-fault text-bone border-[2px] border-fault',    // red tag
  planned:         'bg-bone text-ink border-[2px] border-ink',        // bone tag
  completed:       'bg-teal text-bone border-[2px] border-teal',
  queued:          'bg-bone text-ink border-[2px] border-ink',        // bone tag
}
// Colour palette for card backgrounds — no two adjacent cards repeat.
// 'in progress' → purple (opposite of yellow tag)
// 'starting soon' → teal (opposite of red tag)
// 'planned' → ink, coral, blue, magenta, etc., cycled
const learningCardFill = (status: string, idx: number): string => {
  if (status === 'in progress') return 'bg-purple text-bone'
  if (status === 'starting soon') return 'bg-teal text-bone'
  if (status === 'completed') return 'bg-blue text-bone'

  // 'planned' items cycle through a set of distinct non‑ink, non‑yellow, non‑red colours
  const plannedColours = ['bg-ink text-bone', 'bg-coral text-bone', 'bg-blue text-bone', 'bg-magenta text-bone', 'bg-purple text-bone']
  return plannedColours[idx % plannedColours.length]
}

// Reading cards: each gets a unique colour from the same set, cycling through.
const readingCardFill = (idx: number, status: string): string => {
  // 'in progress' can stay purple as well, but we want distinction
  if (status === 'in progress') return 'bg-purple text-bone'
  const colours = ['bg-teal text-bone', 'bg-coral text-bone', 'bg-blue text-bone', 'bg-magenta text-bone', 'bg-ink text-bone', 'bg-purple text-bone']
  return colours[idx % colours.length]
}

export function LearningBranch({ learningItems, readingItems }: LearningBranchProps) {
  return (
    <>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
        $ git branch --show-current
      </p>
      <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-4">
        main (unreleased)
      </h2>
      <p className="font-body font-medium text-base text-ink/60 max-w-[60ch] mb-8">
        Real resources I’m working through right now — no self‑ratings, just honest status.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Currently Learning */}
        <div>
          <h3 className="font-display font-extrabold text-xl mb-4">Currently Learning</h3>
          <div className="flex flex-col gap-3">
            {learningItems.map((item, idx) => {
              const fill = learningCardFill(item.status, idx)
              return (
                <div
                  key={item.label}
                  className={`border-[3px] border-ink p-4 ${fill}`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-display font-extrabold text-sm">{item.label}</h4>
                    <span className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 ${statusBadge[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="font-body text-xs leading-relaxed opacity-80">{item.detail}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* What I’m Reading — colourful, distinct fills */}
        <div>
          <h3 className="font-display font-extrabold text-xl mb-4">What I’m Reading</h3>
          <div className="flex flex-col gap-3">
            {readingItems.map((item, idx) => {
              const fill = readingCardFill(idx, item.status)
              return (
                <div
                  key={item.title}
                  className={`border-[3px] border-ink p-4 ${fill} flex justify-between items-center gap-3`}
                >
                  <div>
                    <p className="font-display font-extrabold text-sm">{item.title}</p>
                    <p className="font-body text-xs opacity-60">{item.author}</p>
                  </div>
                  <span className={`font-mono text-[9px] font-bold uppercase px-2 py-0.5 ${statusBadge[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}