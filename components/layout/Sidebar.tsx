'use client'

import { useEffect, useState } from 'react'

export function Sidebar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const h = doc.scrollHeight - doc.clientHeight
      if (h <= 0) return
      setProgress(Math.round((doc.scrollTop / h) * 100))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-[44px] bg-ink flex-col items-center justify-between py-4 z-50 border-r-[3px] border-ink">
      <span
        className="text-bone font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        PORTFOLIO.
      </span>
      <div className="flex-1 w-[2px] bg-ink mx-auto my-4 relative">
        <div
          className="absolute top-0 left-0 w-full bg-strike transition-[height] duration-100"
          style={{ height: `${progress}%` }}
        />
      </div>
      <span
        className="text-bone font-mono text-[9px]"
        style={{ writingMode: 'vertical-rl' }}
      >
        AJ.
      </span>
    </aside>
  )
}