"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe, ScrollText } from "lucide-react";

export default function CoursesPage() {
  const levels = [
    {
      id: "level-1",
      title: "Foundational",
      subtitle: "Level 01",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      desc: "Establishing core principles of behavioral research.",
      icon: ScrollText
    },
    {
      id: "level-2",
      title: "Advanced",
      subtitle: "Level 02",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      desc: "Strategic leadership frameworks for professionals.",
      icon: ShieldCheck
    },
    {
      id: "level-3",
      title: "Global Authority",
      subtitle: "Level 03",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop",
      desc: "The pinnacle of CBHK authority and global research.",
      icon: Globe
    }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Simplified Hero Section based on User Image */}
      <section className="relative pt-20 pb-20 px-4 text-center bg-white">
        <div className="container mx-auto max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#111] tracking-tight leading-tight">
              Certification Made Simple <br />
              with CBHK Authority
            </h1>
          </div>

          <div className="flex justify-center pt-4">
            <Link 
              href="/request-proposal"
              className="group relative px-12 py-5 bg-gradient-to-b from-[#e3c184] to-[#d4a24c] text-white font-bold rounded-full shadow-[0_10px_40px_-10px_rgba(212,162,76,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(212,162,76,0.6)] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg border-b-4 border-[#b88a3b]"
            >
              Start your course
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Card Grid */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level) => (
              <Link 
                key={level.id} 
                href={`/courses/${level.id}`}
                className="group bg-[#f9f9fb] rounded-[40px] p-8 space-y-6 transition-all hover:bg-white hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 border border-transparent hover:border-black/5"
              >
                <div className="aspect-[4/3] relative rounded-[32px] overflow-hidden shadow-lg">
                  <Image src={level.image} alt={level.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <div className="space-y-3">
                  <div className="text-[10px] font-black uppercase tracking-widest text-accent">{level.subtitle}</div>
                  <h3 className="text-2xl font-bold text-[#111]">{level.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">{level.desc}</p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm font-bold text-[#111] group-hover:text-accent transition-colors">
                  Explore Blueprint
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
