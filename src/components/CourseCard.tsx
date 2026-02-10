import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Users } from "lucide-react";

import { type Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className={course.mode === "Online" ? "bg-blue-500/90" : "bg-emerald-500/90"}>
            {course.mode}
          </Badge>
          <Badge variant="secondary" className="bg-white/90 text-slate-900 border-none shadow-sm">
            {course.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
            <Image 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              width={24} 
              height={24} 
            />
          </div>
          <span className="text-xs font-medium text-slate-500">{course.instructor.name}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between py-3 border-y border-slate-100 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <BookOpen size={14} className="text-primary" />
            <span>{course.lessons} Research Units</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Users size={14} className="text-primary" />
            <span>{course.students} Scholars</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-black tracking-widest text-slate-300">Grant Allocation</span>
          <span className="text-xl font-black text-slate-900">
            ${course.price}
          </span>
        </div>
        <Button asChild className="rounded-xl px-6 h-11 font-bold shadow-lg shadow-primary/10 transition-all group-hover:bg-slate-900 group-hover:text-white">
          <Link href={`/courses/${course.slug}`}>Examine Research</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
