"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowLeft, Eye, CheckCircle2, Loader2, BookOpenText } from "lucide-react";
import { readingMaterialsData, type ReadingMaterial } from "@/lib/fake-data";
import { useState } from "react";

export default function ReadingModulePage() {
  const [materials, setMaterials] = useState<ReadingMaterial[]>(readingMaterialsData);
  const [loadingId, setLoadingId] = useState<string | null>(null);

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

      <section className="flex-grow min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" asChild className="p-0 hover:bg-transparent h-auto hover:text-primary">
               <Link href="/learning/dashboard" className="flex items-center gap-2 group text-primary font-bold">
                 <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                   <ArrowLeft size={20} />
                 </div>
                 Back to Curriculum
               </Link>
             </Button>
            <div className="h-10 w-px bg-primary/10 hidden md:block"></div>
            <div className="space-y-1">
              <h1 className="text-3xl font-serif font-medium text-primary">Research <span className="italic">Portal</span></h1>
              <p className="text-secondary text-xs font-bold uppercase tracking-widest">Scholarly Manuscripts • Behavioral Archives</p>
            </div>
          </div>

          <div className="bg-white border border-primary/5 rounded-[40px] p-8 md:p-12 space-y-12 shadow-2xl shadow-primary/[0.02]">
            
            <div className="space-y-8">
               <div className="flex justify-between items-end border-b border-primary/5 pb-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif font-medium text-primary flex items-center gap-3">
                      <BookOpenText className="text-accent" size={24} />
                      Curated Readings
                    </h2>
                    <p className="text-sm text-muted-text font-light">Academic foundations for modern behavioral analysis.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-text block mb-1">Knowledge Acquired</span>
                    <span className="text-3xl font-serif italic text-accent animate-in fade-in zoom-in duration-500" key={progressPercentage}>{progressPercentage}%</span>
                  </div>
               </div>

               {/* Progress Bar */}
               <div className="w-full h-1.5 bg-primary/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {materials.map((item) => (
                   <div 
                     key={item.id} 
                     onClick={() => handleAction(item.id, "view")}
                     className={`group relative p-6 rounded-[32px] border transition-all duration-300 cursor-pointer ${
                       item.status === 'completed' 
                         ? 'bg-primary/[0.02] border-primary/5 hover:bg-primary/[0.04]' 
                         : 'bg-white border-primary/5 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/[0.03]'
                     }`}
                   >
                     {/* Status Icon */}
                     <div className="absolute top-6 right-6">
                       {loadingId === item.id ? (
                         <Loader2 size={18} className="text-primary animate-spin" />
                       ) : item.status === 'completed' ? (
                         <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                           <CheckCircle2 size={14} strokeWidth={3} />
                         </div>
                       ) : (
                         <div className="w-6 h-6 border-2 border-primary/10 rounded-full group-hover:border-accent/50 transition-colors"></div>
                       )}
                     </div>

                     <div className="flex items-start gap-4 mb-6">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                         item.status === 'completed' ? 'bg-primary text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'
                       }`}>
                         <FileText size={24} />
                       </div>
                       <div className="space-y-1 pr-8">
                         <h3 className={`font-bold text-lg leading-tight transition-colors ${item.status === 'completed' ? 'text-primary/40 line-through' : 'text-primary'}`}>
                           {item.title}
                         </h3>
                         <p className="text-xs text-muted-text line-clamp-2 font-light">{item.description}</p>
                         <p className="text-[10px] uppercase font-black tracking-widest text-accent pt-1">{item.pages} Pages • Digital Manuscript</p>
                       </div>
                     </div>

                     <div className="flex gap-3 mt-auto">
                       <Button 
                         variant={item.status === 'completed' ? "outline" : "default"}
                         size="sm" 
                         className={`flex-1 font-bold h-11 rounded-xl transition-all ${
                           item.status === 'completed' 
                             ? "bg-white hover:bg-primary/5 border-primary/10 text-primary" 
                             : "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                         }`}
                         onClick={(e) => {
                           e.stopPropagation();
                           handleAction(item.id, "view");
                         }}
                         disabled={loadingId === item.id}
                       >
                         <Eye size={14} className="mr-2" />
                         Read Paper
                       </Button>
                       <Button 
                         variant="outline" 
                         size="sm" 
                         className="flex-1 font-bold h-11 rounded-xl border-primary/10 text-primary hover:bg-accent/10 hover:text-accent hover:border-accent/30 transition-all"
                         onClick={(e) => {
                           e.stopPropagation();
                           handleAction(item.id, "download");
                         }}
                         disabled={loadingId === item.id}
                       >
                         <Download size={14} className="mr-2" />
                         Download
                       </Button>
                     </div>
                   </div>
                 ))}
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

