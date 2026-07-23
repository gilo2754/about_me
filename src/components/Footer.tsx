'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <p className="text-slate-500 text-xs mt-2">
            © {new Date().getFullYear()} UnMega. All rights reserved.
          </p>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-200"
          >
            <span className="text-sm font-mono">Back to top</span>
            <FiExternalLink size={14} className="group-hover:scale-110 transition-transform duration-200" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;