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
  MoreHorizontal
} from "lucide-react";

export default function MyCoursesPage() {
  const myCourses = courses.slice(0, 2); // Mock some courses as enrolled

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">My Learning</h1>
              <p className="text-slate-500 font-medium">Continue your learning journey where you left off.</p>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200">
              <Button variant="ghost" className="bg-primary text-white hover:bg-primary/90 rounded-xl px-6 h-10 shadow-md shadow-primary/20">All Courses</Button>
              <Button variant="ghost" className="text-slate-500 rounded-xl px-6 h-10">In Progress</Button>
              <Button variant="ghost" className="text-slate-500 rounded-xl px-6 h-10">Completed</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {myCourses.map((course, idx) => (
                <div key={course.id} className="bg-white rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100 group">
                  <div className="w-full md:w-56 h-36 rounded-2xl overflow-hidden relative shadow-lg group-hover:scale-[1.02] transition-transform">
                    <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary">
                        <Play fill="currentColor" size={24} />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{course.category}</span>
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                          <Clock size={14} />
                          <span>Last viewed: 2 hours ago</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{course.title}</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 font-medium">Course Progress</span>
                        <span className="text-slate-900 font-bold">{idx === 0 ? "45%" : "12%"}</span>
                      </div>
                      <Progress value={idx === 0 ? 45 : 12} className="h-2.5 bg-slate-100" />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Button asChild size="lg" className="rounded-xl px-8 h-12 gap-2 shadow-lg shadow-primary/20">
                        <Link href={`/learn/${course.slug}`}>
                          <Play fill="currentColor" size={16} />
                          Resume Learning
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl border border-slate-100">
                        <MoreHorizontal size={20} className="text-slate-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 rounded-[32px] p-8 text-white space-y-8 shadow-2xl shadow-slate-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center relative z-10">
                    <Trophy className="text-yellow-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Your Progress</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-1">
                    <div className="text-4xl font-black">2</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Courses In</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-black">12</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Lessons Watched</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-black">45</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Hours Spent</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-black">0</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Completed</div>
                  </div>
                </div>

                <Button className="w-full h-14 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-bold relative z-10 shadow-xl shadow-black/20">
                  View Achievements
                </Button>
              </div>

              <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6">
                <h3 className="font-bold text-slate-900">Recently Viewed</h3>
                <div className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Career Development</div>
                      <div className="text-slate-500">Free Workshop</div>
                    </div>
                  </div>
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
