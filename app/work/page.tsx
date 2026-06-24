'use client'

import { useState, useMemo } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { FilterBar } from '@/components/work/FilterBar'
import { ProjectList } from '@/components/work/ProjectList'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/data/projects'

const CATEGORIES = ['All', 'ML & AI', 'Full Stack', 'Tools'] as const
type FilterLabel = (typeof CATEGORIES)[number]

const LABEL_TO_CATEGORY: Record<Exclude<FilterLabel, 'All'>, ProjectCategory> = {
  'ML & AI':    'ml-ai',
  'Full Stack': 'fullstack',
  'Tools':      'tools',
}

function sortProjects(list: typeof projects) {
  return [...list].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return b.year - a.year
  })
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<FilterLabel>('All')

  const filtered = useMemo(() => {
    const base =
      activeFilter === 'All'
        ? projects
        : projects.filter(
            (p) => p.category === LABEL_TO_CATEGORY[activeFilter]
          )
    return sortProjects(base)
  }, [activeFilter])

  return (
    <SectionWrapper id="work">
      <h1 className="font-display font-semibold text-ink-bright text-[clamp(36px,6vw,64px)] leading-[1.1] mb-2">
        The Work
      </h1>

      <p className="font-display italic text-ink-secondary text-[clamp(17px,2.2vw,22px)] leading-relaxed mb-12">
        Every system here started as a problem I couldn&apos;t ignore.
      </p>

      <div className="mb-10">
        <FilterBar
          categories={[...CATEGORIES]}
          active={activeFilter}
          onChange={(cat) => setActiveFilter(cat as FilterLabel)}
        />
      </div>

      <ProjectList projects={filtered} />
    </SectionWrapper>
  )
}