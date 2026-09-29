import type { DiagramLayer } from '@/src/data/case-study-types'
import { demoVideo as onassifyDemo } from '@/src/data/onassify-case-study'
import { architecture as showchatsArchitecture } from '@/src/data/showchats-case-study'

export interface WorkLink {
  label: string
  href: string
}

export interface WorkItem {
  title: string
  label: string
  summary: string
  /** Screenshot under /public. Backend work has no screens, so it shows `diagram` instead. */
  image?: { src: string; alt: string; width: number; height: number }
  diagram?: { layers: DiagramLayer[]; label: string }
  /** A demo that opens over the page from a small card on the screenshot. */
  demo?: { title: string; videoUrl: string; duration: string }
  links: WorkLink[]
}

export const work: WorkItem[] = [
  {
    title: 'Onassify',
    label: 'SaaS · In production',
    summary:
      'POS and inventory SaaS used by several businesses: sales, stock, suppliers, debt and multi-location reporting.',
    image: {
      src: '/images/Dashboard.png',
      alt: 'Onassify dashboard showing daily sales, purchases, inventory health and recent activity',
      width: 3024,
      height: 1964,
    },
    demo: { ...onassifyDemo, duration: '60 seconds' },
    links: [{ label: 'Case study', href: '/projects/onassify' }],
  },
  {
    title: 'ShowChats',
    label: 'Backend',
    summary:
      'Realtime backend for live TV chat: rooms, reactions, auth with row-level security, and push notifications.',
    diagram: {
      layers: showchatsArchitecture,
      label:
        'ShowChats architecture: mobile and web clients call Deno Edge Functions, which sit on Supabase Postgres with row-level security and realtime channels.',
    },
    links: [
      { label: 'Case study', href: '/projects/showchats' },
      { label: 'Source', href: 'https://github.com/Zobamba/showchats' },
    ],
  },
  {
    title: 'Delic',
    label: 'Full-stack',
    summary:
      'Online restaurant where customers order and track meals live, while staff manage the menu and fulfil orders.',
    image: {
      src: '/images/delic.jpg',
      alt: 'Delic restaurant homepage',
      width: 1440,
      height: 900,
    },
    links: [
      { label: 'Live site', href: 'https://delic.netlify.app/' },
      { label: 'Source', href: 'https://github.com/Zobamba/Delic' },
    ],
  },
]

export const alsoBuilt: (WorkLink & { title: string; note: string })[] = [
  {
    title: 'Learn Axis',
    note: 'Learning management system',
    label: 'Live',
    href: 'https://lms-obc.netlify.app/',
  },
  {
    title: 'Spin The Wheel',
    note: 'Prize wheel with weighted segments',
    label: 'Live',
    href: 'https://spinn-the-wheel.netlify.app/',
  },
  {
    title: 'Task Scheduler',
    note: 'Kanban boards, due dates and reminders',
    label: 'Source',
    href: 'https://github.com/Zobamba/task-scheduler',
  },
]
