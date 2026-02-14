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
    
    // Common container styles for a clean Google-like card look
    const containerClasses = "flex items-center gap-5 p-5 rounded-xl border transition-all duration-300 group";
    
    if (item.status === "completed") {
      return (
        <div className={`${containerClasses} bg-slate-50 border-transparent opacity-80`}>
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 transition-transform group-hover:scale-110">
            <CheckCircle2 size={20} strokeWidth={3} />
          </div>
          <span className="text-lg font-medium text-slate-500 line-through decoration-slate-300">{item.title}</span>
        </div>
      );
    }

    if (item.status === "pending") {
      return (
        <div className={`${containerClasses} bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300`}>
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0 group-hover:text-primary transition-colors">
            <div className="w-3 h-3 rounded-full border-2 border-current"></div>
          </div>
          <span className="text-lg font-medium text-slate-700">{item.title}</span>
          
          <div className="ml-auto flex items-center gap-3">
             {item.type === 'assignment' && (
               <Button 
                size="sm" 
                className="h-9 px-4 rounded-full font-medium text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-none transition-all"
                onClick={() => handleTaskAction(item.id, "complete")}
                disabled={isLoading}
               >
                 {isLoading ? <Loader2 size={14} className="animate-spin mr-2" /> : null}
                 Mark as Done
               </Button>
             )}
          </div>
        </div>
      );
    }

    if (item.status === "action_required") {
      return (
        <div className={`${containerClasses} bg-white border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 ring-1 ring-blue-50`}>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 animate-[pulse_3s_infinite]">
             <AlertTriangle size={20} />
          </div>
          <span className="text-lg font-medium text-slate-800">{item.title}</span>
           <Button 
            size="sm" 
            className="ml-auto h-9 px-5 rounded-full font-medium text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 hover:shadow-xl transition-all hover:-translate-y-0.5"
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
