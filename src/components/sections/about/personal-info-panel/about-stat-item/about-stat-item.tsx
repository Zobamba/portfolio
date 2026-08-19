import type { AboutStatItem as AboutStatItemType } from '@/src/data/about-stats'

interface AboutStatItemProps {
  stat: AboutStatItemType
}

const AboutStatItem = ({ stat }: AboutStatItemProps) => {
  const Icon = stat.icon

  return (
    <div className="flex flex-col items-center text-center rounded-lg border border-border p-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-primary">
        <Icon size={16} />
      </span>
      <p className="mt-2 text-xl font-bold text-foreground">{stat.number}</p>
      <p className="text-xs leading-tight text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default AboutStatItem
