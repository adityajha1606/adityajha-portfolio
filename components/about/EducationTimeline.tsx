'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Card, type CardVariant } from '@/components/ui/Card'

// ── Education entries ──
const educationEntries = [
  {
    year: '2024 – 2028',
    title: 'B.Tech Computer Science',
    desc: 'SRM Institute of Science and Technology · CGPA 9.4 (current)',
    variant: 'teal' as CardVariant,
    flipBack: true,
    flipContent: {
      type: 'sgpa' as const,
      semesters: [
        { label: 'Sem 1', sgpa: '9.15' },
        { label: 'Sem 2', sgpa: '9.2' },
        { label: 'Sem 3', sgpa: '9.6' },
        { label: 'Sem 4', sgpa: '9.5' },
      ],
    },
    ariaLabel: 'Show semester SGPA',
  },
  {
    year: '2021 – 2023',
    title: 'Higher Secondary (XII)',
    desc: 'Paramount International School · CBSE · 80%',
    variant: 'coral' as CardVariant,
    expandContent: {
      type: 'photo' as const,
      photoSrc: '/images/school-xii.jpg',
      caption: 'together since 2017',
    },
    ariaLabel: 'Show photo',
  },
  {
    year: '2019 – 2021',
    title: 'High School (X)',
    desc: 'Paramount International School · CBSE · 96%',
    variant: 'purple' as CardVariant,
    expandContent: {
      type: 'list' as const,
      schools: [
        { name: 'Don Bosco Nursery & Primary School', city: '' },
        { name: 'Shantiniketan School (CBSE)', city: 'Kolhapur' },
        { name: 'Podar International School (ICSE)', city: 'Solapur' },
        { name: 'Podar International School (ICSE)', city: 'Aurangabad' },
        { name: 'Paramount International School', city: 'Delhi' },
      ],
    },
    ariaLabel: 'Show list of schools',
  },
]

// ── Focus trap hook for modal ──
function useFocusTrap(containerRef: React.RefObject<HTMLDivElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !containerRef.current) return
    const container = containerRef.current
    const focusable = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') return // close handled elsewhere
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    first?.focus()
    return () => container.removeEventListener('keydown', handleKeyDown)
  }, [active, containerRef])
}

// ── Slide‑up modal for high school (accessible) ──
function SchoolModal({
  schools,
  onClose,
  triggerRef,
}: {
  schools: { name: string; city: string }[]
  onClose: () => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  useFocusTrap(containerRef, true)

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Return focus on close
  useEffect(() => {
    return () => {
      triggerRef.current?.focus()
    }
  }, [triggerRef])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/90"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="List of schools I've studied in"
    >
      <div
        ref={containerRef}
        className="w-full max-w-lg bg-bone border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] p-6 pb-10 translate-y-0 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display font-extrabold text-xl">Schools I&apos;ve Studied In</h3>
          <button
            ref={closeRef}
            className="font-mono text-sm font-bold border-2 border-ink px-2 py-1 hover:bg-ink hover:text-bone transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fault"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        <ul className="space-y-2">
          {schools.map((s, i) => (
            <li key={i} className="border-l-4 border-ink pl-3 font-medium">
              {s.name}{s.city ? `, ${s.city}` : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ── Flip card wrapper (accessible) ──
function FlipCard({
  front,
  back,
  ariaLabel,
}: {
  front: React.ReactNode
  back: React.ReactNode
  ariaLabel: string
}) {
  const [flipped, setFlipped] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggle = useCallback(() => setFlipped((v) => !v), [])

  return (
    <button
      ref={buttonRef}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggle()
        }
      }}
      className="cursor-pointer w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fault rounded-none"
      style={{ perspective: '1000px' }}
      aria-label={flipped ? 'Show front' : ariaLabel}
      aria-expanded={flipped}
    >
      <div
        className="relative transition-transform duration-500 motion-reduce:transition-none motion-reduce:transform-none"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT */}
        <div style={{ backfaceVisibility: 'hidden' }}>{front}</div>
        {/* BACK */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </div>
    </button>
  )
}

// ── Expandable card for natural reveals (accessible) ──
function ExpandableCard({
  front,
  children,
  ariaLabel,
}: {
  front: React.ReactNode
  children: React.ReactNode
  ariaLabel: string
}) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggle = useCallback(() => setOpen((v) => !v), [])

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggle()
          }
        }}
        className="cursor-pointer w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fault rounded-none"
        aria-expanded={open}
        aria-label={open ? 'Hide details' : ariaLabel}
      >
        {front}
      </button>

      {/* Expandable panel below */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          open ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        {children}
      </div>
    </div>
  )
}

