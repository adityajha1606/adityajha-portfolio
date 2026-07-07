'use client'

import { useState, useId } from 'react'
import type { Tool } from '@/data/stack'
import { Expandable } from './Expandable'
import { FOCUS_RING, TRANSITION_FAST } from './styles'

interface SkillTileProps {
  tool: Tool
  onDark?: boolean
  isOpen: boolean
  onToggle: () => void
}

export function SkillTile({ tool, onDark = false, isOpen, onToggle }: SkillTileProps) {
  const loreId = useId()
  const hasLore = Boolean(tool.what || tool.how || tool.howI)

  const nameColor = onDark ? 'text-bone' : 'text-ink'
  const tagColor = onDark ? 'text-bone/40' : 'text-ink/40'
  const borderColor = onDark ? 'border-bone/20' : 'border-ink/15'

  const labelColor = onDark ? 'text-bone/70' : 'text-ink/70'
  const labelAccent = onDark
    ? 'border-l-[2px] border-bone pl-2'
    : 'border-l-[2px] border-coral pl-2'
  const bodyText = onDark ? 'text-bone/90' : 'text-ink/80'
  const dashColor = onDark ? 'border-bone/50' : 'border-coral/50'

  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={loreId}
      onClick={onToggle}
      disabled={!hasLore}
      className={`w-full text-left border-[3px] ${borderColor} p-4 ${TRANSITION_FAST} ${FOCUS_RING} ${
        hasLore ? 'cursor-pointer hover:bg-ink/5 active:translate-y-[2px]' : 'cursor-default'
      }`}
    >
      {/* Tool name + tag + +/- indicator */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`font-display font-extrabold text-sm leading-snug ${nameColor}`}>
            {tool.name}
          </p>
          {tool.tag && (
            <p className={`font-mono text-[9px] font-bold uppercase tracking-[0.1em] ${tagColor} mt-1`}>
              {tool.tag}
            </p>
          )}
        </div>
        {hasLore && (
          <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.08em] ${nameColor} opacity-40 mt-0.5`}>
            {isOpen ? '−' : '+'}
          </span>
        )}
      </div>

      {/* Expandable lore */}
      {hasLore && (
        <Expandable open={isOpen} id={loreId}>
          <div
            role="region"
            aria-hidden={!isOpen}
            className={`mt-3 pt-3 border-t-[2px] border-dashed ${dashColor}`}
          >
            {tool.what && (
              <p className="text-sm leading-relaxed mb-2">
                <span className={`inline-block font-mono text-[11px] font-bold uppercase tracking-[0.05em] ${labelColor} ${labelAccent} mb-1`}>
                  What it is
                </span>
                <span className={`block ${bodyText}`}>{tool.what}</span>
              </p>
            )}
            {tool.how && (
              <p className="text-sm leading-relaxed mb-2">
                <span className={`inline-block font-mono text-[11px] font-bold uppercase tracking-[0.05em] ${labelColor} ${labelAccent} mb-1`}>
                  How it’s used
                </span>
                <span className={`block ${bodyText}`}>{tool.how}</span>
              </p>
            )}
            {tool.howI && (
              <p className="text-sm leading-relaxed">
                <span className={`inline-block font-mono text-[11px] font-bold uppercase tracking-[0.05em] ${labelColor} ${labelAccent} mb-1`}>
                  How I used it
                </span>
                <span className={`block ${bodyText}`}>{tool.howI}</span>
              </p>
            )}
          </div>
        </Expandable>
      )}
    </button>
  )
}