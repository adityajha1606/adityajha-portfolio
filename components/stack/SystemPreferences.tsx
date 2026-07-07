import {
  Code,
  Monitor,
  BookOpen,
  Brain,
  Music,
  Globe,
  GitBranch,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<any>> = {
  'Doom Emacs': Code,
  'Ubuntu (WSL2)': Monitor,
  'Notion': BookOpen,
  'Anki': Brain,
  'Youtube Music': Music,
  'Brave': Globe,
  'Git': GitBranch,
}

const colorMap: Record<string, string> = {
  'Doom Emacs': 'bg-blue',
  'Ubuntu (WSL2)': 'bg-coral',
  'Notion': 'bg-ink',
  'Anki': 'bg-strike',
  'Youtube Music': 'bg-teal',
  'Brave': 'bg-purple',
  'Git': 'bg-purple',
}

export function SystemPreferences({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => {
        const Icon = iconMap[item] || Code
        const bg = colorMap[item] || 'bg-bone'
        return (
          <div key={item} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-10 h-10 flex items-center justify-center border-2 border-ink ${bg} text-bone`}
              title={item}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-ink/70 text-center leading-tight max-w-[5rem]">
              {item}
            </span>
          </div>
        )
      })}
    </div>
  )
}