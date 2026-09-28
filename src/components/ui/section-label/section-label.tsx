import { cn } from '@/src/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

const SectionLabel = ({ children, className }: SectionLabelProps) => {
  return (
    <h2 className={cn('text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-[1.75rem]', className)}>
      {children}
    </h2>
  )
}

export default SectionLabel
