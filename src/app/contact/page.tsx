"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  ChevronRight,
  Globe,
  Building2
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Institutional Inquiry</h1>
            <p className="text-xl text-slate-500 font-bold">Connect with the Researchia academic team. Whether you are an aspiring PhD scholar or an institutional partner, we are here to assist.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[48px] p-10 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-12">
                <div className="space-y-3">
                  <h2 className="text-3xl font-black text-slate-900 leading-tight">Send a Formal Request</h2>
                  <p className="text-slate-500 font-bold">Academic transcripts or research proposals can be attached via institutional mail.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label htmlFor="first_name" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Title & Name</Label>
                      <Input id="first_name" placeholder="Dr. John Doe" className="h-16 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-8 font-bold transition-all outline-none text-slate-900" />
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="institution" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Affiliated Institution</Label>
                      <Input id="institution" placeholder="University of Behavioral Tech" className="h-16 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-8 font-bold transition-all outline-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Institutional Email</Label>
                    <Input id="email" type="email" placeholder="researcher@edu.org" className="h-16 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-8 font-bold transition-all" />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="subject" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Subject of Research</Label>
                    <Input id="subject" placeholder="Application for Doctorate Program" className="h-16 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-8 font-bold transition-all" />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="message" className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">Inquiry Details</Label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      placeholder="Detailed inquiry or partnership proposal..."
                      className="w-full p-8 text-base bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-8 focus:ring-primary/5 rounded-[40px] font-bold transition-all outline-none resize-none text-slate-900 placeholder:text-slate-300"
                    ></textarea>
                  </div>

                  <Button className="w-full h-20 rounded-[32px] text-lg font-black gap-4 shadow-2xl shadow-primary/30 bg-slate-900 hover:bg-slate-800 transition-all scale-100 hover:scale-[1.02]">
                    Submit Formal Request
                    <Send size={24} />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div className="grid grid-cols-1 gap-8">
                
                <div className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 group hover:border-primary/30 transition-all duration-500">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[24px] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-100/50">
                    <Building2 size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-slate-900">Academic Registry</h3>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">Direct support for enrollment, certification verification, and research funding queries.</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary font-black gap-3 group-hover:translate-x-2 transition-transform">
                    Scholarly Support
                    <ChevronRight size={20} />
                  </Button>
                </div>

                <div className="bg-slate-900 p-10 rounded-[48px] text-white space-y-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
                  
                  <h3 className="text-3xl font-black relative z-10 leading-tight">Institutional<br />Information</h3>
                  
                  <div className="space-y-8 relative z-10">
                    <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-white/10 rounded-[20px] flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                        <Mail size={24} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-1">Registrar Email</div>
                        <div className="font-bold text-lg">chancellor@researchia.edu</div>
                      </div>
                    </div>

                    <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-white/10 rounded-[20px] flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                        <Phone size={24} className="text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-1">Institutional Line</div>
                        <div className="font-bold text-lg">+1 (555) PHD-INFO</div>
                      </div>
                    </div>

                    <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-white/10 rounded-[20px] flex items-center justify-center shrink-0 border border-white/5 shadow-inner">
                        <MapPin size={24} className="text-rose-400" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 mb-1">HQ Address</div>
                        <div className="font-bold text-base leading-relaxed">Researchia HQ, 42 Scholars Row,<br />Academic District, MA 02138</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 relative z-10">
                    <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-[24px] border border-white/10">
                      <Clock size={20} className="text-slate-500" />
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Office: Mon - Fri, 9am - 6pm EST</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-slate-200 h-72 rounded-[48px] overflow-hidden relative group border-4 border-white shadow-xl">
                  <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-500 ring-8 ring-slate-400/10">
                        <Globe className="text-primary" size={36} />
                      </div>
                      <span className="text-slate-600 font-black uppercase tracking-[0.3em] text-[10px]">Global Campus Map</span>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 p-5 bg-white/90 backdrop-blur-xl rounded-[24px] border border-white/50 shadow-2xl translate-y-32 group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-xs text-slate-900 font-black text-center uppercase tracking-widest italic">Locate Research Hubs</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
