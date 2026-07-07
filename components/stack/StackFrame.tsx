'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { StackLayer } from '@/data/stack'
import { SkillTile } from './SkillTile'
import { Expandable } from './Expandable'
import { FOCUS_RING, TRANSITION_FAST } from './styles'

const SURFACE: Record<StackLayer['variant'], string> = {
  ink: 'bg-ink text-bone',
  purple: 'bg-purple text-bone',
  teal: 'bg-teal text-bone',
  blue: 'bg-blue text-bone',
  coral: 'bg-coral text-bone',
  magenta: 'bg-magenta text-bone',
}

interface StackFrameProps {
  layer: StackLayer
  open: boolean
  onToggle: () => void
  isFirst?: boolean
}

export function StackFrame({ layer, open, onToggle, isFirst = false }: StackFrameProps) {
  const panelId = `frame-panel-${layer.id}`
  const surface = SURFACE[layer.variant]
  const onDark = true

  const [openTileIndices, setOpenTileIndices] = useState<Set<number>>(new Set())

  const toggleTile = (index: number) => {
    setOpenTileIndices(prev => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className={isFirst ? '' : 'border-t-[3px] border-ink'}>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className={`w-full flex items-center justify-between gap-4 text-left px-5 py-6 sm:px-8 sm:py-7 ${surface} ${TRANSITION_FAST} ${FOCUS_RING} active:translate-y-[2px] active:shadow-[1px_1px_0_var(--color-ink)]`}
        >
          <div className="flex items-baseline gap-3 sm:gap-5 min-w-0">
            <span className="font-mono text-xs sm:text-sm font-bold opacity-50 flex-shrink-0">
              [{String(layer.frame).padStart(2, '0')}]
            </span>
            <span className="min-w-0">
              <span className="block font-display font-extrabold text-xl sm:text-2xl tracking-[-0.02em]">
                {layer.label}
              </span>
              <span className="block font-body text-sm opacity-70 mt-1 max-w-[52ch]">
                {layer.description}
              </span>
            </span>
          </div>

          <span className="flex items-center gap-3 flex-shrink-0">
            <span className="hidden md:inline font-mono text-[10px] font-bold uppercase tracking-[0.1em] opacity-40">
              {layer.command}
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] opacity-60">
              {layer.tools.length} tools
            </span>
            <ChevronDown
              aria-hidden="true"
              className={`w-5 h-5 ${TRANSITION_FAST} ${open ? 'rotate-180' : 'rotate-0'}`}
            />
          </span>
        </button>
      </h3>

      {/* 👇 Fix: pass the surface class to Expandable so the background is always the frame’s colour */}
      <Expandable open={open} id={panelId} className={surface}>
        <div aria-hidden={!open} className={`p-5 sm:p-8 border-t-[3px] border-ink`}>
          <p className="sm:hidden font-body text-sm opacity-70 mb-5">{layer.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {layer.tools.map((tool, index) => (
              <SkillTile
                key={tool.name}
                tool={tool}
                onDark={onDark}
                isOpen={openTileIndices.has(index)}
                onToggle={() => toggleTile(index)}
              />
            ))}
          </div>
        </div>
      </Expandable>
    </div>
  )
}