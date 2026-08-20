import { hexToRgba } from '@/src/lib/utils'
import type { BeyondTheCodeItem as BeyondTheCodeItemType } from '@/src/data/beyond-the-code'

interface BeyondTheCodeItemProps {
  item: BeyondTheCodeItemType
}

const BeyondTheCodeItem = ({ item }: BeyondTheCodeItemProps) => {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: hexToRgba(item.accentColor, 0.15), color: item.accentColor }}
        >
          <item.icon size={16} />
        </span>
        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{item.description}</p>
    </div>
  )
}

export default BeyondTheCodeItem
