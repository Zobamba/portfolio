import AboutMeCard from '@/src/components/sections/overview-grid/about-me-card/about-me-card'
import SkillsOverviewCard from '@/src/components/sections/overview-grid/skills-overview-card/skills-overview-card'
import ExperienceCard from '@/src/components/sections/overview-grid/experience-card/experience-card'
import TestimonialCard from '@/src/components/sections/overview-grid/testimonial-card/testimonial-card'
import Container from '@/src/components/ui/container/container'
import { cn } from '@/src/lib/utils'

const dividerBase =
  "relative before:absolute before:left-0 before:top-[10%] before:h-[80%] before:w-px before:bg-border before:content-[''] after:absolute after:left-[10%] after:top-0 after:h-px after:w-[80%] after:bg-border after:content-['']"

const OverviewGrid = () => {
  return (
    <Container className="py-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative">
          <AboutMeCard />
        </div>
        <div
          className={cn(
            dividerBase,
            'before:hidden after:block sm:before:block sm:after:hidden lg:overflow-hidden lg:rounded-l-xl lg:border-l lg:border-y lg:border-border',
          )}
        >
          <SkillsOverviewCard />
        </div>
        <div
          className={cn(
            dividerBase,
            'before:hidden after:block lg:border-y lg:border-border lg:before:block lg:after:hidden',
          )}
        >
          <ExperienceCard />
        </div>
        <div
          className={cn(
            dividerBase,
            'before:hidden after:block sm:before:block lg:overflow-hidden lg:rounded-r-xl lg:border-y lg:border-r lg:border-border lg:after:hidden',
          )}
        >
          <TestimonialCard />
        </div>
      </div>
    </Container>
  )
}

export default OverviewGrid
