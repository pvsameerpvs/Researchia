"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/cta-bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-primary/80 md:bg-primary/70 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 p-12 md:p-24 text-center space-y-10 max-w-4xl mx-auto text-white">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold uppercase tracking-widest animate-pulse">
                <Sparkles size={16} />
                Applications Open
              </div>
            </div>

            <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tight leading-[1.1]">
              Advance Your <br />
              Research Candidacy
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
              Join our elite circle of 10,000+ doctoral candidates. Access unlimited 
              institutional resources and start your investigation today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Button 
                asChild
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-16 md:h-20 px-10 md:px-16 rounded-none font-bold text-lg md:text-xl shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/signup">
                  Apply for Candidacy
                </Link>
              </Button>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

