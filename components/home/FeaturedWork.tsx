import Link from 'next/link'
import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'
import { GoldRule } from '@/components/ui/GoldRule'

const DISPLAY_PROJECTS = featuredProjects.slice(0, 2)

export function FeaturedWork() {
  return (
    <div>
      <h2 className="font-display font-semibold text-ink-bright text-2xl md:text-3xl mb-8 leading-[1.1]">
        Selected Work
      </h2>

      <div className="flex flex-col">
        {DISPLAY_PROJECTS.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} featured ordinal={index + 1} />
            {index < DISPLAY_PROJECTS.length - 1 && (
              <div className="flex justify-center my-8">
                <GoldRule />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/work"
          className="font-body font-medium text-sm text-gold hover:underline transition-colors duration-150"
        >
          See all work →
        </Link>
      </div>
    </div>
  )
}