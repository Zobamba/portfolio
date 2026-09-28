import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div id={id} className={cn('mx-auto max-w-[1400px] px-5 sm:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
