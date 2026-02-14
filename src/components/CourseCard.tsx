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
    <Card className="group overflow-hidden border-border bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className={course.mode === "Online" ? "bg-primary/90" : "bg-accent/90"}>
            {course.mode}
          </Badge>
          <Badge variant="secondary" className="bg-card/90 text-foreground border-none shadow-sm">
            {course.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-5 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex-shrink-0 border border-border">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{course.instructor.name}</span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between py-3 border-y border-border mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={14} className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen size={14} className="text-primary" />
            <span>{course.lessons} Research Units</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users size={14} className="text-primary" />
            <span>{course.students} Scholars</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 mt-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground/50">Grant Allocation</span>
          <span className="text-xl font-black text-foreground">
            ${course.price}
          </span>
        </div>
        <Button asChild className="rounded-xl px-6 h-11 font-bold shadow-lg shadow-primary/10 transition-all group-hover:bg-foreground group-hover:text-background">
          <Link href={`/courses/${course.slug}`}>Examine Research</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
