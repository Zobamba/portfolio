import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiHtml5,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  SiJest,
  SiRedux,
  SiReactquery,
  SiPrisma,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiLinux,
  SiGraphql,
  SiSupabase,
  SiRuby,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export interface ToolTechnology {
  name: string
  icon: IconType
  colorClass: string
  iconBgColor?: string
}

export const toolsTechnologies: ToolTechnology[] = [
  { name: 'React', icon: SiReact, colorClass: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, colorClass: 'text-foreground' },
  { name: 'TypeScript', icon: SiTypescript, colorClass: 'text-[#3178C6]', iconBgColor: '#FFFFFF' },
  { name: 'JavaScript', icon: SiJavascript, colorClass: 'text-[#1A1A1A]', iconBgColor: '#F7DF1E' },
  { name: 'Ruby on Rails', icon: SiRuby, colorClass: 'text-[#CC342D]' },
  { name: 'Node.js', icon: SiNodedotjs, colorClass: 'text-[#339933]' },
  { name: 'Express.js', icon: SiExpress, colorClass: 'text-foreground' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, colorClass: 'text-[#06B6D4]' },
  { name: 'Sass', icon: SiSass, colorClass: 'text-[#CC6699]' },
  { name: 'HTML5', icon: SiHtml5, colorClass: 'text-[#E34F26]' },
  { name: 'CSS3', icon: SiHtml5, colorClass: 'text-[#1572B6]' },
  { name: 'PostgreSQL', icon: SiPostgresql, colorClass: 'text-white', iconBgColor: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, colorClass: 'text-[#47A248]' },
  { name: 'MySQL', icon: SiMysql, colorClass: 'text-[#4479A1]' },
  { name: 'Supabase', icon: SiSupabase, colorClass: 'text-[#3ECF8E]' },
  { name: 'Git', icon: SiGit, colorClass: 'text-[#F05032]' },
  { name: 'GitHub', icon: SiGithub, colorClass: 'text-foreground' },
  { name: 'Docker', icon: SiDocker, colorClass: 'text-[#2496ED]' },
  { name: 'Postman', icon: SiPostman, colorClass: 'text-[#FF6C37]' },
  { name: 'Figma', icon: SiFigma, colorClass: 'text-[#A259FF]' },
  { name: 'Jest', icon: SiJest, colorClass: 'text-[#C21325]' },
  { name: 'Redux', icon: SiRedux, colorClass: 'text-[#764ABC]' },
  { name: 'React Query', icon: SiReactquery, colorClass: 'text-[#FF4154]' },
  { name: 'Prisma', icon: SiPrisma, colorClass: 'text-foreground' },
  { name: 'Vercel', icon: SiVercel, colorClass: 'text-foreground' },
  { name: 'Netlify', icon: SiNetlify, colorClass: 'text-[#00C7B7]' },
  { name: 'AWS', icon: FaAws, colorClass: 'text-[#FF9900]' },
  { name: 'Nginx', icon: SiNginx, colorClass: 'text-[#009639]' },
  { name: 'Linux', icon: SiLinux, colorClass: 'text-foreground' },
  { name: 'GraphQL', icon: SiGraphql, colorClass: 'text-[#E10098]' },
]
