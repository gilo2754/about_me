'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiSearch, FiActivity, FiCpu, FiTrendingUp, FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const phases = [
  {
    icon: FiSearch,
    step: '01',
    title: 'Analyse',
    description: 'Wir verschaffen uns ein klares Bild Ihrer aktuellen IT-Landschaft, Prozesse und Datenquellen — und identifizieren, wo KI wirklich einen Unterschied macht.',
    details: ['Ist-Zustand von IT & Prozessen', 'Datenquellen und Systemlandschaft', 'Erste Potenzialeinschätzung']
  },
  {
    icon: FiActivity,
    step: '02',
    title: 'Diagnose',
    description: 'Basierend auf der Analyse erstellen wir ein konkretes Reifegrad-Profil Ihres Unternehmens und priorisieren die Anwendungsfälle mit dem größten ROI.',
    details: ['KI- & IT-Reifegrad-Profil', 'Priorisierte Use Cases', 'Machbarkeit & Aufwandsschätzung']
  },
  {
    icon: FiCpu,
    step: '03',
    title: 'Umsetzung',
    description: 'Wir entwickeln und implementieren die Lösung — von einem schlanken Prototyp bis zur vollständigen Integration in Ihre bestehenden Systeme.',
    details: ['Entwicklung & Integration', 'Iteratives Vorgehen mit klaren Meilensteinen', 'DSGVO-konforme Umsetzung']
  },
  {
    icon: FiTrendingUp,
    step: '04',
    title: 'Begleitung',
    description: 'Nach dem Launch bleiben wir an Ihrer Seite — mit Monitoring, Anpassungen und Schulungen, damit die Lösung nachhaltig Wirkung zeigt.',
    details: ['Monitoring & Optimierung', 'Schulung Ihres Teams', 'Laufender Support']
  }
];

const reasons = [
  'Kostenlose KI-Diagnose als Einstieg — ohne Verpflichtung',
  'Fokus auf messbaren ROI statt Buzzwords',
  'DSGVO- und BDSG-konforme Lösungen',
  'Ein Ansprechpartner von der Analyse bis zur Begleitung'
];

export default function KiBeratung() {
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
            KI-Beratung
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Unser Hauptangebot für kleine und mittlere Unternehmen: eine strukturierte
            KI-Beratung von der ersten Analyse bis zur langfristigen Begleitung —
            damit Künstliche Intelligenz bei Ihnen echten, messbaren Nutzen schafft.
          </p>
        </motion.div>

        {/* Process / Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-teal-400/50 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-teal-400/10 flex items-center justify-center mr-4">
                    <IconComponent className="text-teal-400" size={22} />
                  </div>
                  <div>
                    <span className="text-teal-400 font-mono text-sm">{phase.step}.</span>
                    <h2 className="text-xl font-bold text-slate-100">{phase.title}</h2>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {phase.description}
                </p>
                <ul className="space-y-2">
                  {phase.details.map((detail) => (
                    <li key={detail} className="flex items-start text-sm text-slate-300">
                      <FiCheckCircle className="text-teal-400 mr-2 mt-0.5 shrink-0" size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Diagnostic Tool Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg p-10 border border-teal-400/30 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-100 mb-3">
                Wo steht Ihr Unternehmen heute?
              </h2>
              <p className="text-slate-400 max-w-xl">
                Machen Sie den ersten Schritt der Analyse-Phase selbst: unsere
                kostenlose KI-Diagnose dauert wenige Minuten und liefert Ihnen
                ein erstes Profil Ihres IT- und KI-Reifegrads.
              </p>
            </div>
            <Link
              href="/ki-beratung/diagnose"
              className="group shrink-0 inline-flex items-center space-x-2 px-8 py-4 bg-teal-400 text-slate-900 rounded-lg font-semibold hover:bg-teal-300 transition-colors duration-200"
            >
              <span>Kostenlose KI-Diagnose starten</span>
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>

        {/* Why us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">
            Warum KI-Beratung mit UnMega
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start p-4 bg-slate-800/30 rounded-lg border border-slate-700"
              >
                <FiCheckCircle className="text-teal-400 mr-3 mt-0.5 shrink-0" size={16} />
                <span className="text-slate-300 text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-slate-800/30 rounded-lg p-12 border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Bereit, den KI-Reifegrad Ihres Unternehmens zu steigern?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Starten Sie mit der kostenlosen Diagnose oder vereinbaren Sie direkt
            ein unverbindliches Erstgespräch mit uns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/ki-beratung/diagnose"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200"
            >
              <span>KI-Diagnose starten</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium hover:bg-teal-400/10 transition-colors duration-200"
            >
              <span>Beratungsgespräch vereinbaren</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}