import Link from 'next/link'
import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/work/ProjectCard'
import { GoldRule } from '@/components/ui/GoldRule'
import { GoldDot } from '@/components/ui/GoldDot'

const DISPLAY_PROJECTS = featuredProjects.slice(0, 2)

export function FeaturedWork() {
  return (
    <div>
      <Link href="/work" className="group inline-block no-underline mb-8">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-gold group-hover:text-gold-bright transition-colors duration-150 flex items-center gap-2 border-b border-gold/30 group-hover:border-gold pb-0.5">
          Selected Work <GoldDot linkMode />
        </h2>
      </Link>

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