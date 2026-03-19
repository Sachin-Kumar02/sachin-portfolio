import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

export default function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-slate-300 font-sans selection:bg-emerald-400/30 selection:text-emerald-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}
