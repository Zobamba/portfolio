import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export interface SocialLink {
  label: string
  href: string
  icon: IconType
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Zobamba', icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bernard-onah-3043a11a0/',
    icon: FaLinkedinIn,
  },
  { label: 'Twitter', href: 'https://x.com/onah_chizoba', icon: FaXTwitter },
  { label: 'Email', href: 'mailto:onahbernardchizoba@gmail.com', icon: FiMail },
]
