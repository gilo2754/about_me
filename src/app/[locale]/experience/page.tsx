'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const experiences = [
  {
    id: 'capgemini',
    company: 'Capgemini',
    role: 'Software Engineer',
    period: '2021 - Present',
    location: 'Cologne Bonn Region, Germany',
    description: [
      'Developing enterprise software solutions for digital transformation initiatives',
      'Working with modern web technologies including Angular, Spring Boot, and React',
      'Contributing to large-scale projects serving thousands of users',
      'Implementing best practices in software engineering and agile methodologies',
      'Collaborating with international teams on innovative digital solutions'
    ],
    technologies: ['Angular', 'Spring Boot', 'Java', 'React', 'TypeScript', 'Microservices', 'REST APIs', 'Git']
  },
  {
    id: 'university',
    company: 'Cologne University of Applied Sciences',
    role: 'Computer Science Student',
    period: '2017 - 2021',
    location: 'Cologne, Germany',
    description: [
      'Completed Bachelor\'s degree in Computer Science with focus on software engineering',
      'Specialized in Angular Advanced Forms and Backend Foundations with Spring Boot',
      'Participated in projects involving web technologies and digital innovation',
      'Gained comprehensive understanding of software development lifecycle',
      'Developed strong foundation in programming principles and system design'
    ],
    technologies: ['Java', 'Angular', 'Spring Boot', 'Web Technologies', 'Software Engineering', 'Database Design']
  },
  {
    id: 'electronics',
    company: 'Electronic Systems',
    role: 'Electronic System Designer',
    period: '2008 - 2014',
    location: 'Germany',
    description: [
      'Designed and developed solar tracking systems using advanced sensor technology',
      'Published research on "Detalles de un sistema de seguimiento solar por sensores y cálculos"',
      'Implemented automated tracking algorithms for optimal solar panel positioning',
      'Created innovative solutions combining hardware and software integration',
      'Gained expertise in IoT and sensor-based system development'
    ],
    technologies: ['Electronic Design', 'Solar Systems', 'Sensors', 'System Integration', 'IoT', 'Hardware/Software']
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('capgemini');
  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            <span className="text-teal-400 font-mono text-lg mr-4">02.</span>
            Where I&apos;ve Worked
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mb-8"></div>
        </motion.div>

        {/* Experience Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Tab List */}
          <div className="lg:w-1/3">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
              {experiences.map((exp, index) => (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveTab(exp.id)}
                  className={`flex-shrink-0 px-6 py-4 text-left border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 lg:w-full transition-all duration-200 ${
                    activeTab === exp.id
                      ? 'border-teal-400 bg-teal-400/5 text-teal-400'
                      : 'border-slate-700 text-slate-400 hover:border-teal-400/50 hover:bg-teal-400/5 hover:text-teal-300'
                  }`}
                >
                  <div className="font-mono text-sm whitespace-nowrap lg:whitespace-normal">
                    {exp.company}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {activeExperience.role}
                  <span className="text-teal-400"> @ {activeExperience.company}</span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <p className="text-slate-400 font-mono text-sm">{activeExperience.period}</p>
                  <p className="text-slate-400 text-sm">{activeExperience.location}</p>
                </div>
              </div>

              <div className="space-y-4">
                {activeExperience.description.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <FiChevronRight className="text-teal-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-slate-400 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="text-slate-100 font-semibold mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {activeExperience.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-teal-400/50 transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}