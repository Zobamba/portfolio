import { HiOutlineCodeBracket, HiOutlineRocketLaunch } from 'react-icons/hi2'
import { FiUsers } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export const projectsPage = {
  eyebrow: 'Projects',
  headingLine1: "Things I've",
  headingHighlight: 'Built',
  paragraph:
    'A selection of projects that showcase my skills in building scalable, performant and user-focused applications.',
}

export interface ProjectsHeroStat {
  icon: IconType
  number: string
  label: string
}

export const projectsHeroStats: ProjectsHeroStat[] = [
  { icon: HiOutlineCodeBracket, number: '20+', label: 'Projects Completed' },
  { icon: FiUsers, number: '10+', label: 'Happy Clients' },
  { icon: HiOutlineRocketLaunch, number: '5+', label: 'Years of Experience' },
]
