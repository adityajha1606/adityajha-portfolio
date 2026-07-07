import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionRule } from '@/components/ui/SectionRule'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'
import { BootHeader } from '@/components/stack/BootHeader'
import { StackExplorer } from '@/components/stack/StackExplorer'
import { CredentialsProof } from '@/components/stack/CredentialsProof'
import { LearningBranch } from '@/components/stack/LearningBranch'
import { SystemPreferences } from '@/components/stack/SystemPreferences'
import { TerminalSnapshot } from '@/components/stack/TerminalSnapshot'
import { ClickableHeading } from '@/components/ui/ClickableHeading'
import Link from 'next/link'
import {
  stackLayers,
  stackMarqueeItems,
  certificates,
  projectMinis,
  systemPreferences,
  learningItems,
  readingItems,
} from '@/data/stack'

export const metadata: Metadata = {
  title: 'Stack · Aditya Jha',
  description:
    'A tech stack rendered as an actual stack — layers, tools, shipped releases, and what is still in progress.',
}

export default function StackPage() {
  return (
    <>
      <BootHeader />
      <Marquee items={stackMarqueeItems} />

      {/* ══════════════════════════════════════════════
          THE STACK — layered architecture explorer
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="stack-layers">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ ls -la ./skills
        </p>
        <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-4">
          Five Layers, Bottom-Up
        </h2>
        <p className="font-body font-medium text-base text-ink/60 max-w-[62ch] mb-10">
          Foundations at the bottom, systems design at the top. Click any tile to see how I’ve
          used that tool — every entry comes from a real project.
        </p>
        <StackExplorer layers={stackLayers} defaultOpenId="infra-backend" />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          SYSTEM PREFERENCES
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="preferences">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ cat .dotfiles
        </p>
        <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-4">
          System Preferences
        </h2>
        <SystemPreferences items={systemPreferences} />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          TERMINAL SNAPSHOT
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="terminal-snapshot">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ neofetch
        </p>
        <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-4">
          Terminal Snapshot
        </h2>
        <TerminalSnapshot />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          CERTIFICATES & PROJECTS
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="credentials">
        <CredentialsProof certificates={certificates} projects={projectMinis} />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          OPEN SOURCE — standalone section
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="open-source">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ cat /open-source
        </p>
        <ClickableHeading href="/open-source">Open Source</ClickableHeading>
        <Link
          href="/open-source"
          className="block bg-purple border-[3px] border-ink p-5 mt-6 text-bone shadow-[8px_8px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-widest opacity-50 mb-1">
            Contributor
          </p>
          <p className="font-display font-extrabold text-lg leading-snug">
            MeterDown, OpenIris, Cosmotales — contributions to real projects.
          </p>
        </Link>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          CODING PROFILES — standalone section
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="coding-profiles">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ cat /coding-profiles
        </p>
        <ClickableHeading href="/coding-profiles">Coding Profiles</ClickableHeading>
        <Link
          href="/coding-profiles"
          className="block bg-blue border-[3px] border-ink p-5 mt-6 text-bone shadow-[8px_8px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
        >
          <p className="font-mono text-sm font-bold uppercase tracking-widest opacity-50 mb-1">
            Profiles
          </p>
          <p className="font-display font-extrabold text-lg leading-snug">
            GitHub, LeetCode, Codeforces — green squares and solved problems.
          </p>
        </Link>
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          UNRELEASED — what I’m learning
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="learning">
        <LearningBranch learningItems={learningItems} readingItems={readingItems} />
      </SectionWrapper>

      <SectionRule />

      {/* ══════════════════════════════════════════════
          CLOSER
      ══════════════════════════════════════════════ */}
      <SectionWrapper id="stack-contact">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
          $ exit
        </p>
        <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-6">
          Want the Full Trace?
        </h2>
        <p className="font-body font-medium text-lg text-ink max-w-[56ch] mb-10 leading-relaxed">
          This is the stack. The work built on top of it lives on the projects page, and the
          person underneath all of it is one click away.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/work">
            See the Work →
          </Button>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 whitespace-nowrap border-[3px] border-ink bg-fault text-bone px-5 py-2.5 font-display font-extrabold text-[13px] uppercase tracking-wide no-underline shadow-[4px_4px_0_var(--color-ink)] transition-all duration-150 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[1px_1px_0_var(--color-ink)]"
          >
            Get in Touch
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}