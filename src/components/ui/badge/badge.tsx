import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/src/lib/utils'

const badgeVariants = cva('inline-flex items-center gap-1.5 rounded font-medium', {
  variants: {
    variant: {
      'tech-pill':
        'border border-transparent bg-pill px-3 py-1.5 text-xs text-subtle transition-all duration-200 hover:-translate-y-[3px] hover:border-primary/40 hover:bg-pill-hover',
      tag: 'bg-muted px-2.5 py-1 text-xs text-muted-foreground',
      muted: 'px-2 py-1 text-xs text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'tag',
  },
})

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

const Badge = ({ variant, children, className }: BadgeProps) => {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>
}

export default Badge
