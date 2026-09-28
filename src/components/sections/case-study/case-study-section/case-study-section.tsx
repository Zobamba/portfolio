import type { ReactNode } from 'react'
import Container from '@/src/components/ui/container/container'
import SectionLabel from '@/src/components/ui/section-label/section-label'
import { cn } from '@/src/lib/utils'

interface CaseStudySectionProps {
  title: string
  children: ReactNode
  /** Media like screenshots and diagrams get the wider column the home page's work uses. */
  wide?: boolean
  id?: string
}

const CaseStudySection = ({ title, children, wide = false, id }: CaseStudySectionProps) => {
  return (
    <Container id={id} className={cn('scroll-mt-28 pb-16 sm:pb-24', wide ? 'max-w-[1040px]' : 'max-w-[720px]')}>
      <SectionLabel className={cn(wide && 'mx-auto max-w-[720px]')}>{title}</SectionLabel>
      <div className="mt-8">{children}</div>
    </Container>
  )
}

export default CaseStudySection
