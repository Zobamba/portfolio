import type { StatItem as StatItemType } from '@/src/data/stats'
import CountUp from '@/src/components/ui/count-up/count-up'

interface StatItemProps {
  stat: StatItemType
}

const StatItem = ({ stat }: StatItemProps) => {
  const Icon = stat.icon

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary">
        <Icon size={stat.iconSize ?? 20} />
      </span>
      <div>
        <p className="text-xl font-bold text-foreground">
          <CountUp value={stat.number} />
        </p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  )
}

export default StatItem
