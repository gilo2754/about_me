'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiSmartphone, FiUsers, FiTarget, FiZap } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Carlo Menjivar',
    role: 'Software Engineer & KI-Spezialist',
    description: 'Führt das Entwicklungsteam und bringt umfangreiche Erfahrung in moderner Web-Entwicklung und KI-Integration mit. Spezialist für Full-Stack-Lösungen.',
    expertise: ['Angular', 'React', 'Spring Boot', 'KI-Integration', 'Systemarchitektur'],
    image: '/team/carlo.jpg'
  },
  {
    name: 'Team Member 2',
    role: 'Backend-Architekt (bald verfügbar)',
    description: 'Wird das Team als Experte für Backend-Systeme und Cloud-Infrastruktur verstärken. Fokus auf skalierbare und sichere Lösungen.',
    expertise: ['Cloud Architecture', 'DevOps', 'Database Design', 'API Development'],
    image: '/team/member2.jpg',
    coming: true
  },
  {
    name: 'Team Member 3',
    role: 'UX/UI Designer (bald verfügbar)',
    description: 'Wird für benutzerfreundliche und ansprechende Interfaces sorgen. Spezialist für moderne Design-Systeme und User Experience.',
    expertise: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
    image: '/team/member3.jpg',
    coming: true
  }
];

const companyValues = [
  {
    icon: FiTarget,
    title: 'Fokus auf ROI',
    description: 'Jede Lösung wird darauf ausgelegt, messbaren Geschäftswert zu liefern.'
  },
  {
    icon: FiZap,
    title: 'Schnelle Umsetzung',
    description: 'Von der Idee zur funktionsfähigen Lösung in kürzester Zeit.'
  },
  {
    icon: FiUsers,
    title: 'Kundenzentriert',
    description: 'Ihre Herausforderungen stehen im Mittelpunkt unserer Lösungen.'
  }
];

const techStack = [
  {
    category: 'Frontend Development',
    icon: FiCode,
    technologies: ['Angular', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS']
  },
  {
    category: 'Backend & KI',
    icon: FiDatabase,
    technologies: ['Python', 'FastAPI', 'Spring Boot', 'OpenAI API', 'LangChain']
  },
  {
    category: 'Cloud & DevOps',
    icon: FiCloud,
    technologies: ['Docker', 'CI/CD', 'PostgreSQL', 'Vector Databases', 'REST APIs']
  },
  {
    category: 'KI & Automation',
    icon: FiSmartphone,
    technologies: ['RAG Systeme', 'Chatbots', 'Process Automation', 'N8N', 'Data Analytics']
  }
];

export default function About() {
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
            <span className="text-teal-400 font-mono text-lg mr-4">01.</span>
            Über UnMega
          </h1>
          <div className="w-24 h-0.5 bg-teal-400 mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Wir sind ein spezialisiertes Entwicklungsteam, das KI-gestützte Geschäftslösungen 
            entwickelt. Unser Fokus liegt auf messbarem ROI und praktischen Anwendungen.
          </p>
        </motion.div>

        {/* Company Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/30 rounded-lg p-8 border border-slate-700 mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-6 text-center">Unsere Mission</h2>
          <p className="text-slate-400 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Bei UnMega entwickeln wir KI-gestützte Lösungen, die echte Geschäftsprobleme lösen. 
            Wir glauben daran, dass Technologie praktisch, benutzerfreundlich und profitabel sein sollte. 
            Unser Ziel ist es, Unternehmen dabei zu helfen, Zeit zu sparen, Kosten zu reduzieren 
            und ihre Effizienz zu steigern.
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-6 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-teal-400/10 rounded-full flex items-center justify-center">
                    <IconComponent className="text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">Unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                className={`relative p-6 rounded-lg border ${
                  member.coming 
                    ? 'bg-slate-800/30 border-slate-600' 
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                {member.coming && (
                  <div className="absolute top-4 right-4 bg-teal-400/20 text-teal-400 px-2 py-1 rounded-full text-xs font-medium">
                    Bald verfügbar
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-1">{member.name}</h3>
                  <p className="text-teal-400 text-sm font-medium mb-3">{member.role}</p>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                
                <div>
                  <h4 className="text-slate-100 font-medium mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 text-xs rounded-full ${
                          member.coming 
                            ? 'bg-slate-700 text-slate-400' 
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-8 text-center">Unser Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-teal-400/50 transition-colors duration-200"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-teal-400 mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-slate-100 text-sm">{tech.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {tech.technologies.map((technology) => (
                      <div key={technology} className="flex items-center">
                        <span className="text-teal-400 mr-2">▶</span>
                        <span className="text-slate-400 text-sm">{technology}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-lg p-12 border border-teal-400/30"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam herausfinden, wie UnMega Ihr Unternehmen 
            mit maßgeschneiderten KI-Lösungen voranbringen kann.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-teal-400 text-slate-900 rounded-lg font-medium hover:bg-teal-300 transition-colors duration-200"
            >
              <span>Kostenloses Beratungsgespräch</span>
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