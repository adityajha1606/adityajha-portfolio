'use client'

import { useEffect } from 'react'
import { animate } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'

export function PageWipe() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Only run on first visit, and only if the user hasn't reduced motion
    const wiped = sessionStorage.getItem('hardcopy-wipe')
    if (wiped || prefersReducedMotion) {
      // Remove the static curtain immediately if it exists
      const curtain = document.getElementById('wipe-curtain')
      if (curtain) curtain.remove()
      return
    }

    const curtain = document.getElementById('wipe-curtain')
    if (!curtain) return

    // Tell Framer Motion to animate the existing DOM element
    const controls = animate(
      curtain,
      { x: '-100%' },
      { duration: 0.65, ease: [0.65, 0, 0.35, 1] }
    )

    controls.then(() => {
      curtain.remove()                  // clean up the DOM
      sessionStorage.setItem('hardcopy-wipe', 'true')
    })
  }, [prefersReducedMotion])

  return null // This component renders nothing itself
}