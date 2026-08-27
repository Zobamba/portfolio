import Image from 'next/image'
import { FiUser } from 'react-icons/fi'
import { cn } from '@/src/lib/utils'

interface AvatarProps {
  src?: string
  alt: string
  initials?: string
  size?: number
  className?: string
}

const Avatar = ({ src, alt, initials, size = 48, className }: AvatarProps) => {
  if (!src && !initials) {
    return (
      <div
        style={{ width: size, height: size }}
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground',
          className,
        )}
      >
        <FiUser size={size * 0.5} />
      </div>
    )
  }

  if (!src) {
    return (
      <div
        style={{ width: size, height: size }}
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground',
          className,
        )}
      >
        {initials}
      </div>
    )
  }

  return (
    <div
      style={{ width: size, height: size }}
      className={cn('relative shrink-0 overflow-hidden rounded-full', className)}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </div>
  )
}

export default Avatar
