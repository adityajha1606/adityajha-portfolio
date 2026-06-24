import { ProjectCard } from '@/components/work/ProjectCard'
import type { Project } from '@/data/projects'

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <p className="font-body text-sm text-ink-muted italic">
        No projects match this filter.
      </p>
    )
  }

  return (
    <div className="flex flex-col">
      {projects.map((project, index) => (
        <div key={project.id}>
          <ProjectCard project={project} ordinal={index + 1} />
          {index < projects.length - 1 && (
            <div className="h-px bg-obsidian-border my-10" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  )
}