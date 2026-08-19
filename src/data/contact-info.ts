import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export interface ContactInfoItem {
  icon: IconType
  label: string
  value: string
  href?: string
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: 'onahbernardchizoba@gmail.com',
    href: 'mailto:onahbernardchizoba@gmail.com',
  },
  { icon: HiOutlineMapPin, label: 'Location', value: 'Nigeria • Remote' },
  { icon: HiOutlineCalendarDays, label: 'Availability', value: 'Monday – Friday' },
  { icon: HiOutlineClock, label: 'Response time', value: 'Usually within 24 hours' },
]
