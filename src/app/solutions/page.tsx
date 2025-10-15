'use client';

import { motion } from 'framer-motion';
import { FiMessageCircle, FiBarChart, FiZap, FiHome, FiShield, FiTruck, FiShoppingBag, FiDollarSign, FiUser } from 'react-icons/fi';

const solutions = [
  {
    icon: FiMessageCircle,
    title: 'SmartDocs AI Assistant',
    description: 'Intelligente Dokumentensuche für Ihre Branche',
    applications: [
      {
        industry: 'Banking & Finance',
        useCase: 'Compliance-Dokumentation und Richtlinien',
        benefit: 'Mitarbeiter finden Regelwerke sofort',
        timeSaving: '8 Stunden/Woche pro Compliance-Team'
      },
      {
        industry: 'Versicherungen',
        useCase: 'Produktdokumentation und Schadensprozesse',
        benefit: 'Sachbearbeiter erhalten sofortige Antworten',
        timeSaving: '6 Stunden/Woche pro Sachbearbeiter'
      },
      {
        industry: 'öffentlicher Sektor',
        useCase: 'Behördenhandbücher und Verfahrensrichtlinien',
        benefit: 'Bürgerservices werden beschleunigt',
        timeSaving: '10 Stunden/Woche pro Sachbearbeiter'
      },
      {
        industry: 'Life Science',
        useCase: 'Forschungsdokumentation und Compliance',
        benefit: 'Schneller Zugang zu kritischen Informationen',
        timeSaving: '12 Stunden/Woche pro Forschungsteam'
      }
    ]
  },
  {
    icon: FiBarChart,
    title: 'Business Intelligence Dashboard',
    description: 'KI-gestützte Datenanalyse für bessere Entscheidungen',
    applications: [
      {
        industry: 'Retail',
        useCase: 'Verkaufsanalyse und Kundenverhalten',
        benefit: 'Optimierte Lagerhaltung und Pricing',
        timeSaving: 'Analyse von 3 Tagen auf 30 Minuten reduziert'
      },
      {
        industry: 'Transport & Logistik',
        useCase: 'Flottenmanagement und Routenoptimierung',
        benefit: 'Kosteneinsparungen und Effizienzsteigerung',
        timeSaving: 'Planungszeit um 75% reduziert'
      },
      {
        industry: 'Banking',
        useCase: 'Risikobewertung und Portfolio-Analyse',
        benefit: 'Bessere Investitionsentscheidungen',
        timeSaving: 'Reporting-Zeit von Wochen auf Stunden'
      },
      {
        industry: 'Versicherungen',
        useCase: 'Schadensmuster und Risikoprofile',
        benefit: 'Präzisere Prämienberechnung',
        timeSaving: 'Analysezeit um 80% reduziert'
      }
    ]
  },
  {
    icon: FiZap,
    title: 'AutoFlow - Automation Studio',
    description: 'Prozessautomatisierung für wiederkehrende Aufgaben',
    applications: [
      {
        industry: 'Banking',
        useCase: 'Kreditantragsverarbeitung und KYC-Prozesse',
        benefit: 'Vollautomatische Dokumentenprüfung',
        timeSaving: '90% Automatisierung bei Standardanträgen'
      },
      {
        industry: 'öffentlicher Sektor',
        useCase: 'Bürgeranträge und Verwaltungsprozesse',
        benefit: 'Digitale Antragsbearbeitung',
        timeSaving: 'Bearbeitungszeit von Wochen auf Tage'
      },
      {
        industry: 'Retail',
        useCase: 'Bestellabwicklung und Kundenservice',
        benefit: 'Automatische Orderverarbeitung',
        timeSaving: '85% weniger manuelle Eingriffe'
      },
      {
        industry: 'Life Science',
        useCase: 'Laborberichte und Compliance-Dokumentation',
        benefit: 'Automatisierte Berichterstellung',
        timeSaving: '70% weniger Dokumentationsaufwand'
      }
    ]
  }
];

const industries = [
  { icon: FiDollarSign, name: 'Banking & Finance', color: 'from-green-400 to-green-600' },
  { icon: FiShield, name: 'Versicherungen', color: 'from-blue-400 to-blue-600' },
  { icon: FiHome, name: 'öffentlicher Sektor', color: 'from-purple-400 to-purple-600' },
  { icon: FiTruck, name: 'Transport & Logistik', color: 'from-orange-400 to-orange-600' },
  { icon: FiShoppingBag, name: 'Retail', color: 'from-pink-400 to-pink-600' },
  { icon: FiUser, name: 'Life Science', color: 'from-teal-400 to-teal-600' }
];

export default function Solutions() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            <span className="text-teal-400 font-mono text-lg mr-4">03.</span>
            Branchenlösungen
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Unsere KI-gestützten Lösungen sind branchenübergreifend einsetzbar und 
            lösen spezifische Herausforderungen in verschiedenen Wirtschaftszweigen.
          </p>
        </motion.div>

        {/* Industries Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">
            Branchen, in denen wir aktiv sind
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-all duration-200"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center`}>
                    {IconComponent ? <IconComponent className="text-white" size={24} /> : <div className="w-6 h-6 bg-white rounded"></div>}
                  </div>
                  <h3 className="text-slate-100 font-medium text-sm text-center leading-tight">
                    {industry.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Solutions by Industry */}
        <div className="space-y-20">
          {solutions.map((solution, solutionIndex) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + solutionIndex * 0.2 }}
                className="bg-slate-800/30 rounded-lg p-8 border border-slate-700"
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="text-teal-400 mr-4" size={32} />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-100">{solution.title}</h2>
                    <p className="text-slate-400">{solution.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {solution.applications.map((app, appIndex) => (
                    <motion.div
                      key={app.industry}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + appIndex * 0.1 }}
                      className="bg-slate-900/50 p-6 rounded-lg border border-slate-600 hover:border-teal-400/30 transition-colors duration-200"
                    >
                      <div className="flex items-center mb-4">
                        {(() => {
                          const industryData = industries.find(ind => ind.name === app.industry);
                          const IndustryIcon = industryData?.icon || FiHome;
                          return (
                            <>
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${industryData?.color || 'from-gray-400 to-gray-600'} flex items-center justify-center mr-3`}>
                                <IndustryIcon className="text-white" size={16} />
                              </div>
                              <h3 className="text-lg font-semibold text-slate-100">{app.industry}</h3>
                            </>
                          );
                        })()}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-1">Anwendungsfall:</h4>
                          <p className="text-slate-400 text-sm">{app.useCase}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-slate-300 mb-1">Nutzen:</h4>
                          <p className="text-slate-400 text-sm">{app.benefit}</p>
                        </div>
                        
                        <div className="bg-teal-400/10 border border-teal-400/30 rounded-lg p-3">
                          <h4 className="text-sm font-medium text-teal-400 mb-1">Zeitersparnis:</h4>
                          <p className="text-slate-100 text-sm font-medium">{app.timeSaving}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
          className="text-center mt-20 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg p-12 border border-teal-400/30"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Ihre Branche nicht dabei?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Unsere Lösungen sind flexibel anpassbar. Lassen Sie uns gemeinsam 
            herausfinden, wie wir Ihre spezifischen Herausforderungen lösen können.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200"
            >
              <span>Beratungsgespräch vereinbaren</span>
            </a>
            <a
              href="/work"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-teal-400 text-teal-400 rounded-lg font-medium hover:bg-teal-400/10 transition-colors duration-200"
            >
              <span>Portfolio ansehen</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}