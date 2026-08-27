import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('rounded-xl border border-border bg-card shadow-card', className)}>
      {children}
    </div>
  )
}

export default Card
