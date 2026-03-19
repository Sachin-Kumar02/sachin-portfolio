import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, ChevronDown, MapPin } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-emerald-400 font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-200 mb-4 tracking-tight">
            {personal.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            I build things for the web & train models.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-6 py-3 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href={personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`tel:${personal.phone}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
