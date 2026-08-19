import { hexToRgba } from '@/src/lib/utils'
import type { WhatIDoItem as WhatIDoItemType } from '@/src/data/what-i-do'

interface WhatIDoItemProps {
  item: WhatIDoItemType
}

const WhatIDoItem = ({ item }: WhatIDoItemProps) => {
  return (
    <div className="group h-full rounded-lg border border-border p-5 text-center transition-all duration-300 ease-signature hover:-translate-y-[3px]">
      <span
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: hexToRgba(item.accentColor, 0.15), color: item.accentColor }}
      >
        <item.icon
          size={22}
          className="transition-[filter] duration-300 ease-signature group-hover:drop-shadow-[0_0_8px_currentColor]"
        />
      </span>
      <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
      <p className="mt-1.5 text-xs text-muted-foreground">{item.description}</p>
    </div>
  )
}

export default WhatIDoItem
