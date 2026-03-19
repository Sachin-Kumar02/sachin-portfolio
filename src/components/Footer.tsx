import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const { personal } = portfolioData;
  
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href={personal.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Github size={20} />
        </a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-slate-500 font-mono text-sm hover:text-emerald-400 transition-colors cursor-default">
        Designed & Built by {personal.name}
      </p>
    </footer>
  );
}
