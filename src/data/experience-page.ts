import { HiOutlineCalendarDays, HiOutlineBuildingOffice2, HiOutlineBriefcase } from 'react-icons/hi2'
import type { IconType } from 'react-icons'

export const experiencePage = {
  eyebrow: 'Experience',
  headingLine1: 'My Professional',
  headingHighlight: 'Journey',
  paragraph: "A timeline of the roles, teams, and products I've worked on throughout my career.",
}

export interface ExperienceHeroStat {
  icon: IconType
  number: string
  label: string
}

export const experienceHeroStats: ExperienceHeroStat[] = [
  { icon: HiOutlineCalendarDays, number: '5+', label: 'Years Experience' },
  { icon: HiOutlineBuildingOffice2, number: '2+', label: 'Companies' },
  { icon: HiOutlineBriefcase, number: '20+', label: 'Projects Delivered' },
]
