import React from 'react';
import { MagicMotion } from 'react-magic-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[921px] pt-32 pb-20 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <MagicMotion>
          <div className="md:col-span-7 z-10">
            <div className="mb-6 flex items-center gap-2 text-secondary font-bold tracking-widest uppercase text-xs">
              <span className="w-12 h-[1px] bg-secondary"></span>
              Estableciendo Autoridad Legal
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline text-primary-container tracking-tighter leading-[0.9] mb-8">
              Juan Felipe <br/> Restrepo Sánchez
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-2xl mb-10">
              Abogado Especialista en Derecho Penal y Procesal Penal — <span className="text-secondary italic">Universidad Pontificia Bolivariana</span>.
            </p>
            <div className="flex flex-wrap gap-6">
              <a className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all flex items-center gap-3" href="#contact">
                Programar Consulta 
                <span className="material-symbols-outlined">gavel</span>
              </a>
              <a className="border border-outline px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all" href="#expertise">
                Ver Áreas de Práctica
              </a>
            </div>
          </div>
        </MagicMotion>
        <div className="md:col-span-5 relative">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary-fixed rounded-full blur-[100px] opacity-30"></div>
          <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img className="w-full h-[600px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Law office interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAloM5-rzfMlfRZetiqLh797qSESMuDWZAF_fmIpF96czXKbHd6BvcF0M4VqaNFVrA2fmeuIxATz-e-st0R5bY9lh0qQx8WAgXGsBBBBP9ONZ4GRNmNxQGlFLZ0nNWY7O17VpulDyMl5pDbx2vNM_UQ6P6BecqqGQJpmf9EaHm-32mi4zz4Jp-sni28UDuVvFnSViWmeslMqEmzz-yopQaIIf2GtA1Py29giDfQwpVHN2DoQRdNzZ9zo6TzWiOrLelkim6OS61rZdQ"/>
            <div className="absolute bottom-8 left-8 right-8 bg-primary-container/90 backdrop-blur-md p-6 rounded-lg text-white">
              <span className="material-symbols-outlined text-4xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
              <h3 className="text-xl font-bold font-headline mb-1">Defensa Rigurosa</h3>
              <p className="text-sm opacity-80">Estrategia legal basada en la precisión y la excelencia académica de la UPB.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
