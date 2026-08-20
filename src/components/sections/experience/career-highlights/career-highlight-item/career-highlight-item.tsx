import CountUp from '@/src/components/ui/count-up/count-up'
import type { CareerHighlight } from '@/src/data/career-highlights'

interface CareerHighlightItemProps {
  highlight: CareerHighlight
}

const CareerHighlightItem = ({ highlight }: CareerHighlightItemProps) => {
  const Icon = highlight.icon

  return (
    <div className="flex flex-col items-center rounded-lg border border-border p-3 text-center">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
        <Icon size={16} />
      </span>
      <p className="mt-2 text-xl font-bold text-foreground">
        <CountUp value={highlight.number} />
      </p>
      <p className="text-[11px] leading-tight text-muted-foreground">{highlight.label}</p>
    </div>
  )
}

export default CareerHighlightItem
