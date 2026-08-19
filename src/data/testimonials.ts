export interface Testimonial {
  quote: string
  name: string
  title: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Bernard is a talented developer who consistently delivers high-quality work. His problem-solving skills and attention to detail are impressive.',
    name: 'Brendan Ibe',
    title: 'CTO, Product Square Technologies',
    initials: 'BI',
  },
  {
    quote:
      'Working with Bernard was seamless. He translated complex banking requirements into a clean, reliable system ahead of schedule.',
    name: 'Perfection Chizuroke',
    title: 'Product Manager, Xanotech Solutions',
    initials: 'PC',
  },
  {
    quote:
      "Bernard's frontend work is polished and thoughtful. He communicates clearly and always pushes for the best user experience.",
    name: 'Ismail Tijani',
    title: 'Lead Engineer, Product Square Technologies',
    initials: 'IT',
  },
]
