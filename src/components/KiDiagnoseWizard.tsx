'use client';

import { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';
import { QUESTIONS } from '@/lib/diagnoseQuestions';

type Answers = Record<string, string>;

interface ContactInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  webseite: string;
  socialMedia: string;
  callDate1: string;
  callDate2: string;
  hpWebsite: string; // honeypot
}

function computeProfile(answers: Answers) {
  const scoreFor = (id: string) => {
    const q = QUESTIONS.find((question) => question.id === id);
    if (!q || q.type === 'textarea' || q.type === 'checkbox') return 0;
    const value = answers[id];
    if (!value) return 0;
    const known = q.options.find((o) => o.value === value);
    if (known) return known.score ?? 0;
    // Custom (free-text) answer: assume a middling score rather than penalizing it as 0.
    const scores = q.options.map((o) => o.score ?? 0);
    return Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length);
  };
  const total = scoreFor('itInfra') + scoreFor('aiUsage') + scoreFor('timeline');
  if (total <= 5) {
    return {
      level: 'Einsteiger',
      total,
      description: 'Sie stehen am Anfang Ihrer KI-Reise — ideal, um mit einer klaren Analyse und schnellen ersten Erfolgen zu starten.',
    };
  }
  if (total <= 8) {
    return {
      level: 'Fortgeschritten',
      total,
      description: 'Sie haben bereits Grundlagen geschaffen — jetzt geht es darum, KI gezielt in weitere Prozesse zu integrieren.',
    };
  }
  return {
    level: 'Vorreiter',
    total,
    description: 'Ihr Unternehmen ist auf einem sehr guten Weg — wir helfen, das Potenzial vollständig auszuschöpfen.',
  };
}

