import { FiCode, FiServer, FiDatabase } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export interface WhatIDoItem {
  icon: IconType
  title: string
  description: string
  accentColor: string
}

export const whatIDo: WhatIDoItem[] = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building responsive, accessible and performant user interfaces with modern frameworks and best practices.',
    accentColor: '#3B82F6',
  },
  {
    icon: FiServer,
    title: 'Backend Engineering',
    description: 'Designing robust APIs, implementing business logic and building scalable server-side applications.',
    accentColor: '#8B5CF6',
  },
  {
    icon: FiDatabase,
    title: 'Database & Architecture',
    description: 'Designing efficient database schemas, writing optimized queries and architecting scalable systems.',
    accentColor: '#22D3EE',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Product & Problem Solving',
    description: 'Understanding user needs and business goals to deliver practical and impactful solutions.',
    accentColor: '#F59E0B',
  },
]
