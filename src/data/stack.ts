import {
  SiDocker,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRubyonrails,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export interface StackItem {
  name: string
  icon: IconType
}

export const stack: StackItem[] = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Ruby on Rails', icon: SiRubyonrails },
  { name: 'Express', icon: SiExpress },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'AWS', icon: FaAws },
  { name: 'Docker', icon: SiDocker },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]
