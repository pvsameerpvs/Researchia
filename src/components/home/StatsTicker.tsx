"use client";

export default function StatsTicker() {
  return (
    <div className="bg-white border-y border-slate-100 py-10 overflow-hidden hidden md:block">
       <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-12 text-slate-300 font-black uppercase tracking-[0.4em] text-[10px]">
             <div className="flex items-center gap-4 group cursor-default"><div className="w-2 h-2 rounded-full bg-primary mb-0.5"></div><span className="group-hover:text-slate-900 transition-colors">Neuroscience Lab</span></div>
             <div className="flex items-center gap-4 group cursor-default"><div className="w-2 h-2 rounded-full bg-slate-200 mb-0.5"></div><span className="group-hover:text-slate-900 transition-colors">Kinship Systems</span></div>
             <div className="flex items-center gap-4 group cursor-default"><div className="w-2 h-2 rounded-full bg-slate-200 mb-0.5"></div><span className="group-hover:text-slate-900 transition-colors">Cognitive Bias Archive</span></div>
             <div className="flex items-center gap-4 group cursor-default"><div className="w-2 h-2 rounded-full bg-slate-200 mb-0.5"></div><span className="group-hover:text-slate-900 transition-colors">Prosocial Metrics</span></div>
             <div className="flex items-center gap-4 group cursor-default"><div className="w-2 h-2 rounded-full bg-slate-200 mb-0.5"></div><span className="group-hover:text-slate-900 transition-colors">Institutional Ethics</span></div>
          </div>
       </div>
    </div>
  );
}
