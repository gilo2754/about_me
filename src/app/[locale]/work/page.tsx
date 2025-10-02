'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';
import { useState } from 'react';

const featuredProjects = [
  {
    title: 'MERN Web Application',
    description: 'Full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js). Showcases complete full-stack development skills from database design to frontend implementation.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'Full-Stack'],
    githubUrl: 'https://github.com/gilo2754/FF-PraxisProjekt',
    liveUrl: 'https://unmega.com/mern-app',
    imageUrl: '/projects/mern-app.jpg'
  },
  {
    title: 'QR Code ESP32 System',
    description: 'IoT project combining embedded electronics with software development. QR code scanning system using ESP32 microcontroller and Python. Bridges hardware and software expertise from embedded electronics background.',
    technologies: ['Python', 'ESP32', 'IoT', 'Embedded Systems', 'QR Code', 'Hardware Integration'],
    githubUrl: 'https://github.com/gilo2754/qr_esp32',
    liveUrl: 'https://unmega.com/iot-project',
    imageUrl: '/projects/esp32-qr.jpg'
  },
  {
    title: 'Solar Tracking System',
    description: 'Innovative solar tracking system using advanced sensor technology and automated calculations. Published research on "Detalles de un sistema de seguimiento solar por sensores y cálculos". Combines hardware sensors with intelligent software algorithms for optimal solar panel positioning.',
    technologies: ['Electronic Design', 'Sensors', 'IoT', 'System Integration', 'Automation', 'Solar Technology'],
    githubUrl: 'https://github.com/gilo2754/solar-tracking-research',
    liveUrl: 'https://unmega.com/solar-research',
    imageUrl: '/projects/solar-tracking.jpg'
  }
];

const otherProjects = [
  {
    title: 'About Me Portfolio',
    description: 'Personal portfolio website showcasing professional experience and projects. Built with modern web technologies and responsive design.',
    technologies: ['SCSS', 'HTML', 'CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/gilo2754/about_me',
    type: 'Portfolio'
  },
  {
    title: 'AutoVermietung Database',
    description: 'SQL database project for car rental management system. Demonstrates database design principles and PHP integration.',
    technologies: ['PHP', 'SQL', 'Database Design', 'MySQL'],
    githubUrl: 'https://github.com/gilo2754/autoVermietung',
    type: 'Database'
  },
  {
    title: 'Service Manager',
    description: 'Web-based service management application with HTML frontend. Focuses on service tracking and management functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    githubUrl: 'https://github.com/gilo2754/ServiceManager',
    type: 'Web App'
  },
  {
    title: 'Solar Tracking Research',
    description: 'Research project on solar tracking systems combining embedded electronics knowledge with software development.',
    technologies: ['Embedded Systems', 'Solar Technology', 'Research', 'Hardware/Software'],
    githubUrl: 'https://github.com/gilo2754/solar-tracking-research',
    type: 'Research'
  },
  {
    title: 'Embedded Electronics Projects',
    description: 'Collection of projects bridging embedded electronics experience (2007) with current software development work.',
    technologies: ['Embedded Systems', 'Electronics', 'C/C++', 'Microcontrollers'],
    githubUrl: 'https://github.com/gilo2754/',
    type: 'Embedded'
  },
  {
    title: 'GitHub Portfolio Collection',
    description: 'Complete collection of 19+ repositories showcasing the evolution from embedded electronics to modern software development.',
    technologies: ['Various Languages', 'Full-Stack', 'IoT', 'Web Development'],
    githubUrl: 'https://github.com/gilo2754/',
    type: 'Collection'
  }
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20 px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            <span className="text-teal-400 font-mono text-lg mr-4">03.</span>
            Some Things I&apos;ve Built
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mb-8"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-slate-100 mb-12"
          >
            Featured Projects
          </motion.h2>
          
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:text-right' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg h-64 md:h-80 flex items-center justify-center overflow-hidden">
                      <div className="text-6xl text-teal-400/30">
                        <FiFolder />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''} space-y-4`}>
                  <p className="text-teal-400 font-mono text-sm">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                    {project.title}
                  </h3>
                  <div className={`bg-slate-800 p-6 rounded-lg ${index % 2 === 1 ? 'lg:-mr-8' : 'lg:-ml-8'} relative z-10`}>
                    <p className="text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-slate-300 font-mono text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={`flex items-center space-x-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-12 text-center">
            Other Noteworthy Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-all duration-200 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <FiFolder className="text-teal-400" size={32} />
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-slate-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-teal-400 text-sm font-mono">
                  {project.type}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <p className="text-slate-400 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-colors duration-200 font-mono text-sm"
          >
            <span>Get In Touch</span>
            <FiExternalLink className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}