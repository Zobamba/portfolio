import Container from '@/src/components/ui/container/container'
import SkillsHero from '@/src/components/sections/skills/skills-hero/skills-hero'
import TechnicalProficiencyCard from '@/src/components/sections/skills/technical-proficiency-card/technical-proficiency-card'
import SkillsBreakdownCard from '@/src/components/sections/skills/skills-breakdown-card/skills-breakdown-card'
import SkillCategoriesCard from '@/src/components/sections/skills/skill-categories-card/skill-categories-card'
import ToolsTechnologies from '@/src/components/sections/skills/tools-technologies/tools-technologies'
import SkillsCta from '@/src/components/sections/skills/skills-cta/skills-cta'

export default function SkillsPage() {
  return (
    <main className="mt-12">
      <SkillsHero />

      <Container className="pb-4">
        <TechnicalProficiencyCard />
      </Container>

      <Container className="grid gap-4 pb-4 lg:grid-cols-[1fr_2fr]">
        <SkillsBreakdownCard />
        <SkillCategoriesCard />
      </Container>

      <Container className="pb-4">
        <ToolsTechnologies />
      </Container>

      <Container className="pb-16">
        <SkillsCta />
      </Container>
    </main>
  )
}
