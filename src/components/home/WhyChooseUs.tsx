"use client";

import { Layout, Shield, Search, Zap } from "lucide-react";

const reasons = [
  {
    title: "Framework-Based Approach",
    description: "Our structured methodologies provide a solid foundation for sustainable growth and consistent excellence.",
    icon: Layout,
  },
  {
    title: "Practical Expertise",
    description: "Deep industry knowledge combined with real-world application ensures high-impact results for your organization.",
    icon: Zap,
  },
  {
    title: "Accountability Systems",
    description: "Robust tracking and reporting mechanisms that keep teams focused and projects on schedule.",
    icon: Shield,
  },
  {
    title: "Proven Results",
    description: "A track record of success with measurable outcomes that demonstrate real value and long-term impact.",
    icon: Search,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="h-px flex-grow max-w-[100px] md:max-w-[200px] bg-accent/50"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white text-center whitespace-nowrap">
            Why Choose Us
          </h2>
          <div className="h-px flex-grow max-w-[100px] md:max-w-[200px] bg-accent/50"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className={`p-8 md:p-12 flex gap-6 items-start transition-colors hover:bg-muted/30 ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } ${
                    index < 2 ? "border-b" : ""
                  } border-border/50`}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center text-accent">
                    <reason.icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
