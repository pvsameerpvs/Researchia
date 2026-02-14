"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowLeft, Eye, CheckCircle2, Loader2 } from "lucide-react";
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
    
    // Simulate network delay for better UX
    setTimeout(() => {
      // Mark as completed
      setMaterials(prev => prev.map(m => 
        m.id === id ? { ...m, status: "completed" } : m
      ));
      setLoadingId(null);

      if (action === "view") {
        // Mock opening PDF in new tab
        window.open(materials.find(m => m.id === id)?.url || "#", "_blank");
      } else {
        // Mock download
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
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
               <Link href="/learning/dashboard"><ArrowLeft size={24} className="text-muted-foreground hover:text-foreground transition-colors" /></Link>
             </Button>
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-foreground">Reading Module</h1>
              <p className="text-muted-foreground text-sm font-medium">Level 1 Course • Reading Section</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-12 space-y-12 shadow-sm">
            
            <div className="space-y-6">
               <div className="flex justify-between items-end border-b border-border pb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Course Materials</h2>
                    <p className="text-sm text-muted-foreground mt-1">Access all required readings below.</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Progress</span>
                    <span className="text-2xl font-black text-primary animate-in fade-in zoom-in duration-500" key={progressPercentage}>{progressPercentage}%</span>
                  </div>
               </div>

               {/* Progress Bar */}
               <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full shadow-[0_0_10px_2px_rgba(var(--primary),0.3)] transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ width: `${progressPercentage}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                 {materials.map((item) => (
                   <div 
                     key={item.id} 
                     onClick={() => handleAction(item.id, "view")}
                     className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                       item.status === 'completed' 
                         ? 'bg-emerald-50/30 border-emerald-100 hover:bg-emerald-50/50' 
                         : 'bg-white border-border hover:border-primary/30 hover:shadow-lg'
                     }`}
                   >
                     {/* Status Icon */}
                     <div className="absolute top-4 right-4">
                       {loadingId === item.id ? (
                         <Loader2 size={18} className="text-primary animate-spin" />
                       ) : item.status === 'completed' ? (
                         <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 animate-in zoom-in duration-300">
                           <CheckCircle2 size={14} strokeWidth={3} />
                         </div>
                       ) : (
                         <div className="w-6 h-6 border-2 border-muted rounded-full group-hover:border-primary/50 transition-colors"></div>
                       )}
                     </div>

                     <div className="flex items-start gap-4 mb-6">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                         item.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-50 text-blue-600'
                       }`}>
                         <FileText size={24} />
                       </div>
                       <div className="space-y-1 pr-8">
                         <h3 className={`font-bold text-lg leading-tight transition-colors ${item.status === 'completed' ? 'text-emerald-900 line-through opacity-70' : 'text-foreground'}`}>
                           {item.title}
                         </h3>
                         <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                         <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground/60 pt-1">{item.pages} Pages • PDF</p>
                       </div>
                     </div>

                     <div className="flex gap-3 mt-auto">
                       <Button 
                         variant={item.status === 'completed' ? "outline" : "default"}
                         size="sm" 
                         className={`flex-1 font-bold h-9 text-xs transition-all ${
                           item.status === 'completed' 
                             ? "bg-white/50 hover:bg-emerald-100 hover:text-emerald-700 border-emerald-200" 
                             : "bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
                         }`}
                         onClick={(e) => {
                           e.stopPropagation();
                           handleAction(item.id, "view");
                         }}
                         disabled={loadingId === item.id}
                       >
                         <Eye size={14} className="mr-2" />
                         View PDF
                       </Button>
                       <Button 
                         variant="outline" 
                         size="sm" 
                         className="flex-1 font-bold h-9 text-xs border-border hover:bg-secondary/10 hover:text-secondary hover:border-secondary/30 transition-colors"
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

          <div className="flex justify-between items-center pt-8 border-t border-border">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">© 2026 Researchia Learning</span>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
