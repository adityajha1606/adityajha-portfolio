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

      <p className="font-display italic text-ink-muted text-center text-[clamp(18px,2.5vw,24px)] leading-relaxed max-w-md">

        {revealed

          ? "Or maybe it does, and I haven't built it yet."

          : "You've wandered somewhere that doesn't exist."}

      </p>

    </div>

  )

}