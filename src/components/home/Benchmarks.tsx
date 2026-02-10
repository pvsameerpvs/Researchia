"use client";

import { Microscope, ShieldCheck, Library } from "lucide-react";

export default function Benchmarks() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-xs font-black text-primary uppercase tracking-[0.5em]">Institutional Merit</h2>
          <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">The Researchia Protocol</h3>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium italic">
            Academic infrastructure engineered for breakthrough discovery in human psychology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {[
            {
              icon: <Microscope className="text-primary" size={32} />,
              title: "Global Observation Lab",
              desc: "Secure entry into virtual research environments and curated longitudinal datasets from 180+ global districts."
            },
            {
              icon: <ShieldCheck className="text-emerald-500" size={32} />,
              title: "Doctoral Guardianship",
              desc: "1-on-1 intellectual guidance from principal researchers and clinical scientists holding lifetime tenure."
            },
            {
              icon: <Library className="text-blue-500" size={32} />,
              title: "Scholarly Manuscript Vault",
              desc: "Exclusive access to non-public behavioral mappings, neuro-anatomical scans, and peer-reviewed case studies."
            }
          ].map((feature, idx) => (
            <div key={idx} className="group p-12 rounded-[56px] bg-slate-50 border border-slate-100 hover:border-slate-900 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] transition-all duration-700 hover:-translate-y-4 text-center flex flex-col items-center gap-10">
              <div className="w-24 h-24 rounded-[32px] bg-white flex items-center justify-center shadow-xl shadow-slate-200/50 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 rotate-3 group-hover:rotate-0">
                {feature.icon}
              </div>
              <div className="space-y-6">
                 <h3 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic">{feature.title}</h3>
                 <p className="text-slate-500 leading-relaxed font-medium text-lg italic italic">
                   {feature.desc}
                 </p>
              </div>
               <div className="w-12 h-1 bg-slate-100 group-hover:bg-primary transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
