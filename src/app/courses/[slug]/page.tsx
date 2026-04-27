"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Globe, Users, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug.toLowerCase() : "";
  
  const levelData: Record<string, { title: string; subtitle: string; price: number; image: string; desc: string }> = {
    "level-1": {
      title: "Foundational Level",
      subtitle: "Level 01 Certification",
      price: 99,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      desc: "Perfect for those entering the professional landscape. This foundational course covers the core principles of BHK standards and behavioral research."
    },
    "level-2": {
      title: "Advanced Mastery",
      subtitle: "Level 02 Certification",
      price: 199,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      desc: "Designed for mid-career professionals looking to deepen their institutional influence and strategic mastery through advanced data inquiry."
    },
    "level-3": {
      title: "Institutional Authority",
      subtitle: "Level 03 Certification",
      price: 299,
      image: "https://images.unsplash.com/photo-1544531320-dadbed29130d?q=80&w=2070&auto=format&fit=crop",
      desc: "The pinnacle of BHK certification. For leaders who define the standards, manage global teams, and drive large-scale research impact."
    }
  };

  // Ensure case-insensitive matching
  const course = levelData[slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light-bg">
        <div className="text-center space-y-6 p-12 bg-white rounded-[40px] shadow-2xl">
          <h1 className="text-3xl font-serif font-medium text-primary">Research Level Not Found</h1>
          <p className="text-muted-text max-w-xs mx-auto">The requested certification level could not be located in our directory.</p>
          <Button asChild className="rounded-full px-8 bg-primary">
            <Link href="/courses">Return to Directory</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex flex-col lg:flex-row h-full min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)]">
        
        {/* Left Content Side */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1 bg-light-bg/50">
          <div className="max-w-xl w-full space-y-10 animate-in fade-in slide-in-from-left-8 duration-1000">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-accent" />
                Sovereign Certification
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-serif font-medium text-primary tracking-tight leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg font-light text-secondary leading-relaxed">
                {course.desc}
              </p>
            </div>

            <div className="h-px w-full bg-primary/10"></div>

            <div className="space-y-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-muted-text translate-y-[-5px]">Grant Allocation</span>
                <span className="text-5xl font-serif font-medium text-primary">${course.price}</span>
                <span className="text-lg text-muted-text font-bold line-through opacity-40">$499</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="h-14 flex-1 text-lg font-bold rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl shadow-accent/10 transition-all hover:scale-[1.02]">
                  <Link href={`/payment?plan=${encodeURIComponent(course.title)}&price=${course.price}`}>
                    Enroll Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-6 rounded-xl border-primary/20 text-primary font-bold hover:bg-primary/5 text-sm">
                  Institutional Inquiry
                </Button>
              </div>
              <p className="text-center text-[9px] font-bold text-muted-text uppercase tracking-widest">
                Secure Institutional Payment via BHK Authority
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-x-6 gap-y-3">
               {[
                 { icon: Globe, label: "Global Access" },
                 { icon: Users, label: "Expert Mentors" },
                 { icon: ShieldCheck, label: "Lifetime Valid" },
                 { icon: CheckCircle2, label: "Certified Research" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-2.5 text-xs font-bold text-primary/80">
                   <div className="w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center text-accent">
                     <item.icon size={16} />
                   </div>
                   {item.label}
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:w-[45%] relative h-[50vh] lg:h-auto order-1 lg:order-2 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          
          {/* Decorative Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-light-bg/100 via-transparent to-transparent hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent lg:hidden"></div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] shadow-2xl animate-in fade-in zoom-in duration-1000 delay-500">
            <p className="text-white text-lg font-serif italic">
              "This level defines the standard for professional inquiry in the modern age."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent"></div>
              <div>
                <div className="text-white font-bold text-sm">Marcus Thorne</div>
                <div className="text-white/60 text-[10px] uppercase tracking-widest">BHK Chancellor</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}

