import type { RowItem } from '@/src/data/case-study-types'
import InsetPanel from '@/src/components/ui/inset-panel/inset-panel'

interface RowListProps {
  items: RowItem[]
}

// Numbered rows in the same panel as the home page's "How I work".
const RowList = ({ items }: RowListProps) => {
  return (
    <InsetPanel>
      <ol className="divide-y divide-border/70">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-1 px-5 py-4 sm:grid-cols-[2.5rem_14rem_1fr] sm:items-baseline sm:gap-4 sm:px-6 sm:py-5"
          >
            <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
            <span className={item.description ? 'text-foreground' : 'text-foreground sm:col-span-2'}>
              {item.title}
            </span>
            {item.description && <span className="text-muted-foreground">{item.description}</span>}
          </li>
        ))}
      </ol>
    </InsetPanel>
  )
}

export default RowList
