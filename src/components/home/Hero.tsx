"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* Upper Hero Section with Background Image */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.png" 
            alt="Academic background" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* subtle overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center justify-center md:justify-end">
          <div className="text-center md:text-right text-white max-w-3xl animate-in fade-in slide-in-from-right-8 duration-1000 mt-12 md:mt-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight drop-shadow-2xl leading-tight" style={{ textShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
              Get Certified – <br />
              <span className="italic block mt-2 font-serif">Learn & Grow</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Lower White Section */}
      <section className="bg-white py-16 border-b border-border/50 shadow-sm relative z-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to Your Next Skill
          </h2>
          
          <div className="flex items-center justify-center py-2">
             <div className="h-[2px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-2xl text-muted-foreground font-medium italic animate-in fade-in slide-in-from-bottom-6 duration-1000 max-w-3xl mx-auto leading-relaxed">
            Choose from beginner to advanced training courses with certificate.
          </p>
        </div>
      </section>
    </div>
  );
}
