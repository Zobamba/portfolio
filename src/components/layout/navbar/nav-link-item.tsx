'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/src/lib/utils'
import type { NavLink } from '@/src/data/nav-links'

interface NavLinkItemProps {
  link: NavLink
  onNavigate?: () => void
}

const NavLinkItem = ({ link, onNavigate }: NavLinkItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === link.href

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        'border-b-2 border-transparent pb-1 text-sm font-medium text-subtle transition-colors hover:text-foreground',
        isActive && 'border-primary text-link',
      )}
    >
      {link.label}
    </Link>
  )
}

export default NavLinkItem
