import { HiOutlineIdentification, HiOutlineCodeBracket, HiOutlineRocketLaunch } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export const skillsPage = {
  eyebrow: 'Skills',
  headingLine1: 'The',
  headingHighlight: 'Technologies',
  headingLine2: 'I Work With',
  paragraph:
    'A comprehensive toolkit of languages, frameworks, databases and tools I use to build scalable, performant and user-focused applications.',
}

export interface SkillsHeroStat {
  icon: IconType
  number: string
  label: string
}

export const skillsHeroStats: SkillsHeroStat[] = [
  { icon: HiOutlineIdentification, number: '15+', label: 'Technologies' },
  { icon: HiOutlineCodeBracket, number: '5+', label: 'Years Learning' },
  { icon: HiOutlineRocketLaunch, number: 'Always', label: 'Learning' },
]
