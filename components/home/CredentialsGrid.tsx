import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { GoldDot } from '@/components/ui/GoldDot'
import { ExternalLink } from '@/components/ui/ExternalLink'

const credentials = [
  {
    label: 'Education',
    description: 'B.Tech CSE, SRMIST Kattankulathur · 9.4 CGPA · 2024–2028',
    href: '/about#education',
    external: false,
  },
  {
    label: 'Coding Profiles',
    description: '200+ LeetCode · Codeforces · Striver A2Z in progress',
    href: '/coding-profiles',
    external: false,
  },
  {
    label: 'Open Source',
    description: 'Building in public — contributions in progress',
    href: 'https://github.com/adityajha1606',
    external: true,
  },
  {
    label: 'Hackathons',
    description: 'Top 20 at HackSummit 6.0 (1,200+ teams)',
    href: '/stack#hackathons',
    external: false,
  },
]

function CredentialCard({
  label,
  description,
  href,
  external,
}: (typeof credentials)[number]) {
  const content = (
    <Card hover className="p-6 flex flex-col gap-3 h-full">
      <p className="font-body text-xs uppercase tracking-widest text-gold">
        {label}
      </p>
      <p className="font-body text-ink-secondary text-sm leading-relaxed flex-1">
        {description}
      </p>
      <span className="inline-block font-body text-xs text-gold tracking-wide group-hover:text-gold-bright transition-colors duration-150">
        View →
      </span>
    </Card>
  )

  if (external) {
    return (
      <ExternalLink href={href} className="block no-underline group">
        {content}
      </ExternalLink>
    )
  }

  return (
    <Link href={href} className="block group">
      {content}
    </Link>
  )
}

export function CredentialsGrid() {
  return (
    <div>
      <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold mb-6 flex items-center gap-2">
        Credentials <GoldDot />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((cred) => (
          <CredentialCard key={cred.label} {...cred} />
        ))}
      </div>
    </div>
  )
}