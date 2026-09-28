import { about } from '@/src/data/about'
import BookACallButton from '@/src/components/ui/book-a-call-button/book-a-call-button'
import Container from '@/src/components/ui/container/container'
import InsetPanel from '@/src/components/ui/inset-panel/inset-panel'
import SectionLabel from '@/src/components/ui/section-label/section-label'
import ContactForm from '@/src/components/sections/home/contact-form/contact-form'

const Contact = () => {
  return (
    <Container id="contact" className="max-w-[720px] scroll-mt-28 pb-24 sm:pb-32">
      <SectionLabel>Contact</SectionLabel>

      <p className="mt-8 text-[1.625rem] leading-[1.35] tracking-[-0.01em] text-foreground sm:text-[2rem]">
        Let&apos;s build something that holds up.
      </p>
      <p className="mt-4 text-muted-foreground sm:text-lg">
        Hiring for a backend, frontend or full-stack role, or need something built? The quickest way to start is a
        30-minute call, or email me at{' '}
        <a
          href={`mailto:${about.email}`}
          className="text-foreground underline decoration-dotted underline-offset-4"
        >
          {about.email}
        </a>
        .
      </p>

      <div className="mt-8">
        <BookACallButton />
      </div>

      <InsetPanel className="mt-14">
        <div className="p-5 sm:p-8">
          <h3 className="text-lg font-medium text-foreground">Prefer to write?</h3>
          <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
            Tell me about the role or the project. It goes straight to my inbox, and I reply within a day.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </InsetPanel>
    </Container>
  )
}

export default Contact
