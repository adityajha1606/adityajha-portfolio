'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { GoldDot } from '@/components/ui/GoldDot'

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
      className="font-display italic text-ink-secondary text-base mb-4 flex items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      aria-hidden={!visible}
    >
      <GoldDot />
      {greeting}
    </motion.p>
  )
}