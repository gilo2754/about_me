'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Über uns', href: '/about', num: '01' },
    { name: 'Unser Portfolio', href: '/work', num: '02' },
    { name: 'Branchenlösungen', href: '/solutions', num: '03' },
    { name: 'Kontakt', href: '/contact', num: '04' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 md:px-12 lg:px-24">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-teal-400 text-2xl font-bold hover:text-teal-300 transition-colors">
            
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center space-x-2 text-slate-300 hover:text-teal-400 transition-colors duration-200"
            >
              <span className="text-teal-400 text-sm font-mono">{item.num}.</span>
              <span className="text-sm font-medium tracking-wide">{item.name}</span>
            </Link>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50 p-2 text-slate-300 hover:text-teal-400 transition-colors"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-full h-screen bg-slate-900/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex flex-col items-center space-y-2 text-slate-300 hover:text-teal-400 transition-colors duration-200"
                >
                  <span className="text-teal-400 text-sm font-mono">{item.num}.</span>
                  <span className="text-lg font-medium tracking-wide">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;