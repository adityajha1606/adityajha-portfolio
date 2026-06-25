'use client'

import { useState, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedName } from '@/components/ui/AnimatedName'
import { Button } from '@/components/ui/Button'
import { Greeting } from '@/components/home/Greeting'

const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]
const HAIRLINE_DURATION = 0.6
const ROLE_DELAY = 0.2
const LORE_DELAY = 0.4
const CTA_DELAY = 0.6
const SCROLL_DELAY = 0.8

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [nameComplete, setNameComplete] = useState(prefersReducedMotion ?? false)

  const handleNameComplete = useCallback(() => {
    setNameComplete(true)
  }, [])

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0 },
    animate: nameComplete ? { opacity: 1 } : { opacity: 0 },
    transition: {
      delay: prefersReducedMotion ? 0 : delay,
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: EASE_OUT,
    },
  })

  return (
    <section
      className="
        relative min-h-screen
        flex flex-col
        px-6 md:px-12 lg:px-16
      "
      aria-label="Hero"
    >
      <div
        className="
          flex-1 flex flex-col justify-center
          w-full max-w-content
          pt-24 pb-20
        "
      >
        <Greeting />

        <AnimatedName
          name="ADITYA JHA"
          onAnimationComplete={handleNameComplete}
        />

        <motion.div
          className="h-px bg-gold w-[clamp(120px,20vw,200px)] mt-2 mb-6"
          style={{ transformOrigin: 'left center' }}
          initial={{ scaleX: 0 }}
          animate={nameComplete ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : HAIRLINE_DURATION,
            ease: EASE_OUT,
          }}
          aria-hidden="true"
        />

        <motion.p
          className="
            font-body text-ink-secondary
            text-base md:text-lg
            tracking-[0.15em] uppercase
            mb-3
          "
          {...fadeIn(ROLE_DELAY)}
        >
          ML Engineer&nbsp;·&nbsp;Full Stack Developer
        </motion.p>

        <motion.p
          className="
            font-display italic
            text-ink-secondary
            text-[clamp(17px,2.2vw,22px)]
            leading-relaxed
            mb-8
          "
          {...fadeIn(LORE_DELAY)}
        >
          Hello there. Fancy seeing you here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          {...fadeIn(CTA_DELAY)}
        >
          <Button variant="gold" href="/work">
            View my work
          </Button>
          <Button variant="ghost" href="/resume.pdf" external>
            Download resume
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="
          w-full flex flex-col items-center gap-1
          pb-8 text-ink-muted
        "
        aria-hidden="true"
        {...fadeIn(SCROLL_DELAY)}
      >
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
          scroll
        </span>
        <ChevronDown size={14} strokeWidth={1.5} className="opacity-60" />
      </motion.div>
    </section>
  )
}