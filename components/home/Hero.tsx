'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Greeting } from '@/components/home/Greeting'

const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]
const HAIRLINE_DURATION = 0.6
const CTA_DELAY = 0.6
const SCROLL_DELAY = 0.8

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [line1Complete, setLine1Complete] = useState(prefersReducedMotion ?? false)
  const [line2Complete, setLine2Complete] = useState(prefersReducedMotion ?? false)

  return (
    <section
      className="relative min-h-screen flex flex-col px-6 md:px-12 lg:px-16"
      aria-label="Aditya Jha — Hero"
    >
      <div className="flex-1 flex flex-col justify-center w-full max-w-content pt-24 pb-20">
        <Greeting />

        {/* ADITYA line */}
        <h1
          className="font-display font-extrabold uppercase text-ink text-[clamp(64px,10vw,120px)] leading-[1.05]"
          aria-label="Aditya Jha"
        >
          {prefersReducedMotion ? (
            'ADITYA'
          ) : (
            <AnimatedLine
              text="ADITYA"
              onComplete={() => setLine1Complete(true)}
            />
          )}
        </h1>

        {/* JHA. line with red dot */}
        <h1
          className="font-display font-extrabold uppercase text-ink text-[clamp(64px,10vw,120px)] leading-[1.05]"
          aria-label="Aditya Jha"
        >
          {prefersReducedMotion ? (
            'JHA<span class="text-fault">.</span>'
          ) : (
            <AnimatedLine
              text="JHA"
              suffix={<span className="text-fault">.</span>}
              delay={line1Complete ? 0 : 0.4}
              onComplete={() => setLine2Complete(true)}
            />
          )}
        </h1>

        {/* Yellow rule */}
        <motion.div
          className="h-[4px] bg-strike w-3/4 mt-4 mb-6"
          style={{ transformOrigin: 'left center' }}
          initial={{ scaleX: 0 }}
          animate={line2Complete ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : HAIRLINE_DURATION,
            ease: EASE_OUT,
          }}
          aria-hidden="true"
        />

        <p className="font-body text-ink/60 text-base md:text-lg tracking-[0.15em] uppercase mb-8">
          ML Engineer&nbsp;·&nbsp;Full Stack Developer
        </p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={line2Complete ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: prefersReducedMotion ? 0 : CTA_DELAY,
            duration: prefersReducedMotion ? 0 : 0.4,
            ease: EASE_OUT,
          }}
        >
          <Button variant="primary" href="/work">
            View my work
          </Button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline transition-all duration-150 border-ink bg-bone text-ink shadow-[4px_4px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[2px_2px_0_var(--color-ink)]"
          >
            Download resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="w-full flex flex-col items-center gap-1 pb-8 text-ink/50"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={line2Complete ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          delay: prefersReducedMotion ? 0 : SCROLL_DELAY,
          duration: prefersReducedMotion ? 0 : 0.3,
        }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">scroll ↓</span>
      </motion.div>
    </section>
  )
}

/* ── Helper: animated line with optional red suffix ── */
function AnimatedLine({
  text,
  suffix,
  delay = 0,
  onComplete,
}: {
  text: string
  suffix?: React.ReactNode
  delay?: number
  onComplete?: () => void
}) {
  const chars = text.split('').map((char, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
      }}
      className="inline-block"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ))

  const content = [...chars, suffix && <span key="suffix">{suffix}</span>]

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
      }}
      onAnimationComplete={onComplete}
      aria-hidden="true"
      className="inline-block"
    >
      {content}
    </motion.span>
  )
}