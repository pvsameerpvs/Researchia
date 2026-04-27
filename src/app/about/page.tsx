"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { CheckCircle2, Award, BookOpen, Target, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-banner.jpg"
            alt="About BHK Certification"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            About BHK Certification
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-medium text-white mb-6 tracking-tight leading-tight">
            Our Commitment to <br />
            <span className="italic">Institutional Excellence</span>
          </h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Advancing the frontiers of professional standards through rigorous research and global certification.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary leading-tight">
                  Redefining the Standards <br />
                  of Professional Mastery
                </h2>
                <div className="h-1.5 w-24 bg-accent"></div>
              </div>
              
              <p className="text-secondary text-lg md:text-xl leading-relaxed font-light">
                BHK Certification was established as a sovereign academic body dedicated to one goal: providing the most advanced infrastructure for professional development. We believe that global progress requires a deep, data-driven understanding of excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <Target size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-primary">Our Mission</h4>
                  <p className="text-muted-text text-sm leading-relaxed">
                    To empower institutions with the tools and knowledge needed to achieve sustainable peak performance.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                    <Globe size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-primary">Global Vision</h4>
                  <p className="text-muted-text text-sm leading-relaxed">
                    A world where every professional milestone is backed by rigorous, peer-reviewed research.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                  alt="Modern Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 border-[20px] border-accent/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Impact */}
      <section className="py-24 md:py-32 bg-light-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-primary">The Pillars of Our Authority</h2>
            <p className="text-secondary text-lg font-light">
              Our methodology combines modern technological precision with traditional academic rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: BookOpen,
                title: "Research-Led Curriculum",
                desc: "Every module is developed by leading clinical experts and organizational psychologists."
              },
              {
                icon: Award,
                title: "Global Recognition",
                desc: "Our certifications are validated by the Global Research Authority and academic partners."
              },
              {
                icon: CheckCircle2,
                title: "Empirical Standards",
                desc: "We leverage longitudinal data sets to ensure all training results in measurable impact."
              }
            ].map((value, i) => (
              <div 
                key={i} 
                className="bg-white p-12 rounded-[40px] shadow-xl shadow-primary/5 border border-border group hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-text leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Scholars Certified", value: "12,000+" },
              { label: "Partner Institutions", value: "450+" },
              { label: "Research Publications", value: "1,200+" },
              { label: "Countries Reached", value: "85+" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-6xl font-serif italic text-accent font-medium">{stat.value}</div>
                <div className="text-sm md:text-base font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

