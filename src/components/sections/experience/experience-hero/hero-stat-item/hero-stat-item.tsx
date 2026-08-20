import type { ExperienceHeroStat } from '@/src/data/experience-page'

interface HeroStatItemProps {
  stat: ExperienceHeroStat
}

const HeroStatItem = ({ stat }: HeroStatItemProps) => {
  const Icon = stat.icon

  return (
    <div className="rounded-lg p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
          <Icon size={32} />
        </span>
        <p className="text-2xl font-bold text-foreground">{stat.number}</p>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default HeroStatItem
