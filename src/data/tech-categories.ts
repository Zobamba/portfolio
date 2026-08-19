import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiJest,
  SiPostman,
  SiRabbitmq,
  SiRubyonrails,
  SiSupabase,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export interface TechCategoryItem {
  name: string
  icon: IconType
  colorClass: string
  iconBgColor?: string
}

export interface TechCategory {
  name: string
  items: TechCategoryItem[]
}

export const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, colorClass: 'text-[#61DAFB]' },
      { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-foreground' },
      { name: 'TypeScript', icon: SiTypescript, colorClass: 'text-[#3178C6]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-[#06B6D4]' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]' },
      { name: 'Express.js', icon: SiExpress, colorClass: 'text-foreground' },
      { name: 'NestJS', icon: SiNestjs, colorClass: 'text-[#E0234E]' },
      { name: 'Rails', icon: SiRubyonrails, colorClass: 'text-[#D30001]' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, colorClass: 'text-white', iconBgColor: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, colorClass: 'text-[#47A248]' },
      { name: 'MySQL', icon: SiMysql, colorClass: 'text-[#4479A1]' },
      { name: 'Supabase', icon: SiSupabase, colorClass: 'text-[#3ECF8E]' },
    ],
  },
  {
    name: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: SiGit, colorClass: 'text-[#F05032]' },
      { name: 'Docker', icon: SiDocker, colorClass: 'text-[#2496ED]' },
      { name: 'AWS', icon: FaAws, colorClass: 'text-[#FF9900]' },
      { name: 'Vercel', icon: SiVercel, colorClass: 'text-foreground' },
    ],
  },
  {
    name: 'Other',
    items: [
      { name: 'Figma', icon: SiFigma, colorClass: 'text-[#A259FF]' },
      { name: 'Jest', icon: SiJest, colorClass: 'text-[#C21325]' },
      { name: 'Postman', icon: SiPostman, colorClass: 'text-[#FF6C37]' },
      { name: 'RabbitMQ', icon: SiRabbitmq, colorClass: 'text-[#FF6600]' },
    ],
  },
]
