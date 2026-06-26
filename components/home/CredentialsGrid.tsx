import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { ExternalLink } from '@/components/ui/ExternalLink'

const credentials = [
  {
    label: 'Education',
    description: 'B.Tech CSE, SRMIST Kattankulathur · 9.4 CGPA · 2024–2028',
    href: '/about#education',
    external: false,
    fill: 'default' as const,
  },
  {
    label: 'Coding Profiles',
    description: 'LeetCode · GitHub · Codeforces · CodeChef · HackerRank',
    href: '/coding-profiles',
    external: false,
    fill: 'coral' as const,
  },
  {
    label: 'Open Source',
    description: 'Building in public — contributions in progress',
    href: 'https://github.com/adityajha1606',
    external: true,
    fill: 'coral' as const,
  },
  {
    label: 'Hackathons',
    description: 'Top 20 at HackSummit 6.0 (1,200+ teams)',
    href: '/stack#hackathons',
    external: false,
    fill: 'default' as const,
  },
]

function CredentialCard({
  label,
  description,
  href,
  external,
  fill,
}: (typeof credentials)[number]) {
  const content = (
    <Card variant={fill} className="p-6 flex flex-col gap-3 h-full border-t-[4px] border-t-ink">
      <p className="font-display font-extrabold text-sm uppercase tracking-widest text-ink">
        {label}
      </p>
      <p className="font-body font-medium text-sm leading-relaxed flex-1 text-ink/80">
        {description}
      </p>
      <span className="font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink pb-0.5 group-hover:gap-2 transition-all">
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
      <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink mb-6">
        Credentials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {credentials.map((cred) => (
          <CredentialCard key={cred.label} {...cred} />
        ))}
      </div>
    </div>
  )
}