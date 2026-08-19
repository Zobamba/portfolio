import Link from 'next/link'
import type { IconType } from 'react-icons'
import { cn } from '@/src/lib/utils'

interface IconButtonProps {
  icon: IconType
  label: string
  href?: string
  onClick?: () => void
  className?: string
}

const baseClasses =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary'

const IconButton = ({ icon: Icon, label, href, onClick, className }: IconButtonProps) => {
  const classes = cn(baseClasses, className)

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <Link
        href={href}
        aria-label={label}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <Icon size={16} />
      </Link>
    )
  }

  return (
    <button type="button" aria-label={label} onClick={onClick} className={classes}>
      <Icon size={16} />
    </button>
  )
}

export default IconButton
