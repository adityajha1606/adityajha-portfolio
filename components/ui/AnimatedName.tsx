'use client'

import { useEffect } from 'react'
import { useReducedMotion, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedNameProps {
  name: string
  className?: string
  onAnimationComplete?: () => void
}

const CHAR_STAGGER = 0.03
const CHAR_DURATION = 0.4
const CHAR_EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]

export function AnimatedName({
  name,
  className,
  onAnimationComplete,
}: AnimatedNameProps) {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      onAnimationComplete?.()
    }
  }, [prefersReducedMotion, onAnimationComplete])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: CHAR_STAGGER,
      },
    },
  }

  const charVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: CHAR_DURATION,
        ease: CHAR_EASE,
      },
    },
  }

  const baseClassName = cn(
    'font-display font-bold leading-[1.1] text-ink-bright tracking-normal',
    'text-[clamp(56px,9vw,104px)]',
    className
  )

  if (prefersReducedMotion) {
    return (
      <div className={baseClassName} aria-label={name}>
        {name}
      </div>
    )
  }

  return (
    <motion.div
      className={baseClassName}
      role="text"               /* ← Fix: valid ARIA role for aria-label */
      aria-label={name}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={onAnimationComplete}
    >
      {name.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={charVariants}
          style={{ display: 'inline-block' }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}