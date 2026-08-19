import { FiUsers } from 'react-icons/fi'
import { HiOutlineCodeBracket, HiOutlineRocketLaunch, HiOutlineLightBulb } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export interface AboutFeature {
  icon: IconType
  title: string
  description: string
}

export const aboutFeatures: AboutFeature[] = [
  {
    icon: HiOutlineCodeBracket,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable & efficient code',
  },
  { icon: FiUsers, title: 'User Focused', description: 'Building intuitive experiences users love' },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Performance',
    description: 'Optimized for speed, scalability & reliability',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Problem Solver',
    description: 'I enjoy solving complex problems with simple code',
  },
]
