"use client";

import { Globe, Users, CheckCircle2 } from "lucide-react";

export default function InstitutionalExcellence() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Institutional Excellence</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
            Providing the academic infrastructure required for groundbreaking behavioral discovery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: <Globe className="text-primary" size={32} />,
              title: "Global Lab Access",
              desc: "Engage with virtual research laboratories and longitudinal datasets from any academic district globally."
            },
            {
              icon: <Users className="text-emerald-500" size={32} />,
              title: "Doctoral Mentorship",
              desc: "Work directly with tenured professors and principal researchers with decades of clinical experience."
            },
            {
              icon: <CheckCircle2 className="text-purple-500" size={32} />,
              title: "Peer-Reviewed Content",
              desc: "Access exclusive manuscripts, neuro-anatomical mappings, and structured observational data sets."
            }
          ].map((feature, idx) => (
            <div key={idx} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 pt-4">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
