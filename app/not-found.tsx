export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-128px)] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <p className="font-display font-extrabold text-[clamp(6rem,15vw,12rem)] leading-none text-ink mb-6 md:-ml-[44px]">
          404<span className="text-fault">.</span>
        </p>
        <p className="font-body font-medium text-[clamp(1rem,2.5vw,1.3rem)] text-ink/70 mb-10">
          YOU&rsquo;VE WANDERED OFF THE GRID.
        </p>
        <a
          href="/"
          className="inline-block px-9 py-3.5 bg-strike text-ink font-display font-extrabold text-sm uppercase tracking-[0.05em] no-underline border-[3px] border-ink shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150"
        >
          RETURN &rarr;
        </a>
      </div>
    </div>
  )
}