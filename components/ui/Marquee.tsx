'use client'

import { useReducedMotion } from 'framer-motion'

interface MarqueeProps {
  items?: string[]
}

// Default items for the hero page (professional skills)
const defaultItems = [
  'Python',
  'TypeScript',
  'ASP.NET Core',
  'Next.js',
  'React',
  'XGBoost',
  'SignalR',
  'SQL Server',
  'Git',
  'Leadership',
  'ML',
  'Docker',
]

export function Marquee({ items = defaultItems }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion()

  const row = items.map((text, i) => (
    <span key={i} className="inline-flex items-center gap-3">
      <span className="text-strike font-mono text-xs uppercase tracking-widest">{text}</span>
      <span className="text-bone font-mono text-xs">✦</span>
    </span>
  ))

  return (
    <div
      className="h-[48px] bg-ink border-y-[3px] border-ink flex items-center overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`flex gap-6 whitespace-nowrap ${
          prefersReducedMotion ? '' : 'animate-[marquee_24s_linear_infinite]'
        }`}
      >
        {row}
        {row}
      </div>
    </div>
  )
}