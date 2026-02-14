"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowLeft, Upload, ListTodo, AlertTriangle } from "lucide-react";

export default function PracticalModulePage() {
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
              <div className="space-y-4">
                
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-medium text-foreground line-through opacity-70">Read the provided course material</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-xl border border-muted/50 hover:bg-muted/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg font-medium text-foreground line-through opacity-70">Watch the instructional video</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm ring-2 ring-red-500/10">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 animate-pulse">
                    <XCircle size={18} />
                  </div>
                  <span className="text-lg font-bold text-foreground">Complete the listed practical assignments</span>
                  <span className="ml-auto text-xs font-bold text-red-500 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">Pending</span>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-red-100 shadow-sm ring-2 ring-red-500/10">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 animate-pulse">
                     <AlertTriangle size={18} />
                  </div>
                  <span className="text-lg font-bold text-foreground">Upload your answers for review</span>
                   <Button size="sm" className="ml-auto bg-primary text-white font-bold h-8 text-xs hover:bg-primary/90 transition-colors">
                     <Upload size={14} className="mr-2" /> Upload
                   </Button>
                </div>

              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                <span className="text-primary font-black text-2xl">50%</span> Completed
              </div>
              <div className="w-full md:w-1/2 h-4 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/2 rounded-full shadow-[0_0_10px_2px_rgba(var(--primary),0.3)]"></div>
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
