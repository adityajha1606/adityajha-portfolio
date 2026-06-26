import Link from 'next/link'
import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'
import { SectionRule } from '@/components/ui/SectionRule'
import { ClickableHeading } from '@/components/ui/ClickableHeading'

const DISPLAY_PROJECTS = featuredProjects.slice(0, 2)

export function FeaturedWork() {
  return (
    <div>
      <ClickableHeading href="/work" className="mb-8">
        Selected Work
      </ClickableHeading>

      <div className="flex flex-col">
        {DISPLAY_PROJECTS.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} featured ordinal={index + 1} />
            {index < DISPLAY_PROJECTS.length - 1 && (
              <div className="flex justify-center my-8">
                <SectionRule />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/work"
          className="inline-flex items-center min-h-[24px] font-display font-extrabold text-sm uppercase tracking-wide border-b-2 border-ink text-ink hover:gap-2 transition-all"
        >
          See all work →
        </Link>
      </div>
    </div>
  )
}