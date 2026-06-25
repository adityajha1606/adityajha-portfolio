'use client'

import { useEffect } from 'react'

export function ScrollbarGlow() {
  useEffect(() => {
    // Respect user preference – no glow for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sheet = new CSSStyleSheet()
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]

    // Insert default (resting) rules
    sheet.insertRule(
      `::-webkit-scrollbar-thumb { background: var(--color-obsidian-border); transition: background 0.4s ease; }`,
      0,
    )
    sheet.insertRule(
      `html { scrollbar-color: var(--color-obsidian-border) var(--color-obsidian); }`,
      1,
    )

    let timer: ReturnType<typeof setTimeout>

    function onScroll() {
      // Activate gold
      // Delete higher index first to avoid index shifting
      sheet.deleteRule(1) // Firefox rule
      sheet.deleteRule(0) // WebKit rule

      sheet.insertRule(
        `::-webkit-scrollbar-thumb { background: var(--color-gold); transition: background 0.1s ease; }`,
        0,
      )
      sheet.insertRule(
        `html { scrollbar-color: var(--color-gold) var(--color-obsidian); }`,
        1,
      )

      clearTimeout(timer)
      timer = setTimeout(() => {
        // Deactivate – fade back to resting color
        sheet.deleteRule(1) // Firefox gold rule
        sheet.deleteRule(0) // WebKit gold rule

        sheet.insertRule(
          `::-webkit-scrollbar-thumb { background: var(--color-obsidian-border); transition: background 0.4s ease; }`,
          0,
        )
        sheet.insertRule(
          `html { scrollbar-color: var(--color-obsidian-border) var(--color-obsidian); }`,
          1,
        )
      }, 300)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
      // Remove our sheet from the document
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
        (s) => s !== sheet,
      )
    }
  }, [])

  return null
}