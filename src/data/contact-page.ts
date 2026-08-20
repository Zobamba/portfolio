import { HiOutlineClock, HiOutlineGlobeAlt } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export const contactPage = {
  eyebrow: 'Available for new opportunities',
  headingLine1: "Let's Build Something",
  headingWhite: 'Great',
  headingHighlight: 'Together',
  paragraph:
    "Have a project in mind, looking for a developer, or just want to talk about an idea? I'd love to hear from you.",
}

export interface ContactMeta {
  icon: IconType
  text: string
}

export const contactMeta: ContactMeta[] = [
  { icon: HiOutlineClock, text: 'Usually responds within 24 hours' },
  { icon: HiOutlineGlobeAlt, text: 'Open to remote opportunities worldwide' },
]
