"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, MonitorPlay, CheckCircle2, Pause } from "lucide-react";
import { videoLessonsData, type VideoLesson } from "@/lib/fake-data";
import { useState } from "react";

export default function WatchingModulePage() {
  const [lessons, setLessons] = useState<VideoLesson[]>(videoLessonsData);
  const [currentLessonId, setCurrentLessonId] = useState<string>("vid-1");
  const [isPlaying, setIsPlaying] = useState(false);

  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];
  const completedCount = lessons.filter(l => l.status === "completed").length;
  const totalCount = lessons.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  const handleLessonClick = (lesson: VideoLesson) => {
    setCurrentLessonId(lesson.id);
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    // If starting to play, update status to 'watching' if it was pending
    if (!isPlaying && currentLesson.status === 'pending') {
      setLessons(prev => prev.map(l => 
        l.id === currentLessonId ? { ...l, status: 'watching' } : l
      ));
    }
  };

  const markCompleted = () => {
    setLessons(prev => prev.map(l => 
      l.id === currentLessonId ? { ...l, status: 'completed' } : l
    ));
    setIsPlaying(false);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
                 <Link href="/learning/dashboard"><ArrowLeft size={24} className="text-muted-foreground hover:text-foreground transition-colors" /></Link>
               </Button>
              <div className="space-y-1">
                <h1 className="text-3xl font-black text-foreground">Watching Module</h1>
                <p className="text-muted-foreground text-sm font-medium">Level 1 Course • Video Lectures</p>
              </div>
            </div>
            
            <div className="text-right hidden md:block">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-1">Course Progress</span>
              <div className="flex items-center gap-3">
                 <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                 </div>
                 <span className="text-xl font-black text-primary">{progressPercentage}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative aspect-video border-4 border-slate-900 group">
                {/* Mock Video Content */}
                <Image 
                  src={currentLesson.thumbnail} 
                  alt={currentLesson.title}
                  fill
                  className={`object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-40' : 'opacity-60'}`}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handlePlay}
                    className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl group-hover:border-white/50"
                  >
                    {isPlaying ? (
                      <Pause size={40} fill="white" className="text-white" />
                    ) : (
                      <Play size={40} fill="white" className="text-white ml-2" />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-white font-bold text-2xl line-clamp-1">{currentLesson.title}</h3>
                  <div className="flex justify-between items-end mt-2">
                    <p className="text-slate-300 text-sm">Duration: {currentLesson.duration} • HD Quality</p>
                    {currentLesson.status !== 'completed' && (
                      <Button 
                        size="sm" 
                        onClick={markCompleted}
                        className="bg-primary hover:bg-primary/90 text-white font-bold text-xs"
                      >
                        Mark Completed
                      </Button>
                    )}
                  </div>
                  
                  {/* Progress Scrubber Mock */}
                  <div className="mt-4 flex items-center gap-4 group/scrubber cursor-pointer">
                     <span className="text-xs font-mono text-white/70">00:00</span>
                     <div className="h-1 bg-white/20 rounded-full flex-grow overflow-hidden relative">
                       <div className={`h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)] ${isPlaying ? 'w-[15%]' : 'w-0'} transition-all duration-1000`}></div>
                     </div>
                     <span className="text-xs font-mono text-white/70">{currentLesson.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Lesson Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In this lesson, we cover the fundamental aspects of academic research. 
                  Make sure to take notes on key methodologies and prepare for the upcoming quiz section.
                </p>
              </div>
            </div>

            {/* Playlist Sidebar */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <MonitorPlay size={20} className="text-primary" />
                Up Next
              </h3>
              
              <div className="space-y-3 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    onClick={() => handleLessonClick(lesson)}
                    className={`
                      relative p-3 rounded-xl border transition-all cursor-pointer flex gap-3 group
                      ${currentLessonId === lesson.id 
                        ? 'bg-primary/5 border-primary shadow-sm' 
                        : 'bg-card border-border hover:border-primary/30 hover:bg-muted/50'}
                    `}
                  >
                    <div className="relative w-28 h-20 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={lesson.thumbnail} 
                        alt={lesson.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {lesson.status === 'completed' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <CheckCircle2 size={20} className="text-emerald-400" />
                        </div>
                      )}
                      
                      {currentLessonId === lesson.id && isPlaying && (
                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <span className="flex gap-1">
                              <span className="w-1 h-3 bg-white animate-[bounce_1s_infinite]"></span>
                              <span className="w-1 h-3 bg-white animate-[bounce_1s_infinite_0.2s]"></span>
                              <span className="w-1 h-3 bg-white animate-[bounce_1s_infinite_0.4s]"></span>
                            </span>
                         </div>
                      )}
                    </div>
                    
                    <div className="flex-grow min-w-0 flex flex-col justify-center">
                      <h4 className={`font-bold text-sm line-clamp-2 ${currentLessonId === lesson.id ? 'text-primary' : 'text-foreground'}`}>
                        {lesson.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">{lesson.duration}</span>
                        {lesson.status === 'completed' && <span className="text-[10px] font-bold text-emerald-600">Watched</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
