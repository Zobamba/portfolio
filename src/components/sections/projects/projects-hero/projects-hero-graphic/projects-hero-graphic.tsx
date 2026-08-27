import { FiFile, FiSearch, FiGitBranch, FiSettings, FiCode } from 'react-icons/fi'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const segmentGradientPairs = [
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--foreground) / 0.18)', 'hsl(var(--foreground) / 0.08)'],
  ['hsl(var(--primary) / 0.4)', 'hsl(var(--primary) / 0.18)'],
  ['hsl(var(--secondary) / 0.4)', 'hsl(var(--secondary) / 0.18)'],
]

// Same segment-count cycle and width pools as the homepage HeroGraphic.
const wideWidths = ['w-24', 'w-28', 'w-32', 'w-40', 'w-48', 'w-56']
const mediumWidths = ['w-12', 'w-16', 'w-20', 'w-24', 'w-28']
const narrowWidths = ['w-4', 'w-6', 'w-8', 'w-10', 'w-12']

const widthPoolFor = (segmentCount: number) => {
  if (segmentCount <= 2) return wideWidths
  if (segmentCount <= 4) return mediumWidths
  return narrowWidths
}

const segmentCountCycle = [7, 5, 3, 6, 2, 1, 4]
const lineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const codeLines = lineNumbers.map((number, rowIndex) => {
  const segmentCount = segmentCountCycle[rowIndex % segmentCountCycle.length]
  const widthPool = widthPoolFor(segmentCount)
  const segments = Array.from({ length: segmentCount }, (_, segIndex) => {
    const seed = rowIndex * 31 + segIndex * 7
    const [from, to] =
      segmentGradientPairs[Math.floor(seededRandom(seed + 100) * segmentGradientPairs.length)]
    return {
      width: widthPool[Math.floor(seededRandom(seed) * widthPool.length)],
      gradient: `linear-gradient(90deg, ${from}, ${to})`,
    }
  })
  return { number, segments }
})

const backLineWidths = ['w-20', 'w-14', 'w-24', 'w-12']

const ProjectsHeroGraphic = () => {
  return (
    <div className="relative mx-auto hidden md:block md:w-[420px] xl:w-[480px]">
      <GlowDotGrid className="-inset-10" />

      {/* second, smaller code panel peeking from behind the main panel's bottom-right corner */}
      <div className="absolute -bottom-5 -right-5 z-0 flex aspect-[16/10] w-4/5 flex-col gap-2 rounded-2xl border border-border bg-card-elevated/80 p-3 shadow-lg">
        {backLineWidths.map((width, index) => (
          <span key={index} className={`h-[3px] rounded-[1px] bg-muted-foreground/20 ${width}`} />
        ))}
      </div>

      <div className="relative z-[1] aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card-elevated shadow-lg">
        <div className="flex h-full w-full">
          <div className="flex w-9 shrink-0 flex-col items-center gap-4 border-r border-border/60 bg-background/60 py-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-primary">
              <FiFile size={14} />
            </span>
            <FiSearch className="text-muted-foreground/50" size={15} />
            <FiGitBranch className="text-muted-foreground/50" size={15} />
            <FiSettings className="mt-auto text-muted-foreground/50" size={15} />
          </div>

          <div className="flex flex-1 flex-col p-2.5">
            <div className="mb-2.5 flex shrink-0 items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>

            <div className="flex flex-1 flex-col justify-evenly py-3">
              {codeLines.map((line) => (
                <div key={line.number} className="flex items-center gap-3">
                  <span className="w-4 shrink-0 text-right text-[8px] leading-none text-muted-foreground/50">
                    {line.number}
                  </span>
                  <div className="flex flex-1 flex-wrap items-center gap-1.5">
                    {line.segments.map((segment, index) => (
                      <span
                        key={index}
                        className={`h-[3px] rounded-[1px] ${segment.width}`}
                        style={{ backgroundImage: segment.gradient }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-6 top-8 z-10 flex h-14 w-14 rotate-[10deg] items-center justify-center rounded-xl border-2 border-primary bg-card shadow-card">
        <FiCode className="text-primary" size={22} />
      </div>

      <div className="absolute bottom-6 -left-6 z-10 flex h-14 w-14 rotate-[-10deg] items-center justify-center rounded-xl border-2 border-secondary bg-card shadow-card">
        <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
      </div>
    </div>
  )
}

export default ProjectsHeroGraphic
