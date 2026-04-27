"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, Upload, Loader2, ClipboardList, Sparkles, BookOpen, MonitorPlay } from "lucide-react";
import { practicalChecklistData, type ChecklistItem } from "@/lib/fake-data";
import { useState } from "react";

export default function PracticalModulePage() {
  const [tasks, setTasks] = useState<ChecklistItem[]>(practicalChecklistData);
  const [activeId, setActiveId] = useState<string>(tasks[0].id);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const activeTask = tasks.find(t => t.id === activeId) || tasks[0];
  const completedCount = tasks.filter(t => t.status === "completed").length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  const handleStatusChange = (id: string) => {
    setLoadingId(id);
    setTimeout(() => {
      setTasks(prev => prev.map(t => 
        t.id === id ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' } : t
      ));
      setLoadingId(null);
    }, 600);
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
                <h1 className="text-3xl font-serif font-medium text-primary tracking-tight">Practical <span className="italic">Inquiry</span></h1>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">Field Assignments • Empirical Data Logging</p>
              </div>
            </div>

            <div className="bg-white px-6 py-4 rounded-3xl border border-primary/5 shadow-xl shadow-primary/[0.02] flex items-center gap-8">
               <div className="text-right">
                 <p className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1">Investigation Progress</p>
                 <p className="text-2xl font-serif italic text-primary">{progressPercent}%</p>
               </div>
               <div className="w-32 h-2 bg-primary/5 rounded-full overflow-hidden">
                 <div className="h-full bg-accent" style={{ width: `${progressPercent}%` }}></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Task Detail Area */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[48px] p-10 border border-primary/5 shadow-2xl shadow-primary/[0.03] space-y-10 min-h-[500px] flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-primary/5 pb-10">
                   <div className="space-y-4">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest">
                       <ClipboardList size={14} className="text-accent" />
                       Scientific Milestone
                     </div>
                     <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary leading-tight">
                       {activeTask.title}
                     </h2>
                     <p className="text-secondary text-sm leading-relaxed max-w-2xl font-light">
                       Documented evidence of field observation and behavioral analysis required for institutional validation. Scholars must maintain rigorous documentation standards.
                     </p>
                   </div>
                   <div className="flex flex-col gap-3">
                     <Button 
                       onClick={() => handleStatusChange(activeTask.id)}
                       className={`h-14 px-8 rounded-2xl font-bold shadow-xl transition-all hover:scale-[1.02] ${
                         activeTask.status === 'completed' 
                         ? 'bg-accent text-accent-foreground shadow-accent/20' 
                         : 'bg-primary text-white shadow-primary/20'
                       }`}
                       disabled={loadingId === activeTask.id}
                     >
                       {loadingId === activeTask.id ? <Loader2 size={18} className="animate-spin mr-2" /> : <CheckCircle2 size={18} className="mr-2" />}
                       {activeTask.status === 'completed' ? 'Investigation Logged' : 'Finalize Submission'}
                     </Button>
                   </div>
                </div>

                <div className="flex-grow flex items-center justify-center bg-primary/[0.01] rounded-[32px] border-2 border-dashed border-primary/5 p-12">
                   <div className="text-center space-y-6 max-w-sm">
                      <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center text-primary/20 mx-auto transition-transform hover:rotate-12">
                        <Upload size={48} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold text-primary">Evidence Depository</h4>
                        <p className="text-xs text-muted-text leading-relaxed font-light">
                          Drag and drop your research logs or select the &apos;Finalize&apos; button to log your practical inquiry for faculty review.
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Sidebar Task List */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2 px-2">
                <Sparkles size={16} className="text-accent" />
                Active Inquiry List
              </div>
              <div className="space-y-4">
                {tasks.map((item) => (
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
                        {item.type === 'reading' && <BookOpen size={24} />}
                        {item.type === 'video' && <MonitorPlay size={24} />}
                        {item.type === 'assignment' && <ClipboardList size={24} />}
                        {item.type === 'upload' && <Upload size={24} />}
                      </div>
                      <div className="flex-grow space-y-1.5 pr-4">
                        <h3 className={`font-bold text-xs leading-tight transition-colors ${activeId === item.id ? 'text-white' : 'text-primary'}`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${activeId === item.id ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary'}`}>
                            {item.type}
                          </span>
                          {item.status === 'completed' && (
                            <span className="text-[8px] text-accent font-black uppercase tracking-widest flex items-center gap-1">
                               <CheckCircle2 size={10} /> Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authority Card */}
              <div className="bg-primary p-10 rounded-[48px] text-white space-y-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                 <CheckCircle2 size={40} className="text-accent" />
                 <h4 className="text-xl font-serif italic leading-tight">Institutional Faculty Review</h4>
                 <p className="text-white/60 text-xs leading-relaxed font-light">
                   All practical submissions are reviewed by the board of clinical psychologists within 48 business hours.
                 </p>
                 <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl py-6 font-bold uppercase text-[10px] tracking-[0.2em]">
                   Faculty Inquiry
                 </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
