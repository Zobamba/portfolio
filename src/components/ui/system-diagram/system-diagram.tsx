import type { DiagramLayer } from '@/src/data/case-study-types'
import { cn } from '@/src/lib/utils'

interface SystemDiagramProps {
  layers: DiagramLayer[]
  label: string
  /** Match the 16:10 screenshots around it; off where it stands alone. */
  screenshotRatio?: boolean
}

// Stands in for a screenshot on backend work: the shape of the system, left to right.
const SystemDiagram = ({ layers, label, screenshotRatio = true }: SystemDiagramProps) => {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'flex flex-col items-stretch justify-center gap-3 rounded-xl bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] bg-[length:16px_16px] p-6 font-mono text-xs sm:flex-row sm:items-center sm:gap-0 sm:p-12 sm:text-sm',
        screenshotRatio ? 'sm:aspect-[16/10]' : 'sm:py-20',
      )}
    >
      {layers.map((layer, index) => (
        <div key={layer.name} className="contents">
          {index > 0 && (
            <div aria-hidden="true" className="flex items-center justify-center text-muted-foreground sm:w-10">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </div>
          )}
          <div className="flex-1 rounded-xl border border-border bg-background p-4 shadow-sm sm:p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{layer.name}</p>
            <ul className="mt-3 flex flex-col gap-1.5 text-foreground">
              {layer.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SystemDiagram
