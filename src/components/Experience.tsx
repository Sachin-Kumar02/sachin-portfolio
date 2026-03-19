import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-200">Where I've Worked</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="hidden md:block text-slate-400 font-mono text-sm pt-1">
                    {job.duration}
                  </div>
                  <div className="md:col-span-3 relative">
                    {/* Timeline dot for mobile */}
                    <div className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-emerald-400 md:hidden ring-4 ring-slate-900"></div>
                    
                    <h3 className="text-xl font-semibold text-slate-200">
                      {job.role} <span className="text-emerald-400">@ {job.company}</span>
                    </h3>
                    <p className="text-slate-400 font-mono text-sm mb-4 md:hidden mt-1">
                      {job.duration}
                    </p>
                    
                    <ul className="space-y-3 mt-4">
                      {job.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <span className="text-emerald-400 mt-1.5 text-xs">▹</span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
