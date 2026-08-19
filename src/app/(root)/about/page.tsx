import Container from '@/src/components/ui/container/container'
import AboutIntro from '@/src/components/sections/about/about-intro/about-intro'
import ProfilePortrait from '@/src/components/sections/about/profile-portrait/profile-portrait'
import PersonalInfoPanel from '@/src/components/sections/about/personal-info-panel/personal-info-panel'
import JourneyCard from '@/src/components/sections/about/journey-card/journey-card'
import ValuesCard from '@/src/components/sections/about/values-card/values-card'
import TechStackTools from '@/src/components/sections/about/tech-stack-tools/tech-stack-tools'

export default function AboutPage() {
  return (
    <main className="mt-12">
      <Container className="grid gap-8 pb-12 pt-8 sm:pt-12 lg:grid-cols-[2fr_1fr]">
        <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
          <AboutIntro />
          <div className="lg:mt-4">
            <ProfilePortrait />
          </div>
        </div>

        <div className="min-w-0 animate-reveal [animation-delay:400ms] lg:border-l lg:border-border lg:pl-6">
          <PersonalInfoPanel />
        </div>
      </Container>

      <section className="border-y border-border bg-card">
        <Container className="grid py-4 lg:grid-cols-[1.6fr_1fr]">
          <JourneyCard />
          <div className="lg:border-l lg:border-border">
            <ValuesCard />
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <TechStackTools />
      </Container>
    </main>
  )
}