// ── Main timeline ──
export default function EducationTimeline() {
  const [modalData, setModalData] = useState<{ schools: { name: string; city: string }[] } | null>(null)
  const modalTriggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[13px] top-1 bottom-1 w-[4px] bg-ink" />

        <div className="flex flex-col gap-8">
          {educationEntries.map((entry, i) => {
            // Dot on the line
            const dot = (
              <div className="absolute left-[-1.65rem] top-2 w-[14px] h-[14px] rounded-full bg-ink border-[3px] border-bone z-10" />
            )

            // Front face (used in triggers)
            const frontFace = (
              <Card variant={entry.variant} className="p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] opacity-50 mb-1">
                  {entry.year}
                </p>
                <h3 className="font-display font-extrabold text-lg leading-tight mb-1">
                  {entry.title}
                </h3>
                <p className="text-sm opacity-85">{entry.desc}</p>
                {/* Cue text */}
                {(entry.flipBack || entry.expandContent) && (
                  <p className="font-mono text-[9px] mt-2 opacity-40 italic">
                    {entry.flipBack ? 'Click to flip →' : 'Click to reveal ↓'}
                  </p>
                )}
              </Card>
            )

            // Flip back face (for B.Tech)
            let flipBack = null
            if (entry.flipBack && entry.flipContent?.type === 'sgpa') {
              flipBack = (
                <div className="border-[3px] border-ink shadow-[4px_4px_0_var(--color-ink)] bg-ink p-5 h-full flex flex-col justify-center">
                  <h4 className="font-display font-extrabold text-lg text-bone mb-3">SGPA</h4>
                  <ul className="space-y-1">
                    {entry.flipContent.semesters.map((sem, idx) => (
                      <li key={idx} className="font-mono text-sm text-bone flex justify-between">
                        <span>{sem.label}</span>
                        <span className="font-bold">{sem.sgpa}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }

            // Expandable content (for XII & X)
            let expandContent = null
            if (entry.expandContent) {
              if (entry.expandContent.type === 'photo') {
                expandContent = (
                  <div className="border-[3px] border-ink shadow-[4px_4px_0_var(--color-ink)] bg-ink p-4 flex flex-col items-center">
                    <img
                      src={entry.expandContent.photoSrc}
                      alt={entry.expandContent.caption}
                      className="w-full h-auto max-h-[280px] object-contain border-[2px] border-bone mb-3"
                    />
                    <p className="font-display font-extrabold text-base text-bone text-center">
                      {entry.expandContent.caption}
                    </p>
                  </div>
                )
              } else if (entry.expandContent.type === 'list') {
                // Fix: cast to the correct type to avoid TS error
                const schools = (entry.expandContent as { type: 'list'; schools: { name: string; city: string }[] }).schools
                expandContent = (
                  <div className="border-[3px] border-ink shadow-[4px_4px_0_var(--color-ink)] bg-ink p-5">
                    <ul className="space-y-1">
                      {schools.map((s, idx) => (
                        <li key={idx} className="font-mono text-sm text-bone flex justify-between">
                          <span>{s.name}</span>
                          {s.city && <span className="text-bone/60">{s.city}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
            }

            // Pressed state for interactive wrappers is handled inside the button via active: classes (added to Card? Actually Card already has hover, we add active via its class).
            // For ExpandableCard, the button wraps the Card, so we can add active: to the button.

            return (
              <div key={i} className="relative">
                {dot}

                {entry.flipBack ? (
                  <FlipCard front={frontFace} back={flipBack} ariaLabel={entry.ariaLabel || 'Toggle details'} />
                ) : entry.expandContent ? (
                  entry.expandContent.type === 'list' ? (
                    // For school list, we use a button that opens modal, not expandable
                    <>
                      <button
                        ref={modalTriggerRef}
                        onClick={() => setModalData({ schools: (entry.expandContent as { type: 'list'; schools: { name: string; city: string }[] }).schools })}
                        className="cursor-pointer w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fault rounded-none active:translate-y-[2px] active:shadow-[1px_1px_0_var(--color-ink)]"
                        aria-label={entry.ariaLabel || 'Show list of schools'}
                      >
                        {frontFace}
                      </button>
                    </>
                  ) : (
                    <ExpandableCard front={frontFace} ariaLabel={entry.ariaLabel || 'Toggle details'}>
                      {expandContent}
                    </ExpandableCard>
                  )
                ) : (
                  frontFace
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal for high school schools */}
      {modalData && (
        <SchoolModal
          schools={modalData.schools}
          onClose={() => setModalData(null)}
          triggerRef={modalTriggerRef}
        />
      )}
    </>
  )
}