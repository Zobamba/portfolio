import { FiTrendingUp, FiUsers } from 'react-icons/fi'
import { TbTargetArrow, TbShieldCheck } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export interface ValueItem {
  icon: IconType
  title: string
  description: string
  colorClass: string
}

export const values: ValueItem[] = [
  {
    icon: TbTargetArrow,
    title: 'Impact',
    description: "I build products that solve real problems and make a difference in people's lives.",
    colorClass: 'text-primary',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth',
    description: "I'm always learning and improving to stay ahead and deliver better solutions.",
    colorClass: 'text-[#22C55E]',
  },
  {
    icon: TbShieldCheck,
    title: 'Integrity',
    description: 'I believe in transparent communication, honesty and delivering on promises.',
    colorClass: 'text-primary',
  },
  {
    icon: FiUsers,
    title: 'Collaboration',
    description: 'I love working with amazing people and turning ideas into great products together.',
    colorClass: 'text-purple',
  },
]
