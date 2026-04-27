"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Headphones, Sparkles } from "lucide-react";
import { audioLessonsData, AudioLesson } from "@/lib/fake-data";
import { useState } from "react";
import Image from "next/image";

export default function ListeningModulePage() {
  const [activeAudio, setActiveAudio] = useState<AudioLesson>(
    audioLessonsData.find(a => a.status === 'listening') || audioLessonsData[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const completedCount = audioLessonsData.filter(a => a.status === 'completed').length;
  const progressPercent = Math.round((completedCount / audioLessonsData.length) * 100);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <main className="min-h-screen bg-light-bg flex flex-col">
      <Navbar />

      <section className="flex-grow min-h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] py-16 px-4 md:px-6 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
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
                <h1 className="text-3xl font-serif font-medium text-primary tracking-tight">Audio <span className="italic">Seminars</span></h1>
                <p className="text-secondary text-[10px] font-bold uppercase tracking-widest">Aural Research • Clinical Briefings</p>
              </div>
            </div>

            <div className="bg-white px-6 py-4 rounded-3xl border border-primary/5 shadow-xl shadow-primary/[0.02] flex items-center gap-8">
               <div className="text-right">
                 <p className="text-[10px] font-bold text-muted-text uppercase tracking-widest mb-1">Module Progression</p>
                 <p className="text-2xl font-serif italic text-primary">{progressPercent}%</p>
               </div>
               <div className="w-32 h-2 bg-primary/5 rounded-full overflow-hidden">
                 <div className="h-full bg-accent" style={{ width: `${progressPercent}%` }}></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Audio Player Area */}
            <div className="lg:col-span-8 space-y-8">
              <div className="relative aspect-video rounded-[48px] overflow-hidden bg-primary shadow-2xl group">
                <Image 
                  src={activeAudio.thumbnail}
                  alt={activeAudio.title}
                  fill
                  className="object-cover opacity-60 mix-blend-luminosity"
                />
                
                {/* Visualizer Mockup */}
                <div className="absolute bottom-12 left-12 right-12 h-32 flex items-end gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 bg-white/40 rounded-full transition-all duration-500 ${isPlaying ? 'animate-pulse' : ''}`}
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8 text-white p-12">
                  <div className="w-24 h-24 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center text-accent-foreground shadow-2xl cursor-pointer hover:scale-110 transition-all border-4 border-white/20" onClick={togglePlay}>
                    {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-2" />}
                  </div>
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl font-serif italic">{activeAudio.title}</h2>
                    <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Session Duration: {activeAudio.duration}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-primary to-transparent">
                  <div className="flex items-center gap-4 text-white/80 text-xs font-bold mb-4">
                    <span>0:00</span>
                    <Progress value={0} className="h-1 bg-white/20" />
                    <span>{activeAudio.duration}</span>
                  </div>
                </div>
              </div>

              {/* Controls & Description */}
              <div className="bg-white rounded-[40px] p-10 border border-primary/5 shadow-2xl shadow-primary/[0.03] space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-primary/10 text-primary hover:bg-primary/5" onClick={() => {
                        const currentIndex = audioLessonsData.findIndex(a => a.id === activeAudio.id);
                        if (currentIndex > 0) setActiveAudio(audioLessonsData[currentIndex - 1]);
                      }} disabled={audioLessonsData.findIndex(a => a.id === activeAudio.id) === 0}>
                        <SkipBack size={24} />
                      </Button>
                      <Button onClick={togglePlay} className="w-20 h-20 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20">
                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                      </Button>
                      <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-primary/10 text-primary hover:bg-primary/5" onClick={() => {
                        const currentIndex = audioLessonsData.findIndex(a => a.id === activeAudio.id);
                        if (currentIndex < audioLessonsData.length - 1) setActiveAudio(audioLessonsData[currentIndex + 1]);
                      }} disabled={audioLessonsData.findIndex(a => a.id === activeAudio.id) === audioLessonsData.length - 1}>
                        <SkipForward size={24} />
                      </Button>
                    </div>
                    <div className="flex gap-4">
                      <Button className="h-14 px-10 rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/10">
                        Log Reflection Notes
                      </Button>
                      <Button variant="outline" className="h-14 px-8 rounded-2xl border-primary/10 text-primary font-bold hover:bg-primary/5" onClick={() => {
                        const currentIndex = audioLessonsData.findIndex(a => a.id === activeAudio.id);
                        if (currentIndex < audioLessonsData.length - 1) setActiveAudio(audioLessonsData[currentIndex + 1]);
                      }} disabled={audioLessonsData.findIndex(a => a.id === activeAudio.id) === audioLessonsData.length - 1}>
                        Next Session
                      </Button>
                    </div>
                  </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                    <Headphones size={18} className="text-accent" />
                    Abstract & Key Objectives
                  </div>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    This scholarly briefing explores the auditory cues and behavioral indicators within cognitive foundations. 
                    Scholars should focus on the intersection of vocal tonal analysis and clinical observation documented 
                    during this aural simulation.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Playlist */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-2 px-2">
                <Sparkles size={18} className="text-accent" />
                Series Content
              </div>
              <div className="space-y-4">
                {audioLessonsData.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => setActiveAudio(item)}
                    className={`group relative p-4 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                      activeAudio.id === item.id 
                        ? 'bg-primary border-primary shadow-2xl shadow-primary/20 -translate-y-1' 
                        : 'bg-white border-primary/5 hover:border-accent/30 hover:shadow-xl hover:shadow-primary/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-lg">
                        <Image 
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className={`object-cover ${activeAudio.id === item.id ? 'opacity-40' : 'opacity-100'}`}
                        />
                        {activeAudio.id === item.id && (
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <Headphones size={24} className="animate-bounce" />
                          </div>
                        )}
                      </div>
                      <div className="flex-grow space-y-1.5 pr-2">
                        <h3 className={`font-bold text-sm leading-tight transition-colors ${activeAudio.id === item.id ? 'text-white' : 'text-primary'}`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeAudio.id === item.id ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'}`}>
                            {item.duration}
                          </span>
                          {item.status === 'completed' && (
                            <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Completed</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Institutional Resource Card */}
              <div className="bg-primary p-8 rounded-[40px] text-white space-y-4 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                 <Headphones size={40} className="text-accent" />
                 <h4 className="text-xl font-serif italic">Advanced Aural Research</h4>
                 <p className="text-white/60 text-xs leading-relaxed font-light">
                   Access the complete institutional audio archive for deeper clinical insights and peer-reviewed interviews.
                 </p>
                 <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl py-6 font-bold uppercase text-[10px] tracking-widest">
                   Request Archive Key
                 </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
