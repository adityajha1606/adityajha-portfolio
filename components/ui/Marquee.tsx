'use client'

import { useReducedMotion } from 'framer-motion'

export function Marquee() {
  const prefersReducedMotion = useReducedMotion()

  const items = [
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

  const row = items.map((text, i) => (
    <span key={i} className="inline-flex items-center gap-3">
      <span className="text-strike font-mono text-xs uppercase tracking-widest">{text}</span>
      <span className="text-bone font-mono text-xs">✦</span>
    </span>
  ))

  return (
    <div
      className="h-[52px] bg-ink border-y-[3px] border-ink flex items-center overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`flex gap-6 whitespace-nowrap ${
          prefersReducedMotion ? '' : 'animate-[marquee_20s_linear_infinite]'
        }`}
      >
        {row}
        {row}
      </div>
    </div>
  )
}