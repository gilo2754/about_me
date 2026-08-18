'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiZap, FiMessageCircle, FiBarChart, FiCopy, FiCheck } from 'react-icons/fi';
import { useState } from 'react';

const featuredProjects = [
  {
    id: 1,
    slug: 'smartdocs-ai',
    icon: FiMessageCircle,
    title: 'SmartDocs AI Assistant',
    subtitle: 'RAG Chatbot für Unternehmensdokumentation',
    description: 'Ihre gesamte Dokumentation beantwortet Fragen 24/7. Mitarbeiter und Kunden erhalten sofortige Antworten ohne in 50 PDFs zu suchen.',
    timeSaving: 'Spart 5-10 Stunden pro Woche pro Mitarbeiter',
    features: [
      'PDF/Dokument Upload (Drag & Drop)',
      'Saubere Chat-Oberfläche',
      'Zitiert exakte Quellen',
      'Mehrsprachig (DE/EN)',
      'Konversationsverlauf'
    ]
  },
  {
    id: 2,
    slug: 'bi-dashboard',
    icon: FiBarChart,
    title: 'Business Intelligence Dashboard',
    subtitle: 'Analytics + KI Insights automatisch',
    description: 'Von chaotischen Excel-Dateien zu intelligenten Entscheidungen in Minuten. KI analysiert Ihre Daten und sagt Ihnen genau, was zu tun ist.',
    timeSaving: 'Reduziert Datenanalyse von Tagen auf Minuten',
    features: [
      'CSV/Excel Upload → automatische Dashboards',
      'Wichtige KPIs hervorgehoben',
      'Interaktive Grafiken (Filter, Drill-Down)',
      'KI Insights: Automatische Analyse und Empfehlungen',
      'PDF Export für Berichte',
      'Einfache Vorhersagen und Trends'
    ]
  },
  {
    id: 3,
    slug: 'autoflow',
    icon: FiZap,
    title: 'AutoFlow - Automation Studio',
    subtitle: 'KI-gestützte Prozessautomatisierung',
    description: '5 Stunden manuelle Arbeit → 5 Minuten automatisiert. Vorgefertigte Templates für Ihre häufigsten Prozesse. KI übernimmt die schwere Arbeit.',
    timeSaving: 'Automatisiert wiederkehrende Aufgaben zu 90%',
    features: [
      'Lead Automation: Web-Formular → CRM → E-Mail-Sequenz',
      'Rechnungsverarbeitung: E-Mail → KI extrahiert Daten → Buchhaltung',
      'Kundensupport: E-Mail → KI kategorisiert → Team-Weiterleitung',
      'Social Media: KI generiert Posts → Plattform-übergreifend',
      'Berichtsgenerierung: Daten sammeln → KI zusammenfassen → PDF per E-Mail'
    ]
  }
];

export default function Work() {
  const [copied, setCopied] = useState(false);
  const email = 'tech@unmega.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Error copying email:', error);
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
            <span className="text-teal-400 font-mono text-lg mr-4">02.</span>
            Unser Portfolio
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Drei KI-gestützte Lösungen, die echte Geschäftsprobleme lösen und messbaren ROI liefern. 
            Jedes Projekt spart Ihrem Unternehmen Zeit und Geld.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-teal-400">
              <span>🔒</span>
              <span>DSGVO-konform</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-400">
              <span>🟨⬛🟥</span>
              <span>Deutsche Standards</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-400">
              <span>⚡</span>
              <span>Bewährte Technologien</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                id={project.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-24 ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                {/* Project Visual */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg h-80 md:h-96 flex flex-col items-center justify-center overflow-hidden border border-slate-600 hover:border-teal-400/50 transition-all duration-300">
                      <div className="text-8xl text-teal-400/30 mb-4">
                        <IconComponent />
                      </div>
                      <div className="text-center px-6">
                        <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div>
                    <div className="flex items-center mb-4">
                      <IconComponent className="text-teal-400 mr-3" size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Time Saving Highlight */}
                  <div className="bg-teal-400/10 border border-teal-400/30 rounded-lg p-4">
                    <div className="flex items-center">
                      <FiZap className="text-teal-400 mr-2" size={20} />
                      <span className="text-teal-400 font-semibold">Zeitersparnis: </span>
                      <span className="text-slate-100 ml-2">{project.timeSaving}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-slate-100 font-semibold mb-3">Hauptfunktionen:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-teal-400 mr-2 mt-1">▶</span>
                          <span className="text-slate-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-20 bg-slate-800/30 rounded-lg p-12 border border-slate-700"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Bereit für Ihre eigene Lösung?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Diese Projekte zeigen nur einen kleinen Teil dessen, was möglich ist. 
            Lassen Sie uns über Ihre spezifischen Herausforderungen sprechen und eine maßgeschneiderte Lösung entwickeln.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200"
            >
              <span>Kostenloses Beratungsgespräch</span>
              <FiExternalLink size={16} />
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center space-x-2 px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium hover:bg-teal-400/10 transition-colors duration-200"
            >
              <span>Direkt kontaktieren</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-2 px-4 py-4 border border-slate-600 text-slate-400 rounded-lg font-medium hover:border-teal-400/50 hover:text-teal-400 transition-colors duration-200"
              aria-label="E-Mail-Adresse kopieren"
            >
              {copied ? <FiCheck size={16} className="text-teal-400" /> : <FiCopy size={16} />}
              <span>{copied ? 'Kopiert!' : email}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}