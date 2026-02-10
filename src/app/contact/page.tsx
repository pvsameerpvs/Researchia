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
  MessageCircle, 
  Clock,
  ChevronRight,
  Globe
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-slate-500 font-medium">Have questions? We&apos;re here to help you on your learning journey. Reach out to our team anytime.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 space-y-10">
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-slate-900">Send us a Message</h2>
                  <p className="text-slate-500 font-medium">We&apos;ll get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="first_name" className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">First Name</Label>
                      <Input id="first_name" placeholder="John" className="h-14 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-6 font-medium transition-all outline-none" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="last_name" className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Last Name</Label>
                      <Input id="last_name" placeholder="Doe" className="h-14 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-6 font-medium transition-all" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-6 font-medium transition-all" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" className="h-14 bg-slate-50 border-slate-100 focus:bg-white rounded-2xl px-6 font-medium transition-all" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      placeholder="Write your message here..."
                      className="w-full p-6 text-sm bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-[32px] font-medium transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full h-16 rounded-[24px] text-base font-bold gap-3 shadow-xl shadow-primary/20 bg-slate-900 hover:bg-slate-800 transition-all">
                    Send Message
                    <Send size={20} />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                
                <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6 group hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <MessageCircle size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900">Live Chat</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">Our support team is available via live chat for immediate assistance.</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold gap-2 group-hover:translate-x-1 transition-transform">
                    Start Chatting
                    <ChevronRight size={16} />
                  </Button>
                </div>

                <div className="bg-slate-900 p-8 rounded-[40px] text-white space-y-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  
                  <h3 className="text-2xl font-bold relative z-10">Contact Information</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Email</div>
                        <div className="font-bold">support@edupath.com</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Phone</div>
                        <div className="font-bold">+1 (555) 000-1111</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-rose-400" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400 mb-1">Address</div>
                        <div className="font-bold leading-relaxed">123 Education St, Knowledge City,<br />State 10101</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 relative z-10">
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 rounded-2xl border border-white/10">
                      <Clock size={16} className="text-slate-400" />
                      <span className="text-xs font-bold text-slate-300">Office Hours: Mon - Fri, 9am - 6pm</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-slate-200 h-64 rounded-[40px] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform">
                        <Globe className="text-primary" size={32} />
                      </div>
                      <span className="text-slate-600 font-bold uppercase tracking-widest text-xs">interactive map placeholder</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs text-slate-900 font-bold text-center">Open in Google Maps</p>
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
