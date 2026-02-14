"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, MonitorPlay } from "lucide-react";

export default function WatchingModulePage() {
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
              <h1 className="text-3xl font-black text-foreground">Watching Module</h1>
              <p className="text-muted-foreground text-sm font-medium">Level 1 Course • Video Lectures</p>
            </div>
          </div>

          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative aspect-video group cursor-pointer border-4 border-slate-900">
            {/* Mock Video Player */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play size={48} fill="white" className="text-white ml-2" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <h3 className="text-white font-bold text-2xl">Lesson 1: Introduction to Research Methods</h3>
              <p className="text-slate-300 text-sm mt-2">Duration: 45:00 • HD Quality</p>
              
              <div className="mt-6 flex items-center gap-4">
                 <div className="h-1 bg-white/20 rounded-full flex-grow overflow-hidden">
                   <div className="h-full bg-primary w-[10%] shadow-[0_0_10px_rgba(var(--primary),0.8)]"></div>
                 </div>
                 <span className="text-xs font-mono text-white/70">04:32 / 45:00</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 flex gap-4 hover:bg-muted/50 transition-colors cursor-pointer group">
                <div className="w-24 h-16 bg-slate-900 rounded-lg flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                  <MonitorPlay size={20} className="text-slate-600 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground line-clamp-1">Advanced Behavioral Analysis Part {i}</h4>
                  <p className="text-xs text-muted-foreground">12:00 mins</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
