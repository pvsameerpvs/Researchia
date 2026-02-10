"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/constants/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronDown,
  LayoutGrid,
  List,
  Binary,
  Microscope,
  Award
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Neuroscience", "Psychology", "Management", "Economics", "Sociology", "Humanities"];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Research Directory</h1>
              <p className="text-xl text-slate-500 font-bold max-w-2xl">Access elite PhD programs investigating the foundational patterns of human behavior.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative w-full md:w-96 shadow-2xl shadow-slate-200/50">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <Input 
                  placeholder="Search research fields..." 
                  className="pl-12 h-14 rounded-2xl border-transparent bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/10 font-bold text-slate-900 transition-all px-6"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl md:hidden border-slate-200">
                <Filter size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-72 space-y-12">
              <div className="space-y-6">
                <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <Binary size={14} className="text-primary" />
                  Fields of Study
                </h3>
                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-6 py-4 rounded-[20px] text-sm font-black transition-all duration-300 border-2 ${
                        activeCategory === cat 
                        ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-300 scale-[1.05]" 
                        : "text-slate-600 bg-white border-transparent hover:border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                  <Microscope size={14} className="text-emerald-500" />
                  Methodology
                </h3>
                <div className="space-y-4">
                  {["Online", "Offline"].map((type) => (
                    <label key={type} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-6 h-6 rounded-lg border-2 border-slate-200 flex items-center justify-center group-hover:border-primary transition-all">
                        <div className="w-3 h-3 rounded-sm bg-primary opacity-0 group-hover:opacity-20"></div>
                      </div>
                      <span className="text-sm text-slate-600 font-bold tracking-tight">{type} Lab Access</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-black text-slate-900 uppercase text-xs tracking-[0.2em] flex items-center gap-2">
                   <Award size={14} className="text-amber-500" />
                  Grant Status
                </h3>
                <div className="space-y-4">
                  {["Self-Funded", "Institutional Grant"].map((price) => (
                    <label key={price} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-6 h-6 rounded-lg border-2 border-slate-200 flex items-center justify-center group-hover:border-primary transition-all">
                        <div className="w-3 h-3 rounded-sm bg-primary opacity-0 group-hover:opacity-20"></div>
                      </div>
                      <span className="text-sm text-slate-600 font-bold tracking-tight">{price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-10">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm font-bold text-slate-500">
                  Collating <span className="font-black text-slate-900">{filteredCourses.length}</span> advanced research programs
                </div>
                
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="lg" className="h-12 gap-3 rounded-[16px] border-slate-200 font-bold px-6">
                        Sort: Relevance
                        <ChevronDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-2xl p-2 w-48 border-slate-200 font-bold text-slate-600">
                      <DropdownMenuItem className="rounded-xl">Scientific Impact</DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl">Grant: Low to High</DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl">Grant: High to Low</DropdownMenuItem>
                      <DropdownMenuItem className="rounded-xl">Most Cited</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className="hidden sm:flex items-center bg-white border-2 border-slate-100 rounded-[14px] p-1 shadow-sm">
                    <Button variant="ghost" size="icon" className="h-9 w-9 bg-slate-900 text-white rounded-lg">
                      <LayoutGrid size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-900 rounded-lg">
                      <List size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-white rounded-[40px] border-2 border-dashed border-slate-200 shadow-inner">
                  <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search size={40} className="text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">No Research found</h3>
                  <p className="text-slate-500 font-medium">Try adjusting your taxonomy or research keywords.</p>
                  <Button 
                    variant="link" 
                    className="mt-6 text-primary font-black"
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Clear research filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
