"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
  const levels = [
    {
      id: 1,
      title: "Level 1",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-1"
    },
    {
      id: 2,
      title: "Level 2",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-2"
    },
    {
      id: 3,
      title: "Level 3",
      image: "https://images.unsplash.com/photo-1544531320-dadbed29130d?q=80&w=2070&auto=format&fit=crop",
      link: "/courses/level-3"
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex flex-col items-center justify-center py-32 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
              Choose Your Course Level
            </h1>
            <div className="h-1 w-24 bg-border mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {levels.map((level) => (
              <div 
                key={level.id} 
                className="group relative bg-card rounded-none shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 border-[8px] border-white overflow-hidden"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={level.image}
                    alt={level.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="bg-foreground py-6 text-center relative z-10 transition-colors duration-300 group-hover:bg-primary">
                  <h3 className="text-2xl font-bold text-background uppercase tracking-wider">
                    {level.title}
                  </h3>
                </div>
                
                {/* Click Overlay */}
                <Link href={level.link} className="absolute inset-0 z-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
