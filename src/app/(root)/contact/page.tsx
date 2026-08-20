import Container from '@/src/components/ui/container/container'
import ContactHero from '@/src/components/sections/contact/contact-hero/contact-hero'
import GetInTouch from '@/src/components/sections/contact/get-in-touch/get-in-touch'
import SendMessageForm from '@/src/components/sections/contact/send-message-form/send-message-form'
import HelpOptions from '@/src/components/sections/contact/help-options/help-options'
import WhyWorkWithMe from '@/src/components/sections/contact/why-work-with-me/why-work-with-me'
import ContactCta from '@/src/components/sections/contact/contact-cta/contact-cta'

export default function ContactPage() {
  return (
    <main className="mt-12">
      <ContactHero />

      <Container className="grid gap-4 pb-4 lg:grid-cols-2">
        <GetInTouch />
        <div id="send-message">
          <SendMessageForm />
        </div>
      </Container>

      <Container className="pb-4">
        <HelpOptions />
      </Container>

      <Container className="pb-4">
        <WhyWorkWithMe />
      </Container>

      <Container className="pb-16">
        <ContactCta />
      </Container>
    </main>
  )
}
