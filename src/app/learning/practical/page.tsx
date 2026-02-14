"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowLeft, Upload, ListTodo, AlertTriangle, Loader2 } from "lucide-react";
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
      // Simulate API call
      setTimeout(() => {
        setTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: "completed" } : t
        ));
        setLoadingTaskId(null);
      }, 0);
    } else if (actionType === "upload") {
      fileInputRef.current?.click();
      // We store the taskId to know which task is being uploaded for when the file input changes
      fileInputRef.current?.setAttribute("data-task-id", taskId);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const taskId = e.target.getAttribute("data-task-id");
    
    if (file && taskId) {
      setLoadingTaskId(taskId);
      // Simulate upload delay
      setTimeout(() => {
        setTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: "completed" } : t
        ));
        setLoadingTaskId(null);
        // Reset input
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 1500);
    }
  };

  const CheckItem = ({ item }: { item: ChecklistItem }) => {
    const isLoading = loadingTaskId === item.id;

    if (item.status === "completed") {
      return (
        <div className="flex items-center gap-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <CheckCircle2 size={18} />
          </div>
          <span className="text-lg font-bold text-emerald-900 line-through opacity-60 decoration-emerald-500/30">{item.title}</span>
          <span className="ml-auto text-xs font-black text-emerald-600 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">Done</span>
        </div>
      );
    }

    if (item.status === "pending") {
      return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm ring-1 ring-red-500/10 transition-all hover:shadow-md">
          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0 animate-pulse">
            <XCircle size={18} />
          </div>
          <span className="text-lg font-bold text-foreground">{item.title}</span>
          
          <div className="ml-auto flex items-center gap-3">
             <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded hidden sm:inline-block">Pending</span>
             {item.type === 'assignment' && (
               <Button 
                size="sm" 
                variant="outline"
                className="h-8 text-xs font-bold border-red-200 hover:bg-red-50 hover:text-red-600"
                onClick={() => handleTaskAction(item.id, "complete")}
                disabled={isLoading}
               >
                 {isLoading ? <Loader2 size={14} className="animate-spin mr-2" /> : <CheckCircle2 size={14} className="mr-2" />}
                 Mark Complete
               </Button>
             )}
          </div>
        </div>
      );
    }

    if (item.status === "action_required") {
      return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-amber-100 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/20">
          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0 animate-pulse">
             <AlertTriangle size={18} />
          </div>
          <span className="text-lg font-bold text-foreground">{item.title}</span>
           <Button 
            size="sm" 
            className="ml-auto bg-primary text-white font-bold h-9 text-xs hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:scale-105"
            onClick={() => handleTaskAction(item.id, "upload")}
            disabled={isLoading}
           >
             {isLoading ? <Loader2 size={14} className="animate-spin mr-2" /> : <Upload size={14} className="mr-2" />}
             {isLoading ? "Uploading..." : "Upload File"}
           </Button>
        </div>
      );
    }
    
    return null;
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12">
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
               <Link href="/learning/dashboard"><ArrowLeft size={24} className="text-muted-foreground hover:text-foreground transition-colors" /></Link>
             </Button>
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-foreground">Practical Module</h1>
              <p className="text-muted-foreground text-sm font-medium">Level 1 Course • Practical Section</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-10 md:p-16 space-y-12 shadow-sm">
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <ListTodo className="text-primary" />
                Research Checklist
              </h2>
              
              {/* Hidden File Input */}
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

            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <span className="text-primary font-black text-2xl animate-in fade-in zoom-in duration-500" key={progressPercentage}>{progressPercentage}%</span> Completed
              </div>
              <div className="w-full md:w-1/2 h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full shadow-[0_0_10px_2px_rgba(var(--primary),0.3)] transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] skew-x-12"></div>
                </div>
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
