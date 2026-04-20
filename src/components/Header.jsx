import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-primary-container font-headline leading-none">
          JUAN FELIPE <br/> RESTREPO SÁNCHEZ
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-slate-600 hover:text-primary-container transition-colors font-bold font-headline" href="#expertise">Áreas de Práctica</a>
          <a className="text-slate-600 hover:text-primary-container transition-colors font-bold font-headline" href="#contact">Contáctenos</a>
          <a className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-all font-headline" href="#contact">Contactar</a>
        </div>
      </div>
    </nav>
  );
}
