import { NextRequest, NextResponse } from 'next/server';
import { QUESTIONS, labelForAnswer } from '@/lib/diagnoseQuestions';

const MIN_SUBMIT_MS = 3000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatGermanDateTime(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('de-DE', { dateStyle: 'full', timeStyle: 'short' });
}

interface DiagnosePayload {
  answers: Record<string, string>;
  profile: { level: string; score: number };
  name: string;
  email: string;
  company: string;
  phone?: string;
  webseite?: string;
  socialMedia?: string;
  callDate1: string;
  callDate2: string;
  website?: string;
  elapsedMs?: number;
}

export async function POST(req: NextRequest) {
  const { answers, profile, name, email, company, phone, webseite, socialMedia, callDate1, callDate2, website, elapsedMs } =
    (await req.json()) as DiagnosePayload;

  if (!name || !email || !company || !callDate1 || !callDate2 || !answers || !profile) {
    return NextResponse.json({ error: 'Fehlende Pflichtfelder' }, { status: 400 });
  }

  // Honeypot filled or submitted too fast to be human -> silently pretend success
  if (website || typeof elapsedMs !== 'number' || elapsedMs < MIN_SUBMIT_MS) {
    return NextResponse.json({ success: true });
  }

  const answerRows = QUESTIONS.map((question) => `
        <tr>
          <td style="padding: 8px 12px; color: #64748b; font-size: 13px; vertical-align: top;">${escapeHtml(question.label)}</td>
          <td style="padding: 8px 12px; color: #0f172a; font-size: 14px;">${escapeHtml(labelForAnswer(question, answers[question.id])).replace(/\n/g, '<br />')}</td>
        </tr>`).join('');

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
        name: 'UnMega KI-Diagnose',
      },
      to: [{ email: 'gilo.dev@gmail.com', name: 'UnMega' }],
      replyTo: { email, name },
      subject: `KI-Diagnose: ${company} (${profile.level})`,
      htmlContent: `
        <h2>Neues Kundenprofil aus der KI-Diagnose</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Unternehmen:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ''}
        ${webseite ? `<p><strong>Webseite:</strong> ${escapeHtml(webseite)}</p>` : ''}
        ${socialMedia ? `<p><strong>Social Media:</strong> ${escapeHtml(socialMedia)}</p>` : ''}
        <p><strong>KI-Reifegrad-Profil:</strong> ${escapeHtml(profile.level)} (Score: ${profile.score})</p>
        <p><strong>Terminvorschlag 1:</strong> ${escapeHtml(formatGermanDateTime(callDate1))}</p>
        <p><strong>Terminvorschlag 2:</strong> ${escapeHtml(formatGermanDateTime(callDate2))}</p>
        <hr />
        <table style="border-collapse: collapse; width: 100%;">
          ${answerRows}
        </table>
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