"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  Menu, 
  Play, 
  CheckCircle2, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  Settings,
  HelpCircle,
  MessageSquare,
  Search,
  CheckCircle,
  X,
  Volume2,
  FileDown,
  Lock,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses, courseDetails } from "@/constants/data";
import { Lesson } from "@/types/course";

export default function CourseLearningPage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug) || courses[0];
  const details = courseDetails[params.slug as keyof typeof courseDetails] || courseDetails["advanced-human-behavior"];
  
  const [activeLesson, setActiveLesson] = useState<Lesson>(details.modules[0].lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const isExam = activeLesson.type === "quiz";

  return (
    <main className="h-screen bg-slate-950 flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 flex-shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/my-courses" className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
            <ArrowLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
          <h1 className="font-bold text-slate-900 truncate max-w-[200px] md:max-w-md">{course.title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 mr-6">
            <div className="text-right">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Session Progress</div>
              <div className="text-sm font-bold text-slate-900 leading-none">{completedLessons.length} of {course.lessons} lessons</div>
            </div>
            <div className="w-24">
              <Progress value={(completedLessons.length / course.lessons) * 100} className="h-2 bg-slate-100" />
            </div>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2 rounded-lg border-slate-200 font-medium h-9">
            <HelpCircle size={16} />
            Support
          </Button>
          <Button size="sm" onClick={() => handleComplete(activeLesson.id)} className="hidden md:flex gap-2 rounded-lg font-bold h-9 px-6 bg-slate-900 hover:bg-slate-800">
            Complete & Next
            <ChevronRight size={16} />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-80' : 'w-0'} bg-white border-r border-slate-200 flex flex-col transition-all duration-300 overflow-hidden lg:h-full absolute lg:relative z-40 h-[calc(100vh-64px)] shadow-2xl lg:shadow-none`}>
          <div className="p-6 border-b border-slate-100 bg-white sticky top-0 z-10">
            <h2 className="font-bold text-slate-900">Research Curriculum</h2>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {details.modules.map((module, mIdx) => (
                <AccordionItem key={mIdx} value={`item-${mIdx}`} className="border-none mb-1">
                  <AccordionTrigger className="hover:no-underline hover:bg-slate-50 px-4 py-3 rounded-xl transition-all data-[state=open]:bg-slate-50">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xs font-bold text-primary uppercase">Module {mIdx + 1}</span>
                      <span className="text-sm font-bold text-slate-900 text-left">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-1 space-y-1">
                    {module.lessons.map((lesson, lIdx) => {
                      const isActive = activeLesson.id === lesson.id;
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <button
                          key={lIdx}
                          onClick={() => setActiveLesson(lesson)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group ${
                            isActive 
                            ? "bg-slate-900 text-white shadow-lg shadow-slate-200/50" 
                            : "hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            isActive ? "bg-white/20" : isCompleted ? "bg-emerald-100 text-emerald-600" : "bg-slate-100"
                          }`}>
                            {isCompleted ? <CheckCircle size={14} /> : lesson.type === "quiz" ? <Lock size={12} /> : <Play size={10} fill={isActive ? "currentColor" : "none"} className={isActive ? "" : "text-slate-400"} />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium leading-tight mb-1">{lesson.title}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider text-slate-400`}>
                              {lesson.type.toUpperCase()} • {lesson.duration}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 bg-slate-50 flex flex-col overflow-hidden relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-5xl mx-auto space-y-8">
              
              {isExam ? (
                <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-slate-200 border border-slate-100 text-center space-y-8 animate-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                    <Award size={48} />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold text-slate-900">{activeLesson.title}</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                      This is the final doctoral examination for this research program. 
                      You will have 120 minutes to complete the assessment. 
                      A minimum score of 80% is required for certification.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Questions</div>
                      <div className="text-2xl font-bold text-slate-900">50</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Time Limit</div>
                      <div className="text-2xl font-bold text-slate-900">2 Hours</div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                      <div className="text-slate-400 text-xs font-bold uppercase mb-2">Passing Score</div>
                      <div className="text-2xl font-bold text-slate-900">80%</div>
                    </div>
                  </div>
                  <Button size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                    Start Examination Now
                  </Button>
                </div>
              ) : (
                <>
                  {/* Lesson Content Tabs */}
                  <Tabs defaultValue="video" className="w-full space-y-8">
                    <div className="flex items-center justify-between flex-wrap gap-4 bg-white p-2 rounded-[24px] border border-slate-200 shadow-sm sticky top-0 z-20">
                      <TabsList className="bg-transparent h-12 gap-2">
                        <TabsTrigger value="video" className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white h-full px-6 gap-2">
                          <Play size={16} fill="currentColor" />
                          Video Class
                        </TabsTrigger>
                        <TabsTrigger value="audio" className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white h-full px-6 gap-2">
                          <Volume2 size={16} />
                          Audio Class
                        </TabsTrigger>
                        <TabsTrigger value="pdf" className="rounded-xl data-[state=active]:bg-slate-900 data-[state=active]:text-white h-full px-6 gap-2">
                          <FileText size={16} />
                          Research PDF
                        </TabsTrigger>
                      </TabsList>
                      <div className="flex gap-2 pr-2">
                        <Button variant="outline" size="sm" className="rounded-xl border-slate-200 h-10 px-4 gap-2">
                          <FileDown size={16} />
                          Download All
                        </Button>
                      </div>
                    </div>

                    <TabsContent value="video" className="mt-0 ring-0 focus-visible:ring-0">
                      <div className="aspect-video bg-slate-900 rounded-[32px] overflow-hidden relative group shadow-2xl shadow-slate-300 ring-8 ring-white">
                        <Image 
                          src={course.thumbnail} 
                          alt="Video content" 
                          fill 
                          className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                            <Play fill="currentColor" size={40} />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-6">
                            <Play size={24} fill="white" className="text-white" />
                            <div className="h-1.5 w-64 bg-white/20 rounded-full relative overflow-hidden">
                              <div className="absolute top-0 left-0 h-full w-1/3 bg-primary"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-white font-bold text-sm">
                            <span>12:45 / {activeLesson.duration}</span>
                            <Settings size={20} />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="audio" className="mt-0 ring-0 focus-visible:ring-0">
                      <div className="bg-white rounded-[32px] p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-8 ring-8 ring-white">
                        <div className="w-32 h-32 rounded-full bg-slate-50 flex items-center justify-center text-primary animate-pulse">
                          <Volume2 size={48} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-slate-900">Audio Lecture: {activeLesson.title}</h3>
                          <p className="text-slate-500">PhD Research Series • Deep Dive Audio</p>
                        </div>
                        <div className="w-full max-w-xl space-y-4">
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-primary"></div>
                          </div>
                          <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span>05:12</span>
                            <span>{activeLesson.duration}</span>
                          </div>
                          <div className="flex items-center justify-center gap-8">
                            <button className="text-slate-400 hover:text-slate-900 transition-colors">
                              <ChevronLeft size={32} />
                            </button>
                            <button className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
                              <Play size={32} fill="currentColor" />
                            </button>
                            <button className="text-slate-400 hover:text-slate-900 transition-colors">
                              <ChevronRight size={32} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="pdf" className="mt-0 ring-0 focus-visible:ring-0">
                      <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 ring-8 ring-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center">
                              <FileText size={32} />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">Research Paper: {activeLesson.title}</h3>
                              <p className="text-slate-500 text-sm">PDF Document • 4.2 MB • 24 Pages</p>
                            </div>
                          </div>
                          <Button size="lg" className="rounded-2xl gap-2 font-bold px-8">
                            <FileDown size={20} />
                            Open PDF
                          </Button>
                        </div>
                        <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-200">
                          <div className="text-center space-y-4">
                            <FileText size={64} className="mx-auto text-slate-300" />
                            <p className="text-slate-400 font-medium">Interactive PDF Preview</p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Lesson Text Content */}
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary border-none text-[10px] px-3 font-bold uppercase tracking-widest">PhD Research</Badge>
                      <span className="text-slate-400 text-sm font-medium tracking-wide">• Currently Studying: {activeLesson.title}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">{activeLesson.title}</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-[1.8] text-lg">
                      <p>
                        In this session of the <strong>{course.title}</strong> program, we explore critical data points and theoretical frameworks. 
                        Please review all materials (Video, Audio, and PDF) carefully to prepare for the final doctorate examination.
                      </p>
                      <div className="bg-amber-50 h-px w-full my-8"></div>
                      <h3 className="text-slate-900 font-bold">Scientific Objectives:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="flex items-start gap-3 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle2 className="text-emerald-500 mt-1" size={20} />
                            <span className="text-slate-700 font-medium italic">Empirical analysis and structural modeling of behavioral responses.</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="h-24 bg-white border-t border-slate-200 px-8 flex items-center justify-between flex-shrink-0 relative z-10">
            <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-slate-600 font-bold gap-2 hover:bg-slate-50">
              <ChevronLeft size={20} />
              Previous Lesson
            </Button>
            <div className="hidden md:flex items-center gap-8">
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm">
                <MessageSquare size={18} />
                Research Forum
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm">
                <Search size={18} />
                Study Notes
              </button>
            </div>
            <Button onClick={() => handleComplete(activeLesson.id)} className="h-14 px-12 rounded-2xl font-extrabold gap-2 shadow-xl shadow-primary/20 bg-slate-900 hover:bg-slate-800 transition-all">
              Mark Completed
              <ChevronRight size={20} />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
