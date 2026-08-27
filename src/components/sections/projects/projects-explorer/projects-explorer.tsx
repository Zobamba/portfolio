'use client'

import { useMemo, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { projects } from '@/src/data/projects'
import { projectCategoryFilters } from '@/src/data/project-categories'
import Button from '@/src/components/ui/button/button'
import { cn } from '@/src/lib/utils'
import Reveal from '@/src/components/ui/reveal/reveal'
import ProjectGridCard from '@/src/components/sections/projects/projects-explorer/project-grid-card/project-grid-card'

const PAGE_SIZE = 6

type SortOption = 'Latest' | 'A-Z'

const ProjectsExplorer = () => {
  const [category, setCategory] = useState<ProjectCategoryOrAll>('All')
  const [sort, setSort] = useState<SortOption>('Latest')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const base =
      category === 'All' ? projects : projects.filter((project) => project.category === category)
    const sorted = sort === 'A-Z' ? [...base].sort((a, b) => a.title.localeCompare(b.title)) : base
    return sorted
  }, [category, sort])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleCategoryChange = (value: ProjectCategoryOrAll) => {
    setCategory(value)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <div>
      <div className="flex animate-reveal flex-col gap-4 [animation-delay:300ms] sm:flex-row sm:items-center sm:justify-between">
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
          {projectCategoryFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => handleCategoryChange(filter.value)}
              className={cn(
                'shrink-0 rounded border px-4 py-2 text-sm font-medium transition-all duration-200 sm:py-1',
                category === filter.value
                  ? 'border-transparent bg-primary text-primary-foreground hover:bg-primary-hover'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <label className="relative inline-flex w-fit items-center">
          <span className="pointer-events-none absolute left-3 text-sm text-muted-foreground">
            Sort by:
          </span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as SortOption)}
            className="appearance-none rounded border border-border bg-card py-2 pl-[4.5rem] pr-8 text-sm font-medium text-foreground outline-none"
          >
            <option value="Latest">Latest</option>
            <option value="A-Z">A-Z</option>
          </select>
          <FiChevronDown
            className="pointer-events-none absolute right-3 text-muted-foreground"
            size={14}
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.title} delay={(index % PAGE_SIZE) * 80} distance={20} className="h-full">
            <ProjectGridCard project={project} />
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="inline-flex items-center gap-2"
          >
            View More Projects
            <FiChevronDown size={14} />
          </Button>
        </div>
      )}
    </div>
  )
}

type ProjectCategoryOrAll = (typeof projectCategoryFilters)[number]['value']

export default ProjectsExplorer
