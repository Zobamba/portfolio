'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/src/lib/utils'

// Mirrors the two audiences the site is for, plus a way out.
const reasons = ['Hiring', 'A project', 'Something else']

const fieldClass =
  'w-full rounded-xl border border-transparent bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground transition-colors focus:border-foreground/30 focus:bg-background focus:outline-none'

const ContactForm = () => {
  const [reason, setReason] = useState(reasons[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError(null)
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject: reason, message }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error ?? 'Failed to send message. Please try again.')
      }

      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
      setStatus('idle')
    }
  }

  if (status === 'sent') {
    return (
      <p className="rounded-xl bg-muted px-4 py-6 text-center text-foreground" role="status">
        Thanks, {name.split(' ')[0] || 'there'}. It&apos;s in my inbox, and I&apos;ll reply within a day.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <fieldset>
        <legend className="text-sm text-muted-foreground">I&apos;m reaching out about</legend>
        <div className="mt-3 mb-2 flex flex-wrap gap-2">
          {reasons.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={reason === option}
              onClick={() => setReason(option)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                reason === option
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="sr-only">Your email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="A few lines about the role or the project"
          className={cn(fieldClass, 'resize-none')}
        />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="relative overflow-hidden rounded-xl bg-[#141413] py-3.5 text-sm font-medium text-[#F7F6F3] transition-opacity hover:opacity-90 disabled:opacity-50 dark:border dark:border-border"
      >
        <span aria-hidden="true" className="glyph-pattern pointer-events-none absolute inset-0 opacity-[0.08]" />
        <span className="relative">{status === 'sending' ? 'Sending…' : 'Send message'}</span>
      </button>
    </form>
  )
}

export default ContactForm
