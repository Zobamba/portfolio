import type { CaseStudyFact, DiagramLayer, RowItem } from '@/src/data/case-study-types'

export const header = {
  label: 'Full-stack · In production',
  title: 'Onassify',
  lead: 'A POS and inventory platform that businesses run their day on: sales at the counter, stock across locations, purchases, expenses, and the reports that tie them together.',
}

export const facts: CaseStudyFact[] = [
  { label: 'Role', value: 'Full-stack: architecture, APIs, frontend, deployment' },
  { label: 'Stack', value: 'React, TypeScript, Rails, MySQL, Tailwind' },
  { label: 'Status', value: 'In production, used daily by businesses' },
  { label: 'Source', value: 'Private' },
]

export const demoVideo = {
  title: 'Onassify — 60 second walkthrough',
  videoUrl:
    'https://res.cloudinary.com/ddt4oo78m/video/upload/v1787025660/Onassify-Demo_kjgk5w.mp4',
}

export const overview =
  'Onassify helps businesses manage sales, inventory, purchases, expenses and multiple locations from one place. It keeps stock accurate across branches and gives owners a live view of how the business is doing, instead of a spreadsheet at the end of the week.'

export const problem = {
  title: 'The problem',
  intro: 'Businesses were struggling with:',
  items: [
    'Stock discrepancies',
    'Manual inventory tracking',
    'Slow, error-prone sales processing',
    'No real-time view of the business',
    'Running several locations at once',
  ],
}

export const solution = {
  title: 'What Onassify does',
  intro: 'One platform for:',
  items: [
    'Real-time inventory tracking',
    'A fast, reliable point of sale',
    'Multi-location management',
    'Sales and stock reports',
    'Role-based access control',
  ],
}

export const role: RowItem[] = [
  { title: 'System architecture', description: 'Database design and how the apps, API and data fit together.' },
  { title: 'API development', description: 'The Rails REST API and third-party integrations.' },
  { title: 'Frontend', description: 'The admin and POS interfaces in React and TypeScript.' },
  { title: 'Production', description: 'Deployment and ongoing support for businesses using it daily.' },
]

export const keyFeatures = [
  'Point of sale',
  'Inventory management',
  'Product catalog',
  'Sales & purchase tracking',
  'Multi-location support',
  'Business analytics',
  'Customer management',
  'Expiry tracking',
]

export const architecture: DiagramLayer[] = [
  { name: 'Clients', items: ['Admin app · web', 'POS app · web & mobile'] },
  { name: 'Rails', items: ['REST API', 'Application server', 'Role-based access'] },
  { name: 'Data', items: ['MySQL'] },
]

export const challenges: RowItem[] = [
  { title: 'Multi-location inventory consistency' },
  { title: 'Role-based access control' },
  { title: 'POS workflows and real-time processing' },
  { title: 'Product expiry tracking' },
  { title: 'Inventory accuracy and stock tracking' },
  { title: 'Audit trails and business reporting' },
  { title: 'Performance and scalability' },
]

export interface ProductScreenshot {
  label: string
  src: string
}

export const screenshots: ProductScreenshot[] = [
  { label: 'Admin dashboard', src: '/images/Dashboard.png' },
  { label: 'Inventory management', src: '/images/Inventory.png' },
  { label: 'Point of sale', src: '/images/POS.png' },
  { label: 'Reports & analytics', src: '/images/Reports.png' },
]
