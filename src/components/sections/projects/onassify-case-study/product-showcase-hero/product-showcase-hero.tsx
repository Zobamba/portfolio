'use client'

import { FiBell, FiLayers, FiShoppingCart } from 'react-icons/fi'
import { useInView } from '@/src/lib/use-in-view'
import GlowDotGrid from '@/src/components/ui/glow-dot-grid/glow-dot-grid'
import {
  showcaseNavItems as navItems,
  showcaseKpis as kpis,
  showcaseRecentSales as recentSales,
  showcasePosItems as posItems,
  showcaseChartYLabels,
} from '@/src/data/onassify-case-study'

// 6 evenly-spaced data nodes; the curve is smoothed between them (Catmull-Rom -> cubic bezier)
// so it reads as a real chart line, not a jagged zig-zag.
const CHART_POINTS: [number, number][] = [
  [16, 44],
  [42.4, 50],
  [68.8, 38],
  [95.2, 41],
  [121.6, 24],
  [148, 9],
]
const CHART_BASELINE = 58

const smoothPath = (points: [number, number][]) => {
  const p = points
  let d = `M${p[0][0]},${p[0][1]}`
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i === 0 ? i : i - 1]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2 < p.length ? i + 2 : i + 1]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2[0]},${p2[1]}`
  }
  return d
}

const bezierLength = (
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  steps = 24,
) => {
  let length = 0
  let prev = p0
  for (let i = 1; i <= steps; i++) {
    const t = i / steps
    const mt = 1 - t
    const x = mt ** 3 * p0[0] + 3 * mt ** 2 * t * p1[0] + 3 * mt * t ** 2 * p2[0] + t ** 3 * p3[0]
    const y = mt ** 3 * p0[1] + 3 * mt ** 2 * t * p1[1] + 3 * mt * t ** 2 * p2[1] + t ** 3 * p3[1]
    length += Math.hypot(x - prev[0], y - prev[1])
    prev = [x, y]
  }
  return length
}

const smoothPathLength = (points: [number, number][]) => {
  const p = points
  let total = 0
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i === 0 ? i : i - 1]
    const p1 = p[i]
    const p2 = p[i + 1]
    const p3 = p[i + 2 < p.length ? i + 2 : i + 1]
    const cp1: [number, number] = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const cp2: [number, number] = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    total += bezierLength(p1, cp1, cp2, p2)
  }
  return total
}

const CHART_LINE_PATH = smoothPath(CHART_POINTS)
const CHART_LINE_LENGTH = smoothPathLength(CHART_POINTS)
const CHART_AREA_PATH = `${CHART_LINE_PATH} L${CHART_POINTS[CHART_POINTS.length - 1][0]},${CHART_BASELINE} L${CHART_POINTS[0][0]},${CHART_BASELINE} Z`
const Y_LABELS = showcaseChartYLabels
const X_LABELS = CHART_POINTS.map((_, i) => `${i + 1}`)

const ProductShowcaseHero = () => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="relative mx-auto hidden md:block md:w-[420px] xl:w-[480px]">
      <GlowDotGrid className="-inset-10" />

      {/* laptop — stationary, dominant element, tilted back and to the right */}
      <div
        className="relative mx-auto w-[100%]"
        style={{ transform: 'rotateY(5deg) rotateX(4deg)', transformStyle: 'preserve-3d' }}
      >
        {/* screen unit — modern rectangular MacBook silhouette, uniformly rounded, graphite frame */}
        <div
          className="relative rounded-[12px] border-[5px] p-[2px] shadow-elevated"
          style={{ borderColor: '#111110', background: '#111110' }}
        >
          {/* camera notch */}
          <span className="absolute left-1/2 top-0 z-10 h-[6px] w-[10%] -translate-x-1/2 rounded-b-[3px] bg-[#111110]" />

          <div className="relative aspect-[16/8.8] w-full overflow-hidden rounded-[4px] bg-white">
            <div className="relative flex h-full flex-col">
              {/* title bar */}
              <div className="flex shrink-0 items-center justify-between border-b border-black/[0.06] px-2.5 py-[4px]">
                <div className="flex items-center gap-1">
                  <span className="flex h-3 w-3 items-center justify-center rounded-[3px] bg-[#0F766E]">
                    <FiLayers size={6} className="text-white" />
                  </span>
                  <span className="text-[6px] font-bold tracking-wide text-black/80">ONASSIFY</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full bg-black/[0.06]">
                    <FiBell size={5.5} className="text-black/45" />
                  </span>
                  <span className="h-3 w-3 rounded-full bg-[#C2410C]" />
                </div>
              </div>

              <div className="relative flex flex-1">
                <div className="hidden w-[20%] shrink-0 flex-col gap-1 border-r border-black/[0.06] p-1.5 sm:flex">
                  {navItems.map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-1 rounded text-[5.5px] font-medium leading-none"
                      style={{
                        color: item.active ? '#0F766E' : 'rgba(24,24,27,0.45)',
                        backgroundColor: item.active ? 'rgba(15, 118, 110, 0.1)' : 'transparent',
                        padding: item.active ? '3.5px 3px' : '3.5px 1.5px',
                      }}
                    >
                      <item.icon size={6} className="shrink-0" />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-1 flex-col gap-1.5 p-2">
                  <p className="text-[6px] font-bold text-black/80">Dashboard</p>

                  <div className="grid grid-cols-4 gap-1.5">
                    {kpis.map((kpi) => (
                      <div key={kpi.label} className="rounded-[3px] border border-black/[0.05] bg-black/[0.02] p-2">
                        <p className="text-[4.5px] font-medium text-black/45">{kpi.label}</p>
                        <p className="mt-1 text-[7.5px] font-extrabold tracking-tight text-black/85">
                          {kpi.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-1 gap-1.5">
                    <div className="min-w-0 flex-[1.6] rounded-[3px] border border-black/[0.05] bg-black/[0.02] p-1.5">
                      <p className="mb-0.5 text-[4.5px] text-black/40">Sales Trend</p>
                      <div className="flex h-[calc(100%-6px)] min-w-0 gap-0.5">
                        <svg viewBox="0 0 12 68" className="h-full w-[10px] shrink-0" fill="none">
                          {Y_LABELS.map((label, i) => (
                            <text
                              key={label}
                              x="12"
                              y={6 + i * 15}
                              textAnchor="end"
                              className="fill-black/30"
                              style={{ fontSize: '5px' }}
                            >
                              {label}
                            </text>
                          ))}
                        </svg>
                        <svg viewBox="0 0 152 68" className="h-full min-w-0 flex-1" fill="none">
                          <defs>
                            <linearGradient id="showcaseAreaGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#0F766E" stopOpacity={0.28} />
                              <stop offset="100%" stopColor="#0F766E" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="showcaseChartGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#0F766E" />
                              <stop offset="100%" stopColor="#14B8A6" />
                            </linearGradient>
                          </defs>

                          {/* y-axis gridlines */}
                          {[6, 21, 36, 51].map((y) => (
                            <line key={y} x1={16} y1={y} x2={148} y2={y} stroke="rgba(24,24,27,0.06)" strokeWidth={0.5} />
                          ))}

                          {/* area fill under the smoothed line */}
                          <path
                            d={CHART_AREA_PATH}
                            fill="url(#showcaseAreaGradient)"
                            style={{
                              opacity: inView ? 1 : 0,
                              transition: 'opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) 900ms',
                            }}
                          />

                          {/* the line itself — smooth curve, nodes sit exactly on the data values */}
                          <path
                            d={CHART_LINE_PATH}
                            stroke="url(#showcaseChartGradient)"
                            strokeWidth={1.1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            style={{
                              strokeDasharray: CHART_LINE_LENGTH,
                              strokeDashoffset: inView ? 0 : CHART_LINE_LENGTH,
                              transition: 'stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          />

                          {/* node points — mark the actual data values on the curve */}
                          {CHART_POINTS.map(([x, y], i) => (
                            <circle
                              key={`${x}-${y}`}
                              cx={x}
                              cy={y}
                              r={1.6}
                              fill="#FFFFFF"
                              stroke="#0F766E"
                              strokeWidth={1}
                              style={{
                                opacity: inView ? 1 : 0,
                                transition: `opacity 300ms ease-out ${400 + i * 180}ms`,
                              }}
                            />
                          ))}

                          {/* x-axis labels — one beneath each data node */}
                          {X_LABELS.map((label, i) => (
                            <text
                              key={label}
                              x={CHART_POINTS[i][0]}
                              y={66}
                              textAnchor="middle"
                              className="fill-black/25"
                              style={{ fontSize: '5px' }}
                            >
                              {label}
                            </text>
                          ))}
                        </svg>
                      </div>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-[3px] border border-black/[0.05] bg-black/[0.02] p-1.5">
                      <p className="text-[4.5px] text-black/40">Recent Sales</p>
                      {recentSales.map((sale, i) => (
                        <div key={`${sale.ref}-${i}`} className="flex items-center gap-1">
                          <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-[2px] bg-black/[0.05]">
                            <sale.icon size={5.5} className="text-[#0F766E]" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[5px] font-medium text-black/70">
                              {sale.label}
                            </p>
                            <p className="truncate text-[4px] text-black/35">{sale.ref}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-[5px] font-semibold text-[#0F766E]">{sale.amount}</p>
                            <p className="text-[4px] text-black/35">{sale.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hinge */}
        <div className="mx-auto h-[4px] w-[97%]" style={{ background: 'linear-gradient(180deg, #45484f 0%, #1c1e23 100%)' }} />

        {/* base — space-gray graphite, flush with the screen, no colored glow */}
        <div className="relative mx-auto w-full">
          {/* top-surface sliver — a little of the keyboard deck peeking out from the rightward tilt */}
          <div
            className="mx-auto h-[5px] w-full rounded-t-[2px]"
            style={{
              background: 'linear-gradient(100deg, #55535F 0%, #38363F 55%, #26242C 100%)',
              boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.1) inset',
            }}
          />
          <div
            className="h-[11px] w-full rounded-b-[10px] shadow-elevated"
            style={{
              background: 'linear-gradient(180deg, #46434E 0%, #2A2830 55%, #1A1820 100%)',
              boxShadow: '0 1px 0 rgba(255, 255, 255, 0.12) inset',
            }}
          >
            <span className="mx-auto block h-[3px] w-[8%] rounded-b-full" style={{ backgroundColor: '#14151a' }} />
          </div>
        </div>
      </div>

      {/* phone / POS device — overlaps laptop's bottom-right corner only, lifted with a 3D bezel */}
      <div className="absolute bottom-[-24px] right-[-5%] w-[24%] xl:right-[-18%]">
        <div style={{ transform: 'rotateY(-24deg) rotateX(6deg)', transformStyle: 'preserve-3d' }}>
          <div
            className="relative rounded-[1.7rem] p-[3px] shadow-elevated"
            style={{ background: 'linear-gradient(150deg, #4A4E5C 0%, #2A2D36 35%, #14161B 70%, #05060A 100%)' }}
          >
            <div className="relative rounded-[1.55rem] border-[3px] p-1" style={{ borderColor: '#111110', backgroundColor: '#111110' }}>
              {/* side buttons */}
              <span
                className="absolute -left-[5px] top-[14%] h-3 w-[4px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #3A3D46 0%, #1A1C21 100%)' }}
              />
              <span
                className="absolute -left-[5px] top-[23%] h-5 w-[4px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #3A3D46 0%, #1A1C21 100%)' }}
              />
              {/* power button */}
              <span
                className="absolute -right-[6px] top-[16%] h-9 w-[5px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #4A4D56 0%, #1A1C21 100%)' }}
              />

              <div className="relative overflow-hidden rounded-[1.15rem] bg-white" style={{ aspectRatio: '9 / 19' }}>
                {/* dynamic island */}
                <span className="absolute left-1/2 top-[6px] z-10 h-[6px] w-[26%] -translate-x-1/2 rounded-full bg-black/80" />

                <div className="flex h-full flex-col p-2.5 pt-4">
                  <p className="text-center text-[7px] font-bold text-black/80">Onassify POS</p>
                  <div className="mt-3 flex flex-col gap-1.5">
                    {posItems.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-[6px] text-black/60">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="my-1.5 h-px bg-black/[0.08]" />
                  <div className="flex items-center justify-between text-[7px] font-bold text-black/85">
                    <span>Total</span>
                    <span className="text-[#0F766E]">₦8,000</span>
                  </div>
                  <div className="mt-auto flex items-center justify-center gap-1 rounded-md bg-[#0F766E] py-1.5 text-[6.5px] font-semibold text-white">
                    <FiShoppingCart size={7} />
                    Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcaseHero
