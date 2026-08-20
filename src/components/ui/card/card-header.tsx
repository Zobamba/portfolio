import type { IconType } from 'react-icons'
import { cn } from '@/src/lib/utils'

interface CardHeaderProps {
  icon: IconType
  title: string
  subtitle?: string
  iconColorClass?: string
}

const CardHeader = ({ icon: Icon, title, subtitle, iconColorClass = 'text-primary' }: CardHeaderProps) => {
  return (
    <div className={subtitle ? 'mb-4' : 'mb-3'}>
      <div className="flex items-center gap-2">
        <Icon className={cn(iconColorClass)} size={24} />
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

export default CardHeader
