import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Microscope, BrainCircuit, Users2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">The Researchia Mission</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Advancing human understanding through rigorous doctoral-level research in behavioral sciences and psychological dynamics.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-[80px] absolute -top-12 -left-12 w-full h-full -z-10 rotate-6 scale-105"></div>
              <div className="aspect-square bg-emerald-500/10 rounded-[80px] absolute -bottom-12 -right-12 w-full h-full -z-10 -rotate-6 scale-105"></div>
              <div className="rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white border-8 border-white aspect-square flex items-center justify-center p-16">
                <div className="text-center space-y-8">
                  <div className="inline-block p-6 bg-primary/10 text-primary rounded-[32px] shadow-lg shadow-primary/5">
                    <Microscope size={56} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Empirical Research Excellence</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Collaborating with over 12,000 PhD scholars globally to decode the complexities of human behavioral patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Redefining Behavioral Inquiry</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                Researchia was established as a sovereign academic institution dedicated to one goal: providing the most advanced infrastructure for behavioral research. We believe that solving global systemic challenges requires a deep, data-driven understanding of human action, reaction, and interaction.
              </p>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  "PhD-led curriculum developed by leading clinical psychologists",
                  "Structured longitudinal data analysis and neural mapping",
                  "Doctoral-level certification recognized by global academic bodies",
                  "Exclusive access to peer-reviewed research forums and forums"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-primary/20 transition-all">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes of Learning */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Research Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              We leverage modern technology and traditional academic rigor to facilitate groundbreaking discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[48px] shadow-xl shadow-slate-200/50 border border-slate-100 hover:translate-y-[-8px] transition-all duration-500 group">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[28px] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-blue-100/50">
                <BrainCircuit size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Virtual Lab Analytics</h3>
              <p className="text-slate-500 mb-8 leading-[1.8] font-medium">
                Engage with interactive neuro-scans, behavioral data sets, and simulated social environments from anywhere in the world. Our digital infrastructure is designed for high-throughput scholarly research.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Real-time algorithmic behavior modeling
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Asynchronous doctorate lecture series
                </li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-[48px] shadow-xl shadow-slate-200/50 border border-slate-100 hover:translate-y-[-8px] transition-all duration-500 group">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-[28px] flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-emerald-100/50">
                <Users2 size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Clinical Residency</h3>
              <p className="text-slate-500 mb-8 leading-[1.8] font-medium">
                Collaborate in person at our physical research centers. Participate in live clinical trials, observational studies, and interdisciplinary symposiums with the world&apos;s leading behavioral scientists.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  Hands-on laboratory trial management
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  Interdisciplinary networking & publication
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
