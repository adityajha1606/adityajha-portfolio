'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { siteConfig } from '@/data/site'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jhaadi/' },
  { label: 'GitHub', href: 'https://github.com/adityajha1606' },
  { label: 'Peerlist', href: 'https://peerlist.io/ajjha1606' },
  { label: 'Dev.to', href: 'https://dev.to/aditya_1606' },
  { label: 'Substack', href: 'https://substack.com/@jhaji' },
  { label: 'X', href: 'https://x.com/adijha1606' },
  { label: 'Kaggle', href: 'https://kaggle.com/adijha1606' },
  { label: 'Hugging Face', href: 'https://huggingface.co/adijha1606' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/adi.jha' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/adijha1606/' },
]

function ISTClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-xs text-bone" aria-hidden="true">
      {time} IST
    </span>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t-[3px] border-ink bg-ink">
      <div className="mx-auto max-w-content grid grid-cols-1 md:grid-cols-2 gap-0 px-8 py-8 relative">
        {/* ── Vertical divider – even spacing ── */}
        <div className="absolute left-1/2 top-4 bottom-4 w-[3px] bg-bone hidden md:block" />

        {/* ── Left column ── */}
        <div className="flex flex-col gap-5 pr-6">
          {/* Email link — red, larger, leads to contact */}
          <Link
            href="/contact"
            className="font-body font-semibold text-lg text-fault hover:text-bone transition-colors duration-150 no-underline"
          >
            {siteConfig.email}
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map(({ label, href }) => (
              <ExternalLink
                key={label}
                href={href}
                className="text-[13px] font-body font-medium text-bone no-underline uppercase tracking-wide transition-colors duration-150 hover:text-strike focus-visible:text-strike"
              >
                {label}
              </ExternalLink>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-bone opacity-60">
            <span>© 2026 Aditya Jha</span>
            <span className="font-mono">Last refined: June 2026</span>
          </div>
        </div>

        {/* ── Right column – //hand-made in red/bone, clock & stamp ── */}
        <div className="flex flex-col items-end justify-between gap-6 pl-6">
          <span className="font-display font-extrabold text-[40px] leading-none whitespace-nowrap">
            <span className="text-bone">//hand-</span><span className="text-fault">made</span>
          </span>

          <div className="flex flex-col items-end gap-4">
            <ISTClock />
            {/* RED stamp */}
            <span className="inline-block border-[3px] border-fault px-3 py-1 font-mono text-xs uppercase text-fault">
              Received 26 Jun 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}