import type { ProjectCategory } from '@/src/data/projects'

export interface ProjectCategoryFilter {
  label: string
  value: ProjectCategory | 'All'
}

export const projectCategoryFilters: ProjectCategoryFilter[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Web Applications', value: 'Web Application' },
  { label: 'APIs & Backend', value: 'APIs & Backend' },
  { label: 'Other', value: 'Other' },
]
