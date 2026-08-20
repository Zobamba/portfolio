import type { StatItem as StatItemType } from '@/src/data/stats'
import { cn } from '@/src/lib/utils'
import CountUp from '@/src/components/ui/count-up/count-up'

interface StatItemProps {
  stat: StatItemType
}

const StatItem = ({ stat }: StatItemProps) => {
  const Icon = stat.icon
  const indigo = stat.gradientIntensity !== undefined ? stat.gradientIntensity * 100 : undefined
  const useNameGradient = indigo === 100

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-primary">
        <Icon size={stat.iconSize ?? 20} />
      </span>
      <div>
        <p
          className={cn(
            'bg-clip-text text-xl font-bold text-transparent',
            useNameGradient && 'bg-name-gradient',
            indigo === undefined && 'bg-stat-gradient',
          )}
          style={
            useNameGradient || indigo === undefined
              ? undefined
              : {
                  backgroundImage: `linear-gradient(90deg, color-mix(in srgb, white ${100 - indigo}%, hsl(var(--primary-to)) ${indigo}%) 0%, color-mix(in srgb, white ${100 - indigo}%, hsl(var(--name-end)) ${indigo}%) 100%)`,
                }
          }
        >
          <CountUp value={stat.number} />
        </p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  )
}

export default StatItem
