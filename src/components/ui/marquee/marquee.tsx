import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full loop; longer is calmer. */
  duration?: number
  reverse?: boolean
  className?: string
}

// Renders the row twice and slides it by half its width, so the loop never shows a seam.
// Edges fade out, hovering pauses it, and the global reduced-motion rule stops it.
const Marquee = ({ children, duration = 40, reverse = false, className }: MarqueeProps) => {
  return (
    <div
      className={cn(
        'group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
