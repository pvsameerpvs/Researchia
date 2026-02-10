"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CreditCard, 
  Building, 
  ShieldCheck,
  Info,
  Lock,
  Globe,
  Award
} from "lucide-react";
import { courses } from "@/constants/data";

export default function PaymentPage() {
  const course = courses[0]; // Using the first research program for checkout mock

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-3 text-slate-400 hover:text-primary transition-all mb-10 group font-black text-xs uppercase tracking-widest">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
              Return to Research Prospectus
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Payment Info */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-2 border border-primary/10">
                    <Lock size={12} />
                    Secure Enrollment Gateway
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Institutional<br />Program Enrollment</h1>
                  <p className="text-slate-500 font-bold text-lg">Finalize your doctoral candidacy by securing your research position.</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-3">
                    <div className="w-8 h-px bg-slate-200"></div>
                    Grant & Funding Options
                  </h3>
                  <div className="grid grid-cols-1 gap-5">
                    {[
                      { id: "card", name: "Institutional Credit / Debit", desc: "Standard academic funding", icon: <CreditCard className="text-blue-600" size={28} />, active: true },
                      { id: "wire", name: "Institutional Wire Transfer", desc: "University-to-University grant", icon: <Building className="text-emerald-600" size={28} />, active: false },
                      { id: "research", name: "Scholarly Digital Grant", icon: <Globe className="text-purple-600" size={28} />, desc: "Global research wallet", active: false },
                    ].map((method) => (
                      <div 
                        key={method.id}
                        className={`p-8 rounded-[32px] border-2 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                          method.active 
                          ? "border-primary bg-primary/[0.02] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] scale-[1.02]" 
                          : "border-slate-100 bg-white hover:border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`p-4 rounded-2xl shadow-inner ${method.active ? "bg-white ring-4 ring-primary/5" : "bg-slate-50 text-slate-300"}`}>
                            {method.icon}
                          </div>
                          <div className="space-y-1">
                            <span className={`text-lg font-black block ${method.active ? "text-slate-900" : "text-slate-400"}`}>{method.name}</span>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{method.desc}</span>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                          method.active ? "border-primary bg-primary scale-110 shadow-lg shadow-primary/20" : "border-slate-100"
                        }`}>
                          {method.active && <div className="w-3 h-3 rounded-full bg-white"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Template (Mock UI) */}
                <div className="bg-white p-10 md:p-12 rounded-[48px] border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-10 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 blur-3xl rounded-full opacity-50"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div className="space-y-4 md:col-span-2">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Cardholder Research Name</Label>
                      <input 
                        placeholder="DR. NAME AS ON CREDENTIALS" 
                        className="w-full h-16 px-8 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-primary focus:ring-[12px] focus:ring-primary/5 transition-all outline-none font-black text-slate-900 placeholder:text-slate-200"
                      />
                    </div>
                    <div className="space-y-4 md:col-span-2">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Academic Funding Card Number</Label>
                      <div className="relative">
                        <input 
                          placeholder="0000 0000 0000 0000" 
                          className="w-full h-16 px-8 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-primary focus:ring-[12px] focus:ring-primary/5 transition-all outline-none font-black text-slate-900 placeholder:text-slate-200 tracking-widest"
                        />
                        <CreditCard className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-200" size={24} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Exp. Date</Label>
                      <input 
                        placeholder="MM / YY" 
                        className="w-full h-16 px-8 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-primary transition-all outline-none font-black text-slate-900"
                      />
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Security Token (CVV)</Label>
                      <input 
                        placeholder="•••" 
                        type="password"
                        className="w-full h-16 px-8 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-primary transition-all outline-none font-black text-slate-900"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 py-8 px-8 bg-emerald-50/50 rounded-[32px] border border-emerald-100/50 relative z-10">
                    <ShieldCheck className="text-emerald-500" size={24} />
                    <p className="text-xs text-emerald-800 font-bold leading-relaxed">
                      This transaction is protected by Researchia institutional encryption. 
                      Funds are strictly allocated to doctoral resources and laboratory access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-8">
                  <Card className="rounded-[48px] overflow-hidden border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-900 text-white">
                    <CardHeader className="bg-white/5 p-8 border-b border-white/5">
                      <CardTitle className="text-xl font-black tracking-tight flex items-center gap-3">
                         <Award className="text-primary" />
                         Candidacy Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-10 space-y-10">
                      <div className="flex items-center gap-6 group">
                        <div className="w-24 h-24 rounded-3xl overflow-hidden relative flex-shrink-0 shadow-2xl border-2 border-white/10 ring-4 ring-white/5">
                          <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-black text-lg leading-snug group-hover:text-primary transition-colors line-clamp-2">{course.title}</h4>
                          <div className="flex gap-2">
                             <span className="text-[9px] font-black text-primary uppercase tracking-widest px-2 py-1 bg-white/10 rounded-md">{course.category}</span>
                             <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest px-2 py-1 bg-white/10 rounded-md">PHD FOUNDATION</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 border-t border-b border-white/10 py-10 text-sm font-bold">
                        <div className="flex justify-between items-center text-slate-400">
                          <span className="uppercase tracking-widest text-[10px]">Grant Allocation</span>
                          <span>${(course.price * 1.5).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="uppercase tracking-widest text-[10px] text-slate-400">Institutional Subsidy</span>
                          <span className="text-emerald-400 font-black">-${(course.price * 0.5).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400">
                          <span className="uppercase tracking-widest text-[10px]">Academic Tax (0%)</span>
                          <span>$0.00</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="space-y-1">
                          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Enrollment Fee</span>
                          <div className="text-4xl font-black text-white">$ {course.price}</div>
                        </div>
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                           <Lock className="text-primary" size={24} />
                        </div>
                      </div>

                      <Button className="w-full h-20 rounded-[28px] text-lg font-black shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 text-white transition-all hover:scale-[1.03]">
                        Finalize Candidacy
                      </Button>

                      <div className="flex items-center justify-center gap-3 p-5 bg-white/5 rounded-[24px] border border-white/5">
                        <Info size={18} className="text-slate-500" />
                        <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em] text-center leading-relaxed">PhD Access secured by global scholarly standards</span>
                      </div>
                    </CardContent>
                  </Card>
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
