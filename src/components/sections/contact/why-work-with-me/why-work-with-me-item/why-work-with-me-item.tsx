import { hexToRgba } from '@/src/lib/utils'
import type { WhyWorkWithMeItem as WhyWorkWithMeItemType } from '@/src/data/why-work-with-me'

interface WhyWorkWithMeItemProps {
  item: WhyWorkWithMeItemType
}

const WhyWorkWithMeItem = ({ item }: WhyWorkWithMeItemProps) => {
  return (
    <div className="group h-full rounded-lg border border-border p-4">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-lg"
        style={{ backgroundColor: hexToRgba(item.accentColor, 0.15), color: item.accentColor }}
      >
        <item.icon
          size={20}
          className="transition-[filter] duration-300 ease-signature group-hover:drop-shadow-[0_0_10px_currentColor]"
        />
      </span>
      <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
    </div>
  )
}

export default WhyWorkWithMeItem
