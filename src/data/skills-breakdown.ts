export interface SkillsBreakdownSegment {
  label: string
  percentage: number
  color: string
}

export const skillsBreakdownSegments: SkillsBreakdownSegment[] = [
  { label: 'Frontend', percentage: 40, color: '#0F766E' },
  { label: 'Backend', percentage: 30, color: '#52525B' },
  { label: 'Database', percentage: 20, color: '#0D9488' },
  { label: 'DevOps & Tools', percentage: 10, color: '#C2410C' },
]

export const totalTechnologies = '15+'
