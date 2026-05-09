"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        {/* Cool blue grading and dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-primary/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      <div className="container-max relative z-10 w-full">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
          <h1 className="text-h1-hero text-white">
            Behavioral Excellence Certification for Organizations in the UAE
          </h1>
          
          <p className="text-body text-white/90 max-w-2xl">
            Enhancing accountability, leadership, and workplace performance through structured behavioral training.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-white h-16 px-12 text-[18px] font-bold rounded-[8px] shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/courses">
                Get Started
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary h-16 px-12 text-[18px] font-bold rounded-[8px] transition-all"
            >
              <Link href="/request-proposal">
                Request a Proposal
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
