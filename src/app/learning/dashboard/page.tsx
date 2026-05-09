"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  MonitorPlay, 
  ClipboardList, 
  Headphones, 
  ChevronRight,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import { 
  practicalChecklistData, 
  readingMaterialsData, 
  videoLessonsData, 
  audioLessonsData 
} from "@/lib/fake-data";
import { ResponsiveContainer, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, RadialBarChart, RadialBar } from "recharts";

const progressTrendData = [
  { date: '1 Oct', val: 20 },
  { date: '3 Oct', val: 45 },
  { date: '7 Oct', val: 30 },
  { date: '14 Oct', val: 85 },
  { date: '20 Oct', val: 20 },
  { date: '23 Oct', val: 10 },
  { date: '27 Oct', val: 25 },
  { date: '30 Oct', val: 80 },
];

const timeRanges = ['Day', 'Week', 'Month', 'Year'];
const selectedTimeRange = 'Month';

type ModuleChartStat = {
  label: string;
  percent: number;
  color: string;
};

const ProgressChartContent = dynamic(() => Promise.resolve(ProgressChartContentBase), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[24px] bg-slate-50" aria-hidden="true" />,
});

const ModuleRadialChartContent = dynamic(() => Promise.resolve(ModuleRadialChartContentBase), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-full bg-white/70" aria-hidden="true" />,
});

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

  const completedItems = stats.reduce((acc, curr) => acc + curr.completed, 0);
  const totalItems = stats.reduce((acc, curr) => acc + curr.total, 0);
  const overallProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const remainingItems = Math.max(totalItems - completedItems, 0);

  return (
    <main className="min-h-screen bg-[#f6f8fb] flex flex-col">
      <Navbar />

      <section className="relative flex-grow overflow-hidden pt-[calc(var(--navbar-height)+32px)] pb-24 px-4 md:px-6">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f5f8fc_0%,#ffffff_42%,#f7f3eb_100%)]" />
        <div className="container mx-auto max-w-6xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* PAGE HEADING */}
          <div className="relative overflow-hidden rounded-[36px] bg-[#0B2A4A] px-6 py-8 text-white shadow-[0_28px_70px_-35px_rgba(11,42,74,0.75)] md:px-10 md:py-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,162,76,0.26)_0%,rgba(255,255,255,0.08)_38%,rgba(11,42,74,0)_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur">
                  <ShieldCheck size={12} className="text-[#D4A24C]" aria-hidden="true" focusable="false" />
                  Academic Portal
                </div>
                <div className="space-y-3">
                  <h1 className="max-w-2xl text-4xl font-serif tracking-tight md:text-6xl">
                    Student <span className="italic text-[#F6D28F]">Dashboard</span>
                  </h1>
                  <p className="max-w-xl text-sm font-light leading-6 text-white/72 md:text-base">
                    Welcome back, Scholar. Review your institutional progress and research milestones.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.08] backdrop-blur">
                <div className="border-r border-white/10 p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">Progress</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white">{overallProgress}%</p>
                </div>
                <div className="border-r border-white/10 p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">Complete</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white">{completedItems}/{totalItems}</p>
                </div>
                <div className="p-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/45">Remaining</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white">{remainingItems}</p>
                </div>
              </div>
            </div>
          </div>

          {/* TOP CARDS: CLEAN & ROUNDED */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((module) => (
              <Link 
                key={module.label} 
                href={module.href}
                className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/90 p-5 shadow-[0_18px_50px_-32px_rgba(11,42,74,0.55)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-28px_rgba(11,42,74,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                aria-label={`${module.label}: ${module.completed} of ${module.total} items completed, ${module.percent}% progress. Open ${module.label.toLowerCase()} module.`}
                title={`Open ${module.label} module`}
              >
                <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: module.color }} />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <module.icon size={21} aria-hidden="true" focusable="false" />
                  </div>
                  <div className="rounded-full bg-[#f8fafc] px-2.5 py-1 text-[10px] font-black text-primary ring-1 ring-black/5">
                    {module.completed}/{module.total}
                  </div>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-text">{module.label}</p>
                    <p className="text-2xl font-bold tracking-tight text-primary">{module.percent}%</p>
                    <p className="min-h-[32px] text-[11px] font-medium leading-4 text-muted-text">{module.desc}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div 
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${module.percent}%`, backgroundColor: module.color }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-text">
                      <span>Module</span>
                      <ArrowRight size={13} className="text-primary/35 transition-transform group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" focusable="false" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* MAIN STATISTICS AREA based on User Reference */}
          <div className="overflow-hidden rounded-[36px] border border-black/5 bg-white p-6 shadow-[0_24px_70px_-42px_rgba(11,42,74,0.6)] md:p-8 lg:p-10">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
              
              {/* Left Side: Learn Progress Line Chart */}
              <div className="space-y-8 lg:col-span-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                   <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#D4A24C]">Statistics</p>
                      <h4 className="text-3xl font-bold tracking-tight text-primary">Learn Progress</h4>
                   </div>
                   <div className="flex w-full rounded-2xl bg-slate-100/70 p-1 sm:w-auto" aria-label="Progress chart time range">
                      {timeRanges.map((t) => (
                        <button 
                          key={t} 
                          type="button"
                          aria-pressed={t === selectedTimeRange}
                          aria-label={`${t} progress view${t === selectedTimeRange ? " selected" : ""}`}
                          title={`${t} progress view`}
                          className={`flex-1 rounded-xl px-3 py-2 text-[10px] font-bold transition-all sm:flex-none sm:px-4 ${t === selectedTimeRange ? 'bg-primary text-white shadow-lg shadow-primary/15' : 'text-muted-text hover:text-primary'}`}
                        >
                          {t}
                        </button>
                      ))}
                   </div>
                </div>

                <div 
                  className="h-72 w-full rounded-[28px] bg-[linear-gradient(180deg,#fbfcfe_0%,#ffffff_100%)] px-1 pb-2 pt-5"
                  role="img"
                  aria-labelledby="learning-progress-chart-title"
                  aria-describedby="learning-progress-chart-summary"
                >
                  <span id="learning-progress-chart-title" className="sr-only">Learning progress chart</span>
                  <span id="learning-progress-chart-summary" className="sr-only">
                    Monthly learning progress trend from 1 October to 30 October, ranging from 10% to 85%.
                  </span>
                  <ProgressChartContent />
                </div>
              </div>

              {/* Right Side: Radial Bar Chart (Concentric Circles) */}
              <div className="flex flex-col items-center space-y-8 rounded-[32px] bg-[#f8fafc] p-6 ring-1 ring-black/5 lg:col-span-5">
                <div 
                  className="relative flex aspect-square w-full max-w-[320px] items-center justify-center"
                  role="img"
                  aria-labelledby="module-progress-chart-title"
                  aria-describedby="module-progress-chart-summary"
                >
                  <span id="module-progress-chart-title" className="sr-only">Module completion chart</span>
                  <span id="module-progress-chart-summary" className="sr-only">
                    Overall progress is {overallProgress}% with {completedItems} of {totalItems} learning items completed.
                  </span>
                  <ModuleRadialChartContent stats={stats} />

                  {/* Center Text */}
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-5xl font-bold tracking-tighter text-primary">{completedItems}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-text">Total Logs</span>
                    <span className="mt-2 rounded-full bg-white px-3 py-1 text-[10px] font-black text-primary ring-1 ring-black/5">{overallProgress}% overall</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid w-full grid-cols-2 gap-3">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between rounded-2xl bg-white px-3 py-2 ring-1 ring-black/5">
                       <div className="flex items-center gap-2">
                         <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{s.label}</span>
                       </div>
                       <span className="text-[10px] font-black text-muted-text">{s.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* SIMPLE ACTION BUTTON */}
            <div className="relative overflow-hidden rounded-[36px] bg-[#0B2A4A] px-6 py-10 text-center text-white shadow-[0_24px_70px_-38px_rgba(11,42,74,0.7)] md:px-10">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(212,162,76,0.22),rgba(255,255,255,0.07),rgba(11,42,74,0))]" />
              <div className="relative space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f5ead2]/25 bg-white/10 px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#F6D28F]">
                  <ShieldCheck size={14} aria-hidden="true" focusable="false" />
                  CBHK Tier 01 Active
                </div>
                <div className="space-y-1">
                  <h2 className="text-4xl font-serif md:text-5xl">
                    Ready to continue your
                  </h2>
                  <h2 className="relative inline-block text-4xl font-serif italic text-[#F6D28F] md:text-5xl">
                    Research Inquiry?
                    <div className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#d4a24c]/60" />
                  </h2>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg" className="h-16 rounded-full border border-white/10 bg-white px-10 text-base font-bold text-[#1F3A5F] shadow-[0_20px_40px_-18px_rgba(255,255,255,0.45)] transition-all hover:scale-105 hover:bg-[#f8fafc] active:scale-95 md:px-14 md:text-lg">
                  <Link href="/learning/watching" className="flex items-center gap-3" aria-label="Resume your course from the video lessons">
                    <Zap size={20} className="fill-[#d4a24c] text-[#d4a24c]" aria-hidden="true" focusable="false" />
                    Resume your course
                  </Link>
                </Button>
              </div>
              </div>
            </div>

          {/* SIMPLIFIED FOOTER LINKS */}
          <div className="grid grid-cols-1 gap-5 pt-2 md:grid-cols-2">
             <div className="group flex cursor-pointer items-center justify-between rounded-[28px] border border-black/5 bg-white/85 p-6 shadow-[0_18px_50px_-34px_rgba(11,42,74,0.55)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-34px_rgba(11,42,74,0.45)] md:p-8">
                <div className="flex items-center gap-5">
                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary shadow-sm">
                      <BookOpen size={20} aria-hidden="true" focusable="false" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-primary">Manuscript Archive</p>
                      <p className="text-[10px] text-muted-text">Access 42+ peer-reviewed papers</p>
                   </div>
                </div>
                <ChevronRight size={20} className="text-primary/20 transition-all group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" focusable="false" />
             </div>
             <div className="group flex cursor-pointer items-center justify-between rounded-[28px] border border-black/5 bg-white/85 p-6 shadow-[0_18px_50px_-34px_rgba(11,42,74,0.55)] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-34px_rgba(11,42,74,0.45)] md:p-8">
                <div className="flex items-center gap-5">
                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary shadow-sm">
                      <MonitorPlay size={20} aria-hidden="true" focusable="false" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-primary">Board Assignments</p>
                      <p className="text-[10px] text-muted-text">Submit 3 pending investigations</p>
                   </div>
                </div>
                <ChevronRight size={20} className="text-primary/20 transition-all group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" focusable="false" />
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProgressChartContentBase() {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
      <LineChart data={progressTrendData} margin={{ top: 8, right: 14, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="progressLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1F3A5F" />
            <stop offset="100%" stopColor="#D4A24C" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eef2f7" />
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
          contentStyle={{ borderRadius: '16px', border: '1px solid rgba(15, 23, 42, 0.06)', boxShadow: '0 18px 40px rgba(11,42,74,0.12)' }}
          formatter={(value) => [`${value}%`, 'Progress']}
        />
        <Line 
          type="monotone" 
          dataKey="val" 
          name="Progress"
          stroke="url(#progressLine)" 
          strokeWidth={4} 
          dot={{ r: 4, fill: 'white', stroke: '#D4A24C', strokeWidth: 2 }}
          activeDot={{ r: 6, fill: '#D4A24C', stroke: 'white', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function ModuleRadialChartContentBase({ stats }: { stats: ModuleChartStat[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
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
  );
}
