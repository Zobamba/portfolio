export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar'

export interface SkillLevelMeta {
  label: SkillLevel
  dotColor: string
  gradient: string
}

// Proficiency reads as color intensity — full teal at Expert, fading toward
// graphite at Familiar — rather than a rainbow of unrelated hues per tier.
export const skillLevels: Record<SkillLevel, SkillLevelMeta> = {
  Expert: {
    label: 'Expert',
    dotColor: '#0F766E',
    gradient: 'linear-gradient(90deg, #0F766E 0%, #115E59 100%)',
  },
  Advanced: {
    label: 'Advanced',
    dotColor: '#0D9488',
    gradient: 'linear-gradient(90deg, #0D9488 0%, #14B8A6 100%)',
  },
  Intermediate: {
    label: 'Intermediate',
    dotColor: '#52525B',
    gradient: 'linear-gradient(90deg, #52525B 0%, #71717A 100%)',
  },
  Familiar: {
    label: 'Familiar',
    dotColor: '#A1A1AA',
    gradient: 'linear-gradient(90deg, #A1A1AA 0%, #D4D4D8 100%)',
  },
}
