import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { buildContactEmailHtml, buildContactEmailText } from '@/src/lib/contact-email-template'

const TO_EMAIL = 'onahbernardchizoba@gmail.com'

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, subject, message } = body

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact Form <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: `${name} <${email}>`,
    subject: `[Portfolio] ${subject} — from ${name}`,
    html: buildContactEmailHtml({ name, email, message }),
    text: buildContactEmailText({ name, email, message }),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
