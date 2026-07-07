export function TerminalSnapshot() {
  return (
    <div className="border-[3px] border-ink p-5 font-mono text-xs leading-relaxed bg-ink text-bone max-w-md">
      <div className="flex gap-2 mb-2 opacity-50">
        <span className="w-3 h-3 rounded-full bg-bone/30"></span>
        <span className="w-3 h-3 rounded-full bg-bone/30"></span>
        <span className="w-3 h-3 rounded-full bg-bone/30"></span>
      </div>
      <pre className="whitespace-pre-wrap">
{`           .--.           
          |o_o |    OS: Ubuntu 22.04 LTS (WSL2)
          |:_/ |    Shell: zsh 5.8.1
         //   \\ \\   Uptime: 14 months
        (|     | )  Packages: too many
       /'\\_   _/\`\\  Terminal: Windows Terminal
       \\___)=(___/   Theme: bone/ink neobrutalist`}
      </pre>
      <p className="mt-3 text-bone/50 italic">
        Building a custom Linux terminal ·{' '}
        <a href="#" className="underline hover:text-bone">
          repo coming soon
        </a>
      </p>
    </div>
  )
}