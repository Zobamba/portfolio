import Link from 'next/link'
import type { ReactNode } from 'react'
import type { CaseStudyFact } from '@/src/data/case-study-types'
import Container from '@/src/components/ui/container/container'

interface CaseStudyHeaderProps {
  label: string
  title: string
  lead: string
  facts: CaseStudyFact[]
  actions?: ReactNode
}

const CaseStudyHeader = ({ label, title, lead, facts, actions }: CaseStudyHeaderProps) => {
  return (
    <Container className="max-w-[720px] pb-12 pt-10 sm:pb-16 sm:pt-16">
      <Link href="/#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        ← All work
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">{title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">{lead}</p>

      <dl className="mt-10 grid gap-x-6 gap-y-3 border-t border-border pt-6 text-sm sm:grid-cols-[6rem_1fr]">
        {facts.map((fact) => (
          <div key={fact.label} className="contents">
            <dt className="text-muted-foreground">{fact.label}</dt>
            <dd className="mb-2 text-foreground sm:mb-0">
              {fact.href ? (
                <a
                  href={fact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {fact.value} ↗
                </a>
              ) : (
                fact.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      {actions && <div className="mt-8 flex flex-wrap items-center gap-6">{actions}</div>}
    </Container>
  )
}

export default CaseStudyHeader
