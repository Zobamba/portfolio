import { SiTypescript, SiSupabase, SiDeno, SiPostgresql } from 'react-icons/si'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'
import FloatingTechBadge from '@/src/components/sections/hero/floating-tech-badge/floating-tech-badge'

type PipelineTone = 'neutral' | 'primary' | 'subtle'

const toneClasses: Record<PipelineTone, string> = {
  neutral: 'border-border bg-muted text-foreground',
  primary: 'border-primary/30 bg-accent text-primary',
  subtle: 'border-border bg-muted text-subtle',
}

interface PipelineNodeData {
  label: string
  sublabel: string
  tone: PipelineTone
}

const pipeline: PipelineNodeData[] = [
  { label: 'Client', sublabel: 'WebSocket', tone: 'neutral' },
  { label: 'Supabase Realtime', sublabel: 'Broadcast', tone: 'primary' },
  { label: 'Edge Functions', sublabel: 'Deno', tone: 'subtle' },
  { label: 'PostgreSQL', sublabel: 'Row Level Security', tone: 'primary' },
]

const liveStats = [
  { label: 'Connections', value: '128' },
  { label: 'Msgs / sec', value: '42' },
  { label: 'Uptime', value: '99.9%' },
]

const floatingTech = [
  {
    name: 'TypeScript',
    icon: SiTypescript,
    colorClass: 'text-[#3178C6]',
    color: '#3178C6',
    iconBgColor: '#FFFFFF',
    positionClassName: 'top-[6%] -left-24',
    connectorSide: 'right' as const,
  },
  {
    name: 'Supabase',
    icon: SiSupabase,
    colorClass: 'text-[#3ECF8E]',
    color: '#3ECF8E',
    positionClassName: 'top-[34%] -right-24',
    connectorSide: 'left' as const,
  },
  {
    name: 'Deno',
    icon: SiDeno,
    colorClass: 'text-foreground',
    positionClassName: 'top-[58%] -left-24',
    connectorSide: 'right' as const,
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    colorClass: 'text-white',
    color: '#4169E1',
    iconBgColor: '#4169E1',
    positionClassName: 'top-[82%] -right-24',
    connectorSide: 'left' as const,
  },
]

const PipelineConnector = ({ delayMs }: { delayMs: number }) => (
  <div className="relative h-4 w-px bg-primary/25">
    <span
      className="absolute -left-[3px] top-0 h-[7px] w-[7px] animate-flow-down rounded-full bg-primary"
      style={{ animationDelay: `${delayMs}ms` }}
    />
  </div>
)

const ShowchatsHeroGraphic = () => {
  return (
    <div className="relative mx-auto md:w-[400px] xl:w-[440px]">
      <GlowDotGrid className="-inset-10" />

      <div
        className="relative aspect-[16/12] rounded-2xl border border-border bg-card shadow-elevated"
        style={{ transform: 'rotateY(-4deg)' }}
      >
        <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl">
          <div className="flex shrink-0 items-center gap-1.5 border-b border-border bg-background/60 px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 truncate font-mono text-[9px] text-muted-foreground/70">
              showchats-realtime — production
            </span>
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[9px] font-semibold text-primary">
              <span className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-primary" />
              LIVE
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-0 px-5 py-2.5">
            {pipeline.map((node, index) => (
              <div key={node.label} className="flex w-full flex-col items-center">
                <div className={`w-full rounded-lg border px-3 py-1.5 text-center ${toneClasses[node.tone]}`}>
                  <p className="text-[10px] font-semibold leading-tight">{node.label}</p>
                  <p className="text-[8px] leading-tight opacity-70">{node.sublabel}</p>
                </div>
                {index < pipeline.length - 1 && <PipelineConnector delayMs={index * 500} />}
              </div>
            ))}
          </div>

          <div className="grid shrink-0 grid-cols-3 gap-px border-t border-border bg-border/60">
            {liveStats.map((stat) => (
              <div key={stat.label} className="bg-card px-2 py-2 text-center">
                <p className="text-[11px] font-bold text-foreground">{stat.value}</p>
                <p className="text-[7px] uppercase tracking-wide text-muted-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {floatingTech.map((tech, index) => (
        <FloatingTechBadge
          key={tech.name}
          icon={tech.icon}
          name={tech.name}
          colorClass={tech.colorClass}
          color={tech.color}
          iconBgColor={tech.iconBgColor}
          positionClassName={tech.positionClassName}
          connectorSide={tech.connectorSide}
          entranceDelay={index * 80}
        />
      ))}
    </div>
  )
}

export default ShowchatsHeroGraphic
