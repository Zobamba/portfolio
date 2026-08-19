import type { ProjectsHeroStat } from '@/src/data/projects-page'

interface HeroStatItemProps {
  stat: ProjectsHeroStat
}

const HeroStatItem = ({ stat }: HeroStatItemProps) => {
  const Icon = stat.icon

  return (
    <div>
      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-muted text-primary">
        <Icon size={20} />
      </span>
      <p className="mt-3 text-2xl font-bold text-foreground">{stat.number}</p>
      <p className="text-sm text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default HeroStatItem
