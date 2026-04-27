"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CoursesPage() {
  const levels = [
    {
      id: 1,
      title: "Foundational Level",
      subtitle: "Level 01",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-1"
    },
    {
      id: 2,
      title: "Advanced Mastery",
      subtitle: "Level 02",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-2"
    },
    {
      id: 3,
      title: "Institutional Authority",
      subtitle: "Level 03",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-3"
    }
  ];

  return (
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex flex-col items-center justify-center py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
              <Sparkles size={16} className="text-accent" />
              Scholarly Curriculum
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-primary tracking-tight">
              Select Your <span className="italic">Research Level</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Choose the appropriate depth of certification for your institutional goals and research expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-7xl mx-auto">
            {levels.map((level) => (
              <Link 
                key={level.id} 
                href={level.link}
                className="group relative block transition-all duration-500"
              >
                <div className="relative bg-white rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-white group-hover:scale-[1.02] transition-transform duration-500 shadow-primary/5 group-hover:shadow-primary/20">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={level.image}
                      alt={level.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Content on Image */}
                    <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                      <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">
                          {level.subtitle}
                        </span>
                        <h3 className="text-3xl font-serif font-medium leading-tight">
                          {level.title}
                        </h3>
                        <div className="pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 font-bold text-sm">
                          Begin Investigation
                          <ArrowRight size={18} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative shadow element */}
                <div className="absolute -bottom-4 left-10 right-10 h-10 bg-primary/10 blur-2xl rounded-full -z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

