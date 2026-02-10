"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/constants/data";

export default function FeaturedResearch() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Active Research Programs</h2>
            <p className="text-slate-600 max-w-xl font-medium">
              Select from our elite doctoral curricula, each mentored by leading clinical psychologists and behavioral scientists.
            </p>
          </div>
          <Button variant="outline" asChild className="rounded-2xl border-slate-200 h-12 px-6 font-bold">
            <Link href="/courses">Full Research Directory</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
