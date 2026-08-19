import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si'
import { TbHeartbeat } from 'react-icons/tb'
import type { IconType } from 'react-icons'

export interface JourneyTag {
  name: string
  icon: IconType
  colorClass: string
  iconSize?: number
}

export interface JourneyItem {
  dateRange: string
  role: string
  credential: string
  meta: string
  bullet: string
  tags: JourneyTag[]
  accentColor: string
}

export const journey: JourneyItem[] = [
  {
    dateRange: 'Feb 2024 — Present',
    role: 'Backend Developer',
    credential: 'Xanotech Solutions',
    meta: 'Remote',
    bullet: 'Building secure and scalable banking systems for MFIs and Microfinance banks.',
    accentColor: '#3B82F6',
    tags: [
      { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]' },
      { name: 'Express.js', icon: SiExpress, colorClass: 'text-foreground' },
      { name: 'PostgreSQL', icon: SiPostgresql, colorClass: 'text-[#4169E1]' },
      { name: 'TypeScript', icon: SiTypescript, colorClass: 'text-[#3178C6]' },
    ],
  },
  {
    dateRange: 'Sept 2022 — Feb 2024',
    role: 'Full Stack Developer',
    credential: 'Product Square Technologies',
    meta: 'Remote',
    bullet:
      'Developed and maintained web applications using MERN stack. Built features, improved performance and integrated third-party services.',
    accentColor: '#8B5CF6',
    tags: [
      { name: 'React', icon: SiReact, colorClass: 'text-[#61DAFB]' },
      { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]' },
      { name: 'MongoDB', icon: SiMongodb, colorClass: 'text-[#47A248]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-[#06B6D4]' },
    ],
  },
  {
    dateRange: '2019 — 2022',
    role: 'Pharmacist (Background)',
    credential: 'B.Pharm.',
    meta: 'Licensed Pharmacist',
    bullet: 'Strong foundation in analytical thinking, attention to detail and problem solving.',
    accentColor: '#64748B',
    tags: [
      { name: 'Healthcare Background', icon: TbHeartbeat, colorClass: 'text-destructive', iconSize: 14 },
    ],
  },
]
