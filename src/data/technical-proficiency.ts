import {
  SiTypescript,
  SiRuby,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import type { SkillLevel } from '@/src/data/skill-levels'

export interface TechnicalProficiencyItem {
  name: string
  icon: IconType
  colorClass: string
  iconBgColor?: string
  percentage: number
  level: SkillLevel
}

export const technicalProficiency: TechnicalProficiencyItem[] = [
  {
    name: 'TypeScript/JavaScript(ES6+)',
    icon: SiTypescript,
    colorClass: 'text-[#3178C6]',
    iconBgColor: '#FFFFFF',
    percentage: 90,
    level: 'Expert',
  },
  {
    name: 'Ruby on Rails',
    icon: SiRuby,
    colorClass: 'text-[#CC342D]',
    percentage: 85,
    level: 'Advanced',
  },
  {
    name: 'React / Next.js',
    icon: SiReact,
    colorClass: 'text-[#61DAFB]',
    percentage: 90,
    level: 'Expert',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    colorClass: 'text-[#339933]',
    percentage: 85,
    level: 'Advanced',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    colorClass: 'text-foreground',
    percentage: 85,
    level: 'Advanced',
  },
  {
    name: 'HTML5 & CSS3',
    icon: SiHtml5,
    colorClass: 'text-[#E34F26]',
    percentage: 85,
    level: 'Expert',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    colorClass: 'text-[#06B6D4]',
    percentage: 85,
    level: 'Advanced',
  },
  {
    name: 'PostgreSQL/MySQL',
    icon: SiPostgresql,
    colorClass: 'text-white',
    iconBgColor: '#4169E1',
    percentage: 80,
    level: 'Advanced',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    colorClass: 'text-[#47A248]',
    percentage: 80,
    level: 'Intermediate',
  },
  {
    name: 'Git & GitHub',
    icon: SiGit,
    colorClass: 'text-[#F05032]',
    percentage: 85,
    level: 'Advanced',
  },
]
