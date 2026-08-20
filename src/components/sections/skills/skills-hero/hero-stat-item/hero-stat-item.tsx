import type { SkillsHeroStat } from '@/src/data/skills-page'

interface HeroStatItemProps {
  stat: SkillsHeroStat
}

const HeroStatItem = ({ stat }: HeroStatItemProps) => {
  const Icon = stat.icon

  return (
    <div className="rounded-lg border border-border p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
          <Icon size={16} />
        </span>
        <p className="text-lg font-bold text-foreground">{stat.number}</p>
      </div>
      <p className="mt-1.5 text-xs text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default HeroStatItem
