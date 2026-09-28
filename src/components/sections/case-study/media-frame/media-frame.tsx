import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

interface MediaFrameProps {
  children: ReactNode
  className?: string
}

// The same frame the home page puts around screenshots, so media reads as one family.
const MediaFrame = ({ children, className }: MediaFrameProps) => {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-border bg-card p-2 sm:p-3', className)}>
      {children}
    </div>
  )
}

export default MediaFrame
