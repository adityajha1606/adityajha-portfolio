'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Greeting() {
  const [visible, setVisible] = useState(true)
  const [greeting, setGreeting] = useState('')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const hour = new Date().getHours()
    setGreeting(
      hour >= 5 && hour < 12
        ? 'Good morning.'
        : hour >= 12 && hour <= 16
          ? 'Good afternoon.'
          : 'Good evening.'
    )
    const timer = setTimeout(() => setVisible(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (!greeting) return null

  return (
    <motion.p
      className="font-mono text-[11px] font-bold text-ink/70 mb-2 tracking-wider"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      aria-hidden={!visible}
    >
      {greeting}
    </motion.p>
  )
}