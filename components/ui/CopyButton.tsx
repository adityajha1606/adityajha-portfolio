'use client'

import { useState } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard API not available – silently fail
    }
  }

  return (
    <span className="relative inline-flex">
      {/* Button */}
      <button
        onClick={handleCopy}
        title="Copy email address"
        aria-label="Copy email address"
        className={`inline-flex items-center justify-center w-8 h-8 border-2 border-ink bg-bone hover:bg-strike hover:border-strike transition-all duration-150 ${
          copied ? 'bg-strike border-strike' : ''
        } ${className}`}
      >
        {/* Clipboard icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-ink"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
        </svg>
      </button>

      {/* Copied! feedback — neobrutalist banner above the button */}
      {copied && (
        <span
          className="
            absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full
            font-display font-extrabold text-sm uppercase tracking-wider
            bg-strike text-ink
            border-[3px] border-ink
            shadow-[4px_4px_0_var(--color-ink)]
            px-4 py-1
            whitespace-nowrap
            z-10
          "
        >
          Copied!
        </span>
      )}
    </span>
  )
}