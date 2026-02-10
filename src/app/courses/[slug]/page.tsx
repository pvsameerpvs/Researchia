"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { courses, courseDetails } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { isUserLoggedIn } from "@/lib/auth";
import { 
  Users, 
  Star, 
  CheckCircle2, 
  Play,
  ChevronRight,
  ShieldCheck,
  Award,
  Calendar,
  Lock,
  FileText,
  Volume2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  const course = courses.find((c) => c.slug === params.slug);
  const details = courseDetails[params.slug as keyof typeof courseDetails] || courseDetails["advanced-human-behavior"];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Course Banner */}
      <section className="pt-32 pb-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2">
                <Link href="/courses" className="text-slate-400 hover:text-white transition-colors text-sm">Courses</Link>
                <ChevronRight size={14} className="text-slate-600" />
                <span className="text-sm font-medium">{course.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 py-4">
                <div className="flex items-center gap-1.5 text-yellow-400">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold">4.9</span>
                  <span className="text-slate-400">(2,450 ratings)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Users size={18} className="text-primary" />
                  <span>{course.students.toLocaleString()} researchers enrolled</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck size={18} className="text-emerald-500" />
                  <span>PhD Certificate Included</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-slate-100 flex items-center justify-center">
                   <Users size={24} className="text-slate-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Principal Researcher</div>
                  <div className="font-bold text-white">{course.instructor.name}</div>
                </div>
              </div>
            </div>

            <div className="lg:w-[400px]">
              {/* This is empty to leave space for the floating card on desktop */}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Left Content */}
            <div className="flex-1 space-y-16">
              
              {/* Enrollment Policy */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-2xl text-primary">
                  <Calendar size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900">Program Duration Policy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    This is a intensive <span className="font-bold text-primary">{course.duration}</span> program. 
                    According to Researchia policy, you have a maximum of <span className="font-bold text-primary">{course.validityPeriod}</span> to complete all modules and the final examination.
                  </p>
                </div>
              </div>

              {/* About Course */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-primary pl-4">About this research program</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {details.about}
                </p>
              </div>

              {/* What you'll learn */}
              <div className="bg-slate-50 rounded-3xl p-8 space-y-6 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900">Learning & Research Outcomes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {details.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content / Curriculum */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Research Curriculum</h2>
                  <div className="text-sm text-slate-500">
                    {details.modules.length} sections • {course.lessons} sessions
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-3">
                  {details.modules.map((module, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-white overflow-hidden border-slate-200">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-4 text-left">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                            {idx + 1}
                          </span>
                          <span className="font-bold text-slate-900">{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2">
                        <div className="space-y-3 pl-12">
                          {module.lessons.map((lesson, lIdx) => (
                            <div key={lIdx} className="flex items-center justify-between group">
                              <div className="flex items-center gap-3">
                                {lesson.type === 'quiz' ? <Award size={14} className="text-amber-500" /> : <Play size={14} className="text-primary opacity-50 transition-opacity" />}
                                <span className="text-sm text-slate-600 transition-colors group-hover:text-primary">{lesson.title}</span>
                              </div>
                              <div className="flex gap-2">
                                {lesson.type !== 'quiz' && (
                                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <VideoIcon />
                                    <AudioIcon />
                                    <PdfIcon />
                                  </div>
                                )}
                                <span className="text-xs text-slate-400">{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Sidebar - Floating Pricing Card */}
            <div className="lg:w-[400px]">
              <div className="lg:sticky lg:top-28">
                <Card className="overflow-hidden shadow-2xl border-slate-200 rounded-[32px]">
                  <div className="relative aspect-video">
                    <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer group">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all border border-white/30">
                        <Play fill="currentColor" size={32} />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-black text-slate-900">${course.price}</span>
                        <span className="text-xl text-slate-400 line-through font-medium">${(course.price * 1.5).toFixed(0)}</span>
                        <Badge className="bg-rose-100 text-rose-600 border-none px-3 font-bold">LIMITED</Badge>
                      </div>
                      <p className="text-rose-500 text-sm font-semibold flex items-center gap-2 italic">
                        <Lock size={14} /> Only available for Researchia members
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {isLoggedIn ? (
                        <Button asChild size="lg" className="w-full h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20 bg-slate-900 hover:bg-slate-800">
                          <Link href="/payment">Process Secure Payment</Link>
                        </Button>
                      ) : (
                        <Button asChild size="lg" className="w-full h-14 rounded-2xl text-base font-bold shadow-lg shadow-slate-200">
                          <Link href="/login" className="flex items-center gap-2">
                            <Lock size={18} />
                            Login to Enroll
                          </Link>
                        </Button>
                      )}
                      {!isLoggedIn && (
                        <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                          Enrollment Restricted to Logged-in Scholars
                        </p>
                      )}
                    </div>

                    <div className="space-y-5 pt-4">
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Research Materials Included:</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { icon: <Play size={16} />, text: "Video Lectures (HD)" },
                          { icon: <Volume2 size={16} />, text: "Audio Companion Lessons" },
                          { icon: <FileText size={16} />, text: "PhD Research PDFs" },
                          { icon: <Award size={16} />, text: "Final Doctoral Examination" },
                          { icon: <ShieldCheck size={16} />, text: `Valid for ${course.validityPeriod}` },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                            <span className="text-primary">{item.icon}</span>
                            {item.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const VideoIcon = () => (
  <span className="p-1 bg-blue-50 text-blue-500 rounded flex items-center justify-center">
    <Play size={10} fill="currentColor" />
  </span>
);

const AudioIcon = () => (
  <span className="p-1 bg-amber-50 text-amber-500 rounded flex items-center justify-center">
    <Volume2 size={10} />
  </span>
);

const PdfIcon = () => (
  <span className="p-1 bg-rose-50 text-rose-500 rounded flex items-center justify-center">
    <FileText size={10} />
  </span>
);
