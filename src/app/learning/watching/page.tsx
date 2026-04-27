"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, MonitorPlay, CheckCircle2, Pause, Sparkles, GraduationCap } from "lucide-react";
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
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />

      <section className="flex-grow min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl space-y-10 animate-in fade-in slide-in-from-right-8 duration-700 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Button variant="ghost" asChild className="p-0 hover:bg-transparent h-auto hover:text-primary">
                 <Link href="/learning/dashboard" className="flex items-center gap-2 group text-primary font-bold">
                   <div className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                     <ArrowLeft size={20} />
                   </div>
                   Back
                 </Link>
               </Button>
              <div className="h-10 w-px bg-primary/10 hidden md:block"></div>
              <div className="space-y-1">
                <h1 className="text-3xl font-serif font-medium text-primary">Lecture <span className="italic">Series</span></h1>
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">Behavioral Simulations • Expert Analysis</p>
              </div>
            </div>
            
            <div className="text-right bg-white p-4 rounded-2xl border border-primary/5 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-text block mb-1">Module Progression</span>
              <div className="flex items-center gap-3">
                 <div className="w-32 h-1.5 bg-primary/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                 </div>
                 <span className="text-xl font-serif italic text-accent">{progressPercentage}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-primary rounded-[40px] overflow-hidden shadow-2xl relative aspect-video border-[6px] border-white group">
                <Image 
                  src={currentLesson.thumbnail} 
                  alt={currentLesson.title}
                  fill
                  className={`object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-40' : 'opacity-70'}`}
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={handlePlay}
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl group-hover:border-white/60"
                  >
                    {isPlaying ? (
                      <Pause size={32} fill="white" className="text-white" />
                    ) : (
                      <Play size={32} fill="white" className="text-white ml-1" />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary via-primary/60 to-transparent">
                  <h3 className="text-white font-serif text-2xl mb-1">{currentLesson.title}</h3>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3 text-white/70 text-xs font-bold uppercase tracking-widest">
                       <MonitorPlay size={16} />
                       Duration: {currentLesson.duration}
                    </div>
                    {currentLesson.status !== 'completed' && (
                      <Button 
                        size="sm" 
                        onClick={markCompleted}
                        className="h-10 px-6 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xs shadow-lg shadow-accent/20"
                      >
                        Log Presentation as Viewed
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
                        if (currentIndex < lessons.length - 1) setCurrentLessonId(lessons[currentIndex + 1].id);
                      }}
                      disabled={lessons.findIndex(l => l.id === currentLessonId) === lessons.length - 1}
                      className="h-10 px-6 rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 font-bold text-xs"
                    >
                      Next Presentation
                    </Button>
                  </div>
                  
                  {/* Progress Scrubber Mock */}
                  <div className="mt-4 flex items-center gap-4">
                     <span className="text-[10px] font-bold text-white/50 tracking-tighter">00:00</span>
                     <div className="h-1 bg-white/10 rounded-full flex-grow overflow-hidden relative">
                       <div className={`h-full bg-accent shadow-[0_0_10px_rgba(212,162,76,0.8)] ${isPlaying ? 'w-[15%]' : 'w-0'} transition-all duration-1000`}></div>
                     </div>
                     <span className="text-[10px] font-bold text-white/50 tracking-tighter">{currentLesson.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-primary/5 rounded-[32px] p-8 shadow-xl shadow-primary/[0.02]">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      <GraduationCap size={20} />
                   </div>
                   <h3 className="font-serif text-xl font-medium text-primary">Abstract & Key Objectives</h3>
                </div>
                <p className="text-muted-text text-sm leading-relaxed font-light">
                  This presentation delves into the structural behavioral frameworks that define professional certification standards. 
                  Scholars should focus on the intersection of theoretical modeling and practical implementation observed during the simulation.
                </p>
              </div>
            </div>

            {/* Playlist Sidebar */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-medium text-primary flex items-center gap-3 pl-2">
                <Sparkles size={20} className="text-accent" />
                Series Content
              </h3>
              
              <div className="space-y-3 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {lessons.map((lesson) => (
                  <div 
                    key={lesson.id} 
                    onClick={() => handleLessonClick(lesson)}
                    className={`
                      relative p-3 rounded-[24px] border transition-all cursor-pointer flex gap-4 group
                      ${currentLessonId === lesson.id 
                        ? 'bg-primary border-primary shadow-xl shadow-primary/20' 
                        : 'bg-white border-primary/5 hover:border-accent/30 hover:shadow-lg hover:shadow-primary/[0.03]'}
                    `}
                  >
                    <div className="relative w-28 h-20 bg-primary/10 rounded-[18px] overflow-hidden flex-shrink-0 border-2 border-transparent group-hover:border-accent/30 transition-all">
                      <Image 
                        src={lesson.thumbnail} 
                        alt={lesson.title} 
                        fill
                        className={`object-cover group-hover:scale-110 transition-transform duration-700 ${currentLessonId === lesson.id ? 'opacity-40' : ''}`}
                      />
                      {lesson.status === 'completed' && (
                        <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                          <CheckCircle2 size={24} className="text-accent" />
                        </div>
                      )}
                      
                      {currentLessonId === lesson.id && (
                         <div className="absolute inset-0 flex items-center justify-center">
                            <span className="flex gap-1.5">
                              <span className="w-1 h-3 bg-accent animate-[bounce_1s_infinite]"></span>
                              <span className="w-1 h-3 bg-accent animate-[bounce_1s_infinite_0.2s]"></span>
                              <span className="w-1 h-3 bg-accent animate-[bounce_1s_infinite_0.4s]"></span>
                            </span>
                         </div>
                      )}
                    </div>
                    
                    <div className="flex-grow min-w-0 flex flex-col justify-center">
                      <h4 className={`font-bold text-sm line-clamp-2 leading-tight mb-2 ${currentLessonId === lesson.id ? 'text-white' : 'text-primary'}`}>
                        {lesson.title}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${currentLessonId === lesson.id ? 'bg-white/10 text-accent' : 'bg-primary/5 text-primary'}`}>
                          {lesson.duration}
                        </span>
                        {lesson.status === 'completed' && <span className={`text-[9px] font-black uppercase tracking-widest ${currentLessonId === lesson.id ? 'text-white/60' : 'text-accent'}`}>Archived</span>}
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

