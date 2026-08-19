'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/src/lib/use-in-view'
import { cn } from '@/src/lib/utils'

const distanceClass = {
  8: 'translate-y-2',
  12: 'translate-y-3',
  16: 'translate-y-4',
  20: 'translate-y-5',
} as const

interface RevealProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms, for revealing a row of cards in sequence. */
  delay?: number
  /** Vertical travel distance in px before settling. Defaults to 16. */
  distance?: keyof typeof distanceClass
}

/**
 * Fades + lifts content into place the first time it scrolls into view.
 * Tier 2 of the site's animation system ("entrance animations") — sections
 * and cards reveal once as the user scrolls; nothing re-animates on re-entry.
 */
const Reveal = ({ children, className, delay = 0, distance = 16 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-signature',
        inView ? 'opacity-100 translate-y-0' : `opacity-0 ${distanceClass[distance]}`,
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

export default Reveal
