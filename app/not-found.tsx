'use client'

import { useEffect, useState } from 'react'

export default function NotFound() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setRevealed(true), 1000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-4">
        <p className="font-display italic text-gold text-[clamp(18px,2.5vw,24px)] leading-relaxed max-w-md">
          You&rsquo;ve wandered somewhere that doesn&rsquo;t exist.
        </p>

        {/* Second line always rendered; only opacity changes */}
        <p
          className={`font-display italic text-gold text-[clamp(14px,1.8vw,18px)] leading-relaxed max-w-md transition-opacity duration-500 ${
            revealed ? 'opacity-80' : 'opacity-0'
          }`}
        >
          Or maybe it does, and I haven&rsquo;t built it yet.
        </p>
      </div>
    </div>
  )
}