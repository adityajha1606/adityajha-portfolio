'use client'

import { useReducedMotion, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  const inner = (
    <div
      className={cn(
        'max-w-content mx-auto',
        'px-6 md:px-12 lg:px-16',
        'py-section-mobile md:py-section-desktop',
        className
      )}
    >
      {children}
    </div>
  )

  if (prefersReducedMotion) {
    return <section id={id}>{inner}</section>
  }

  return (
    <section id={id}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
      >
        {inner}
      </motion.div>
    </section>
  )
}