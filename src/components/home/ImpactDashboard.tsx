"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Sparkles } from "lucide-react";

export default function ImpactDashboard() {
  return (
    <section className="py-32 bg-background overflow-hidden relative">
       <div className="container mx-auto px-4 md:px-6">
          <div className="bg-card rounded-[80px] p-12 md:p-24 border border-border shadow-2xl flex flex-col lg:flex-row gap-20 items-center">
             <div className="flex-1 space-y-10 order-2 lg:order-1 text-center lg:text-left">
                <div className="space-y-4">
                   <h4 className="text-xs font-black text-primary uppercase tracking-[0.4em]">Quantitative Evidence</h4>
                  <h3 className="text-5xl font-black text-foreground tracking-tighter uppercase italic">Scholarly Impact metrics</h3>
               </div>
               <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-2">
                     <div className="text-5xl font-black text-foreground tracking-tighter tabular-nums">1.2M+</div>
                     <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Observations Recorded</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-5xl font-black text-foreground tracking-tighter tabular-nums">98.4%</div>
                     <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Doctoral Success Rate</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-5xl font-black text-foreground tracking-tighter tabular-nums">240+</div>
                     <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Active Partner Universities</div>
                  </div>
                  <div className="space-y-2">
                     <div className="text-5xl font-black text-foreground tracking-tighter tabular-nums">16.8K</div>
                     <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Manuscripts Cited Yearly</div>
                  </div>
               </div>
               <Button size="lg" className="h-20 px-12 rounded-[32px] font-black bg-foreground text-background hover:bg-foreground/90 uppercase text-xs tracking-widest gap-4 mx-auto lg:mx-0">
                  Review Institutional Report
                  <ArrowRight size={20} />
               </Button>
             </div>
             <div className="flex-1 relative order-1 lg:order-2">
                <div className="aspect-square bg-foreground rounded-[60px] overflow-hidden rotate-2 relative shadow-2xl">
                   <Image 
                     src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                     alt="Clinical Review" 
                     fill 
                     className="object-cover opacity-80"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white scale-110 animate-pulse">
                         <Award size={48} />
                      </div>
                   </div>
                </div>
                <div className="absolute -top-10 -right-10 bg-card p-8 rounded-[40px] shadow-2xl border border-border rotate-6 hidden md:block">
                   <Sparkles size={40} className="text-accent mb-4" />
                   <div className="text-2xl font-black italic text-foreground">Nobel Grade</div>
                   <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Data verification</div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
