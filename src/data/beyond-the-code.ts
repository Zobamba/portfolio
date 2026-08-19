import { HiOutlineSparkles } from 'react-icons/hi2'
import { FiRefreshCw, FiUsers } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface BeyondTheCodeItem {
  icon: IconType
  title: string
  description: string
  accentColor: string
}

export const beyondTheCode: BeyondTheCodeItem[] = [
  {
    icon: HiOutlineSparkles,
    title: 'Problem Solver',
    description: 'I enjoy breaking down complex problems and building simple, effective solutions.',
    accentColor: '#F59E0B',
  },
  {
    icon: FiRefreshCw,
    title: 'Continuous Learner',
    description: "I'm always exploring new technologies, tools and better ways to build.",
    accentColor: '#22D3EE',
  },
  {
    icon: FiUsers,
    title: 'Team Player',
    description: 'I value collaboration, communication and learning from great people.',
    accentColor: '#8B5CF6',
  },
]
