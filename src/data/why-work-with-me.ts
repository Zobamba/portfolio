import { HiOutlineChatBubbleLeftRight, HiOutlineShieldCheck } from 'react-icons/hi2'
import { FiTarget } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface WhyWorkWithMeItem {
  icon: IconType
  title: string
  description: string
  accentColor: string
}

export const whyWorkWithMe: WhyWorkWithMeItem[] = [
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: 'Clear Communication',
    description:
      'I believe good software starts with understanding the problem clearly. I keep communication open and transparent at every step.',
    accentColor: '#3B82F6',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Reliable Delivery',
    description:
      'I focus on building maintainable solutions that work beyond the initial release. Quality, testing and documentation matter.',
    accentColor: '#8B5CF6',
  },
  {
    icon: FiTarget,
    title: 'Product Mindset',
    description:
      'I think about the user and business outcome, not just the code. I build solutions that create real impact and value.',
    accentColor: '#22D3EE',
  },
]
