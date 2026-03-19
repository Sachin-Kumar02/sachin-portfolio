import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
      
      {/* Left side social links (Desktop) */}
      <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-500">
        <a href="https://github.com/Sachin-Kumar02" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://www.linkedin.com/in/sachin-kumar-8b71b928a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>

      {/* Right side email (Desktop) */}
      <div className="hidden md:flex flex-col items-center fixed bottom-0 right-10 gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate-500">
        <a href="mailto:sachinska02@gmail.com" className="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all font-mono text-sm [writing-mode:vertical-rl] tracking-widest">
          sachinska02@gmail.com
        </a>
      </div>
    </>
  );
}
