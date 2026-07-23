'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'tech@unmega.com',
    href: 'mailto:tech@unmega.com'
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Cologne, Germany',
    href: 'https://maps.google.com/?q=Cologne,Germany'
  }
];


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('send failed');
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            <span className="text-teal-400 font-mono text-lg mr-4">04.</span>
            Kontakt aufnehmen
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Unser Team ist bereit, Ihre Geschäftsherausforderungen mit maßgeschneiderten, 
            <strong className="text-teal-400">datenschutzkonformen KI-Lösungen</strong> zu lösen. 
            Als deutsches Unternehmen verstehen wir die besonderen Anforderungen des Mittelstands 
            und entwickeln Lösungen, die höchsten Sicherheitsstandards entsprechen.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-8">Lassen Sie uns vernetzen</h2>
            
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-teal-400/10 rounded-lg group-hover:bg-teal-400/20 transition-colors duration-200">
                      <IconComponent className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm">{info.label}</p>
                      <p className="text-slate-100 font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

          </motion.div>

          {/* Contact Form / Success Screen */}
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800/50 p-8 rounded-lg border border-teal-400/40 flex flex-col items-center text-center"
              >
                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-teal-400/10 border-2 border-teal-400 flex items-center justify-center mb-6"
                >
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="w-10 h-10 text-teal-400"
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  </motion.svg>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-slate-100 mb-2"
                >
                  Nachricht erhalten!
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-400 mb-8 max-w-sm"
                >
                  Unser Team hat Ihre Anfrage erhalten und wird sich innerhalb von{' '}
                  <span className="text-teal-400 font-medium">24 Stunden</span> bei Ihnen melden.
                </motion.p>

                {/* Next steps timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="w-full bg-slate-900/50 rounded-lg p-6 mb-8 text-left"
                >
                  <p className="text-slate-300 text-sm font-medium mb-4">Was passiert als nächstes:</p>
                  <div className="space-y-4">
                    {[
                      { step: '01', text: 'Unser Team analysiert Ihre Anfrage' },
                      { step: '02', text: 'Wir melden uns persönlich innerhalb von 24h' },
                      { step: '03', text: 'Kostenloses Erstgespräch — wir zeigen was möglich ist' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="text-teal-400 font-mono text-sm font-bold">{item.step}.</span>
                        <span className="text-slate-400 text-sm">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="flex flex-col gap-3 w-full"
                >
                  <p className="text-slate-500 text-xs text-center mb-1">
                    Neugierig was wir schon umgesetzt haben?
                  </p>
                  <Link
                    href="/work"
                    className="group w-full inline-flex items-center justify-center space-x-2 px-6 py-4 bg-teal-400 text-slate-900 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-200 text-base"
                  >
                    <span>Unser Portfolio ansehen</span>
                    <FiArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="group w-full inline-flex items-center justify-center space-x-2 px-5 py-3 border border-slate-600 text-slate-400 rounded-lg font-medium hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    <span>Branchenlösungen entdecken</span>
                    <FiArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
          >
            <h2 className="text-2xl font-bold text-slate-100 mb-8">Nachricht senden</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                    placeholder="Ihr Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-slate-300 text-sm font-medium mb-2">
                  Unternehmen (Optional)
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                  Betreff *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors duration-200"
                  placeholder="Projektdiskussion, Zusammenarbeit, etc."
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Nachricht *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:border-teal-400 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Erzählen Sie mir von Ihrem Projekt oder wie ich Ihnen helfen kann..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}