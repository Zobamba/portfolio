'use client'

import { useState } from 'react'
import Container from '@/src/components/ui/container/container'
import GetInTouch from '@/src/components/sections/contact/get-in-touch/get-in-touch'
import SendMessageForm from '@/src/components/sections/contact/send-message-form/send-message-form'
import HelpOptions from '@/src/components/sections/contact/help-options/help-options'

// Maps each "What can I help you with?" option to the closest matching
// Subject value in the message form, so picking one actually feeds the other.
const subjectByHelpOption: Record<string, string> = {
  'Full-Stack Development': 'Project Inquiry',
  'Frontend Development': 'Project Inquiry',
  'Backend / API Development': 'Project Inquiry',
  'Freelance Project': 'Freelance Work',
  'Full-Time Opportunity': 'Job Opportunity',
  'Something Else': 'Other',
}

const ContactFormSection = () => {
  const [selectedHelpOption, setSelectedHelpOption] = useState<string | null>(null)
  const [subject, setSubject] = useState('')

  const handleSelectHelpOption = (label: string) => {
    const isDeselecting = selectedHelpOption === label
    setSelectedHelpOption(isDeselecting ? null : label)
    setSubject(isDeselecting ? '' : subjectByHelpOption[label])

    if (!isDeselecting) {
      document.getElementById('send-message')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Container className="grid gap-4 pb-4 lg:grid-cols-2">
        <GetInTouch />
        <div id="send-message">
          <SendMessageForm subject={subject} onSubjectChange={setSubject} />
        </div>
      </Container>

      <Container className="pb-4">
        <HelpOptions selected={selectedHelpOption} onSelect={handleSelectHelpOption} />
      </Container>
    </>
  )
}

export default ContactFormSection
