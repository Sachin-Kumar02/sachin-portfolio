import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200">Technical Skills</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-200 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-slate-900/80 text-emerald-400/90 text-sm font-mono rounded-md border border-slate-700/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
