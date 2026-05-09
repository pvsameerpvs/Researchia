"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Globe, Users } from "lucide-react";
import { useParams } from "next/navigation";

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug.toLowerCase() : "";
  
  const levelData: Record<string, { title: string; subtitle: string; price: number; image: string; desc: string }> = {
    "level-1": {
      title: "Foundational Level",
      subtitle: "Level 01 Certification",
      price: 99,
      image: "/level-1-hero.png",
      desc: "Perfect for those entering the professional landscape. This foundational course covers the core principles of CBHK standards and behavioral research."
    },
    "level-2": {
      title: "Advanced Mastery",
      subtitle: "Level 02 Certification",
      price: 199,
      image: "/level-2-hero.png",
      desc: "Designed for mid-career professionals looking to deepen their institutional influence and strategic mastery through advanced data inquiry."
    },
    "level-3": {
      title: "Institutional Authority",
      subtitle: "Level 03 Certification",
      price: 299,
      image: "/level-3-hero.png",
      desc: "The pinnacle of CBHK certification. For leaders who define the standards, manage global teams, and drive large-scale research impact."
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
      
      {/* Hero Header Section */}
      <section className="relative pt-[120px] pb-20 overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-primary text-[11px] font-bold uppercase tracking-widest">
                <ShieldCheck size={16} className="text-accent" />
                Institutional Standard Level 0{slug.slice(-1)}
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-primary tracking-tight leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                  {course.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                  <Link href={`/payment?plan=${encodeURIComponent(course.title)}&price=${course.price}`}>
                    Enroll in Level 0{slug.slice(-1)} — ${course.price}
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-8 rounded-xl border-primary/20 text-primary font-bold hover:bg-muted text-[16px]">
                  Download Blueprint
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted overflow-hidden">
                      <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" width={40} height={40} />
                    </div>
                  ))}
                </div>
                <div className="text-small">
                  <span className="font-bold text-primary">1,200+ Professionals</span>
                  <p className="text-muted-foreground">Certified in {course.title}</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000 delay-300 group">
              <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                <p className="text-white text-lg font-medium italic">
                  This certification transformed our organizational accountability overnight.
                </p>
                <p className="text-white/60 text-xs uppercase font-bold tracking-widest mt-3">— Global Operations Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Details */}
      <section className="py-24 bg-[#f9f9fb]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary">What You Will Master</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Core Behavioral Frameworks",
                    "Measurable Accountability Metrics",
                    "Advanced Professional Communication",
                    "Strategic Decision-Making Logic",
                    "Institutional Alignment Strategy",
                    "Performance Psychology Mastery"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-border/50 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-primary font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary">Certification Curriculum</h2>
                <div className="space-y-4">
                  {[
                    { module: "Module 01", title: "Behavioral Foundations & Ethics", dur: "4 Weeks" },
                    { module: "Module 02", title: "Advanced Communication Strategy", dur: "3 Weeks" },
                    { module: "Module 03", title: "Organizational Performance Logic", dur: "5 Weeks" },
                    { module: "Module 04", title: "Final Certification Capstone", dur: "2 Weeks" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-border/50 hover:border-accent transition-colors group cursor-pointer">
                      <div className="flex items-center gap-6">
                        <span className="text-accent font-bold text-sm tracking-widest uppercase">{item.module}</span>
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h4>
                      </div>
                      <span className="text-muted-foreground text-sm font-medium">{item.dur}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / Who it's for */}
            <div className="space-y-10">
              <div className="p-8 bg-primary rounded-3xl text-white space-y-6">
                <h3 className="text-xl font-bold">Institutional Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-accent" />
                    <span className="text-sm">Globally Recognized Credential</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users size={20} className="text-accent" />
                    <span className="text-sm">Access to Alumni Network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="text-accent" />
                    <span className="text-sm">Verified Blockchain Badge</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl">
                    <Link href="/request-proposal">Institutional Enrollment</Link>
                  </Button>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-border space-y-6">
                <h3 className="text-xl font-bold text-primary">Who This Is For</h3>
                <ul className="space-y-4">
                  {[
                    "Mid-to-Senior Executives",
                    "Departmental Leaders",
                    "HR & Culture Directors",
                    "Strategic Consultants"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

