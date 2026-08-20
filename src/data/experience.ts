export interface ExperienceItem {
  role: string
  company: string
  dateRange: string
  bullet: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Backend Developer',
    company: 'Xanotech Solutions',
    dateRange: 'Feb 2024 — Present',
    bullet: 'Building secure and scalable banking systems for MFIs and Microfinance banks.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Product Square Technologies',
    dateRange: 'Sept 2022 — Feb 2024',
    bullet: 'Developed and maintained web applications using the MERN stack.',
  },
]
