import type { ExperienceItem as ExperienceItemType } from '@/src/data/experience'

interface ExperienceItemProps {
  item: ExperienceItemType
  isLast: boolean
}

const ExperienceItem = ({ item, isLast }: ExperienceItemProps) => {
  return (
    <div className="relative pl-6">
      <span
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
        style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.4)' }}
      />
      {!isLast && <span className="absolute left-[4.5px] top-4 h-full w-px bg-muted" />}

      <p className="text-sm font-semibold text-foreground">{item.role}</p>
      <p className="text-sm text-primary">{item.company}</p>
      <p className="mt-0.5 text-xs text-faint">{item.dateRange}</p>
      <p className="mt-1.5 text-sm text-muted-foreground">{item.bullet}</p>
    </div>
  )
}

export default ExperienceItem
