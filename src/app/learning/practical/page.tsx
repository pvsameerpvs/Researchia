"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, Upload, ListTodo, AlertTriangle, Loader2, Microscope, FileCheck } from "lucide-react";
import { practicalChecklistData, type ChecklistItem } from "@/lib/fake-data";
import { useState, useRef, ChangeEvent } from "react";

export default function PracticalModulePage() {
  const [tasks, setTasks] = useState<ChecklistItem[]>(practicalChecklistData);
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const completedCount = tasks.filter(i => i.status === "completed").length;
  const totalCount = tasks.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  const handleTaskAction = (taskId: string, actionType: "complete" | "upload") => {
    if (actionType === "complete") {
      setLoadingTaskId(taskId);
      setTimeout(() => {
        setTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: "completed" } : t
        ));
        setLoadingTaskId(null);
      }, 500);
    } else if (actionType === "upload") {
      fileInputRef.current?.click();
      fileInputRef.current?.setAttribute("data-task-id", taskId);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const taskId = e.target.getAttribute("data-task-id");
    
    if (file && taskId) {
      setLoadingTaskId(taskId);
      setTimeout(() => {
        setTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: "completed" } : t
        ));
        setLoadingTaskId(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 1500);
    }
  };

  const CheckItem = ({ item }: { item: ChecklistItem }) => {
    const isLoading = loadingTaskId === item.id;
    const containerClasses = "flex items-center gap-6 p-6 rounded-[32px] border transition-all duration-500 group relative overflow-hidden";
    
    if (item.status === "completed") {
      return (
        <div className={`${containerClasses} bg-primary/[0.02] border-primary/5 opacity-60`}>
          <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
            <CheckCircle2 size={24} strokeWidth={3} />
          </div>
          <span className="text-lg font-bold text-primary/50 line-through">{item.title}</span>
          <div className="ml-auto text-[10px] font-black uppercase tracking-widest text-primary/30">Validated</div>
        </div>
      );
    }

    if (item.status === "pending") {
      return (
        <div className={`${containerClasses} bg-white border-primary/5 shadow-xl shadow-primary/[0.02] hover:shadow-primary/[0.04] hover:border-accent/30`}>
          <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary/30 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <Microscope size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">{item.title}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-text">Pending Investigation</span>
          </div>
          
          <div className="ml-auto flex items-center gap-3">
             <Button 
              size="sm" 
              className="h-11 px-6 rounded-xl font-bold text-xs bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all"
              onClick={() => handleTaskAction(item.id, "complete")}
              disabled={isLoading}
             >
               {isLoading ? <Loader2 size={14} className="animate-spin mr-2" /> : <FileCheck size={14} className="mr-2" />}
               Log Completion
             </Button>
          </div>
        </div>
      );
    }

    if (item.status === "action_required") {
      return (
        <div className={`${containerClasses} bg-white border-accent/20 shadow-xl shadow-accent/[0.05] hover:shadow-accent/[0.1] hover:border-accent/40 ring-1 ring-accent/5`}>
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0 animate-pulse">
             <AlertTriangle size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary">{item.title}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent">Peer Review Required</span>
          </div>
           <Button 
            size="sm" 
            className="ml-auto h-11 px-6 rounded-xl font-bold text-xs bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5"
            onClick={() => handleTaskAction(item.id, "upload")}
            disabled={isLoading}
           >
             {isLoading ? <Loader2 size={14} className="animate-spin mr-2" /> : <Upload size={14} className="mr-2" />}
             {isLoading ? "Submitting..." : "Submit Manuscript"}
           </Button>
        </div>
      );
    }
    
    return null;
  };

  return (
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />

      <section className="flex-grow min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl space-y-12 relative z-10 animate-in fade-in slide-in-from-right-8 duration-700">
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" asChild className="p-0 hover:bg-transparent h-auto hover:text-primary">
               <Link href="/learning/dashboard" className="flex items-center gap-2 group text-primary font-bold">
                 <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                   <ArrowLeft size={20} />
                 </div>
                 Curriculum
               </Link>
             </Button>
            <div className="h-10 w-px bg-primary/10 hidden md:block"></div>
            <div className="space-y-1">
              <h1 className="text-3xl font-serif font-medium text-primary">Practical <span className="italic">Inquiry</span></h1>
              <p className="text-secondary text-xs font-bold uppercase tracking-widest">Field Assignments • Empirical Data Logging</p>
            </div>
          </div>

          <div className="bg-white border border-primary/5 rounded-[48px] p-10 md:p-16 space-y-12 shadow-2xl shadow-primary/[0.02]">
            
            <div className="space-y-8">
              <h2 className="text-2xl font-serif font-medium text-primary flex items-center gap-4">
                <ListTodo className="text-accent" size={28} />
                Scientific Checklist
              </h2>
              
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />

              <div className="space-y-4">
                {tasks.map((item) => (
                  <CheckItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="text-accent font-serif italic text-4xl animate-in fade-in zoom-in duration-700" key={progressPercentage}>{progressPercentage}%</span>
                <span className="text-[10px] font-black text-muted-text uppercase tracking-[0.2em] pt-1">Milestones Verified</span>
              </div>
              <div className="w-full md:w-1/2 h-2 bg-primary/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-between items-center pt-8 border-t border-primary/5">
            <span className="text-[10px] font-black text-muted-text uppercase tracking-widest italic">© 2026 BHK Sovereign Authority • Empirical Research Division</span>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

