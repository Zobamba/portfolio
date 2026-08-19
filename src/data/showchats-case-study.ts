import {
  FiDatabase,
  FiZap,
  FiMessageCircle,
  FiShield,
  FiTool,
  FiUser,
  FiBell,
  FiCreditCard,
  FiFilm,
  FiClock,
  FiGrid,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'

export const hero = {
  title: 'ShowChats',
  subtitle: 'Real-Time Backend Infrastructure',
  description:
    'Built the real-time backend powering live TV chat using TypeScript, Supabase, PostgreSQL, Realtime subscriptions, and Deno Edge Functions.',
  statusPills: ['Backend Complete', 'Source Code Available'],
  stack: ['TypeScript', 'Supabase', 'Deno Edge Functions', 'PostgreSQL'],
  sourceUrl: 'https://github.com/Zobamba/showchats',
}

export const myContributionSection = {
  icon: FiUser,
  title: 'My Contribution',
  description: 'What I personally built on ShowChats.',
}

export interface ContributionItem {
  icon: IconType
  title: string
  description: string
}

export const contributionItems: ContributionItem[] = [
  {
    icon: FiDatabase,
    title: 'Supabase backend architecture',
    description: 'Designed the backend foundation and data flow.',
  },
  {
    icon: FiZap,
    title: 'Deno Edge Functions',
    description: 'Built serverless functions for backend logic.',
  },
  {
    icon: FiMessageCircle,
    title: 'Realtime messaging infrastructure',
    description: 'Implemented live chat delivery and reactions.',
  },
  {
    icon: FiShield,
    title: 'Authentication & RLS',
    description: 'Implemented secure access using Supabase Auth and Row Level Security.',
  },
  {
    icon: FiBell,
    title: 'Notifications',
    description: 'Built the push notification system via Expo, plus scheduled email queue processing.',
  },
  {
    icon: FiTool,
    title: 'Production debugging',
    description: 'Solved realtime deletion and JWT-related backend issues.',
  },
]

export const cta = {
  title: 'Backend, Built for Production',
  description:
    'Auth, billing, moderation, realtime messaging, and scheduled jobs — all designed, built, and shipped end to end. Open to backend and full-stack roles.',
  buttonLabel: 'Get in Touch',
  buttonHref: '/contact',
}

export const servicesSection = {
  icon: FiGrid,
  title: 'Backend Services',
  description: 'What the Edge Functions layer actually covers.',
}

export interface ServiceGroup {
  icon: IconType
  title: string
  description: string
}

export const serviceGroups: ServiceGroup[] = [
  {
    icon: FiShield,
    title: 'Authentication',
    description: 'Email/password + OAuth (Google, Apple), invite validation, rate limiting.',
  },
  {
    icon: FiMessageCircle,
    title: 'Realtime Rooms & Messaging',
    description: 'Room join/leave, live messages, reactions, pinning and moderation.',
  },
  {
    icon: FiCreditCard,
    title: 'Subscriptions & Billing',
    description: 'Apple IAP & Google Play Billing with webhook-based receipt verification.',
  },
  {
    icon: FiBell,
    title: 'Notifications',
    description: 'Push notifications via Expo and scheduled email queue processing.',
  },
  {
    icon: FiFilm,
    title: 'Content & Moderation',
    description: 'TMDB & TVMedia integrations plus OpenAI content moderation.',
  },
  {
    icon: FiClock,
    title: 'Scheduled Jobs',
    description: 'pg_cron tasks for room status, email queue and trending syncs.',
  },
]
