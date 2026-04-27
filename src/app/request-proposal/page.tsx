"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { 
  ShieldCheck, 
  Send, 
  Building2, 
  Users, 
  Globe, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ClipboardCheck
} from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export default function RequestProposalPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
       // Logic for success message
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="flex-grow pt-[var(--navbar-height)] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Content: Institutional Context */}
            <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
                  <ShieldCheck size={14} className="text-accent" />
                  Sovereign Inquiry
                </div>
                <h1 className="text-5xl lg:text-7xl font-serif font-medium text-primary leading-[1.1] tracking-tight">
                  Request <br />
                  <span className="italic">Institutional</span> <br />
                  Proposal
                </h1>
                <p className="text-xl text-secondary font-light leading-relaxed max-w-lg">
                  Submit your credentials to receive a curated certification blueprint tailored for high-stakes professional environments.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { 
                    icon: Building2, 
                    title: "Corporate Licensing", 
                    desc: "Bulk certification grants for global enterprises and institutional teams." 
                  },
                  { 
                    icon: Globe, 
                    title: "Strategic Partnerships", 
                    desc: "Collaborative research frameworks and academic alignment." 
                  },
                  { 
                    icon: ClipboardCheck, 
                    title: "Executive Blueprints", 
                    desc: "Custom-paced curriculum designed for c-suite professional development." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-primary/[0.03] border border-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-text leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-primary/5 flex items-center gap-4 text-primary font-bold italic">
                <Sparkles size={20} className="text-accent" />
                <span>Defining the standard for behavioral excellence since 1998.</span>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              {submitted ? (
                <div className="bg-primary p-12 lg:p-20 rounded-[64px] text-white text-center space-y-8 shadow-2xl shadow-primary/20">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto scale-in duration-700">
                    <CheckCircle2 size={48} className="text-accent" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif italic">Submission Logged</h3>
                    <p className="text-white/60 text-lg font-light leading-relaxed">
                      Your institutional inquiry has been transmitted to the BHK Certification Board. A senior analyst will respond within 48 business hours.
                    </p>
                  </div>
                  <Button 
                    onClick={() => setSubmitted(false)}
                    variant="outline" 
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <div className="bg-white p-10 lg:p-16 rounded-[64px] border border-primary/5 shadow-2xl shadow-primary/[0.03] relative">
                  {/* Decorative form highlight */}
                  <div className="absolute -top-1 -left-1 w-20 h-20 border-t-2 border-l-2 border-accent rounded-tl-[64px]"></div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Full Credentials</label>
                          <Input placeholder="Dr. Julian Thorne" className="h-14 rounded-2xl bg-light-bg/50 border-none px-6 focus-visible:ring-1 focus-visible:ring-accent" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Official Email</label>
                          <Input type="email" placeholder="j.thorne@institution.org" className="h-14 rounded-2xl bg-light-bg/50 border-none px-6 focus-visible:ring-1 focus-visible:ring-accent" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Organization / Authority</label>
                          <Input placeholder="Global Research Corp" className="h-14 rounded-2xl bg-light-bg/50 border-none px-6 focus-visible:ring-1 focus-visible:ring-accent" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Proposed Cohort Size</label>
                          <select className="flex h-14 w-full rounded-2xl bg-light-bg/50 px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 border-none appearance-none">
                            <option>Individual (Sovereign)</option>
                            <option>Executive Team (5-10)</option>
                            <option>Departmental (10-50)</option>
                            <option>Institutional (50+)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Inquiry Specification</label>
                        <select className="flex h-14 w-full rounded-2xl bg-light-bg/50 px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 border-none appearance-none">
                          <option>Select Certification Tier</option>
                          <option>Level 01: Foundational Mastery</option>
                          <option>Level 02: Strategic Leadership</option>
                          <option>Level 03: Global Authority</option>
                          <option>Custom Multi-Tier Framework</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-muted-text ml-1">Objective Summary</label>
                        <Textarea 
                          placeholder="Describe your institutional requirements or research objectives..." 
                          className="min-h-[150px] rounded-[32px] bg-light-bg/50 border-none p-8 focus-visible:ring-1 focus-visible:ring-accent resize-none"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full h-18 py-8 rounded-[32px] bg-primary hover:bg-primary/95 text-white font-bold text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] flex items-center justify-center gap-3">
                      Submit Institutional Proposal
                      <Send size={20} className="text-accent" />
                    </Button>

                    <p className="text-center text-[9px] font-bold text-muted-text uppercase tracking-widest">
                      BHK Authority • Data Encryption Enabled • ISO 27001 Compliant
                    </p>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
