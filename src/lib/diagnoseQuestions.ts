export type ChoiceOption = { value: string; label: string; score?: number };

export type Question =
  | { id: string; type: 'radio'; label: string; options: ChoiceOption[]; required: true; allowCustom?: boolean }
  | { id: string; type: 'select'; label: string; options: ChoiceOption[]; required: true; allowCustom?: boolean }
  | { id: string; type: 'checkbox'; label: string; options: ChoiceOption[]; required: false; allowCustom?: boolean }
  | { id: string; type: 'textarea'; label: string; placeholder: string; required: false };

export const INDUSTRY_OPTIONS: ChoiceOption[] = [
  { value: 'online-commerce', label: 'Online Commerce' },
  { value: 'versicherungen', label: 'Versicherungen' },
  { value: 'transport-logistik', label: 'Transport & Logistik' },
  { value: 'retail', label: 'Retail' },
  { value: 'life-science', label: 'Life Science' },
  { value: 'gastronomie', label: 'Gastronomie' },
  { value: 'dienstleistungen', label: 'Dienstleistungen' },
  { value: 'gesundheitswesen', label: 'Gesundheitswesen' },
  { value: 'handwerk', label: 'Handwerk' },
  { value: 'bildung', label: 'Bildung' },
  { value: 'kreativwirtschaft', label: 'Kreativwirtschaft' },
];

export const QUESTIONS: Question[] = [
  {
    id: 'industry',
    type: 'select',
    label: 'In welcher Branche ist Ihr Unternehmen tätig?',
    required: true,
    allowCustom: true,
    options: INDUSTRY_OPTIONS,
  },
  {
    id: 'employees',
    type: 'radio',
    label: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
    required: true,
    options: [
      { value: '1-10', label: '1–10' },
      { value: '11-50', label: '11–50' },
      { value: '51-200', label: '51–200' },
      { value: '200+', label: 'Über 200' },
    ],
  },
  {
    id: 'itInfra',
    type: 'radio',
    label: 'Wie würden Sie Ihre aktuelle IT-Infrastruktur beschreiben?',
    required: true,
    options: [
      { value: 'veraltet', label: 'Veraltet — dringend erneuerungsbedürftig', score: 1 },
      { value: 'funktional', label: 'Funktional, aber nicht optimiert', score: 2 },
      { value: 'modern', label: 'Modern und cloud-basiert', score: 3 },
      { value: 'state-of-the-art', label: 'State-of-the-art', score: 4 },
    ],
  },
  {
    id: 'aiUsage',
    type: 'radio',
    label: 'Nutzen Sie bereits KI-Tools im Unternehmen?',
    required: true,
    allowCustom: true,
    options: [
      { value: 'keine', label: 'Nein, noch nicht', score: 1 },
      { value: 'vereinzelt', label: 'Vereinzelt, z. B. ChatGPT', score: 2 },
      { value: 'prozesse', label: 'Ja, in einzelnen Prozessen', score: 3 },
      { value: 'umfassend', label: 'Ja, umfassend integriert', score: 4 },
    ],
  },
  {
    id: 'systems',
    type: 'checkbox',
    label: 'Welche IT-Systeme nutzen Sie aktuell hauptsächlich?',
    required: false,
    allowCustom: true,
    options: [
      { value: 'erp', label: 'ERP' },
      { value: 'crm', label: 'CRM' },
      { value: 'buchhaltung', label: 'Buchhaltungssoftware' },
      { value: 'cloud-speicher', label: 'Cloud-Speicher (z. B. Google Drive, OneDrive)' },
      { value: 'eigene-server', label: 'Eigene Server / On-Premise' },
      { value: 'e-commerce', label: 'E-Commerce-Plattform' },
      { value: 'excel', label: 'Excel / Tabellen' },
      { value: 'keine', label: 'Keine zentrale IT-Lösung' },
    ],
  },
  {
    id: 'potential',
    type: 'textarea',
    label: 'Wo sehen Sie das größte Potenzial für Automatisierung oder KI?',
    placeholder: 'Ihre Einschätzung... (optional)',
    required: false,
  },
  {
    id: 'challenge',
    type: 'textarea',
    label: 'Was ist aktuell Ihre größte Herausforderung?',
    placeholder: 'Ihre Einschätzung... (optional)',
    required: false,
  },
  {
    id: 'timeline',
    type: 'radio',
    label: 'Wann möchten Sie mit der Integration von KI in Ihre Prozesse beginnen?',
    required: true,
    options: [
      { value: 'sofort', label: 'Sofort — wir wollen jetzt starten', score: 3 },
      { value: '3-6monate', label: 'In den nächsten 3–6 Monaten', score: 2 },
      { value: '6-12monate', label: 'In den nächsten 6–12 Monaten', score: 1 },
      { value: 'unklar', label: 'Noch unklar, nur Information', score: 0 },
    ],
  },
  {
    id: 'budget',
    type: 'select',
    label: 'Welches Budget stellen Sie sich für ein KI-Projekt vor?',
    required: true,
    options: [
      { value: '<5k', label: 'Unter 5.000 €' },
      { value: '5-20k', label: '5.000–20.000 €' },
      { value: '20-50k', label: '20.000–50.000 €' },
      { value: '>50k', label: 'Über 50.000 €' },
      { value: 'offen', label: 'Noch offen' },
    ],
  },
];

export function labelForAnswer(question: Question, rawValue: string | undefined): string {
  if (!rawValue) return '—';
  if (question.type === 'textarea') return rawValue;
  if (question.type === 'checkbox') {
    let values: string[];
    try {
      const parsed = JSON.parse(rawValue);
      values = Array.isArray(parsed) ? parsed : [];
    } catch {
      values = rawValue.split(',').filter(Boolean);
    }
    return values.map((v) => question.options.find((o) => o.value === v)?.label ?? v).join(', ') || '—';
  }
  return question.options.find((o) => o.value === rawValue)?.label ?? rawValue;
}
