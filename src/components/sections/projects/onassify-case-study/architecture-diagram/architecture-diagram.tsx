type NodeColor = 'primary' | 'neutral'

const colorMap: Record<NodeColor, { border: string; bg: string }> = {
  primary: { border: 'hsl(var(--primary) / 0.35)', bg: 'hsl(var(--accent))' },
  neutral: { border: 'hsl(var(--border))', bg: 'hsl(var(--muted))' },
}

const Node = ({
  label,
  sublabel,
  color,
}: {
  label: string
  sublabel?: string
  color: NodeColor
}) => {
  const c = colorMap[color]
  return (
    <div
      className="rounded-lg border px-4 py-2.5 text-center"
      style={{ borderColor: c.border, backgroundColor: c.bg }}
    >
      <p className="text-sm font-semibold text-foreground">{label}</p>
      {sublabel && <p className="text-xs text-muted-foreground">{sublabel}</p>}
    </div>
  )
}

const Connector = ({ className = '' }: { className?: string }) => (
  <div className={`mx-auto h-6 w-px bg-border ${className}`} />
)

const ArchitectureDiagram = () => (
  <div className="relative overflow-hidden rounded-xl border border-border p-6">
    <div className="relative flex flex-col items-center">
      <Node label="Onassify" color="primary" />
      <Connector />

      <div className="flex w-full max-w-md items-start justify-center gap-6">
        <div className="flex flex-1 flex-col items-center">
          <Node label="Admin App" sublabel="(Web)" color="neutral" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <Node label="POS App" sublabel="(Web / Mobile)" color="neutral" />
        </div>
      </div>

      <div className="relative h-6 w-full max-w-md">
        <div className="absolute left-1/4 top-0 h-3 w-px bg-border" />
        <div className="absolute right-1/4 top-0 h-3 w-px bg-border" />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-border" />
        <div className="absolute left-1/2 top-3 h-3 w-px -translate-x-1/2 bg-border" />
      </div>

      <Node label="REST API" color="primary" />
      <Connector />
      <Node label="Application Server" sublabel="(Rails)" color="neutral" />
      <Connector />
      <Node label="MySQL Database" color="primary" />
    </div>
  </div>
)

export default ArchitectureDiagram
