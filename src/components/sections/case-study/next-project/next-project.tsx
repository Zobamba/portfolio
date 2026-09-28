import Link from 'next/link'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'
import Container from '@/src/components/ui/container/container'

interface NextProjectProps {
  title: string
  summary: string
  href: string
}

// Closes a case study by pointing somewhere useful instead of a dead end.
const NextProject = ({ title, summary, href }: NextProjectProps) => {
  return (
    <Container className="max-w-[720px] pb-24 sm:pb-32">
      <Link
        href={href}
        className="group block rounded-[1.375rem] border border-border/70 bg-card/40 p-1.5 transition-colors hover:border-border"
      >
        <div className="flex items-center justify-between gap-6 rounded-2xl border border-border/60 bg-card px-5 py-6 sm:px-8 sm:py-8">
          <div>
            <p className="text-sm text-muted-foreground">Next project</p>
            <p className="mt-1 text-2xl font-medium tracking-[-0.02em] text-foreground">{title}</p>
            <p className="mt-2 text-muted-foreground">{summary}</p>
          </div>
          <span
            aria-hidden="true"
            className="text-2xl text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground"
          >
            →
          </span>
        </div>
      </Link>

      <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
        <BookACallButton />
        <Link href="/#work" className="text-muted-foreground transition-colors hover:text-foreground">
          ← All work
        </Link>
      </div>
    </Container>
  )
}

export default NextProject
