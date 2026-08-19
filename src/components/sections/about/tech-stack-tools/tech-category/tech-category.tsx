import { cn, hexToRgba } from '@/src/lib/utils'
import type { TechCategory as TechCategoryType } from '@/src/data/tech-categories'

interface TechCategoryProps {
  category: TechCategoryType
}

const TechCategory = ({ category }: TechCategoryProps) => {
  return (
    <div className="rounded-lg border border-border p-4">
      <p className="text-xs font-medium text-muted-foreground">{category.name}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span
            key={item.name}
            title={item.name}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-muted"
          >
            <span className="relative flex h-6 w-6 items-center justify-center">
              {item.iconBgColor && (
                <span
                  className="absolute inset-[2px] rounded-[4px]"
                  style={{ backgroundColor: hexToRgba(item.iconBgColor, 0.85) }}
                />
              )}
              <item.icon className={cn('relative', item.colorClass)} size={18} />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default TechCategory
