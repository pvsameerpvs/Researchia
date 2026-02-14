"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-background">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(to right, #5C4033 1px, transparent 1px), linear-gradient(to bottom, #5C4033 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm md:text-base">
              #1 LMS FOR DOCTORAL SUCCESS
            </h4>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight">
              Flexible & Scalable.<br />
              Your Platform for <br />
              <span className="text-primary">High Value Research.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Streamline your PhD journey. Import data, assign mentors, and enjoy seamless thesis management from day one.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-2">
              <Button asChild size="lg" className="h-16 px-8 text-lg font-bold rounded-lg bg-foreground text-background hover:bg-foreground/90 shadow-xl transition-all hover:translate-y-[-2px]">
                <Link href="/signup">
                  Start Free Trial
                  <ArrowUpRight className="ml-2" size={24} />
                </Link>
              </Button>
              
              <button className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
                <span className="text-foreground font-bold text-lg underline decoration-2 decoration-transparent group-hover:decoration-secondary transition-all">
                  How it Works
                </span>
              </button>
            </div>
          </div>

          {/* Right Content / Visuals */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
             {/* Circular Badge */}
             <div className="absolute -top-12 -left-4 lg:-left-12 z-20 animate-[spin_10s_linear_infinite]">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <svg viewBox="0 0 100 100" width="100%" height="100%" className="fill-foreground">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text fontSize="11" fontWeight="bold" letterSpacing="1">
                      <textPath xlinkHref="#circle">
                        ★ BEST RESEARCH PLATFORM ★ ACCREDITED
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-foreground rounded-xl flex items-center justify-center text-background text-3xl font-black shadow-inner">
                      R
                    </div>
                  </div>
                </div>
             </div>

             {/* Main Image Group */}
             <div className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none">
               <Image 
                 src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
                 alt="Doctoral Students"
                 width={700}
                 height={600}
                 className="w-full h-auto object-contain drop-shadow-2xl"
                 priority
               />
               
               {/* Floating Tag */}
               <div className="absolute top-10 right-0 md:-right-8 bg-secondary text-white p-3 md:p-4 rounded-l-full md:rounded-lg shadow-lg rotate-12 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                 <div className="text-xs md:text-sm font-bold">
                    <p className="uppercase tracking-wider opacity-90">Lead Mentor</p>
                    <p className="text-base md:text-lg">Dr. Elena Vance</p>
                 </div>
               </div>
             </div>

             {/* Floating Notifications List */}
             <div className="absolute bottom-0 right-0 z-20 space-y-3 hidden sm:block">
                {[
                  { name: "John Doe", action: "Submitted Thesis", time: "2m ago" },
                  { name: "Sarah Smith", action: "Grant Approved", time: "15m ago" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/90 backdrop-blur border border-border p-3 rounded-xl shadow-lg flex items-center gap-3 w-64 animate-in slide-in-from-bottom-4 fade-in duration-500" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.name} {item.action}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
