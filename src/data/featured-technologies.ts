import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiPrisma,
  SiExpress,
  SiRedux,
  SiDocker,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface FeaturedTechnology {
  name: string
  icon: IconType
  colorClass: string
  iconBgColor?: string
}

export const featuredTechnologies: FeaturedTechnology[] = [
  { name: 'React', icon: SiReact, colorClass: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-foreground' },
  { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]' },
  { name: 'TypeScript', icon: SiTypescript, colorClass: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-[#06B6D4]' },
  { name: 'PostgreSQL', icon: SiPostgresql, colorClass: 'text-white', iconBgColor: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, colorClass: 'text-[#47A248]' },
  { name: 'Supabase', icon: SiSupabase, colorClass: 'text-[#3ECF8E]' },
  { name: 'Prisma', icon: SiPrisma, colorClass: 'text-foreground' },
  { name: 'Express.js', icon: SiExpress, colorClass: 'text-foreground' },
  { name: 'Redux', icon: SiRedux, colorClass: 'text-[#764ABC]' },
  { name: 'Docker', icon: SiDocker, colorClass: 'text-[#2496ED]' },
]
