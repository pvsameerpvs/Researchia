"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { courses } from "@/constants/data";
import { 
  Play, 
  Clock, 
  BookOpen, 
  Trophy, 
  MoreHorizontal,
  Microscope,
  FileText
} from "lucide-react";

export default function MyCoursesPage() {
  const myCourses = courses.slice(0, 2); // Mock some courses as enrolled

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
            <div className="space-y-3">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Researcher Dashboard</h1>
              <p className="text-slate-500 font-bold text-lg">Managing and advancing your active doctoral investigations.</p>
            </div>
            
            <div className="flex items-center gap-2 bg-white p-2 rounded-[24px] border-2 border-slate-100 shadow-xl shadow-slate-200/50">
              <Button variant="ghost" className="bg-slate-900 text-white hover:bg-slate-800 rounded-2xl px-8 h-12 font-black shadow-lg shadow-slate-300">Active Research</Button>
              <Button variant="ghost" className="text-slate-500 rounded-2xl px-8 h-12 font-bold hover:bg-slate-50">Pending Exams</Button>
              <Button variant="ghost" className="text-slate-500 rounded-2xl px-8 h-12 font-bold hover:bg-slate-50">Acquired Certificates</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {myCourses.map((course, idx) => (
                <div key={course.id} className="bg-white rounded-[48px] p-8 md:p-10 flex flex-col md:flex-row gap-10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
                  
                  <div className="w-full md:w-64 h-44 rounded-3xl overflow-hidden relative shadow-2xl group-hover:scale-[1.05] transition-transform duration-500 border-4 border-white">
                    <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-2xl">
                        <Play fill="currentColor" size={28} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                           <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] px-3 py-1 bg-primary/10 rounded-full">{course.category}</span>
                           <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] px-3 py-1 bg-emerald-50 rounded-full">PhD LEVEL</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <Clock size={14} className="text-primary" />
                          <span>Last Activity: 15m ago</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest">
                        <span className="text-slate-400">Research Progress</span>
                        <span className="text-slate-900">{idx === 0 ? "68%" : "24%"}</span>
                      </div>
                      <Progress value={idx === 0 ? 68 : 24} className="h-3 bg-slate-50 border border-slate-100" />
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                      <Button asChild size="lg" className="rounded-[20px] px-10 h-14 gap-3 shadow-2xl shadow-primary/30 bg-slate-900 hover:bg-slate-800 transition-all font-black">
                        <Link href={`/learn/${course.slug}`}>
                          <Microscope size={20} />
                          Resume Research
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-14 w-14 rounded-2xl border-2 border-slate-50 hover:bg-slate-50 transition-colors">
                        <MoreHorizontal size={24} className="text-slate-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 rounded-[48px] p-10 text-white space-y-10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white/10 rounded-[28px] flex items-center justify-center relative z-10 border border-white/10 shadow-inner">
                    <Trophy className="text-amber-400" size={32} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black tracking-tight leading-none">Scholarly Impact</h3>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global PhD Standing</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-2">
                    <div className="text-5xl font-black leading-none">02</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] leading-tight">Active Investigations</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black leading-none">84</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] leading-tight">Datasets Analyzed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black leading-none">160</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] leading-tight">Research Hours</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-black leading-none">00</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] leading-tight">Doctorates Finalized</div>
                  </div>
                </div>

                <Button className="w-full h-16 bg-white text-slate-900 hover:bg-slate-50 rounded-[24px] font-black relative z-10 shadow-2xl transition-all hover:translate-y-[-4px]">
                  View Scientific Achievements
                </Button>
              </div>

              <div className="bg-white rounded-[48px] p-10 border border-slate-100 shadow-2xl shadow-slate-200/50 space-y-8">
                <h3 className="font-black text-slate-900 text-xl tracking-tight">Cited Resources</h3>
                <div className="space-y-6">
                  {[
                    { title: "Neuro-Anatomical Mapping", type: "Manuscript", color: "blue" },
                    { title: "Longitudinal Social Data", type: "Dataset", color: "emerald" },
                    { title: "Behavioral Ethics Vol. I", type: "PhD PDF", color: "rose" }
                  ].map((res, i) => (
                    <div key={i} className="p-5 rounded-3xl bg-slate-50/50 border border-slate-100 flex items-center gap-4 group cursor-pointer hover:bg-white transition-all hover:shadow-lg">
                      <div className={`w-14 h-14 bg-${res.color}-50 text-${res.color}-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                        {i === 2 ? <FileText size={24} /> : <BookOpen size={24} />}
                      </div>
                      <div>
                        <div className="font-black text-slate-900 leading-tight mb-1">{res.title}</div>
                        <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{res.type}</div>
                      </div>
                    </div>
                  ))}
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
