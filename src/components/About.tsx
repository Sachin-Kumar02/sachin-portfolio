import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export default function About() {
  const { education, certifications, achievements, languages } = portfolioData;

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-200">About Me</h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                <GraduationCap className="text-emerald-400" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <h4 className="text-lg font-medium text-slate-200">{edu.degree}</h4>
                    <p className="text-emerald-400 font-mono text-sm my-2">{edu.institution}</p>
                    <div className="text-slate-400 text-sm">
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-200 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <span key={index} className="px-4 py-2 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <Award className="text-emerald-400" />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-400">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
                  <Trophy className="text-emerald-400" />
                  Achievements
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-400">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
