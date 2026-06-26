'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
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

const STATUS_OPTIONS = ['All', 'Live', 'WIP'] as const
type StatusLabel = (typeof STATUS_OPTIONS)[number]

function sortProjects(list: typeof projects) {
  return [...list].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1
    return b.year - a.year
  })
}

export default function WorkPage() {
  const searchParams = useSearchParams()
  const initialStatus = (searchParams?.get('status') ?? 'All') as StatusLabel

  const [activeCategory, setActiveCategory] = useState<FilterLabel>('All')
  const [activeStatus, setActiveStatus] = useState<StatusLabel>(initialStatus)

  const filtered = useMemo(() => {
    let base = projects

    if (activeCategory !== 'All') {
      base = base.filter((p) => p.category === LABEL_TO_CATEGORY[activeCategory])
    }

    if (activeStatus === 'Live') {
      base = base.filter((p) => p.status === 'live')
    } else if (activeStatus === 'WIP') {
      base = base.filter((p) => p.status === 'wip')
    }

    return sortProjects(base)
  }, [activeCategory, activeStatus])

  return (
    <SectionWrapper id="work">
      <h1 className="font-display font-extrabold text-ink text-[clamp(36px,6vw,64px)] leading-[1.1] mb-2">
        The Work
      </h1>

      {/* ── Filter row ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 mt-8">
        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink">
            Category
          </span>
          <FilterBar
            categories={[...CATEGORIES]}
            active={activeCategory}
            onChange={(cat) => setActiveCategory(cat as FilterLabel)}
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-1.5">
          <span className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink">
            Status
          </span>
          <FilterBar
            categories={[...STATUS_OPTIONS]}
            active={activeStatus}
            onChange={(status) => setActiveStatus(status as StatusLabel)}
          />
        </div>
      </div>

      <ProjectList projects={filtered} />
    </SectionWrapper>
  )
}