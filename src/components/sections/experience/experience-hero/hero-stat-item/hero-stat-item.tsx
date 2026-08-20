import type { ExperienceHeroStat } from '@/src/data/experience-page'

interface HeroStatItemProps {
  stat: ExperienceHeroStat
}

const HeroStatItem = ({ stat }: HeroStatItemProps) => {
  const Icon = stat.icon

  return (
    <div className="min-w-0 rounded-lg">
      <div className="flex min-w-0 items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary sm:h-12 sm:w-12">
          <Icon size={22} className="sm:hidden" />
          <Icon size={32} className="hidden sm:block" />
        </span>
        <p className="truncate text-lg font-bold text-foreground sm:text-2xl">{stat.number}</p>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default HeroStatItem
