import { FiTrendingUp, FiBarChart2, FiUsers } from 'react-icons/fi'
import { TbHeartbeat } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export interface StatItem {
  icon: IconType
  number: string
  label: string
  iconSize?: number
}

export const stats: StatItem[] = [
  { icon: FiTrendingUp, number: '5+', label: 'Years of Experience' },
  { icon: FiBarChart2, number: '20+', label: 'Projects Completed' },
  { icon: FiUsers, number: '10+', label: 'Happy Clients' },
  { icon: TbHeartbeat, number: '100%', label: 'Commitment', iconSize: 22 },
]
