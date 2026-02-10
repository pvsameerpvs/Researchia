"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]"></div>
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Advance Your <br />Research Candidacy</h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">
              Join our elite circle of 10,000+ doctoral candidates. Access unlimited institutional resources and start your investigation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-12 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                Apply for Candidacy
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-16 px-12 rounded-2xl font-black text-lg backdrop-blur-sm">
                Research Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
