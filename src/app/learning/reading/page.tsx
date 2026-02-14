"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Download, ArrowLeft } from "lucide-react";

export default function ReadingModulePage() {
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

          <div className="bg-card border border-border rounded-2xl p-10 md:p-16 text-center space-y-8 shadow-sm">
            
            <div className="w-24 h-24 bg-red-100 rounded-3xl mx-auto flex items-center justify-center text-red-600 shadow-inner">
              <FileText size={48} />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Course Material.pdf</h2>
              <p className="text-muted-foreground font-medium">20 pages • comprehensive guide</p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Download the PDF document and read through the course material for this module. Ensure you take notes for the final assessment.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20 rounded-xl transition-transform hover:scale-105">
                <Download size={20} className="mr-2" />
                Download PDF
              </Button>
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
