export interface ProjectsOverviewSegment {
  label: string
  percentage: number
  color: string
}

export const projectsOverviewSegments: ProjectsOverviewSegment[] = [
  { label: 'Web Applications', percentage: 83, color: '#0F766E' },
  { label: 'APIs & Backend', percentage: 17, color: '#C2410C' },
]

export const totalProjects = '20+'
