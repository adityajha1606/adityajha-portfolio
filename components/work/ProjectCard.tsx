import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { ExternalLink } from '@/components/ui/ExternalLink'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  ordinal?: number
}

const CATEGORY_LABELS: Record<string, string> = {
  'ml-ai':    'ML & AI',
  fullstack:  'Full Stack',
  tools:      'Tools',
}

function padOrdinal(n: number): string {
  return n.toString().padStart(2, '0') + '.'
}

export function ProjectCard({ project, featured = false, ordinal }: ProjectCardProps) {
  const categoryLabel = CATEGORY_LABELS[project.category] ?? project.category
  const isWip = project.status === 'wip'

  const variant: 'teal' | 'yellow' | 'ink' | 'default' = isWip
    ? 'ink'
    : project.accent === 'teal'
      ? 'teal'
      : project.accent === 'yellow'
        ? 'yellow'
        : 'default'

  return (
    <Card variant={variant} accent={project.accent}>
      <div className="flex items-center gap-3 mb-4">
        {ordinal !== undefined && (
          <span className="font-mono text-[11px] font-bold opacity-60 select-none uppercase">
            {padOrdinal(ordinal)}
          </span>
        )}

        <span className="font-mono text-[11px] font-bold uppercase tracking-widest border-2 px-2 py-0.5">
          {categoryLabel}
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest border-2 px-2 py-0.5">
          {project.status === 'live' ? 'Live' : project.status === 'wip' ? 'WIP' : project.status}
        </span>

        {project.role === 'sole-author' && (
          <span className="font-mono text-[11px] font-bold uppercase tracking-widest border-2 border-ink text-ink px-2 py-0.5 ml-auto">
            Sole Author
          </span>
        )}
      </div>

      <h3 className="font-display font-extrabold text-xl md:text-2xl mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="font-body font-medium text-sm leading-relaxed mb-4 opacity-80">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <Tag key={tag} red={project.highlightTags?.includes(tag)}>
            {tag}
          </Tag>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {project.liveUrl && (
          <ExternalLink
            href={project.liveUrl}
            className="font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-current hover:gap-2 transition-all"
          >
            Live ↗
          </ExternalLink>
        )}
        {project.repoUrl && (
          <ExternalLink
            href={project.repoUrl}
            className="font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-current hover:gap-2 transition-all"
          >
            Code ↗
          </ExternalLink>
        )}
        {(project.liveUrl ?? project.repoUrl) && (
          <Link
            href={project.liveUrl ?? project.repoUrl!}
            className="ml-auto font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-current hover:gap-2 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project →
          </Link>
        )}
      </div>

      {project.metrics && (
        <p className="font-mono text-[11px] font-bold opacity-50 mt-4 pt-4 border-t-2 border-current uppercase">
          {project.metrics}
        </p>
      )}
    </Card>
  )
}