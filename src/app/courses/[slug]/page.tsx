"use client";

import Navbar from "@/components/layout/Navbar";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  
  const levelData: Record<string, { title: string; subtitle: string; price: number; image: string }> = {
    "level-1": {
      title: "Level 1 Course",
      subtitle: "Beginner Training Course",
      price: 99,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    "level-2": {
      title: "Level 2 Course",
      subtitle: "Intermediate Training Course",
      price: 199,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    "level-3": {
      title: "Level 3 Course",
      subtitle: "Advanced Training Course",
      price: 299,
      image: "https://images.unsplash.com/photo-1544531320-dadbed29130d?q=80&w=2070&auto=format&fit=crop"
    }
  };

  const course = levelData[params.slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Course Level Not Found</h1>
          <Button asChild>
            <Link href="/courses">Back to Levels</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Full Screen Split Layout */}
      <section className="flex-grow flex flex-col lg:flex-row h-full min-h-[calc(100vh-80px)] mt-20 lg:mt-0">
        
        {/* Left Content Side */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
          <div className="max-w-xl w-full space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Enrollment Open
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.1]">
                {course.title}
              </h1>
              
              <p className="text-2xl font-medium text-muted-foreground">
                {course.subtitle}
              </p>
            </div>

            <div className="h-px w-full bg-border/50"></div>

            <div className="space-y-8">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-black text-primary">${course.price}</span>
                <span className="text-xl text-muted-foreground font-bold line-through opacity-50">$399</span>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="w-full h-20 text-2xl font-bold rounded-xl bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20 transition-all hover:scale-[1.02]">
                  <Link href={`/payment?plan=${encodeURIComponent(course.title)}&price=${course.price}`}>
                    Buy Now
                  </Link>
                </Button>
                <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Secure Institutional Payment
                </p>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-4">
               {["Certified Research", "Global Access", "Expert Mentors", "Lifetime Valid"].map((item) => (
                 <div key={item} className="flex items-center gap-2 text-sm font-bold text-foreground/80">
                   <div className="p-1 rounded-full bg-primary/20 text-primary"><CheckCircle2 size={12} strokeWidth={4} /></div>
                   {item}
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:w-[50%] relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent lg:hidden"></div>
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent hidden lg:block"></div>
        </div>

      </section>
    </main>
  );
}
