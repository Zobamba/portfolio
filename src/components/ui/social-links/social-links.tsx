import { socials } from '@/src/data/socials'
import IconButton from '@/src/components/ui/icon-button/icon-button'
import { cn } from '@/src/lib/utils'

interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {socials.map((social) => (
        <IconButton key={social.label} icon={social.icon} label={social.label} href={social.href} />
      ))}
    </div>
  )
}

export default SocialLinks
