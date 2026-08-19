export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar'

export interface SkillLevelMeta {
  label: SkillLevel
  dotColor: string
  gradient: string
}

export const skillLevels: Record<SkillLevel, SkillLevelMeta> = {
  Expert: {
    label: 'Expert',
    dotColor: 'hsl(var(--primary))',
    gradient: 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary-to)) 100%)',
  },
  Advanced: {
    label: 'Advanced',
    dotColor: 'hsl(var(--purple))',
    gradient: 'linear-gradient(90deg, hsl(var(--primary-to)) 0%, hsl(var(--purple)) 100%)',
  },
  Intermediate: {
    label: 'Intermediate',
    dotColor: 'hsl(var(--link))',
    gradient: 'linear-gradient(90deg, hsl(var(--link)) 0%, hsl(var(--soft)) 100%)',
  },
  Familiar: {
    label: 'Familiar',
    dotColor: '#F59E0B',
    gradient: 'linear-gradient(90deg, #FBBF24 0%, #F59E0B 100%)',
  },
}
