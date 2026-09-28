import type { CaseStudyFact, DiagramLayer, RowItem } from '@/src/data/case-study-types'

export const header = {
  label: 'Backend',
  title: 'ShowChats',
  lead: 'The realtime backend behind live TV chat: rooms that open when a show airs, messages and reactions that land instantly, and the auth, billing and moderation around them.',
}

export const sourceUrl = 'https://github.com/Zobamba/showchats'

export const facts: CaseStudyFact[] = [
  { label: 'Role', value: 'Backend engineer' },
  { label: 'Stack', value: 'TypeScript, Supabase, PostgreSQL, Deno Edge Functions' },
  { label: 'Status', value: 'Backend complete' },
  { label: 'Source', value: 'GitHub', href: sourceUrl },
]

export const architecture: DiagramLayer[] = [
  { name: 'Clients', items: ['Expo mobile app', 'Web'] },
  { name: 'Edge Functions', items: ['Auth + invites', 'Rooms & moderation', 'Push + email queue'] },
  { name: 'Supabase', items: ['Postgres + RLS', 'Realtime channels'] },
]

export const contributions: RowItem[] = [
  { title: 'Backend architecture', description: 'Designed the Supabase foundation and how data flows through it.' },
  { title: 'Deno Edge Functions', description: 'Serverless functions for the backend logic.' },
  { title: 'Realtime messaging', description: 'Live chat delivery and reactions.' },
  { title: 'Authentication & RLS', description: 'Secure access with Supabase Auth and Row Level Security.' },
  { title: 'Notifications', description: 'Push notifications via Expo, plus a scheduled email queue.' },
  { title: 'Production debugging', description: 'Tracked down realtime deletion and JWT issues.' },
]

export const services: RowItem[] = [
  { title: 'Authentication', description: 'Email/password and OAuth (Google, Apple), invite validation, rate limiting.' },
  { title: 'Rooms & messaging', description: 'Join and leave, live messages, reactions, pinning and moderation.' },
  { title: 'Subscriptions & billing', description: 'Apple IAP and Google Play Billing with webhook receipt verification.' },
  { title: 'Notifications', description: 'Expo push notifications and scheduled email queue processing.' },
  { title: 'Content & moderation', description: 'TMDB and TVMedia integrations, plus OpenAI content moderation.' },
  { title: 'Scheduled jobs', description: 'pg_cron tasks for room status, the email queue and trending syncs.' },
]
