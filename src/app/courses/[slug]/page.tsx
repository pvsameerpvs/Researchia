"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  
  const levelData: Record<string, { title: string; subtitle: string; price: number }> = {
    "level-1": {
      title: "Level 1 Course",
      subtitle: "Beginner Training Course",
      price: 99
    },
    "level-2": {
      title: "Level 2 Course",
      subtitle: "Intermediate Training Course",
      price: 199
    },
    "level-3": {
      title: "Level 3 Course",
      subtitle: "Advanced Training Course",
      price: 299
    }
  };

  const course = levelData[params.slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Course Level Not Found</h1>
          <Button asChild>
            <Link href="/courses">Back to Levels</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-2xl bg-card rounded-xl shadow-2xl border border-border overflow-hidden">
          <div className="p-12 text-center space-y-8">
            
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                {course.title}
              </h1>
              <div className="h-px w-full bg-border max-w-xs mx-auto"></div>
            </div>

            {/* Subtitle & Price */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-muted-foreground">
                {course.subtitle}
              </h2>
              <div className="text-3xl font-black text-foreground">
                Price: ${course.price}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <Button asChild size="lg" className="w-full md:w-2/3 h-16 text-xl font-bold rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all hover:scale-105">
                <Link href="/payment">
                  Buy Now
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
