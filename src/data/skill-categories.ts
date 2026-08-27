import { FiMonitor, FiServer, FiDatabase, FiCloud, FiHexagon } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import type { SkillLevel } from '@/src/data/skill-levels'

export interface SkillCategoryItem {
  name: string
  icon: IconType
  count: number
  level: SkillLevel
  /** Hex color for the icon's radial glow backdrop — independent of the proficiency level color. */
  glowColor: string
}

export const skillCategories: SkillCategoryItem[] = [
  { name: 'Frontend Development', icon: FiMonitor, count: 7, level: 'Expert', glowColor: '#0F766E' },
  { name: 'Backend Development', icon: FiServer, count: 5, level: 'Advanced', glowColor: '#52525B' },
  { name: 'Databases', icon: FiDatabase, count: 3, level: 'Advanced', glowColor: '#0D9488' },
  { name: 'DevOps & Tools', icon: FiCloud, count: 4, level: 'Intermediate', glowColor: '#71717A' },
  { name: 'Other', icon: FiHexagon, count: 2, level: 'Familiar', glowColor: '#78716C' },
]
