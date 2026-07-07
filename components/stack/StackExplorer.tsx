'use client'

import { useState } from 'react'
import type { StackLayer } from '@/data/stack'
import { StackFrame } from './StackFrame'
import { FOCUS_RING, TRANSITION_FAST } from './styles'

interface StackExplorerProps {
  layers: StackLayer[]
  /** id of the layer expanded by default */
  defaultOpenId?: string
}

export function StackExplorer({ layers, defaultOpenId }: StackExplorerProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : []),
  )

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex gap-6 lg:gap-10 items-start">
      {/* Rail — hidden below lg, purely a navigational aid so it's fine to drop on mobile */}
      <div className="hidden lg:flex flex-col w-40 flex-shrink-0 sticky top-24 gap-1">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink/35 mb-3">
          Stack grows ↓
        </p>
        {layers.map((layer) => {
          const isOpen = openIds.has(layer.id)
          return (
            <button
              key={layer.id}
              type="button"
              aria-expanded={isOpen}
              aria-controls={`frame-panel-${layer.id}`}
              onClick={() => toggle(layer.id)}
              className={`text-left px-3 py-2 border-l-[3px] font-mono text-[11px] font-bold uppercase tracking-[0.06em] ${TRANSITION_FAST} ${FOCUS_RING} ${
                isOpen
                  ? 'border-blue text-ink bg-blue/10'
                  : 'border-ink/15 text-ink/40 hover:text-ink/70 hover:border-ink/40'
              }`}
            >
              [{String(layer.frame).padStart(2, '0')}] {layer.label}
            </button>
          )
        })}
      </div>

      {/* Stacked frames */}
      <div className="flex-1 min-w-0 border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)]">
        {layers.map((layer, index) => (
          <StackFrame
            key={layer.id}
            layer={layer}
            isFirst={index === 0}
            open={openIds.has(layer.id)}
            onToggle={() => toggle(layer.id)}
          />
        ))}
      </div>
    </div>
  )
}
