import type { IconType } from 'react-icons'
import { cn, hexToRgba } from '@/src/lib/utils'

interface FloatingTechBadgeProps {
  icon: IconType
  name: string
  colorClass: string
  color?: string
  positionClassName: string
  connectorSide: 'left' | 'right' | 'top' | 'bottom'
  iconBgColor?: string
  /** Opt-in gentle continuous bob (signature-animation tier), layered on a nested element so it composes with the one-time entrance animation. */
  floating?: boolean
  /** Stagger for the entrance pop-in, in ms. The float loop (if enabled) waits until this entrance fully finishes before it starts bobbing. */
  entranceDelay?: number
}

const connectorClasses: Record<FloatingTechBadgeProps['connectorSide'], string> = {
  left: '-left-6 top-1/2 h-px w-6 -translate-y-1/2',
  right: '-right-6 top-1/2 h-px w-6 -translate-y-1/2',
  top: '-top-6 left-1/2 h-6 w-px -translate-x-1/2',
  bottom: '-bottom-6 left-1/2 h-6 w-px -translate-x-1/2',
}

const ENTRANCE_MS = 500

const FloatingTechBadge = ({
  icon: Icon,
  name,
  colorClass,
  color,
  positionClassName,
  connectorSide,
  iconBgColor,
  floating,
  entranceDelay = 0,
}: FloatingTechBadgeProps) => {
  return (
    <div
      className={cn('absolute z-10 animate-in fade-in zoom-in duration-500 ease-signature', positionClassName)}
      style={{ animationDelay: `${entranceDelay}ms` }}
    >
      <div
        className={floating ? 'animate-float' : undefined}
        style={{ animationDelay: floating ? `${entranceDelay + ENTRANCE_MS}ms` : undefined }}
      >
        <div
          className={cn(
            'relative flex h-[70px] w-[84px] flex-col items-center justify-center gap-1.5 rounded-xl border bg-card px-1.5 py-2 text-center shadow-card',
            !color && 'border-border',
          )}
          style={color ? { borderColor: hexToRgba(color, 0.25) } : undefined}
        >
          <span className={cn('absolute bg-border', connectorClasses[connectorSide])} />
          <span className="relative flex h-7 w-7 items-center justify-center">
            {iconBgColor && (
              <span
                className="absolute inset-[2px] rounded-[3px]"
                style={{ backgroundColor: hexToRgba(iconBgColor, 0.85) }}
              />
            )}
            <Icon className={cn('relative', colorClass)} size={28} />
          </span>
          <span className="whitespace-nowrap text-[10px] font-medium leading-tight text-foreground">
            {name}
          </span>
        </div>
      </div>
    </div>
  )
}

export default FloatingTechBadge
