'use client'

import { useEffect, useState } from 'react'
import { FiMapPin, FiCode } from 'react-icons/fi'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'
import { useInView } from '@/src/lib/use-in-view'

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const panelLineWidths = ['w-6', 'w-8', 'w-10', 'w-12', 'w-14']
const panelGradients = [
  ['rgba(59, 130, 246, 0.5)', 'rgba(99, 102, 241, 0.3)'],
  ['rgba(99, 102, 241, 0.5)', 'rgba(139, 92, 246, 0.3)'],
]

const panelLines = (seedBase: number, count: number) =>
  Array.from({ length: count }, (_, i) => {
    const seed = seedBase + i * 13
    const [from, to] = panelGradients[Math.floor(seededRandom(seed + 50) * panelGradients.length)]
    return {
      width: panelLineWidths[Math.floor(seededRandom(seed) * panelLineWidths.length)],
      gradient: `linear-gradient(90deg, ${from}, ${to})`,
    }
  })

const CodePanel = ({
  className,
  rotate,
  lines,
  showCodeIcon,
}: {
  className: string
  rotate: number
  lines: ReturnType<typeof panelLines>
  showCodeIcon?: boolean
}) => (
  <div
    className={`pointer-events-none absolute rounded-lg border bg-card-elevated/90 p-3 shadow-lg ${className}`}
    style={{
      transform: `rotate(${rotate}deg)`,
      borderColor: 'rgba(99, 102, 241, 0.45)',
      boxShadow: '0 0 22px 2px rgba(59, 130, 246, 0.28), inset 0 0 16px rgba(99, 102, 241, 0.06)',
    }}
  >
    <div className="mb-2.5 flex items-center gap-1">
      <span className="h-1.5 w-1.5 rounded-full bg-destructive/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
    </div>
    <div className="flex flex-col gap-2">
      {lines.map((line, i) => (
        <span key={i} className={`h-[3px] rounded-[1px] ${line.width}`} style={{ backgroundImage: line.gradient }} />
      ))}
    </div>

    {showCodeIcon && (
      <span
        className="absolute -bottom-4 -right-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card-elevated text-primary shadow-lg"
        style={{ transform: `rotate(${-rotate}deg)` }}
      >
        <FiCode size={20} />
      </span>
    )}
  </div>
)

const JourneyLabel = ({ label, className }: { label: string; className: string }) => (
  <div
    className={`pointer-events-none absolute rounded-md border border-border bg-card/90 px-[18px] py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm ${className}`}
  >
    {label}
  </div>
)

const FADE_MS = 400

const MilestoneNode = ({
  x,
  y,
  color,
  lit,
  breathing,
}: {
  x: number
  y: number
  color: string
  lit: boolean
  breathing: boolean
}) => (
  <>
    <circle
      cx={x}
      cy={y}
      r={34}
      fill={color}
      opacity={breathing ? undefined : lit ? 0.32 : 0}
      className={breathing ? 'animate-breathe' : undefined}
      style={{ filter: 'blur(10px)', transition: breathing ? undefined : `opacity ${FADE_MS}ms ease-out` }}
    />
    <circle
      cx={x}
      cy={y}
      r={22}
      fill="none"
      stroke={color}
      strokeWidth={0.9}
      opacity={lit ? 1 : 0}
      style={{ transition: `opacity ${FADE_MS}ms ease-out` }}
    />
    <circle
      cx={x}
      cy={y}
      r={8}
      fill={color}
      opacity={lit ? 0.6 : 0}
      style={{ filter: 'blur(3px)', transition: `opacity ${FADE_MS}ms ease-out` }}
    />
    <circle cx={x} cy={y} r={8} fill={color} opacity={lit ? 1 : 0} style={{ transition: `opacity ${FADE_MS}ms ease-out` }} />
  </>
)

const PATH_D = 'M130,255 C170,240 195,210 220,190 C205,165 170,145 150,120 C165,100 210,75 230,50'
const DRAW_MS = 1800

