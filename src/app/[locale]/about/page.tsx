'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiSmartphone } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: FiCode,
    technologies: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    category: 'Backend',
    icon: FiDatabase,
    technologies: ['Spring Boot', 'Java', 'Node.js', 'RESTful APIs', 'Microservices', 'PostgreSQL']
  },
  {
    category: 'Methodologies & Tools',
    icon: FiCloud,
    technologies: ['Scrum', 'ISTQB Testing', 'Git', 'CI/CD', 'Agile', 'Test-Driven Development']
  },
  {
    category: 'AI & Innovation',
    icon: FiSmartphone,
    technologies: ['AI Prompting', 'Google AI Tools', 'Digital Innovation', 'Solar Systems', 'IoT']
  }
];

const experiences = [
  {
    period: '2021 - Present',
    company: 'Capgemini',
    role: 'Software Engineer',
    location: 'Cologne Bonn Region, Germany',
    description: 'Developing enterprise software solutions and digital innovations. Working with modern technologies including Angular, Spring Boot, and React. Contributing to large-scale projects and digital transformation initiatives.',
    technologies: ['Angular', 'Spring Boot', 'Java', 'React', 'TypeScript', 'Microservices']
  },
  {
    period: '2017 - 2021',
    company: 'Cologne University of Applied Sciences',
    role: 'Computer Science Student',
    location: 'Cologne, Germany',
    description: 'Completed Bachelor\'s degree in Computer Science. Focused on software engineering principles, web technologies, and digital innovation. Gained expertise in Angular Advanced Forms and Backend Foundations with Spring Boot.',
    technologies: ['Java', 'Angular', 'Spring Boot', 'Web Technologies', 'Software Engineering']
  },
  {
    period: '2008 - 2014',
    company: 'Electronic Systems',
    role: 'Electronic System Designer',
    location: 'Germany',
    description: 'Designed and developed solar tracking systems using sensors and calculations. Published research on "Detalles de un sistema de seguimiento solar por sensores y cálculos". This experience laid the foundation for my passion in innovative technology solutions.',
    technologies: ['Electronic Design', 'Solar Systems', 'Sensors', 'System Integration', 'IoT']
  }
];

export default function About() {
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
            <span className="text-teal-400 font-mono text-lg mr-4">01.</span>
            About Me
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mb-8"></div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed">
                Hello! I&apos;m Carlo, a Software Engineer at <span className="text-teal-400">Capgemini</span> based in the Cologne Bonn Region, Germany. 
                My journey in technology started with electronic system design for solar tracking systems, 
                which sparked my passion for innovative digital solutions.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I graduated from <span className="text-teal-400">Cologne University of Applied Sciences</span> (2017-2021) 
                and specialize in modern web technologies including Angular, Spring Boot, and React. 
                I&apos;m certified as a Professional Scrum Master and ISTQB Foundation Level Professional.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                My unique background includes both traditional engineering (solar tracking systems, 2008-2014) 
                and modern software development. I&apos;m passionate about AI technologies and recently completed 
                Google certifications in responsible AI usage and productivity tools.
              </p>
            </div>
            
            {/* Professional image placeholder */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-4xl text-teal-400/50">Photo</div>
                </div>
                <div className="absolute inset-0 border-2 border-teal-400 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-colors duration-200"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-teal-400 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-slate-100">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-700 last:border-l-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-teal-400 rounded-full transform -translate-x-1/2"></div>
                
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-100">{exp.role}</h3>
                    <span className="text-teal-400 font-mono text-sm">{exp.period}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <span className="text-teal-400 font-semibold">{exp.company}</span>
                    <span className="text-slate-400 text-sm md:ml-4">{exp.location}</span>
                  </div>
                  <p className="text-slate-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}