'use client';

import { motion } from 'framer-motion';
import KiDiagnoseWizard from '@/components/KiDiagnoseWizard';

export default function KiDiagnose() {
  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Kostenlose KI-Diagnose
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Neun kurze Fragen zu Ihrer IT und Ihrem KI-Reifegrad — Sie erhalten
            direkt im Anschluss ein erstes Profil, und unser Team meldet sich
            mit konkreten nächsten Schritten.
          </p>
        </motion.div>

        <KiDiagnoseWizard />
      </div>
    </div>
  );
}