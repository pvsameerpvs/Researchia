"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, MonitorPlay, ClipboardList, Sparkles, GraduationCap, Headphones } from "lucide-react";
import { practicalChecklistData, readingMaterialsData, videoLessonsData, audioLessonsData } from "@/lib/fake-data";

export default function DashboardPage() {
  const completedPractical = practicalChecklistData.filter(i => i.status === "completed").length;
  const completedReading = readingMaterialsData.filter(i => i.status === "completed").length;
  const completedVideo = videoLessonsData.filter(i => i.status === "completed").length;
  const completedAudio = audioLessonsData.filter(i => i.status === "completed").length;
  
  const totalItems = practicalChecklistData.length + readingMaterialsData.length + videoLessonsData.length + audioLessonsData.length;
  const completedItems = completedPractical + completedReading + completedVideo + completedAudio;
  
  const overallProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />

      <section className="flex-grow flex flex-col justify-center min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-5xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
              <GraduationCap size={14} className="text-accent" />
              Academic Progress
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-primary tracking-tight">Certification <span className="italic">Curriculum</span></h1>
            <p className="text-secondary text-sm font-light max-w-md mx-auto">Track your progress through the elite behavioral research modules and practical investigations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Reading Module */}
            <div className="bg-white border border-primary/5 rounded-[40px] p-8 flex flex-col items-center text-center gap-6 shadow-xl shadow-primary/[0.02] hover:shadow-primary/[0.05] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <BookOpen size={32} />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold text-primary">Reading Materials</h3>
                <p className="text-muted-text text-xs font-light max-w-[240px]">Deep-dive into peer-reviewed papers and core behavioral manuscripts.</p>
              </div>
              <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 mt-2 relative z-10">
                <Link href="/learning/reading" className="flex items-center justify-center gap-2">
                  Access Portal
                  <Sparkles size={16} className="text-accent" />
                </Link>
              </Button>
            </div>

            {/* Lecture Series Module */}
            <div className="bg-white border border-primary/5 rounded-[40px] p-8 flex flex-col items-center text-center gap-6 shadow-xl shadow-primary/[0.02] hover:shadow-primary/[0.05] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <MonitorPlay size={32} />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold text-primary">Lecture Series</h3>
                <p className="text-muted-text text-xs font-light max-w-[240px]">HD scholarly presentations and expert behavioral simulations.</p>
              </div>
              <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 mt-2 relative z-10">
                <Link href="/learning/watching">Resume Series</Link>
              </Button>
            </div>

            {/* Listening Module */}
            <div className="bg-white border border-primary/5 rounded-[40px] p-8 flex flex-col items-center text-center gap-6 shadow-xl shadow-primary/[0.02] hover:shadow-primary/[0.05] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <Headphones size={32} />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold text-primary">Listening Seminars</h3>
                <p className="text-muted-text text-xs font-light max-w-[240px]">Aural research recordings and high-fidelity clinical briefings.</p>
              </div>
              <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 mt-2 relative z-10">
                <Link href="/learning/listening">Enter Archive</Link>
              </Button>
            </div>

            {/* Practical Inquiry Module */}
            <div className="bg-white border border-primary/5 rounded-[40px] p-8 flex flex-col items-center text-center gap-6 shadow-xl shadow-primary/[0.02] hover:shadow-primary/[0.05] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                <ClipboardList size={32} />
              </div>
              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold text-primary">Practical Inquiry</h3>
                <p className="text-muted-text text-xs font-light max-w-[240px]">Submit field assignments and documented research outcomes.</p>
              </div>
              <Button asChild className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 mt-2 relative z-10">
                <Link href="/learning/practical">Review Tasking</Link>
              </Button>
            </div>

          </div>

          {/* Completion Status */}
          <div className="bg-white rounded-[40px] p-10 border border-primary/5 shadow-2xl shadow-primary/[0.03] space-y-6">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <h4 className="font-serif font-medium text-primary text-2xl">Institutional Progress</h4>
                <p className="text-[10px] text-muted-text uppercase tracking-widest font-bold">{completedItems} of {totalItems} Scientific Milestones Reached</p>
              </div>
              <span className="text-accent font-serif italic text-5xl animate-in fade-in zoom-in duration-700" key={overallProgress}>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3 bg-primary/5" />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

