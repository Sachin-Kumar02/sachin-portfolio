import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Folder, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200">Some Things I've Built</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/60 rounded-xl p-6 flex flex-col h-full border border-slate-700/50 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-center mb-6">
                  <Folder className="text-emerald-400 w-10 h-10" />
                  <div className="flex gap-3 text-slate-400">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-emerald-400/80 font-mono text-xs mb-4">{project.type}</p>
                
                <div className="text-slate-400 text-sm mb-6 flex-grow space-y-2">
                  {project.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
                
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-slate-500 font-mono text-xs mt-auto">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
