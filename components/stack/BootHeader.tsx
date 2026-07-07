'use client'

const BOOT_LINES = [
  '$ whoami',
  '> aditya_jha — Backend engineer bridging infrastructure and AI/ML',
  '$ cat stack.log | tail -n 4',
  '> loading 5 layers...',
  '> loading 30+ tools...',
  '> compiling personality... done',
  '> ready.',
]

const TITLE = 'THE STACK.'

export function BootHeader() {
  return (
    <section className="bg-ink text-bone border-b-[3px] border-ink">
      <div className="max-w-[70rem] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="font-mono text-xs sm:text-sm leading-relaxed mb-10 sm:mb-14" aria-hidden="true">
          {BOOT_LINES.map((text, i) => (
            <p key={i} className={text.startsWith('$') ? 'text-bone/70' : 'text-bone/40'}>
              {text}
            </p>
          ))}
        </div>

        <h1 className="font-display font-extrabold text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.9] tracking-[-0.03em]">
          <span className="sr-only">{TITLE}</span>
          <span aria-hidden="true">{TITLE.split('').map((char, i) => (
            <span key={i} className={char === '.' ? 'text-blue' : ''}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}</span>
        </h1>

        <p className="font-body font-medium text-base sm:text-lg text-bone/55 max-w-[48ch] mt-6 leading-relaxed">
          Everything I&apos;ve pushed, popped, and occasionally overflowed.
          This is a stack, not a queue — first in stays on the bottom.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-bone/35">
          <span>5 layers</span>
          <span>30+ tools</span>
          <span>always compiling</span>
        </div>
      </div>
    </section>
  )
}