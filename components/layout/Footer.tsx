'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from '@/components/ui/ExternalLink'

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
    <span
      className="font-mono text-xs text-ink-muted"
      title="Current time in IST"
      aria-hidden="true"
    >
      {time} IST
    </span>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-obsidian-border">
      <div className="mx-auto flex max-w-content flex-col gap-5 px-8 py-8">
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {socials.map(({ label, href }) => (
            <ExternalLink
              key={label}
              href={href}
              className="text-[13px] font-normal text-ink-secondary no-underline transition-colors duration-150 hover:text-gold focus-visible:text-gold"
            >
              {label}
            </ExternalLink>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-ink-muted">
            © 2026 Aditya Jha
          </span>
          <ISTClock />
        </div>
      </div>
    </footer>
  )
}