import { HiOutlineRocketLaunch } from 'react-icons/hi2'
import { FiUsers, FiGitCommit, FiAward } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface CareerHighlight {
  icon: IconType
  number: string
  label: string
}

export const careerHighlights: CareerHighlight[] = [
  { icon: HiOutlineRocketLaunch, number: '20+', label: 'Projects Delivered' },
  { icon: FiUsers, number: '10+', label: 'Happy Clients' },
  { icon: FiGitCommit, number: '1000+', label: 'Commits & Contributions' },
  { icon: FiAward, number: '100%', label: 'Commitment to Quality' },
]
