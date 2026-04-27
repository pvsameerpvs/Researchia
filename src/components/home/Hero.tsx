"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        {/* Subtle gradient overlay to ensure text readability on mobile and left side */}
        <div className="absolute inset-0 bg-primary/20 md:bg-transparent md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium text-white leading-[1.1] tracking-tight">
            About CBHK <br className="hidden md:block" />
            Certification
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
            Our CBHK Certification Programs provide professionals with the elite curriculum, 
            practical insights, and global recognition needed to excel in today&apos;s competitive market.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Button 
              asChild 
              size="lg" 
              className="h-16 px-10 text-lg font-bold rounded-none bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl transition-all hover:translate-y-[-2px] border-none"
            >
              <Link href="/courses" className="flex items-center gap-3">
                Courses
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </Button>
            
          </div>
        </div>
      </div>
      
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-accent/80 z-20"></div>
    </section>
  );
}
