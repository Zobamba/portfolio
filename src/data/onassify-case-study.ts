import { HiOutlineLightBulb } from 'react-icons/hi2'
import { TbTargetArrow } from 'react-icons/tb'
import {
  FiLayers,
  FiUser,
  FiUsers,
  FiGrid,
  FiSettings,
  FiImage,
  FiPackage,
  FiShoppingBag,
  FiBarChart2,
  FiShoppingCart,
} from 'react-icons/fi'

export const hero = {
  badgeLabel: 'In Production · Used by Businesses',
  title: 'Onassify',
  subtitle: 'POS & Inventory Management Platform',
  description:
    'A production platform helping businesses manage sales, inventory, purchases, expenses and multiple locations.',
  stack: ['React', 'TypeScript', 'Rails', 'MySQL', 'Tailwind'],
}

export const demoVideo = {
  title: 'Onassify — 60 Second Walkthrough',
  videoUrl:
    'https://res.cloudinary.com/ddt4oo78m/video/upload/v1787025660/Onassify-Demo_kjgk5w.mp4',
}

export const cta = {
  title: 'Production Impact',
  description:
    'Onassify is currently in production and actively used by businesses for daily sales and inventory management.',
  buttonLabel: 'Watch Full Demo',
  buttonHref: '#demo',
}

export const overview = {
  icon: FiLayers,
  title: 'Overview',
  description:
    'Onassify is a POS and inventory management platform designed to help businesses manage sales, inventory, purchases, expenses and multiple business locations. It streamlines operations, improves stock accuracy and provides real-time business insights.',
}

export const myRole = {
  icon: FiUser,
  title: 'My Role',
  items: [
    'Full-stack development',
    'System architecture and database design',
    'API development and integrations',
    'Frontend development (React + TypeScript)',
    'Deployment and production support',
  ],
}

export const problem = {
  icon: TbTargetArrow,
  title: 'The Problem',
  intro: 'Businesses struggled with:',
  items: [
    'Stock discrepancies',
    'Manual inventory tracking',
    'Inefficient sales processing',
    'Lack of real-time business insights',
    'Multi-location management',
  ],
}

export const solution = {
  icon: HiOutlineLightBulb,
  title: 'The Solution',
  intro: 'Onassify provides an all-in-one platform for:',
  items: [
    'Real-time inventory tracking',
    'Fast and reliable POS system',
    'Multi-location business management',
    'Comprehensive sales and stock reports',
    'Role-based access control',
  ],
}

export const keyFeaturesSection = {
  icon: FiGrid,
  title: 'Key Features',
}

export const keyFeatures: string[] = [
  'POS system',
  'Inventory management',
  'Product catalog',
  'Sales & purchase tracking',
  'Multi-location support',
  'Business analytics',
  'Customer management',
]

export const architectureSection = {
  icon: FiLayers,
  title: 'Architecture',
}

export const technicalChallengesSection = {
  icon: FiSettings,
  title: 'Technical Challenges',
}

export const productScreenshotsSection = {
  icon: FiImage,
  title: 'Product Screenshots',
}

export interface EngineeringChallenge {
  title: string
}

export const engineeringChallenges: EngineeringChallenge[] = [
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
  gradient: string
}

export const productScreenshots: ProductScreenshot[] = [
  { label: 'Admin Dashboard', src: '/Dashboard.png', gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)' },
  { label: 'Inventory Management', src: '/Inventory.png', gradient: 'linear-gradient(135deg, #52525B 0%, #71717A 100%)' },
  { label: 'POS Interface', src: '/POS.png', gradient: 'linear-gradient(135deg, #C2410C 0%, #EA580C 100%)' },
  { label: 'Reports & Analytics', src: '/Reports.png', gradient: 'linear-gradient(135deg, #0D9488 0%, #2DD4BF 100%)' },
]

// Content shown inside the ProductShowcaseHero device mockup (dashboard + POS screens)
export const showcaseNavItems = [
  { label: 'Dashboard', icon: FiGrid, active: true },
  { label: 'Inventory', icon: FiPackage, active: false },
  { label: 'Products', icon: FiShoppingBag, active: false },
  { label: 'Sales', icon: FiBarChart2, active: false },
  { label: 'Customers', icon: FiUsers, active: false },
]

export const showcaseKpis = [
  { label: "Today's Sales", value: '₦1.24M' },
  { label: 'Products', value: '342' },
  { label: 'Customers', value: '56' },
  { label: 'Locations', value: '4' },
]

export const showcaseRecentSales = [
  {
    icon: FiShoppingCart,
    label: 'POS Sale',
    ref: '#TXN-1029',
    amount: '₦12,500',
    time: 'Today, 10:42am',
  },
  {
    icon: FiShoppingBag,
    label: 'Online Order',
    ref: '#ORD-4432',
    amount: '₦24,000',
    time: 'Today, 09:15am',
  },
  {
    icon: FiShoppingCart,
    label: 'POS Sale',
    ref: '#TXN-1027',
    amount: '₦8,750',
    time: 'Yesterday',
  },
]

export const showcasePosItems = [
  { name: 'Product A', price: '₦2,500' },
  { name: 'Product B', price: '₦4,000' },
  { name: 'Product C', price: '₦1,500' },
]

export const showcaseChartYLabels = ['100', '75', '50', '25']
