import Container from '@/src/components/ui/container/container'
import OnassifyHero from '@/src/components/sections/projects/onassify-case-study/onassify-hero/onassify-hero'
import OnassifyOverviewCard from '@/src/components/sections/projects/onassify-case-study/onassify-overview-card/onassify-overview-card'
import OnassifyRoleCard from '@/src/components/sections/projects/onassify-case-study/onassify-role-card/onassify-role-card'
import OnassifyDemoVideo from '@/src/components/sections/projects/onassify-case-study/onassify-demo-video/onassify-demo-video'
import OnassifyProblemCard from '@/src/components/sections/projects/onassify-case-study/onassify-problem-card/onassify-problem-card'
import OnassifySolutionCard from '@/src/components/sections/projects/onassify-case-study/onassify-solution-card/onassify-solution-card'
import OnassifyKeyFeaturesCard from '@/src/components/sections/projects/onassify-case-study/onassify-key-features-card/onassify-key-features-card'
import OnassifyArchitectureCard from '@/src/components/sections/projects/onassify-case-study/onassify-architecture-card/onassify-architecture-card'
import OnassifyTechnicalChallengesCard from '@/src/components/sections/projects/onassify-case-study/onassify-technical-challenges-card/onassify-technical-challenges-card'
import OnassifyScreenshotsCard from '@/src/components/sections/projects/onassify-case-study/onassify-screenshots-card/onassify-screenshots-card'
import OnassifyCta from '@/src/components/sections/projects/onassify-case-study/onassify-cta/onassify-cta'

export default function OnassifyPage() {
  return (
    <main className="mt-12">
      <OnassifyHero />

      <Container className="grid items-center gap-4 py-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <OnassifyOverviewCard />
          <OnassifyRoleCard />
        </div>
        <OnassifyDemoVideo />
      </Container>

      <Container className="grid gap-4 py-4 lg:grid-cols-3">
        <OnassifyProblemCard />
        <OnassifySolutionCard />
        <OnassifyKeyFeaturesCard />
      </Container>

      <Container className="grid gap-4 pb-4 lg:grid-cols-3">
        <OnassifyArchitectureCard />
        <OnassifyTechnicalChallengesCard />
        <OnassifyScreenshotsCard />
      </Container>

      <Container className="pb-16">
        <OnassifyCta />
      </Container>
    </main>
  )
}
