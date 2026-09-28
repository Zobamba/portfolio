import { timeline } from '@/src/data/timeline'
import { stack } from '@/src/data/stack'
import Container from '@/src/components/ui/container/container'
import InsetPanel from '@/src/components/ui/inset-panel/inset-panel'
import Marquee from '@/src/components/ui/marquee/marquee'
import SectionLabel from '@/src/components/ui/section-label/section-label'

const Experience = () => {
  return (
    <Container id="experience" className="max-w-[720px] scroll-mt-28 pb-20 sm:pb-24">
      <SectionLabel>Experience</SectionLabel>

      <InsetPanel className="mt-8">
        <ul className="divide-y divide-border/70">
          {timeline.map((row) => (
            <li
              key={row.role}
              className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6 sm:py-5"
            >
              <span className="text-foreground">
                {row.role} <span className="text-muted-foreground">at {row.place}</span>
              </span>
              <span className="font-mono text-sm text-muted-foreground">{row.dates}</span>
            </li>
          ))}
        </ul>
      </InsetPanel>

      <div className="mt-10">
        <h3 className="text-sm text-muted-foreground">Stack I reach for</h3>
        <Marquee duration={45} className="mt-4">
          {stack.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="mr-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={18} aria-hidden="true" className="opacity-70" />
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </Container>
  )
}

export default Experience
