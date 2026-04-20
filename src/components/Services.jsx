import React, { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  const items = [
    {
      icon: "security",
      title: "Estrategia Penal",
      short: "Defensa técnica especializada en cada etapa del proceso penal.",
      full: "Garantizamos el debido proceso mediante la preparación meticulosa de cada audiencia, el recaudo probatorio, y la representación sin fisuras ante juzgados y tribunales."
    },
    {
      icon: "description",
      title: "Derecho Procesal",
      short: "Manejo experto de la normativa procesal penal vigente.",
      full: "Estudio exhaustivo del marco legal para la protección de sus derechos fundamentales. Intervención en etapas preventivas y de investigación para la mitigación del riesgo jurídico."
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low" id="expertise">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-container leading-tight mb-8">
              Enfoque Directo <br/> y Efectivo
            </h2>
            <div className="space-y-4">
              <MagicMotion>
                {items.map((item, i) => (
                  <div key={i} className="group cursor-pointer bg-white p-6 rounded-xl hover:shadow-md transition-shadow" onClick={() => toggleExpand(i)}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex-shrink-0 bg-surface-container-low rounded-lg flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold font-headline text-primary-container">{item.title}</h4>
                        <p className="text-on-surface-variant leading-relaxed mt-1">{item.short}</p>
                        {expandedIndex === i && (
                          <div className="mt-4 pt-4 border-t border-outline-variant/30">
                            <p className="text-on-surface-variant">{item.full}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </MagicMotion>
            </div>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="bg-surface-container-lowest p-12 rounded-3xl shadow-xl border border-white/50">
              <p className="text-lg italic text-on-surface-variant leading-relaxed mb-8">
                "La justicia no es solo un fin, es un camino que requiere conocimiento técnico absoluto y una ética inquebrantable. Mi compromiso es proporcionar una representación que trascienda la simple defensa."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-secondary"></div>
                <span className="font-bold text-primary-container tracking-tighter">JUAN FELIPE RESTREPO SÁNCHEZ</span>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary-fixed text-on-secondary-fixed p-6 rounded-2xl shadow-lg z-10">
              <span className="text-3xl font-black block leading-none">UPB</span>
              <span className="text-xs font-bold uppercase tracking-widest mt-1 block">Especialista Certificado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
