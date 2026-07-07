import type { CertificateEntry, ProjectMini } from '@/data/stack'
import { Card, type CardVariant } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'

interface CredentialsProofProps {
  certificates: CertificateEntry[]
  projects: ProjectMini[]
}

const bgMap: Record<string, string> = {
  teal: 'bg-teal text-bone',
  yellow: 'bg-strike text-ink',
  coral: 'bg-coral text-bone',
  purple: 'bg-purple text-bone',
  blue: 'bg-blue text-bone',
  magenta: 'bg-magenta text-bone',
}

export function CredentialsProof({ certificates, projects }: CredentialsProofProps) {
  return (
    <>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-ink/35 mb-2">
        $ cat credentials.log
      </p>
      <h2 className="font-display font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[0.95] tracking-[-0.03em] mb-8">
        Credentials &amp; Proof
      </h2>

      {/* Certificates grid */}
      <h3 className="font-display font-extrabold text-xl mb-4">Certificates &amp; Hackathons</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
        {certificates.map((cert) => {
          const bg = bgMap[cert.color]
          return (
            <a
              key={cert.title}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`block border-[3px] border-ink p-3 shadow-[8px_8px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150 ${bg}`}
            >
              <p className="font-display font-extrabold text-sm leading-tight mb-1">{cert.title}</p>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-50">{cert.issuer}</p>
            </a>
          )
        })}
      </div>

      {/* Shipped Projects – each gets a unique non‑ink colour, all hoverable */}
      <h3 className="font-display font-extrabold text-xl mb-4">Shipped Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => {
          let variant: CardVariant = 'yellow'
          if (p.name.includes('Football')) variant = 'teal'
          else if (p.name.includes('MeterDown')) variant = 'coral'
          else if (p.name.includes('OpenIris')) variant = 'purple'
          else if (p.name.includes('Pet')) variant = 'blue'
          else if (p.name.includes('Cosmotales')) variant = 'magenta'

          return (
            <Card key={p.name} variant={variant} className="p-4">
              <h4 className="font-display font-extrabold text-base mb-1">{p.name}</h4>
              <p className="text-sm opacity-80 mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </>
  )
}