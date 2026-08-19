import { FiCalendar, FiBriefcase, FiUsers, FiAward } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface AboutStatItem {
  icon: IconType
  number: string
  label: string
}

export const aboutStats: AboutStatItem[] = [
  { icon: FiCalendar, number: '5+', label: 'Years of Experience' },
  { icon: FiBriefcase, number: '20+', label: 'Projects Completed' },
  { icon: FiUsers, number: '10+', label: 'Happy Clients' },
  { icon: FiAward, number: '100%', label: 'Commitment' },
]
