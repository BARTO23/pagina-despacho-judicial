import React from 'react';

export default function Footer() {
  return (
    <>
      <section className="py-32 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-5">
                    <h2 className="text-4xl font-black font-headline text-primary-container mb-6">Contáctenos</h2>
                    <p className="text-on-surface-variant mb-12 leading-relaxed">
                        Para asuntos legales urgentes o consultas programadas, puede comunicarse a través de nuestros canales oficiales o visitar nuestra oficina en Apartadó.
                    </p>
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-outline uppercase tracking-widest">Líneas de Atención</p>
                                <p className="text-xl font-bold text-primary-container">311 358 2728</p>
                                <p className="text-xl font-bold text-primary-container">310 728 5035</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-outline uppercase tracking-widest">Correo Electrónico</p>
                                <p className="text-xl font-bold text-primary-container">juanphelipe@hotmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-surface-container-low rounded-full flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined">location_on</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-outline uppercase tracking-widest">Ubicación</p>
                                <p className="text-lg font-bold text-primary-container leading-snug">
                                    Calle 97 # 103-20 - Ed. Perla Negra, Oficina 301. <br/>
                                    Barrio Ortiz - Apartadó, Antioquia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7">
                    <div className="bg-surface-container-low p-8 rounded-3xl h-full min-h-[400px] overflow-hidden relative border border-outline-variant/30">
                        <div className="absolute inset-0 bg-slate-200 grayscale opacity-40">
                            <div className="w-full h-full bg-gradient-to-br from-secondary-fixed/20 to-primary-container/10"></div>
                        </div>
                        <div className="relative h-full flex flex-col justify-end">
                            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm">
                                <h4 className="font-bold font-headline text-primary-container mb-2">Oficina Principal</h4>
                                <p className="text-sm text-on-surface-variant mb-4 italic">Ubicados en el corazón financiero de Apartadó para su comodidad.</p>
                                <a className="text-secondary font-bold text-sm flex items-center gap-2 hover:underline" href="https://maps.google.com" target="_blank" rel="noreferrer">
                                    Abrir en Google Maps
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <footer className="bg-[#131645] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full gap-8 max-w-7xl mx-auto">
            <div>
                <div className="text-lg font-bold text-white mb-2">Juan Felipe Restrepo Sánchez</div>
                <p className="font-['Inter'] text-sm leading-relaxed text-slate-400 max-w-md">
                    © {new Date().getFullYear()} The Sovereign Ledger. Absolute Authority in Criminal Defense. Todos los derechos reservados.
                </p>
            </div>
            <div className="flex flex-wrap gap-8">
                <a className="text-slate-400 hover:text-white transition-colors font-['Inter'] text-sm hover:underline decoration-secondary underline-offset-4" href="#">Política de Privacidad</a>
                <a className="text-slate-400 hover:text-white transition-colors font-['Inter'] text-sm hover:underline decoration-secondary underline-offset-4" href="#">Términos Legales</a>
            </div>
        </div>
      </footer>
    </>
  );
}
