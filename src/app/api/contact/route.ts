import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, email, company, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'Fehlende Pflichtfelder' }, { status: 400 });
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_SENDER_EMAIL ?? 'noreply@unmega.com',
        name: 'UnMega Kontaktformular',
      },
      to: [{ email: 'gilo.dev@gmail.com', name: 'UnMega' }],
      replyTo: { email, name },
      subject: `Kontaktformular: ${subject}`,
      htmlContent: `
        <h2>Neue Nachricht vom Kontaktformular</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
        <p><strong>Betreff:</strong> ${subject}</p>
        <hr />
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    }),
  });

  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    console.error('Brevo error:', JSON.stringify(detail));
    return NextResponse.json({ error: 'Fehler beim Senden', detail }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
