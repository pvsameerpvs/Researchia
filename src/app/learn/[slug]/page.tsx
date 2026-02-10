"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Menu, 
  Play, 
  CheckCircle2, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  HelpCircle,
  MessageSquare,
  Search,
  CheckCircle,
  X,
  Volume2,
  FileDown,
  Award,
  Circle,
  Trophy,
  Download,
  Share2,
  Printer,
  Upload,
  Video,
  Camera,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
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
import { Lesson, Module } from "@/types/course";
import { cn } from "@/lib/utils";

export default function CourseLearningPage({ params }: { params: { slug: string } }) {
  const course = courses.find(c => c.slug === params.slug) || courses[0];
  const details = courseDetails[params.slug as keyof typeof courseDetails] || courseDetails["advanced-human-behavior"];
  
  // States
  const [activeLesson, setActiveLesson] = useState<Lesson>(details.modules[0].lessons[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  // Exam States
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | string | undefined>>({});
  const [examFinished, setExamFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);

  // Auto-scroll to top on lesson change
  useEffect(() => {
    const mainArea = document.getElementById("main-content-area");
    if (mainArea) mainArea.scrollTo(0, 0);
  }, [activeLesson]);

  const handleComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    // Find next lesson
    const allLessons = details.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    if (currentIndex < allLessons.length - 1) {
      setActiveLesson(allLessons[currentIndex + 1]);
    }
  };

  const isExam = activeLesson.type === "quiz";

  const handleStartExam = () => {
    setExamStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setExamFinished(false);
  };

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  const handleNextQuestion = () => {
    if (activeLesson.questions && currentQuestionIndex < activeLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    if (!activeLesson.questions) return;
    
    let correctCount = 0;
    activeLesson.questions.forEach(q => {
      // FOR UI TESTING: Any selected answer is considered correct
      if (selectedAnswers[q.id] !== undefined) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / activeLesson.questions.length) * 100);
    setScore(finalScore);
    setExamFinished(true);
    setPassed(finalScore >= 80);
    
    if (finalScore >= 80) {
      handleComplete(activeLesson.id);
    }
  };

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
          {!isExam && (
            <Button size="sm" onClick={() => handleComplete(activeLesson.id)} className="hidden md:flex gap-2 rounded-lg font-bold h-9 px-6 bg-slate-900 hover:bg-slate-800">
              Complete & Next
              <ChevronRight size={16} />
            </Button>
          )}
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
              {details.modules.map((module: Module, mIdx: number) => (
                <AccordionItem key={mIdx} value={`item-${mIdx}`} className="border-none mb-1">
                  <AccordionTrigger className="hover:no-underline hover:bg-slate-50 px-4 py-3 rounded-xl transition-all data-[state=open]:bg-slate-50">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-xs font-bold text-primary uppercase">Module {mIdx + 1}</span>
                      <span className="text-sm font-bold text-slate-900 text-left">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-1 space-y-1">
                    {module.lessons.map((lesson: Lesson, lIdx: number) => {
                      const isActive = activeLesson.id === lesson.id;
                      const isCompleted = completedLessons.includes(lesson.id);
                      return (
                        <button
                          key={lIdx}
                          onClick={() => {
                            setActiveLesson(lesson);
                            setExamStarted(false);
                            setExamFinished(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group ${
                            isActive 
                            ? "bg-slate-900 text-white shadow-lg shadow-slate-200/50" 
                            : "hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            isActive ? "bg-white/20" : isCompleted ? "bg-emerald-100 text-emerald-600" : "bg-slate-100"
                          }`}>
                            {isCompleted ? <CheckCircle size={14} /> : lesson.type === "quiz" ? <Award size={12} className={isActive ? "text-white" : "text-amber-500"} /> : <Play size={10} fill={isActive ? "currentColor" : "none"} className={isActive ? "" : "text-slate-400"} />}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium leading-tight mb-1">{lesson.title}</div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-slate-300" : "text-slate-400"}`}>
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
          <div id="main-content-area" className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
            <div className="max-w-5xl mx-auto space-y-8 pb-32">
              
              {isExam ? (
                <div className="space-y-8">
                  {!examStarted ? (
                    <div className="bg-white rounded-[40px] p-12 shadow-2xl shadow-slate-200 border border-slate-100 text-center space-y-8 animate-in zoom-in duration-500">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <Award size={48} />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold text-slate-900">{activeLesson.title}</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                          You are about to begin the final doctoral assessment for <strong>{course.title}</strong>. 
                          This examination consists of {activeLesson.questions?.length || 0} peer-reviewed research questions.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                          <div className="text-slate-400 text-xs font-bold uppercase mb-2">Questions</div>
                          <div className="text-2xl font-bold text-slate-900">{activeLesson.questions?.length || 0}</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                          <div className="text-slate-400 text-xs font-bold uppercase mb-2">Time Limit</div>
                          <div className="text-2xl font-bold text-slate-900">{activeLesson.duration}</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                          <div className="text-slate-400 text-xs font-bold uppercase mb-2">Passing Score</div>
                          <div className="text-2xl font-bold text-slate-900">80%</div>
                        </div>
                      </div>
                      <Button onClick={handleStartExam} size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 bg-slate-900 hover:bg-slate-800">
                        Begin Examination
                      </Button>
                    </div>
                  ) : examFinished ? (
                    <div className="animate-in fade-in zoom-in duration-700">
                      {passed ? (
                        <div className="space-y-8">
                          {/* Passed Result */}
                          <div className="bg-white rounded-[40px] p-12 shadow-2xl border-4 border-emerald-100 text-center space-y-8">
                            <div className="w-32 h-32 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                              <Trophy size={64} />
                            </div>
                            <div className="space-y-4">
                              <h2 className="text-4xl font-black text-slate-900">Doctoral Candidate Certified!</h2>
                              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                                Congratulations! You have successfully completed the examination with a score of <span className="text-emerald-600 font-bold">{score}%</span>.
                              </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                              <Button asChild size="lg" className="h-16 px-10 rounded-2xl font-bold bg-slate-900 hover:bg-slate-800 gap-3">
                                <Link href="#certificate-view">
                                  <Award size={20} />
                                  View Certificate
                                </Link>
                              </Button>
                              <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl font-bold gap-3 border-slate-200">
                                <Share2 size={20} />
                                Share Success
                              </Button>
                            </div>
                          </div>

                          {/* Certificate View */}
                          <div id="certificate-view" className="certificate-bg bg-white border-[16px] border-slate-900 rounded-[40px] p-16 shadow-2xl relative overflow-hidden aspect-[1.414/1]">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-900 text-white flex items-center justify-center rotate-45 translate-x-32 -translate-y-32">
                               <div className="-rotate-45 mt-20 font-black text-4xl">PHD</div>
                            </div>
                            
                            <div className="space-y-12 text-center relative z-10">
                              <div className="inline-flex items-center gap-3 text-slate-900 font-black px-6 py-2 bg-slate-100 rounded-full">
                                <Award size={24} />
                                RESEARCHIA DOCTORAL ACADEMY
                              </div>
                              
                              <div className="space-y-4">
                                <h4 className="text-slate-500 font-bold uppercase tracking-[0.4em] text-sm">Certificate of Achievement</h4>
                                <p className="text-slate-400 font-medium">This is to certify that</p>
                                <h3 className="text-5xl font-black text-slate-900 underline underline-offset-8 decoration-primary">DR. SCHOLAR USER</h3>
                              </div>

                              <div className="space-y-2">
                                <p className="text-slate-500 font-medium">has satisfactorily completed the advanced research program in</p>
                                <h2 className="text-3xl font-extrabold text-slate-900">{course.title}</h2>
                              </div>

                              <div className="grid grid-cols-2 gap-20 pt-12 max-w-2xl mx-auto">
                                <div className="border-t-2 border-slate-200 pt-4">
                                  <div className="font-bold text-slate-900 text-xl italic">Marcus Thorne</div>
                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">CHANCELLOR</div>
                                </div>
                                <div className="border-t-2 border-slate-200 pt-4 text-right">
                                  <div className="font-bold text-slate-900 text-xl italic">{course.instructor.name}</div>
                                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">PRINCIPAL RESEARCHER</div>
                                </div>
                              </div>

                              <div className="pt-8 text-slate-300 font-bold text-[10px] tracking-widest uppercase">
                                Issued: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • ID: CERT-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                              </div>
                            </div>

                            <div className="absolute bottom-10 right-10 flex gap-4 no-print">
                               <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-slate-50 text-slate-900 shadow-md">
                                 <Printer size={20} />
                               </Button>
                               <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-slate-50 text-slate-900 shadow-md">
                                 <Download size={20} />
                               </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white rounded-[40px] p-12 shadow-2xl border-4 border-rose-100 text-center space-y-8">
                          <div className="w-24 h-24 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto">
                            <X size={48} />
                          </div>
                          <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900">Score Requirement Not Met</h2>
                            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                              You achieved a score of <span className="text-rose-600 font-bold">{score}%</span>. 
                              A minimum of 80% is required to obtain doctoral certification.
                            </p>
                          </div>
                          <Button onClick={handleStartExam} size="lg" className="h-16 px-12 rounded-2xl text-lg font-bold bg-slate-900 hover:bg-slate-800">
                            Attempt Re-Examination
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-8 animate-in slide-in-from-right duration-500">
                      {/* Exam Header */}
                      <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="space-y-1">
                          <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Scientific Assessment</h3>
                          <div className="text-lg font-bold text-slate-600">
                            Question {currentQuestionIndex + 1} of {activeLesson.questions?.length}
                          </div>
                        </div>
                        <div className="w-full max-w-xs mx-8">
                           <Progress value={((currentQuestionIndex + 1) / (activeLesson.questions?.length || 1)) * 100} className="h-2" />
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-rose-500 uppercase tracking-widest">Time Remaining</div>
                          <div className="text-xl font-bold text-slate-900">114:23</div>
                        </div>
                      </div>

                      {/* Question Card */}
                      {activeLesson.questions && (
                        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl border border-slate-100 space-y-12 min-h-[500px] flex flex-col justify-between">
                          <div className="space-y-10">
                            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                              {activeLesson.questions[currentQuestionIndex].question}
                            </h2>
                            
                            <div className="grid grid-cols-1 gap-6">
                              {/* Media Placeholder if required */}
                              {activeLesson.questions[currentQuestionIndex].requiredImage && (
                                <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
                                  <Image 
                                    src={activeLesson.questions[currentQuestionIndex].requiredImage!} 
                                    alt="Question material" 
                                    fill 
                                    className="object-cover"
                                  />
                                </div>
                              )}

                              {currentQuestionIndex === 1 && (
                                <div className="space-y-4">
                                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Question Exhibit A</div>
                                </div>
                              )}

                              {activeLesson.questions[currentQuestionIndex].submissionType === "mcq" || !activeLesson.questions[currentQuestionIndex].submissionType ? (
                                <div className="grid grid-cols-1 gap-4">
                                  {activeLesson.questions[currentQuestionIndex].options?.map((option, idx) => {
                                    const isSelected = selectedAnswers[activeLesson.questions![currentQuestionIndex].id] === idx;
                                    return (
                                      <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(activeLesson.questions![currentQuestionIndex].id, idx)}
                                        className={cn(
                                          "p-6 rounded-3xl border-2 text-left transition-all flex items-center gap-4 group",
                                          isSelected 
                                          ? "border-primary bg-primary/[0.03] shadow-lg shadow-primary/5" 
                                          : "border-slate-100 hover:border-slate-200 bg-slate-50"
                                        )}
                                      >
                                        <div className={cn(
                                          "w-8 h-8 rounded-xl flex items-center justify-center transition-all",
                                          isSelected ? "bg-primary text-white scale-110" : "bg-white text-slate-400 group-hover:bg-slate-200"
                                        )}>
                                          {isSelected ? <CheckCircle size={20} /> : <Circle size={16} />}
                                        </div>
                                        <span className={cn(
                                          "text-lg font-bold",
                                          isSelected ? "text-slate-900" : "text-slate-600"
                                        )}>{option}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div className="space-y-6">
                                  <div className="bg-slate-50 border-4 border-dashed border-slate-200 rounded-[40px] p-12 text-center flex flex-col items-center gap-6 group hover:border-primary/50 hover:bg-slate-100/50 transition-all cursor-pointer relative overflow-hidden">
                                     {selectedAnswers[activeLesson.questions[currentQuestionIndex].id] !== undefined ? (
                                       <div className="space-y-4 animate-in zoom-in">
                                          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle size={40} />
                                          </div>
                                          <div className="text-lg font-black text-slate-900 uppercase tracking-tight">Evidence Uploaded Successfully</div>
                                           <Button variant="outline" onClick={(e) => { 
                                              e.stopPropagation(); 
                                              setSelectedAnswers(prev => {
                                                const newAnswers = { ...prev };
                                                delete newAnswers[activeLesson.questions![currentQuestionIndex].id];
                                                return newAnswers;
                                              });
                                            }} className="rounded-full font-bold">Replace File</Button>
                                       </div>
                                     ) : (
                                       <>
                                         <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-all group-hover:scale-110">
                                           {activeLesson.questions[currentQuestionIndex].submissionType === "video" ? (
                                              <Video size={48} />
                                           ) : activeLesson.questions[currentQuestionIndex].submissionType === "image" ? (
                                              <Camera size={48} />
                                           ) : (
                                              <Upload size={48} />
                                           )}
                                         </div>
                                         <div className="space-y-2">
                                           <div className="text-2xl font-black text-slate-900">Drag & Drop Doctoral Evidence</div>
                                           <p className="text-slate-500 font-medium">
                                             {activeLesson.questions[currentQuestionIndex].submissionType === "video" 
                                               ? "Attach MP4/MOV research recording (Max 500MB)" 
                                               : activeLesson.questions[currentQuestionIndex].submissionType === "image"
                                               ? "Attach high-resolution JPEG/PNG anatomical scan"
                                               : "Attach scholarly PDF/DOCX manuscript for review"}
                                           </p>
                                         </div>
                                         <Button onClick={() => handleOptionSelect(activeLesson.questions![currentQuestionIndex].id, 1)} className="h-14 px-10 rounded-2xl font-black bg-slate-900 hover:bg-black transition-all">
                                           Browse Files
                                         </Button>
                                       </>
                                     )}
                                  </div>
                                  
                                  <div className="flex items-center gap-4 p-6 bg-amber-50 rounded-3xl border border-amber-100 text-amber-900 font-medium text-sm italic">
                                     <ExternalLink size={20} className="shrink-0" />
                                     Your submission will be hashed and stored in the institutional research ledger for peer-review.
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                             <Button 
                               variant="ghost" 
                               onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                               disabled={currentQuestionIndex === 0}
                               className="h-14 px-8 rounded-2xl font-bold gap-2"
                             >
                               <ChevronLeft size={20} />
                               Previous Inquiry
                             </Button>
                             <Button 
                               onClick={handleNextQuestion}
                               disabled={selectedAnswers[activeLesson.questions[currentQuestionIndex].id] === undefined}
                               className="h-14 px-12 rounded-2xl font-black gap-2 shadow-xl shadow-primary/20 bg-slate-900 hover:bg-black"
                             >
                               {currentQuestionIndex === activeLesson.questions.length - 1 ? "Submit For Peer Review" : "Next Inquiry"}
                               <ChevronRight size={20} />
                             </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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
                        <video 
                          className="w-full h-full object-cover" 
                          src={activeLesson.videoUrl} 
                          poster={course.thumbnail}
                          controls
                        />
                        <div className="absolute top-4 right-4 z-10 flex gap-2">
                           <Badge className="bg-white/20 backdrop-blur-md text-white border-none py-2 px-4 rounded-xl">PhD SESSION • HD</Badge>
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
                        <div className="w-full max-w-xl space-y-8">
                           <audio controls className="w-full rounded-[24px]" src={activeLesson.audioUrl} />
                           <div className="flex items-center justify-center gap-12 text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
                              <div className="flex flex-col items-center gap-2">
                                 <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900">
                                    <ChevronLeft />
                                 </button>
                                 Skip Back
                              </div>
                              <div className="flex flex-col items-center gap-2">
                                 <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all text-slate-900">
                                    <ChevronRight />
                                 </button>
                                 Skip Next
                              </div>
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
                          <Button asChild size="lg" className="rounded-2xl gap-2 font-bold px-8">
                            <a href={activeLesson.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <FileDown size={20} />
                              Open PDF
                            </a>
                          </Button>
                        </div>
                        <div className="aspect-[4/5] bg-slate-100 rounded-[32px] overflow-hidden flex items-center justify-center border-4 border-dashed border-slate-200 relative group">
                           <iframe src={`${activeLesson.pdfUrl}#toolbar=0`} className="w-full h-full" />
                           <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                              <Button variant="secondary" className="pointer-events-auto rounded-full font-black">Click to Expand Research</Button>
                           </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Lesson Text Content */}
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-slate-900 text-white border-none text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest">DR SESSION: {activeLesson.id}</Badge>
                      <span className="text-slate-400 text-sm font-bold tracking-wide uppercase tracking-[0.1em] text-[10px]">Academic Unit: {details.modules.find(m => m.lessons.includes(activeLesson))?.title}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">{activeLesson.title}</h1>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-[1.8] text-lg">
                      <p>
                        This advanced research session investigates the complex dynamics outlined in <strong>{activeLesson.title}</strong>. 
                        Scholars are expected to synthesize the video data, auditory lectures, and peer-reviewed PDF transcripts provided above.
                      </p>
                      <div className="bg-slate-100 h-px w-full my-10"></div>
                      <h3 className="text-slate-900 font-black text-2xl uppercase tracking-tight mb-8 flex items-center gap-3">
                        <Microscope className="text-primary" />
                        Scientific Learning Objectives
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        {[
                          "Formulate empirical research hypotheses",
                          "Analyze behavioral variance across data sets",
                          "Deconstruct structural neural pathways",
                          "Synthesize findings for peer-review"
                        ].map((obj, i) => (
                          <div key={i} className="flex items-start gap-4 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:translate-y-[-4px] transition-all">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                               <CheckCircle2 size={16} />
                            </div>
                            <span className="text-slate-700 font-bold leading-relaxed">{obj}</span>
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
          <div className="h-24 bg-white border-t border-slate-200 px-8 flex items-center justify-between flex-shrink-0 relative z-50">
            <Button 
              variant="outline" 
              onClick={() => {
                 const allLessons = details.modules.flatMap(m => m.lessons);
                 const index = allLessons.findIndex(l => l.id === activeLesson.id);
                 if (index > 0) setActiveLesson(allLessons[index-1]);
              }}
              className="h-14 px-8 rounded-2xl border-slate-200 text-slate-600 font-bold gap-2 hover:bg-slate-50 transition-all"
            >
              <ChevronLeft size={20} />
              Previous Research Unit
            </Button>
            
            <div className="hidden md:flex items-center gap-10">
              <button className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all font-black text-[10px] uppercase tracking-widest group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                   <MessageSquare size={18} />
                </div>
                Academic Forum
              </button>
              <button className="flex items-center gap-3 text-slate-500 hover:text-primary transition-all font-black text-[10px] uppercase tracking-widest group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                   <Search size={18} />
                </div>
                Metadata Search
              </button>
            </div>

            {!isExam && (
              <Button onClick={() => handleComplete(activeLesson.id)} className="h-14 px-12 rounded-2xl font-black gap-3 shadow-2xl shadow-slate-300 bg-slate-900 hover:bg-black transition-all hover:translate-x-1">
                Mark Unit Completed
                <ChevronRight size={20} />
              </Button>
            )}
          </div>
        </section>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
        @media print {
          .no-print {
            display: none !important;
          }
        }
        .certificate-bg {
           background-image: radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0);
           background-size: 32px 32px;
        }
      `}</style>
    </main>
  );
}

const Microscope = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>
  </svg>
);
