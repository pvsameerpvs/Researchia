"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Share2, 
  Award, 
  ShieldCheck,
  Globe,
  Star,
  GraduationCap
} from "lucide-react";

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-2xl mb-4">
                <Award size={32} />
              </div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Congratulations!</h1>
              <p className="text-xl text-slate-500 font-medium">You have successfully completed the course requirements.</p>
            </div>

            {/* Certificate Preview Card */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-500 rounded-[44px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="bg-white border-[16px] border-slate-900 rounded-[40px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
                {/* Certificate Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,1)_1px,transparent_0)] bg-[length:32px_32px]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                
                <div className="relative z-10 space-y-12 text-center border-4 border-slate-100 p-8 md:p-12 h-full rounded-[24px]">
                  <div className="flex flex-col items-center gap-6">
                    <div className="bg-slate-900 text-white p-4 rounded-full">
                      <GraduationCap size={40} />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Certificate of Excellence</h2>
                      <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-slate-500 italic font-medium">This is to certify that</p>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">PVS Sameer</h3>
                  </div>

                  <div className="space-y-8">
                    <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
                      has successfully completed the professional masterclass in
                    </p>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary">Full Stack Web Development with Next.js</h4>
                    <p className="text-slate-500 text-sm font-medium">
                      Demonstrating exceptional proficiency in building modern, scalable web applications using industry-leading technologies and best practices.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-slate-100">
                    <div className="text-left space-y-4 w-full md:w-auto">
                      <div className="space-y-1">
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400">Date of Issue</div>
                        <div className="font-bold text-slate-900">February 15, 2026</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400">Certificate ID</div>
                        <div className="font-bold text-slate-900">EDU-NX-2026-0842</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                       <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center p-2">
                         <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                            <ShieldCheck className="text-slate-900" size={48} />
                         </div>
                       </div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Verified Credentials</span>
                    </div>

                    <div className="text-left md:text-right space-y-4 w-full md:w-auto">
                      <div className="space-y-1">
                        <div className="h-10 border-b-2 border-slate-900 w-32 md:ml-auto"></div>
                        <div className="text-xs uppercase font-black tracking-widest text-slate-400 pt-2">Director Admission</div>
                        <div className="font-bold text-slate-900">Dr. Robert Chen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 rounded-2xl font-bold gap-3 shadow-xl shadow-primary/20 bg-slate-900 hover:bg-slate-800">
                <Download size={20} />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold gap-3 border-slate-200">
                <Share2 size={20} />
                Share Achievement
              </Button>
            </div>

            {/* Verification details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
               {[
                 { icon: <ShieldCheck className="text-emerald-500" />, title: "Blockchain Verified", desc: "Secured with blockchain technology for tamper-proof credentials." },
                 { icon: <Globe className="text-blue-500" />, title: "Shareable Link", desc: "Easy to share on LinkedIn, Twitter, and professional portfolios." },
                 { icon: <Star className="text-yellow-500" />, title: "Lifetime Access", desc: "Access your digital certificate anytime from your dashboard." }
               ].map((benefit, i) => (
                 <div key={i} className="flex flex-col items-center text-center space-y-3 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm border-b-4 border-b-primary/10">
                   <div className="mb-2 p-3 bg-slate-50 rounded-2xl">{benefit.icon}</div>
                   <h5 className="font-bold text-slate-900">{benefit.title}</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
