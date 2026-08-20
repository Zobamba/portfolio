export interface ProjectsOverviewSegment {
  label: string
  percentage: number
  color: string
}

export const projectsOverviewSegments: ProjectsOverviewSegment[] = [
  { label: 'Web Applications', percentage: 83, color: '#3B82F6' },
  { label: 'APIs & Backend', percentage: 17, color: '#F59E0B' },
]

export const totalProjects = '20+'