export default function KiDiagnoseWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<ContactInfo>({
    name: '', email: '', company: '', phone: '',
    webseite: '', socialMedia: '', callDate1: '', callDate2: '', hpWebsite: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [customOpen, setCustomOpen] = useState<Record<string, boolean>>({});
  const [customDraft, setCustomDraft] = useState<Record<string, string>>({});
  const startedAt = useRef(Date.now());

  const totalSteps = QUESTIONS.length + 1;
  const isContactStep = step === QUESTIONS.length;
  const currentQuestion = isContactStep ? null : QUESTIONS[step];
  const profile = useMemo(() => computeProfile(answers), [answers]);

  const canProceed = () => {
    if (!currentQuestion) {
      return (
        contact.name.trim() !== '' &&
        contact.email.trim() !== '' &&
        contact.company.trim() !== '' &&
        contact.callDate1.trim() !== '' &&
        contact.callDate2.trim() !== ''
      );
    }
    if (!currentQuestion.required) return true;
    return Boolean(answers[currentQuestion.id]?.trim());
  };

  const handleNext = () => step < totalSteps - 1 && setStep((s) => s + 1);
  const handleBack = () => step > 0 && setStep((s) => s - 1);

  const selectAndAdvance = (id: string, value: string) => {
    setCustomOpen((o) => ({ ...o, [id]: false }));
    setAnswers((a) => ({ ...a, [id]: value }));
    window.setTimeout(() => setStep((s) => Math.min(s + 1, totalSteps - 1)), 280);
  };

  const startCustomChoice = (id: string) => {
    setAnswers((a) => ({ ...a, [id]: '' }));
    setCustomOpen((o) => ({ ...o, [id]: true }));
  };

  const getChecklistValues = (id: string): string[] => {
    try {
      const parsed = JSON.parse(answers[id] || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const setChecklistValues = (id: string, values: string[]) => {
    setAnswers((a) => ({ ...a, [id]: JSON.stringify(values) }));
  };

  const toggleChecklistValue = (id: string, value: string) => {
    const current = getChecklistValues(id);
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
    setChecklistValues(id, next);
  };

  const addCustomChecklistValue = (id: string) => {
    const text = (customDraft[id] ?? '').trim();
    if (!text) return;
    const current = getChecklistValues(id);
    if (!current.includes(text)) setChecklistValues(id, [...current, text]);
    setCustomDraft((d) => ({ ...d, [id]: '' }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch('/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          profile: { level: profile.level, score: profile.total },
          name: contact.name,
          email: contact.email,
          company: contact.company,
          phone: contact.phone,
          webseite: contact.webseite,
          socialMedia: contact.socialMedia,
          callDate1: contact.callDate1,
          callDate2: contact.callDate2,
          website: contact.hpWebsite,
          elapsedMs: Date.now() - startedAt.current,
        }),
      });
      if (!res.ok) throw new Error('send failed');
      setSubmitSuccess(true);
    } catch (err) {
      console.error('Error submitting diagnose:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-800/50 p-8 md:p-12 rounded-lg border border-teal-400/40 flex flex-col items-center text-center max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center mb-6"
        >
          <FiCheckCircle className="text-teal-400" size={36} />
        </motion.div>

        <h2 className="text-2xl font-bold text-slate-100 mb-2">Diagnose abgeschlossen!</h2>
        <p className="text-slate-400 mb-6 max-w-md">
          Vielen Dank, {contact.name.split(' ')[0]}. Wir haben Ihr Profil erhalten und melden uns
          innerhalb von <span className="text-teal-400 font-medium">24 Stunden</span> bei Ihnen.
        </p>

        <div className="w-full bg-slate-900/50 rounded-lg p-6 mb-8 text-left">
          <p className="text-slate-300 text-sm font-medium mb-2">Ihr vorläufiges KI-Reifegrad-Profil:</p>
          <p className="text-teal-400 text-xl font-bold mb-2">{profile.level}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{profile.description}</p>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/ki-beratung"
            className="group w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-teal-400 text-slate-900 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-200"
          >
            <span>Mehr zur KI-Beratung</span>
            <FiArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="/work"
            className="group w-full inline-flex items-center justify-center space-x-2 px-5 py-3 border border-slate-600 text-slate-400 rounded-lg font-medium hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-200 text-sm"
          >
            <span>Unser Portfolio ansehen</span>
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-500 text-xs font-mono">
            Schritt {step + 1} von {totalSteps}
          </span>
          {step > 3 && step < QUESTIONS.length && (
            <span className="text-teal-400 text-xs font-medium">Profil: {profile.level}</span>
          )}
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-teal-400"
            initial={false}
            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.35 }}
          className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 min-h-[320px] flex flex-col overflow-y-auto"
        >
          {currentQuestion ? (
            <>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-6">
                {currentQuestion.label}
              </h2>

              {currentQuestion.type === 'textarea' && (
                <textarea
                  autoFocus
                  rows={4}
                  value={answers[currentQuestion.id] ?? ''}
                  onChange={(e) => setAnswers((a) => ({ ...a, [currentQuestion.id]: e.target.value }))}
                  placeholder={currentQuestion.placeholder}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200 resize-none"
                />
              )}

              {(currentQuestion.type === 'radio' || currentQuestion.type === 'select') && (() => {
                const q = currentQuestion;
                const value = answers[q.id] ?? '';
                const customVisible = Boolean(q.allowCustom) && (
                  customOpen[q.id] || (value !== '' && !q.options.some((o) => o.value === value))
                );
                return (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => selectAndAdvance(q.id, option.value)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-colors duration-200 ${
                            !customVisible && value === option.value
                              ? 'border-teal-400 bg-teal-400/10 text-slate-100'
                              : 'border-slate-600 text-slate-300 hover:border-teal-400/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                      {q.allowCustom && (
                        <button
                          type="button"
                          onClick={() => startCustomChoice(q.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg border border-dashed transition-colors duration-200 ${
                            customVisible
                              ? 'border-teal-400 bg-teal-400/10 text-slate-100'
                              : 'border-slate-600 text-slate-400 hover:border-teal-400/50'
                          }`}
                        >
                          + Sonstige (eigene Angabe)
                        </button>
                      )}
                    </div>
                    {customVisible && (
                      <input
                        type="text"
                        autoFocus
                        value={value}
                        onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && canProceed()) handleNext();
                        }}
                        placeholder="Bitte angeben..."
                        className="mt-3 w-full px-4 py-3 bg-slate-900 border border-teal-400/50 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                      />
                    )}
                  </div>
                );
              })()}

              {currentQuestion.type === 'checkbox' && (() => {
                const q = currentQuestion;
                const values = getChecklistValues(q.id);
                const customValues = values.filter((v) => !q.options.some((o) => o.value === v));
                return (
                  <div className="space-y-3">
                    {q.options.map((option) => {
                      const selected = values.includes(option.value);
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => toggleChecklistValue(q.id, option.value)}
                          className={`w-full flex items-center text-left px-4 py-3 rounded-lg border transition-colors duration-200 ${
                            selected
                              ? 'border-teal-400 bg-teal-400/10 text-slate-100'
                              : 'border-slate-600 text-slate-300 hover:border-teal-400/50'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 mr-3 rounded border flex items-center justify-center shrink-0 ${
                              selected ? 'border-teal-400 bg-teal-400' : 'border-slate-500'
                            }`}
                          >
                            {selected && <FiCheckCircle className="text-slate-900" size={12} />}
                          </span>
                          {option.label}
                        </button>
                      );
                    })}

                    {q.allowCustom && customValues.map((customValue) => (
                      <button
                        key={customValue}
                        type="button"
                        onClick={() => toggleChecklistValue(q.id, customValue)}
                        className="w-full flex items-center text-left px-4 py-3 rounded-lg border border-teal-400 bg-teal-400/10 text-slate-100 transition-colors duration-200"
                      >
                        <span className="w-4 h-4 mr-3 rounded border border-teal-400 bg-teal-400 flex items-center justify-center shrink-0">
                          <FiCheckCircle className="text-slate-900" size={12} />
                        </span>
                        {customValue}
                      </button>
                    ))}

                    {q.allowCustom && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={customDraft[q.id] ?? ''}
                          onChange={(e) => setCustomDraft((d) => ({ ...d, [q.id]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              addCustomChecklistValue(q.id);
                            }
                          }}
                          placeholder="Eigenes System hinzufügen..."
                          className="flex-1 px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                        />
                        <button
                          type="button"
                          onClick={() => addCustomChecklistValue(q.id)}
                          className="px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-teal-400/50 transition-colors duration-200 text-sm"
                        >
                          Hinzufügen
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}
            </>
          ) : (
            <>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mb-2">
                Fast geschafft!
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Damit wir Ihnen Ihr Profil und die passenden nächsten Schritte zusenden können.
              </p>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={contact.hpWebsite}
                onChange={(e) => setContact((c) => ({ ...c, hpWebsite: e.target.value }))}
                style={{ position: 'absolute', left: '-9999px', top: 0 }}
              />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    autoFocus
                    value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    placeholder="Ihr Name *"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="text"
                    value={contact.company}
                    onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
                    placeholder="Unternehmen *"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                    placeholder="E-Mail *"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                    placeholder="Telefon (optional)"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="url"
                    value={contact.webseite}
                    onChange={(e) => setContact((c) => ({ ...c, webseite: e.target.value }))}
                    placeholder="Webseite (optional)"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="text"
                    value={contact.socialMedia}
                    onChange={(e) => setContact((c) => ({ ...c, socialMedia: e.target.value }))}
                    placeholder="Social-Media-Profile (optional)"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <p className="text-slate-300 text-sm font-medium mb-2">
                    Schlagen Sie 2 Termine für ein kurzes Kennenlerngespräch vor *
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <input
                                        type="text"
                                        value={contact.callDate1}
                                        onChange={(e) => setContact((c) => ({ ...c, callDate1: e.target.value }))}
                                        placeholder="Date 1"
                                        className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                                      />
                   <input
                                                          type="text"
                                                          value={contact.callDate2}
                                                          onChange={(e) => setContact((c) => ({ ...c, callDate2: e.target.value }))}
                                                          placeholder="Date 2"
                                                          className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                                                        />
                  </div>
                </div>
              </div>

              {submitError && (
                <p className="text-red-400 text-sm mt-4">
                  Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut.
                </p>
              )}
            </>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-auto pt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className="inline-flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-teal-400 transition-colors duration-200 disabled:opacity-0 disabled:pointer-events-none"
            >
              <FiArrowLeft size={16} />
              <span className="text-sm">Zurück</span>
            </button>

            {isContactStep ? (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Wird gesendet...' : 'Diagnose abschließen'}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed()}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Weiter</span>
                <FiArrowRight size={16} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}