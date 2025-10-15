'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/gilo2754',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/carlo-menjivar-01608452/',
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:carlo@unmega.com',
      icon: FiMail,
    },
  ];

  return (
    <footer className="px-6 py-12 md:px-12 lg:px-24 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 text-slate-400 hover:text-teal-400 transition-colors duration-200"
                aria-label={link.name}
              >
                <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            );
          })}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm font-mono">
            Built with <span className="text-teal-400">Next.js</span> & <span className="text-teal-400">Tailwind CSS</span>
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © {new Date().getFullYear()} Carlo Menjivar. All rights reserved.
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