interface ContactEmailInput {
  name: string
  email: string
  message: string
}

// Escapes user input before it's interpolated into HTML, so a message can't inject markup.
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

// Inline styles only, no external assets — keeps rendering consistent across email
// clients and avoids the spam-signal hit that remote images/fonts can carry.
export const buildContactEmailHtml = ({ name, email, message }: ContactEmailInput) => `
<div style="background-color:#f4f4f5;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="max-width:480px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
    <div style="background-color:#3B82F6;padding:18px 24px;">
      <p style="margin:0;color:#ffffff;font-size:15px;font-weight:600;">New message from your portfolio</p>
    </div>
    <div style="padding:24px;">
      <p style="margin:0 0 16px;color:#18181b;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
      <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #e4e4e7;color:#71717a;font-size:13px;">
        Sent by ${escapeHtml(name)} (${escapeHtml(email)}) — reply to this email to respond directly.
      </p>
    </div>
  </div>
</div>
`.trim()

export const buildContactEmailText = ({ name, email, message }: ContactEmailInput) =>
  `${message}\n\n— Sent by ${name} (${email}). Reply to this email to respond directly.`
