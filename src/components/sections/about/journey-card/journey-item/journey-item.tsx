import { hexToRgba } from '@/src/lib/utils'
import type { JourneyItem as JourneyItemType } from '@/src/data/journey'

interface JourneyItemProps {
  item: JourneyItemType
  isLast: boolean
}

const chunkPairs = <T,>(items: T[]) => {
  const pairs: T[][] = []
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2))
  }
  return pairs
}

const JourneyItem = ({ item, isLast }: JourneyItemProps) => {
  return (
    <div className="relative pl-6">
      <span
        className="absolute -left-[4px] -top-[-2px] h-4 w-4 rounded-full border-2"
        style={{ borderColor: hexToRgba(item.accentColor, 0.45) }}
      />
      <span
        className="absolute left-0 top-1.5 h-2 w-2 rounded-full"
        style={{
          backgroundColor: item.accentColor,
          boxShadow: `0 0 8px ${hexToRgba(item.accentColor, 0.4)}`,
        }}
      />
      {!isLast && <span className="absolute left-[4.5px] top-4 h-full w-px bg-muted" />}

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0 sm:flex-1">
          <p className="mt-0.5 text-sm font-semibold text-foreground">{item.role}</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-primary">{item.credential}</span> • {item.meta}
          </p>
          <p className="text-xs font-medium text-subtle">{item.dateRange}</p>
          <p className="mt-1.5 text-sm text-muted-foreground">{item.bullet}</p>
        </div>

        <div className="flex flex-col gap-2 sm:shrink-0">
          {chunkPairs(item.tags).map((pair, rowIndex) => (
            <div key={rowIndex} className="flex gap-2">
              {pair.map((tag) => (
                <span
                  key={tag.name}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  <tag.icon className={tag.colorClass} size={tag.iconSize ?? 12} />
                  {tag.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JourneyItem
