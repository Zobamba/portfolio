import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('mx-auto max-w-[1400px] px-5 sm:px-8', className)}>{children}</div>
}

export default Container
