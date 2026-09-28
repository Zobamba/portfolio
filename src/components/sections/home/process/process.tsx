import { processIntro, processSteps } from '@/src/data/process'
import Container from '@/src/components/ui/container/container'
import InsetPanel from '@/src/components/ui/inset-panel/inset-panel'
import SectionLabel from '@/src/components/ui/section-label/section-label'

const Process = () => {
  return (
    <Container className="max-w-[720px] pb-24 sm:pb-32">
      <SectionLabel>How I work</SectionLabel>
      <p className="mt-8 text-lg leading-relaxed text-foreground sm:text-xl">{processIntro}</p>

      <InsetPanel className="mt-10">
        <ol className="divide-y divide-border/70">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-1 px-5 py-4 sm:grid-cols-[2.5rem_7rem_1fr] sm:items-baseline sm:gap-4 sm:px-6 sm:py-5"
            >
              <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-foreground">{step.title}</span>
              <span className="text-muted-foreground">{step.line}</span>
            </li>
          ))}
        </ol>
      </InsetPanel>
    </Container>
  )
}

export default Process
