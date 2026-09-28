import { cn } from '@/src/lib/utils'

interface InsetPanelProps {
  children: React.ReactNode
  className?: string
}

// Double-bezel surface: a faint outer ring around a slightly lifted inner sheet,
// so lists read as one object sitting on the page rather than loose lines.
const InsetPanel = ({ children, className }: InsetPanelProps) => {
  return (
    <div className={cn('rounded-[1.375rem] border border-border/70 bg-card/40 p-1.5', className)}>
      <div className="rounded-2xl border border-border/60 bg-card">{children}</div>
    </div>
  )
}

export default InsetPanel
