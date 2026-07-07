'use client'

import * as React from 'react'

interface ExpandableProps {
  open: boolean
  id?: string
  children: React.ReactNode
  className?: string
}

/**
 * Height-safe expand/collapse using the CSS grid-template-rows trick
 * (0fr -> 1fr) instead of measuring scrollHeight. Transition is skipped
 * entirely under prefers-reduced-motion via Tailwind's motion-reduce: variant.
 */
export function Expandable({ open, id, children, className = '' }: ExpandableProps) {
  return (
    <div
      id={id}
      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      } ${className}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  )
}
