export interface WorkExperienceItem {
  role: string
  current?: boolean
  company: string
  location: string
  dateRange: string
  description: string
  contributions: string[]
  technologies: string[]
  logoText: string
  logoSubtext?: string
  accentColor: string
}

export const workExperience: WorkExperienceItem[] = [
  {
    role: 'Backend Developer',
    current: true,
    company: 'Xanotech Solutions',
    location: 'Remote',
    dateRange: 'Feb 2024 – Present',
    description:
      'Building secure and scalable banking systems for Microfinance Banks (MFBs). Working on core banking modules, integrations and APIs that power critical financial operations.',
    contributions: [
      'Developed and maintained core banking APIs used across multiple MFB platforms.',
      'Designed database schemas and optimized queries leading to improved performance.',
      'Implemented authentication, authorization and role-based access control.',
      'Integrated third-party services including payment gateways and notification systems.',
    ],
    technologies: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'Git'],
    logoText: 'X',
    logoSubtext: 'XANOTECH SOLUTIONS',
    accentColor: '#0F766E',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Product Square Technologies',
    location: 'Remote',
    dateRange: 'Sep 2022 – Feb 2024',
    description:
      'Worked on multiple products from MVP to production. Collaborated with cross-functional teams to deliver high-quality, user-focused applications.',
    contributions: [
      'Built responsive web applications with React and modern UI/UX practices.',
      'Developed RESTful APIs and integrated third-party services.',
      'Implemented state management and optimized application performance.',
      'Collaborated in agile teams and participated in code reviews and sprint planning.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redux'],
    logoText: 'PS',
    logoSubtext: 'PRODUCT SQUARE',
    accentColor: '#52525B',
  },
  {
    role: 'Junior Developer',
    company: 'Various Projects',
    location: 'Remote / Onsite',
    dateRange: 'Mar 2021 – Aug 2022',
    description:
      'Worked on client projects and internal tools. Strengthened my foundation in software development and best practices.',
    contributions: [],
    technologies: ['HTML', 'CSS','JavaScript', 'PostgreSQL', 'Git', 'REST APIs'],
    logoText: '</>',
    accentColor: '#C2410C',
  },
]
