export interface NavLink {
  label: string
  href: string
}

// Absolute hashes so the links also work from the case study pages.
export const navLinks: NavLink[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]
