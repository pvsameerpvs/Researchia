"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowLeft, Eye, Loader2, BookOpenText, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { readingMaterialsData, type ReadingMaterial } from "@/lib/fake-data";
import { useState } from "react";

export default function ReadingModulePage() {
  const [materials, setMaterials] = useState<ReadingMaterial[]>(readingMaterialsData);
  const [activeId, setActiveId] = useState<string>(materials[0].id);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const activeMaterial = materials.find(m => m.id === activeId) || materials[0];
  const completedCount = materials.filter(m => m.status === "completed").length;
  const totalCount = materials.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  // Reset page when switching materials
  const handleMaterialSelect = (id: string) => {
    setActiveId(id);
    setCurrentPage(1);
  };

  const handleAction = (id: string, action: "view" | "download") => {
    setLoadingId(id);
    
    setTimeout(() => {
      setMaterials(prev => prev.map(m => 
        m.id === id ? { ...m, status: "completed" } : m
      ));
      setLoadingId(null);

      if (action === "view") {
        window.open(materials.find(m => m.id === id)?.url || "#", "_blank");
      } else {
        const link = document.createElement('a');
        link.href = materials.find(m => m.id === id)?.url || "#";
        link.download = `material-${id}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />

      <section className="flex-grow min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-6xl space-y-10 animate-in fade-in slide-in-from-right-8 duration-700 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Button variant="ghost" asChild className="p-0 hover:bg-transparent h-auto hover:text-primary">
                 <Link href="/learning/dashboard" className="flex items-center gap-2 group text-primary font-bold">
                   <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <ArrowLeft size={20} />
                   </div>
                   Back
                 </Link>
               </Button>
              <div className="h-10 w-px bg-primary/10 hidden md:block"></div>
              <div className="space-y-1">
                <h1 className="text-3xl font-serif font-medium text-primary tracking-tight">Research <span className="italic">Portal</span></h1>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">Scholarly Manuscripts • Behavioral Archives</p>
              </div>
            </div>

            <div className="bg-white px-6 py-4 rounded-3xl border border-primary/5 shadow-xl shadow-primary/[0.02] flex items-center gap-8">
               <div className="text-right">
                 <p className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1">Module Progression</p>
                 <p className="text-2xl font-serif italic text-primary">{progressPercentage}%</p>
               </div>
               <div className="w-32 h-2 bg-primary/5 rounded-full overflow-hidden">
                 <div className="h-full bg-accent" style={{ width: `${progressPercentage}%` }}></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Document Viewer Area */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[48px] p-10 border border-primary/5 shadow-2xl shadow-primary/[0.03] space-y-10 min-h-[600px] flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-primary/5 pb-10">
                   <div className="space-y-4">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
                       <FileText size={14} className="text-accent" />
                       Active Manuscript
                     </div>
                     <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary leading-tight">
                       {activeMaterial.title}
                     </h2>
                     <p className="text-secondary text-sm leading-relaxed max-w-2xl font-light italic">
                       &quot;{activeMaterial.description}&quot;
                     </p>
                   </div>
                   <div className="flex flex-col gap-3">
                     <Button 
                       onClick={() => handleAction(activeMaterial.id, "view")}
                       className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]"
                       disabled={loadingId === activeMaterial.id}
                     >
                       {loadingId === activeMaterial.id ? <Loader2 size={18} className="animate-spin mr-2" /> : <Eye size={18} className="mr-2" />}
                       Open Manuscript
                     </Button>
                     <div className="flex gap-2">
                       <Button 
                         variant="outline"
                         onClick={() => {
                           const currentIndex = materials.findIndex(m => m.id === activeId);
                           if (currentIndex > 0) setActiveId(materials[currentIndex - 1].id);
                         }}
                         disabled={materials.findIndex(m => m.id === activeId) === 0}
                         className="flex-1 h-12 rounded-xl border-primary/10 text-primary hover:bg-primary/5"
                       >
                         Previous
                       </Button>
                       <Button 
                         variant="outline"
                         onClick={() => {
                           const currentIndex = materials.findIndex(m => m.id === activeId);
                           if (currentIndex < materials.length - 1) setActiveId(materials[currentIndex + 1].id);
                         }}
                         disabled={materials.findIndex(m => m.id === activeId) === materials.length - 1}
                         className="flex-1 h-12 rounded-xl border-primary/10 text-primary hover:bg-primary/5"
                       >
                         Next
                       </Button>
                     </div>
                   </div>
                </div>

                <div className="flex-grow bg-slate-50/50 rounded-[32px] border border-primary/5 overflow-hidden flex flex-col shadow-inner">
                   <div className="bg-white/80 backdrop-blur-sm border-b border-primary/5 px-8 py-4 flex justify-between items-center">
                     <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary/40">
                       <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                       Live Institutional Viewer
                     </div>
                     <div className="flex items-center gap-4">
                       <span className="text-[10px] font-bold text-muted-text">Zoom: 100%</span>
                       <div className="h-4 w-px bg-primary/10"></div>
                       <div className="flex items-center gap-2">
                         <button 
                           onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                           disabled={currentPage === 1}
                           className="text-primary hover:text-accent disabled:text-primary/20 transition-colors"
                         >
                           <ChevronLeft size={16} />
                         </button>
                         <span className="text-[10px] font-bold text-muted-text w-16 text-center">Page: {currentPage} / {activeMaterial.pages}</span>
                         <button 
                           onClick={() => setCurrentPage(prev => Math.min(activeMaterial.pages, prev + 1))}
                           disabled={currentPage === activeMaterial.pages}
                           className="text-primary hover:text-accent disabled:text-primary/20 transition-colors"
                         >
                           <ChevronRight size={16} />
                         </button>
                       </div>
                     </div>
                   </div>

                   <div className="flex-grow overflow-y-auto p-12 space-y-10 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]">
                      {/* Manuscript Content Mockup */}
                      <div className="max-w-2xl mx-auto space-y-12 bg-white p-16 shadow-2xl border border-primary/5 min-h-[1000px] relative">
                        {/* Institutional Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                          <BookOpenText size={400} className="text-primary rotate-12" />
                        </div>

                        <div className="text-center space-y-4 border-b border-primary/5 pb-10 relative z-10">
                          <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">Institutional Archive No. {activeMaterial.id.toUpperCase()}</div>
                          <h3 className="text-3xl font-serif text-primary leading-tight px-4">{activeMaterial.title}</h3>
                          <div className="text-xs text-muted-text italic">CBHK Behavioral Authority • Page {currentPage} of {activeMaterial.pages}</div>
                        </div>

                        <div className="space-y-8 relative z-10">
                          <div className="space-y-4">
                            <h4 className="text-lg font-serif font-bold text-primary">Chapter {currentPage}: Behavioral Foundations</h4>
                            <p className="text-sm text-secondary leading-relaxed text-justify first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-primary">
                              {activeMaterial.description} This investigation aims to bridge the gap between theoretical behavioral frameworks and clinical observation. 
                              Through rigorous data synthesis and longitudinal study patterns, we establish a new baseline for professional certification standards. 
                            </p>
                          </div>
                        </div>

                        <div className="pt-20 text-center">
                          <div className="w-12 h-1 bg-primary/10 mx-auto rounded-full mb-6"></div>
                          <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em]">End of Page {currentPage} Preview</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Sidebar Archive List */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2 px-2">
                <Sparkles size={16} className="text-accent" />
                Curated Archives
              </div>
              <div className="space-y-4">
                {materials.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleMaterialSelect(item.id)}
                    className={`group relative p-5 rounded-[32px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                      activeId === item.id 
                        ? 'bg-primary border-primary shadow-2xl shadow-primary/20 -translate-y-1' 
                        : 'bg-white border-primary/5 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-5 relative z-10">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        activeId === item.id ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'
                      }`}>
                        <FileText size={24} />
                      </div>
                      <div className="flex-grow space-y-1.5">
                        <h3 className={`font-bold text-sm leading-tight transition-colors ${activeId === item.id ? 'text-white' : 'text-primary'}`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${activeId === item.id ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary'}`}>
                            {item.pages} Pages
                          </span>
                          {item.status === 'completed' && (
                            <span className="text-[9px] text-accent font-black uppercase tracking-widest">Analyzed</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resource Card */}
              <div className="bg-primary p-10 rounded-[48px] text-white space-y-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                 <BookOpenText size={40} className="text-accent" />
                 <h4 className="text-xl font-serif italic leading-tight">Advanced Field Research Manuscripts</h4>
                 <p className="text-white/60 text-xs leading-relaxed font-light">
                   Request temporary access to restricted behavioral datasets and longitudinal observations.
                 </p>
                 <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl py-6 font-bold uppercase text-[10px] tracking-[0.2em]">
                   Request Clearance
                 </Button>
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center pt-8 border-t border-primary/5">
            <span className="text-[10px] font-black text-muted-text uppercase tracking-widest italic">© 2026 CBHK Sovereign Authority • Certification Division</span>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

