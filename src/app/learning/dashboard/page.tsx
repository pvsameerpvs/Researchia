"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MonitorPlay, 
  ClipboardList, 
  Headphones, 
  ChevronRight,
  ShieldCheck,
  Zap,
  TrendingUp
} from "lucide-react";
import { 
  practicalChecklistData, 
  readingMaterialsData, 
  videoLessonsData, 
  audioLessonsData 
} from "@/lib/fake-data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, RadialBarChart, RadialBar } from "recharts";

export default function DashboardPage() {
  // Statistics Calculation
  const stats = [
    { label: "Reading", desc: "Institutional Manuscripts & Research Papers", icon: BookOpen, data: readingMaterialsData, href: "/learning/reading", color: "#3b82f6" },
    { label: "Lectures", desc: "Executive Video Presentations & HD Sessions", icon: MonitorPlay, data: videoLessonsData, href: "/learning/watching", color: "#8b5cf6" },
    { label: "Listening", desc: "Professional Audio Briefings & Briefs", icon: Headphones, data: audioLessonsData, href: "/learning/listening", color: "#10b981" },
    { label: "Practical", desc: "Field Investigations & Empirical Evidence", icon: ClipboardList, data: practicalChecklistData, href: "/learning/practical", color: "#f59e0b" },
  ].map(module => {
    const completed = module.data.filter(i => i.status === "completed").length;
    const total = module.data.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { ...module, completed, total, percent };
  });

  const totalItems = stats.reduce((acc, curr) => acc + curr.total, 0);
  const completedItems = stats.reduce((acc, curr) => acc + curr.completed, 0);
  const overallProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  // Chart Data
  const chartData = [
    { name: "Completed", value: completedItems, color: "#D4A24C" },
    { name: "Remaining", value: totalItems - completedItems, color: "#f1f1f1" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] flex flex-col">
      <Navbar />

      <section className="flex-grow pt-[calc(var(--navbar-height)+40px)] pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* PAGE HEADING */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-accent" />
              Academic Portal
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-serif text-primary tracking-tight">
                Student <span className="italic underline decoration-accent/30 underline-offset-8">Dashboard</span>
              </h1>
              <p className="text-secondary text-sm font-light max-w-md">
                Welcome back, Scholar. Review your institutional progress and research milestones.
              </p>
            </div>
          </div>

          {/* TOP CARDS: CLEAN & ROUNDED */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((module) => (
              <Link 
                key={module.label} 
                href={module.href}
                className="bg-white p-6 rounded-[32px] border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <module.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-text uppercase tracking-widest">{module.label}</p>
                    <div className="flex items-center justify-center gap-2">
                       <p className="text-xl font-bold text-primary">{module.percent}%</p>
                       <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/5 text-primary/60 font-bold">{module.completed}/{module.total}</span>
                    </div>
                    <p className="text-[9px] text-muted-text font-medium leading-tight max-w-[120px] mx-auto">{module.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* MAIN STATISTICS AREA based on User Reference */}
          <div className="bg-white p-10 md:p-12 rounded-[48px] border border-black/5 shadow-2xl shadow-black/[0.02]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Side: Learn Progress Line Chart */}
              <div className="lg:col-span-7 space-y-10">
                <div className="flex items-center justify-between">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black text-muted-text uppercase tracking-widest">Statistics</p>
                      <h4 className="text-2xl font-bold text-primary">Learn Progress</h4>
                   </div>
                   <div className="flex bg-slate-100/50 p-1 rounded-2xl">
                      {['Day', 'Week', 'Month', 'Year'].map((t) => (
                        <button 
                          key={t} 
                          className={`px-4 py-1.5 rounded-xl text-[10px] font-bold transition-all ${t === 'Month' ? 'bg-primary text-white shadow-lg' : 'text-muted-text hover:text-primary'}`}
                        >
                          {t}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { date: '1 Oct', val: 20 },
                      { date: '3 Oct', val: 45 },
                      { date: '7 Oct', val: 30 },
                      { date: '14 Oct', val: 85 },
                      { date: '20 Oct', val: 20 },
                      { date: '23 Oct', val: 10 },
                      { date: '27 Oct', val: 25 },
                      { date: '30 Oct', val: 80 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f1f1" />
                      <XAxis 
                        dataKey="date" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 9, fontWeight: 700, fill: '#6B7280'}} 
                        dy={10}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 9, fontWeight: 700, fill: '#6B7280'}}
                        domain={[0, 100]}
                        ticks={[0, 30, 60, 90]}
                        tickFormatter={(v) => `${v}%`}
                      />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="val" 
                        stroke="#D4A24C" 
                        strokeWidth={3} 
                        dot={{ r: 4, fill: 'white', stroke: '#D4A24C', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#D4A24C', stroke: 'white', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right Side: Radial Bar Chart (Concentric Circles) */}
              <div className="lg:col-span-5 flex flex-col items-center space-y-10">
                <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                      innerRadius="30%" 
                      outerRadius="100%" 
                      data={stats.map(s => ({ name: s.label, value: s.percent, fill: s.color }))} 
                      startAngle={90} 
                      endAngle={450}
                    >
                      <RadialBar
                        background
                        dataKey="value"
                        cornerRadius={15}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>

                  {/* Center Text */}
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-5xl font-bold text-primary tracking-tighter">{completedItems}</span>
                    <span className="text-[10px] font-black text-muted-text uppercase tracking-widest">Total Logs</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }}></div>
                       <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* SIMPLE ACTION BUTTON */}
            <div className="text-center space-y-10 py-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#fdf8ee] text-[#d4a24c] text-[10px] font-black uppercase tracking-[0.2em] border border-[#f5ead2]">
                  <ShieldCheck size={14} />
                  BHK Tier 01 Active
                </div>
                <div className="space-y-1">
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1F3A5F]">
                    Ready to continue your
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-serif italic text-[#1F3A5F] relative inline-block">
                    Research Inquiry?
                    <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#d4a24c]/40 rounded-full"></div>
                  </h2>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="h-16 px-14 rounded-full bg-[#1F3A5F] hover:bg-[#152a45] text-white font-bold text-lg shadow-[0_20px_40px_-10px_rgba(31,58,95,0.3)] transition-all hover:scale-105 active:scale-95 border-none">
                  <Link href="/learning/watching" className="flex items-center gap-3">
                    <Zap size={20} className="fill-[#d4a24c] text-[#d4a24c]" />
                    Resume your course
                  </Link>
                </Button>
              </div>
            </div>

          {/* SIMPLIFIED FOOTER LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-black/5">
             <div className="bg-[#f9f9fb] p-8 rounded-[40px] flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <BookOpen size={20} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-primary">Manuscript Archive</p>
                      <p className="text-[10px] text-muted-text">Access 42+ peer-reviewed papers</p>
                   </div>
                </div>
                <ChevronRight size={20} className="text-primary/20 group-hover:text-primary transition-colors" />
             </div>
             <div className="bg-[#f9f9fb] p-8 rounded-[40px] flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-lg transition-all">
                <div className="flex items-center gap-5">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                      <MonitorPlay size={20} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-primary">Board Assignments</p>
                      <p className="text-[10px] text-muted-text">Submit 3 pending investigations</p>
                   </div>
                </div>
                <ChevronRight size={20} className="text-primary/20 group-hover:text-primary transition-colors" />
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