const CareerJourneyGraphic = () => {
  const learnLines = panelLines(4, 3)
  const buildLines = panelLines(70, 4)
  const { ref, inView } = useInView<HTMLDivElement>()
  const [stage, setStage] = useState(0)
  const breathing = stage >= 4
  const pathDrawn = stage >= 1

  useEffect(() => {
    if (!inView) return
    setStage(1)
    const t2 = setTimeout(() => setStage(2), DRAW_MS * (1 / 3))
    const t3 = setTimeout(() => setStage(3), DRAW_MS * (2 / 3))
    const t4 = setTimeout(() => setStage(4), DRAW_MS)
    return () => {
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [inView])

  return (
    <div ref={ref} className="relative mx-auto hidden aspect-[4/3] md:block md:w-[420px] xl:w-[480px]">
      <GlowDotGrid className="-inset-10" />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35), transparent 70%)' }}
      />

      <CodePanel
        className="left-[-8%] top-[15%] h-[100px] w-[152px]"
        rotate={5}
        lines={learnLines}
        showCodeIcon
      />
      <CodePanel className="right-[-6%] top-[50%] h-[84px] w-[120px]" rotate={5} lines={buildLines} />

      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="careerPathGradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="65%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <path
          d={PATH_D}
          stroke="url(#careerPathGradient)"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.34}
          style={{
            filter: 'blur(4px)',
            strokeDasharray: 700,
            strokeDashoffset: pathDrawn ? 0 : 700,
            transition: `stroke-dashoffset ${DRAW_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        />
        <path
          d={PATH_D}
          stroke="url(#careerPathGradient)"
          strokeWidth={1.15}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 700,
            strokeDashoffset: pathDrawn ? 0 : 700,
            transition: `stroke-dashoffset ${DRAW_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        />

        <MilestoneNode x={130} y={255} color="#3B82F6" lit={stage >= 1} breathing={breathing} />
        <MilestoneNode x={220} y={190} color="#4A7FF5" lit={stage >= 2} breathing={breathing} />
        <MilestoneNode x={150} y={120} color="#5570F4" lit={stage >= 3} breathing={breathing} />

        <circle
          cx={230}
          cy={50}
          r={54}
          fill="#6366F1"
          opacity={breathing ? undefined : stage >= 4 ? 0.3 : 0}
          className={breathing ? 'animate-breathe' : undefined}
          style={{ filter: 'blur(14px)', transition: breathing ? undefined : `opacity ${FADE_MS}ms ease-out` }}
        />
        <circle
          cx={230}
          cy={50}
          r={40}
          fill="none"
          stroke="url(#careerPathGradient)"
          strokeWidth={0.7}
          opacity={stage >= 4 ? 0.6 : 0}
          style={{ transition: `opacity ${FADE_MS}ms ease-out` }}
        />
        <circle
          cx={230}
          cy={50}
          r={24}
          fill="none"
          stroke="url(#careerPathGradient)"
          strokeWidth={0.9}
          opacity={stage >= 4 ? 1 : 0}
          style={{ transition: `opacity ${FADE_MS}ms ease-out` }}
        />
        <circle
          cx={230}
          cy={50}
          r={9}
          fill="#6366F1"
          opacity={stage >= 4 ? 0.6 : 0}
          style={{ filter: 'blur(3px)', transition: `opacity ${FADE_MS}ms ease-out` }}
        />
        <circle
          cx={230}
          cy={50}
          r={9}
          fill="#6366F1"
          opacity={stage >= 4 ? 1 : 0}
          style={{ transition: `opacity ${FADE_MS}ms ease-out` }}
        />
      </svg>

      <JourneyLabel label="Learn" className="left-[10%] top-[81%]" />
      <JourneyLabel label="Build" className="left-[57%] top-[59%]" />
      <JourneyLabel label="Impact" className="left-[60%] top-[10%]" />

      <div
        className="absolute"
        style={{
          left: '57.5%',
          top: '16.7%',
          transform: 'translate(-50%, -100%)',
          opacity: stage >= 4 ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease-out`,
        }}
      >
        <span className="relative flex items-center justify-center">
          <span
            className="absolute h-16 w-16 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.55), transparent 70%)', filter: 'blur(6px)' }}
          />
          <FiMapPin
            size={80}
            className="relative"
            style={{
              stroke: 'url(#careerPathGradient)',
              filter: 'drop-shadow(0 0 22px rgba(99, 102, 241, 0.75))',
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default CareerJourneyGraphic
