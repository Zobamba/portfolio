import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export interface TechStackItem {
  name: string
  icon: IconType
  colorClass: string
  /** Hex value backing colorClass — used for the icon's border/glow, which need a real color to compute alpha. */
  color?: string
  /** Solid backing behind the icon glyph — needed when it has a cut-out (e.g. "TS") or should read white-on-brand-color. */
  iconBgColor?: string
}

export const techStack: TechStackItem[] = [
  { name: 'React', icon: SiReact, colorClass: 'text-[#61DAFB]', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-foreground' },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    colorClass: 'text-[#3178C6]',
    color: '#3178C6',
    iconBgColor: '#FFFFFF',
  },
  { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]', color: '#339933' },
  { name: 'Express.js', icon: SiExpress, colorClass: 'text-foreground' },
  
  { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-[#06B6D4]', color: '#06B6D4' },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    colorClass: 'text-white',
    color: '#4169E1',
    iconBgColor: '#4169E1',
  },
  { name: 'MongoDB', icon: SiMongodb, colorClass: 'text-[#47A248]', color: '#47A248' },
  { name: 'Git', icon: SiGit, colorClass: 'text-[#F05032]', color: '#F05032' },
  { name: 'Docker', icon: SiDocker, colorClass: 'text-[#2496ED]', color: '#2496ED' },
]

export const heroFloatingTech: TechStackItem[] = [
  techStack[0], // React
  techStack[3], // Node.js
  techStack[2], // TypeScript
  techStack[5], // Tailwind CSS
  techStack[6], // PostgreSQL
]
