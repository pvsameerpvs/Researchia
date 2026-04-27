"use client";

import { Users, BarChart3, Briefcase } from "lucide-react";

const missions = [
  {
    title: "Enhance Workplace Culture",
    description: "Fostering an environment of inclusivity, growth, and shared values to build a resilient and motivated workforce.",
    icon: Users,
  },
  {
    title: "Enhance Organizational Ability",
    description: "Optimizing internal processes and leadership capabilities to achieve peak performance and operational agility.",
    icon: BarChart3,
  },
  {
    title: "Improve Responsiveness",
    description: "Developing the capacity to adapt quickly to market changes and stakeholder needs through strategic foresight.",
    icon: Briefcase,
  },
];

export default function Mission() {
  return (
    <section className="py-20 md:py-32 bg-[#F5F7FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
            Our Mission: Elevating Workplace Excellence
          </h2>
          <div className="h-1 w-32 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border/50">
          {missions.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 md:p-12 flex flex-col items-center text-center space-y-6 ${
                index !== missions.length - 1 ? "md:border-r border-border/50" : ""
              } border-b md:border-b-0 border-border/50`}
            >
              <div className="w-20 h-20 rounded-full bg-white border-2 border-accent flex items-center justify-center text-primary shadow-sm">
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
