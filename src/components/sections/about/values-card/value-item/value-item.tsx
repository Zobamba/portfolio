'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/src/lib/use-in-view'
import { cn } from '@/src/lib/utils'

interface ValueItemProps {
  title: string
  description: string
  colorClass: string
  delay?: number
  children: ReactNode
}

const ValueItem = ({ title, description, colorClass, delay = 0, children }: ValueItemProps) => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'flex gap-3 rounded-lg border border-border p-4 transition-all duration-300 ease-signature hover:-translate-y-[3px] hover:border-primary/40',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <span
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted',
          colorClass,
          inView && 'animate-icon-flash',
        )}
        style={{ animationDelay: `${delay + 300}ms` }}
      >
        {children}
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default ValueItem
