import { FiTrendingUp, FiBarChart2, FiUsers } from 'react-icons/fi'
import { TbHeartbeat } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export interface StatItem {
  icon: IconType
  number: string
  label: string
  gradientIntensity?: number
  iconSize?: number
}

export const stats: StatItem[] = [
  { icon: FiTrendingUp, number: '5+', label: 'Years of Experience', gradientIntensity: 0.15 },
  { icon: FiBarChart2, number: '20+', label: 'Projects Completed', gradientIntensity: 1 },
  { icon: FiUsers, number: '10+', label: 'Happy Clients', gradientIntensity: 0.35 },
  { icon: TbHeartbeat, number: '100%', label: 'Commitment', iconSize: 22 },
]
