'use client'

import { FiCheckCircle } from 'react-icons/fi'
import { hexToRgba, cn } from '@/src/lib/utils'
import { useInView } from '@/src/lib/use-in-view'
import Badge from '@/src/components/ui/badge/badge'
import type { WorkExperienceItem } from '@/src/data/work-experience'

interface ExperienceItemProps {
  item: WorkExperienceItem
  isLast: boolean
}

const ExperienceItem = ({ item, isLast }: ExperienceItemProps) => {
  const [dateStart, dateEnd] = item.dateRange.split('–').map((part) => part.trim())
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className="flex gap-4 sm:gap-6">
      <div className="hidden w-28 shrink-0 pt-1 text-right sm:block">
        <p className="text-sm font-semibold" style={{ color: item.accentColor }}>
          {dateStart}
        </p>
        <p className="text-sm font-semibold" style={{ color: item.accentColor }}>
          – {dateEnd}
        </p>
      </div>

      <div className="relative flex shrink-0 flex-col items-center pt-1.5">
        <span
          className="relative flex h-3 w-3 shrink-0 items-center justify-center transition-transform [transition-duration:600ms] ease-signature"
          style={{ transform: inView ? 'scale(1)' : 'scale(0.7)' }}
        >
          <span
            className={cn('absolute h-6 w-6 rounded-full border-2', item.current && 'animate-dot-pulse')}
            style={{ borderColor: hexToRgba(item.accentColor, 0.45) }}
          />
          <span
            className="relative h-3 w-3 rounded-full"
            style={{
              backgroundColor: item.accentColor,
              boxShadow: `0 0 12px ${hexToRgba(item.accentColor, 0.6)}`,
            }}
          />
        </span>
        {!isLast && (
          <span
            className="mt-1 w-px flex-1 origin-top bg-border transition-transform duration-500 ease-signature"
            style={{ transform: inView ? 'scaleY(1)' : 'scaleY(0)', transitionDelay: inView ? '200ms' : '0ms' }}
          />
        )}
      </div>

      <div
        className={cn('min-w-0 flex-1 transition-all [transition-duration:600ms] ease-signature', !isLast && 'pb-8')}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateX(0)' : 'translateX(20px)',
        }}
      >
        <p className="mb-2 text-xs font-semibold sm:hidden" style={{ color: item.accentColor }}>
          {item.dateRange}
        </p>

        <div
          className="rounded-xl border p-5"
          style={
            item.current
              ? {
                  borderColor: hexToRgba(item.accentColor, 0.4),
                  boxShadow: `0 0 24px ${hexToRgba(item.accentColor, 0.15)}`,
                }
              : undefined
          }
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4">
              <div
                className="flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-lg border p-1 text-center"
                style={{
                  borderColor: hexToRgba(item.accentColor, 0.3),
                  backgroundColor: hexToRgba(item.accentColor, 0.12),
                  color: item.accentColor,
                }}
              >
                <span className="text-xl font-bold leading-none">{item.logoText}</span>
                {item.logoSubtext && (
                  <span className="text-[6px] font-semibold leading-tight tracking-wide">
                    {item.logoSubtext}
                  </span>
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-foreground">{item.role}</h3>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  <span style={{ color: item.accentColor }}>{item.company}</span> • {item.location}
                </p>
                <p className="mt-4 text-center text-sm italic text-muted-foreground sm:text-left">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="lg:w-[260px] lg:shrink-0">
              <p className="text-xs font-semibold" style={{ color: item.accentColor }}>
                Technologies
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="tag">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {item.contributions.length > 0 && (
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs font-semibold" style={{ color: item.accentColor }}>
                Key Contributions
              </p>
              <ul className="mt-2 space-y-1.5">
                {item.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <FiCheckCircle
                      className="mt-0.5 shrink-0"
                      size={14}
                      style={{ color: item.accentColor }}
                    />
                    {contribution}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
