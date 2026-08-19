export interface SkillsBreakdownSegment {
  label: string
  percentage: number
  color: string
}

export const skillsBreakdownSegments: SkillsBreakdownSegment[] = [
  { label: 'Frontend', percentage: 40, color: '#3B82F6' },
  { label: 'Backend', percentage: 30, color: '#A855F7' },
  { label: 'Database', percentage: 20, color: '#22D3EE' },
  { label: 'DevOps & Tools', percentage: 10, color: '#F59E0B' },
]

export const totalTechnologies = '15+'
