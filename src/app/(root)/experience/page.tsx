import Container from '@/src/components/ui/container/container'
import ExperienceHero from '@/src/components/sections/experience/experience-hero/experience-hero'
import ProfessionalExperience from '@/src/components/sections/experience/professional-experience/professional-experience'
import WhatIDo from '@/src/components/sections/experience/what-i-do/what-i-do'
import CareerHighlights from '@/src/components/sections/experience/career-highlights/career-highlights'
import BeyondTheCode from '@/src/components/sections/experience/beyond-the-code/beyond-the-code'
import ExperienceCta from '@/src/components/sections/experience/experience-cta/experience-cta'

export default function ExperiencePage() {
  return (
    <main className="mt-12">
      <ExperienceHero />

      <Container className="pb-4">
        <ProfessionalExperience />
      </Container>

      <Container className="pb-4">
        <WhatIDo />
      </Container>

      <Container className="grid gap-4 pb-4 lg:grid-cols-[1fr_2fr]">
        <CareerHighlights />
        <BeyondTheCode />
      </Container>

      <Container className="pb-16">
        <ExperienceCta />
      </Container>
    </main>
  )
}
