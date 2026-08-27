import { FiLayers, FiMonitor, FiServer, FiUser, FiBriefcase, FiMoreHorizontal } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface HelpOption {
  icon: IconType
  label: string
  accentColor: string
}

export const helpOptions: HelpOption[] = [
  { icon: FiLayers, label: 'Full-Stack Development', accentColor: '#0F766E' },
  { icon: FiMonitor, label: 'Frontend Development', accentColor: '#0D9488' },
  { icon: FiServer, label: 'Backend / API Development', accentColor: '#52525B' },
  { icon: FiUser, label: 'Freelance Project', accentColor: '#71717A' },
  { icon: FiBriefcase, label: 'Full-Time Opportunity', accentColor: '#0D9488' },
  { icon: FiMoreHorizontal, label: 'Something Else', accentColor: '#78716C' },
]
