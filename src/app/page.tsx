'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Home() {

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Hero Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-teal-400 font-mono text-sm mb-6">Willkommen bei</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-4">
              UnMega
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400 mb-6">
              KI-gestützte Geschäftslösungen für den Mittelstand.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-lg leading-relaxed"
          >
            Wir sind ein spezialisiertes Entwicklungsteam, das{' '}
            <span className="text-teal-400">KI-gestützte Geschäftslösungen</span> für den Mittelstand entwickelt. 
            Unser Team kombiniert moderne <span className="text-teal-400">Web-Technologien</span> 
            mit künstlicher Intelligenz, um messbare Effizienzsteigerungen 
            und Kostenreduktionen für Ihr Unternehmen zu erreichen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors duration-200 font-mono text-sm"
            >
              <span>Kontakt aufnehmen</span>
              <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Link>
            
            <a
              href="mailto:info@unmega.com"
              className="group inline-flex items-center space-x-2 px-6 py-3 text-slate-300 hover:text-teal-400 transition-colors duration-200 font-mono text-sm"
            >
              <FiMail />
              <span>info@unmega.com</span>
            </a>
          </motion.div>
        </div>

        {/* Right side - Professional Image/Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* Main content placeholder - will be replaced with actual photo */}
            <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center float-animation">
              <div className="text-4xl text-teal-400/50 font-bold">UnMega</div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-12 right-12 w-16 h-16 border border-teal-400/30 rounded-lg"
            />
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-16 left-8 w-8 h-8 bg-teal-400/20 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-slate-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
 
    </div>
  );
}
