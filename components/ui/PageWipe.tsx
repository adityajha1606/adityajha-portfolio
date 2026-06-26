'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function PageWipe() {
  const [show, setShow] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const wiped = sessionStorage.getItem('hardcopy-wipe')
    if (!wiped) {
      setShow(true)
    }
  }, [])

  const onComplete = useCallback(() => {
    sessionStorage.setItem('hardcopy-wipe', 'true')
    setShow(false)
  }, [])

  if (!show || prefersReducedMotion) return null

  return (
    <motion.div
      className="fixed inset-0 z-[10001] bg-ink"
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={onComplete}
      aria-hidden="true"
    />
  )
}