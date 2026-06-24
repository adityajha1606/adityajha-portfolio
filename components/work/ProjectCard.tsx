import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
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
  const statusVariant = project.status === 'live' ? 'live' : project.status === 'wip' ? 'wip' : 'default'

  return (
    <Card
      hover
      className={cn(
        featured && 'border-l-4 border-l-gold pl-5'
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        {ordinal !== undefined && (
          <span className="font-mono text-xs text-ink-muted select-none">
            {padOrdinal(ordinal)}
          </span>
        )}
        <Badge variant="default">{categoryLabel}</Badge>
        <Badge variant={statusVariant}>
          {project.status === 'live' ? 'Live' : project.status === 'wip' ? 'WIP' : project.status}
        </Badge>
        {project.role === 'sole-author' && (
          <span
            className={cn(
              'inline-flex items-center font-mono text-[11px] leading-none',
              'text-gold-dim border border-gold-dim px-2 py-0.5 ml-auto'
            )}
          >
            Sole Author
          </span>
        )}
      </div>

      <h3 className="font-body font-semibold text-[clamp(16px,2vw,20px)] text-ink-primary mb-2 leading-snug">
        {project.title}
      </h3>

      <p className="font-body font-normal text-sm text-ink-secondary leading-relaxed mb-4">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {project.liveUrl && (
          <ExternalLink
            href={project.liveUrl}
            className="font-mono text-[12px] text-ink-secondary hover:text-gold transition-colors duration-150"
          >
            Live ↗
          </ExternalLink>
        )}
        {project.repoUrl && (
          <ExternalLink
            href={project.repoUrl}
            className="font-mono text-[12px] text-ink-secondary hover:text-gold transition-colors duration-150"
          >
            Code ↗
          </ExternalLink>
        )}
        {(project.liveUrl ?? project.repoUrl) && (
          <Link
            href={project.liveUrl ?? project.repoUrl!}
            className="ml-auto font-body text-sm text-gold hover:underline transition-colors duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project →
          </Link>
        )}
      </div>

      {project.metrics && (
        <p className="font-mono text-[11px] text-ink-muted mt-4 pt-4 border-t border-obsidian-border">
          {project.metrics}
        </p>
      )}
    </Card>
  )
}