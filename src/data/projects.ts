import type { ThumbnailVariant } from '@/src/components/sections/featured-projects/project-thumbnail/project-thumbnail'

export type ProjectCategory = 'Web Application' | 'Mobile Application' | 'APIs & Backend' | 'Other'

export interface Project {
  title: string
  description: string
  tags: string[]
  /** Present for most projects: a real deployed demo visitors can open. */
  liveUrl?: string
  /** Present for most projects: a real public repo. */
  sourceUrl?: string
  /** Present instead of liveUrl/sourceUrl for production products that can't expose a public demo or repo. */
  caseStudyUrl?: string
  /** Overrides the default "View Case Study" label for the caseStudyUrl link. */
  caseStudyLabel?: string
  demoVideoUrl?: string
  inProduction?: boolean
  sourcePrivate?: boolean
  /** e.g. "Backend Engineering" — flags a project as a focused engineering contribution, not a full product demo. */
  engineeringBadge?: string
  thumbnailVariant: ThumbnailVariant
  category: ProjectCategory
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Onassify POS & Inventory',
    description:
      'A complete POS & inventory management system with real-time analytics, multi-location support and role-based access.',
    tags: ['React', 'TypeScript', 'Rails', 'MySQL'],
    caseStudyUrl: '/projects/onassify',
    demoVideoUrl: '/projects/onassify#demo',
    inProduction: true,
    sourcePrivate: true,
    thumbnailVariant: 'dashboard',
    category: 'Web Application',
    featured: true,
  },
  {
    title: 'ShowChats (Live TV Chat)',
    description:
      'Real-time backend infrastructure powering live TV chat, reactions, authentication, and Edge Functions.',
    tags: ['TypeScript', 'Supabase', 'PostgreSQL', 'Edge Functions'],
    caseStudyUrl: '/projects/showchats',
    caseStudyLabel: 'View Project',
    sourceUrl: 'https://github.com/Zobamba/showchats',
    engineeringBadge: 'BACKEND ENGINEERING',
    thumbnailVariant: 'chat',
    category: 'APIs & Backend',
    featured: true,
  },
  {
    title: 'Delic (Online Restaurant)',
    description:
      'Customers order and track meals in real time, while the admin panel manages the menu and fulfills incoming orders.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redux'],
    liveUrl: 'https://delic.netlify.app/',
    sourceUrl: 'https://github.com/Zobamba/Delic',
    thumbnailVariant: 'restaurant',
    category: 'Web Application',
    featured: true,
  },
  {
    title: 'Learn Axis',
    description:
      'A simple yet powerful Learning Management System designed to help you grow and excel effortlessly!',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://lms-obc.netlify.app/',
    sourceUrl: 'https://github.com/Zobamba/learning-management-system-frontend',
    thumbnailVariant: 'lms',
    category: 'Web Application',
  },
  {
    title: 'Spin The Wheel',
    description:
      'A gamified prize wheel application with customizable segments, probabilities and winner history.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://spinn-the-wheel.netlify.app/',
    sourceUrl: 'https://github.com/Zobamba/spin-the-wheel',
    thumbnailVariant: 'wheel',
    category: 'Web Application',
  },
  {
    title: 'Task Scheduling App',
    description:
      'Team task management application with kanban boards, due dates, reminders and real-time collaboration.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    sourceUrl: 'https://github.com/Zobamba/task-scheduler',
    thumbnailVariant: 'task-board',
    category: 'Web Application',
  },
]
