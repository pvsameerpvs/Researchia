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
  List
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

  const categories = ["All", "Development", "Design", "Marketing", "Business"];

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
      <section className="pt-32 pb-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Courses</h1>
              <p className="text-slate-500">Discover your next skill from our collection of top-rated courses.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <Input 
                  placeholder="Search courses..." 
                  className="pl-10 h-11 rounded-full border-slate-200 focus:ring-primary/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon" className="h-11 w-11 rounded-full md:hidden">
                <Filter size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-64 space-y-10">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === cat 
                        ? "bg-primary text-white shadow-md shadow-primary/20" 
                        : "text-slate-600 hover:bg-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Course Type</h3>
                <div className="space-y-3">
                  {["Online", "Offline"].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="w-2.5 h-2.5 rounded-sm bg-primary opacity-0 group-hover:opacity-10"></div>
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Price Range</h3>
                <div className="space-y-3">
                  {["Free", "Premium"].map((price) => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-slate-300 flex items-center justify-center group-hover:border-primary transition-colors">
                        <div className="w-2.5 h-2.5 rounded-sm bg-primary opacity-0 group-hover:opacity-10"></div>
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">
                  Showing <span className="font-bold text-slate-900">{filteredCourses.length}</span> courses
                </div>
                
                <div className="flex items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-9 gap-2 rounded-lg">
                        Sort by: Newest
                        <ChevronDown size={14} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Newest</DropdownMenuItem>
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem>Most Popular</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <div className="hidden sm:flex items-center bg-white border border-slate-200 rounded-lg p-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7 bg-slate-50">
                      <LayoutGrid size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400">
                      <List size={14} />
                    </Button>
                  </div>
                </div>
              </div>

              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">No courses found</h3>
                  <p className="text-slate-500">Try adjusting your filters or search query.</p>
                  <Button 
                    variant="link" 
                    className="mt-4 text-primary"
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Clear all filters
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
