import { FiLayers, FiMonitor, FiServer, FiUser, FiBriefcase, FiMoreHorizontal } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface HelpOption {
  icon: IconType
  label: string
  accentColor: string
}

export const helpOptions: HelpOption[] = [
  { icon: FiLayers, label: 'Full-Stack Development', accentColor: '#3B82F6' },
  { icon: FiMonitor, label: 'Frontend Development', accentColor: '#22D3EE' },
  { icon: FiServer, label: 'Backend / API Development', accentColor: '#8B5CF6' },
  { icon: FiUser, label: 'Freelance Project', accentColor: '#8B5CF6' },
  { icon: FiBriefcase, label: 'Full-Time Opportunity', accentColor: '#22D3EE' },
  { icon: FiMoreHorizontal, label: 'Something Else', accentColor: '#64748B' },
]
