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
  X
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
import { courses, courseDetails } from "@/constants/data";

export default function CourseLearningPage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug) || courses[0];
  const details = courseDetails[params.slug as keyof typeof courseDetails] || courseDetails["full-stack-web-development"];
  
  const [activeLesson, setActiveLesson] = useState(details.modules[0].lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Your Progress</div>
              <div className="text-sm font-bold text-slate-900 leading-none">12 of 48 lessons</div>
            </div>
            <div className="w-24">
              <Progress value={25} className="h-2 bg-slate-100" />
            </div>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2 rounded-lg border-slate-200 font-medium h-9">
            <HelpCircle size={16} />
            Get Help
          </Button>
          <Button size="sm" className="hidden md:flex gap-2 rounded-lg font-bold h-9 px-6 bg-slate-900 hover:bg-slate-800">
            Next Lesson
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
            <h2 className="font-bold text-slate-900">Course Content</h2>
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
                      const isActive = activeLesson === lesson;
                      const isCompleted = mIdx === 0 && lIdx < 2;
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
                            {isCompleted ? <CheckCircle size={14} /> : isActive ? <Play size={10} fill="currentColor" /> : <Play size={10} className="text-slate-400" />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium leading-tight mb-1">{lesson}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-slate-400" : "text-slate-400"}`}>
                              {lIdx % 2 === 0 ? "Video • 12m" : "Quiz • 5m"}
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
              
              {/* Main Content (Video Placeholder) */}
              <div className="aspect-video bg-slate-900 rounded-[32px] overflow-hidden relative group shadow-2xl shadow-slate-300">
                <Image 
                  src="/courses/web-dev.png" 
                  alt="Video content" 
                  fill 
                  className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                    <Play fill="currentColor" size={32} />
                  </div>
                </div>
                
                {/* Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-6">
                    <Play size={24} fill="white" className="text-white" />
                    <div className="h-1.5 w-64 bg-white/20 rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-primary"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white font-bold text-sm">
                    <span>12:45 / 32:00</span>
                    <Settings size={20} />
                  </div>
                </div>
              </div>

              {/* Lesson Text Content */}
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/10 text-primary border-none text-[10px] px-3 font-bold uppercase tracking-widest">Masterclass</Badge>
                  <span className="text-slate-400 text-sm font-medium tracking-wide">• Chapter 2, Lesson 4</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{activeLesson}</h1>
                <div className="prose prose-slate max-w-none text-slate-600 leading-[1.8] text-lg">
                  <p>
                    In this lesson, we dive deep into the core concepts and advanced techniques. We will cover a range of practical examples and walk through the implementation steps carefully.
                  </p>
                  <h3>Key Takeaways:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <CheckCircle2 className="text-emerald-500 mt-1" size={20} />
                        <span className="text-slate-700 font-medium italic">Understanding the fundamental architecture of the design system.</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="text-primary" size={24} />
                  Lesson Resources
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Lesson Notes.pdf", color: "text-rose-500", bg: "bg-rose-50" },
                    { name: "Code Snippets.zip", color: "text-blue-500", bg: "bg-blue-50" },
                    { name: "Further Reading.link", color: "text-indigo-500", bg: "bg-indigo-50" }
                  ].map((res, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary transition-all cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${res.bg} ${res.color} flex items-center justify-center`}>
                          <FileText size={20} />
                        </div>
                        <span className="font-bold text-slate-900 text-sm group-hover:text-primary transition-colors">{res.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="h-20 bg-white border-t border-slate-200 px-8 flex items-center justify-between flex-shrink-0 relative z-10">
            <Button variant="outline" className="h-12 rounded-xl border-slate-200 text-slate-600 font-bold gap-2">
              <ChevronLeft size={20} />
              Previous Lesson
            </Button>
            <div className="hidden md:flex items-center gap-8">
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm">
                <MessageSquare size={18} />
                Discuss
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm">
                <Search size={18} />
                Notebook
              </button>
            </div>
            <Button className="h-12 rounded-xl px-10 font-bold gap-2 shadow-lg shadow-primary/20">
              Next Lesson
              <ChevronRight size={20} />
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
