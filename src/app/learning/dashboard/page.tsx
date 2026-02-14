"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, MonitorPlay, ClipboardList } from "lucide-react";
import { practicalChecklistData, readingMaterialsData, videoLessonsData } from "@/lib/fake-data";

export default function DashboardPage() {
  const totalItems = practicalChecklistData.length + readingMaterialsData.length + videoLessonsData.length;
  
  const completedPractical = practicalChecklistData.filter(i => i.status === "completed").length;
  const completedReading = readingMaterialsData.filter(i => i.status === "completed").length;
  const completedVideo = videoLessonsData.filter(i => i.status === "completed").length;
  
  const completedItems = completedPractical + completedReading + completedVideo;
  
  const overallProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-5xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-black text-foreground">Course Modules</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-6">
            
            {/* Reading Module */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <BookOpen size={32} />
              </div>
              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold text-foreground">Reading Module</h3>
                <p className="text-muted-foreground text-sm">Access comprehensive reading materials and research papers.</p>
                <div className="text-xs font-bold text-muted-foreground bg-muted inline-block px-2 py-1 rounded">
                   {completedReading}/{readingMaterialsData.length} Completed
                </div>
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold min-w-[160px] shadow-lg shadow-secondary/20">
                <Link href="/learning/reading">Start Reading</Link>
              </Button>
            </div>

            {/* Watching Module */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                <MonitorPlay size={32} />
              </div>
              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold text-foreground">Watching Module</h3>
                <p className="text-muted-foreground text-sm">Watch HD video lectures and expert interviews.</p>
                <div className="text-xs font-bold text-muted-foreground bg-muted inline-block px-2 py-1 rounded">
                   {completedVideo}/{videoLessonsData.length} Completed
                </div>
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold min-w-[160px] shadow-lg shadow-secondary/20">
                <Link href="/learning/watching">Start Watching</Link>
              </Button>
            </div>

            {/* Practical Module */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 flex-shrink-0">
                <ClipboardList size={32} />
              </div>
              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold text-foreground">Practical Module</h3>
                <p className="text-muted-foreground text-sm">Complete assignments and submit your practical work.</p>
                <div className="text-xs font-bold text-muted-foreground bg-muted inline-block px-2 py-1 rounded">
                   {completedPractical}/{practicalChecklistData.length} Completed
                </div>
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold min-w-[160px] shadow-lg shadow-secondary/20">
                <Link href="/learning/practical">View Tasks</Link>
              </Button>
            </div>

          </div>

          {/* Completion Status */}
          <div className="bg-muted/30 rounded-2xl p-8 border border-border space-y-4">
            <div className="flex justify-between items-end">
              <h4 className="font-bold text-foreground text-lg">Overall Completion Status</h4>
              <span className="text-primary font-black text-2xl animate-in fade-in zoom-in duration-500" key={overallProgress}>{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-4 bg-muted text-primary" />
            <div className="text-right">
              <p className="text-xs text-muted-foreground font-medium">
                {completedItems} of {totalItems} tasks completed across all modules.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
