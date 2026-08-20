'use client'

import { useState, type FormEvent } from 'react'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FiSend, FiCheckCircle, FiChevronDown, FiAlertCircle } from 'react-icons/fi'
import Card from '@/src/components/ui/card/card'
import CardHeader from '@/src/components/ui/card/card-header'
import Button from '@/src/components/ui/button/button'

const subjectOptions = [
  'Project Inquiry',
  'Job Opportunity',
  'Freelance Work',
  'Collaboration',
  'General Question',
  'Other',
]

const fieldClass =
  'w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:outline-none focus:shadow-[0_0_0_3px_rgba(59,130,246,0.10)]'

const SendMessageForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setSubmitted(false)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error ?? 'Failed to send message. Please try again.')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="flex min-h-[420px] flex-col items-center justify-center gap-3 p-5 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <FiCheckCircle size={28} />
        </span>
        <h3 className="text-lg font-bold text-foreground">Message sent!</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          Thanks for reaching out, {name.split(' ')[0] || 'there'}. I&apos;ll get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={resetForm} className="mt-2">
          Send another message
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-5">
      <CardHeader icon={HiOutlinePaperAirplane} title="Send Me a Message" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm text-muted-foreground">
            Subject
          </label>
          <div className="relative">
            <select
              id="subject"
              required
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className={`peer appearance-none pr-9 ${fieldClass} ${subject ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              <option value="" disabled>
                What&apos;s this about?
              </option>
              {subjectOptions.map((option) => (
                <option key={option} value={option} className="text-foreground">
                  {option}
                </option>
              ))}
            </select>
            <FiChevronDown
              size={14}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell me a bit about what you have in mind..."
            className={`${fieldClass} resize-none`}
          />
        </div>

        {error && (
          <p className="flex items-center gap-2 text-sm text-destructive">
            <FiAlertCircle size={14} className="shrink-0" />
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <FiSend size={16} />
        </Button>
      </form>
    </Card>
  )
}

export default SendMessageForm
