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
  { name: 'Frontend Development', icon: FiMonitor, count: 7, level: 'Expert', glowColor: '#3B82F6' },
  { name: 'Backend Development', icon: FiServer, count: 5, level: 'Advanced', glowColor: '#8B5CF6' },
  { name: 'Databases', icon: FiDatabase, count: 3, level: 'Advanced', glowColor: '#22D3EE' },
  { name: 'DevOps & Tools', icon: FiCloud, count: 4, level: 'Intermediate', glowColor: '#3B82F6' },
  { name: 'Other', icon: FiHexagon, count: 2, level: 'Familiar', glowColor: '#8B5CF6' },
]
