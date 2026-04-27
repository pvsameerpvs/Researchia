"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowLeft, Eye, CheckCircle2, Loader2, BookOpenText, Sparkles } from "lucide-react";
import { readingMaterialsData, type ReadingMaterial } from "@/lib/fake-data";
import { useState } from "react";

export default function ReadingModulePage() {
  const [materials, setMaterials] = useState<ReadingMaterial[]>(readingMaterialsData);
  const [activeId, setActiveId] = useState<string>(materials[0].id);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const activeMaterial = materials.find(m => m.id === activeId) || materials[0];
  const completedCount = materials.filter(m => m.status === "completed").length;
  const totalCount = materials.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

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
                       "{activeMaterial.description}"
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
                     <Button 
                       variant="outline"
                       onClick={() => handleAction(activeMaterial.id, "download")}
                       className="h-12 px-8 rounded-xl border-primary/10 text-primary font-bold hover:bg-primary/5"
                     >
                       <Download size={16} className="mr-2 text-accent" />
                       Save Archive
                     </Button>
                   </div>
                </div>

                <div className="flex-grow flex items-center justify-center bg-primary/[0.01] rounded-[32px] border-2 border-dashed border-primary/5 p-12">
                   <div className="text-center space-y-6 max-w-sm">
                      <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary/20 mx-auto">
                        <BookOpenText size={48} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-primary">Interactive Preview</h4>
                        <p className="text-xs text-muted-text leading-relaxed font-light">
                          Select a manuscript from the archive to begin your investigation. Complete the reading to earn institutional milestones.
                        </p>
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
                    onClick={() => setActiveId(item.id)}
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
            <span className="text-[10px] font-black text-muted-text uppercase tracking-widest italic">© 2026 BHK Sovereign Authority • Certification Division</span>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

