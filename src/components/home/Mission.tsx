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
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            Institutional Purpose
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
            Our Mission: Elevating <span className="italic">Workplace Excellence</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary/10 rounded-[40px] overflow-hidden shadow-2xl shadow-primary/[0.02]">
          {missions.map((item, index) => (
            <div 
              key={index} 
              className={`group p-10 md:p-16 flex flex-col items-center text-center space-y-8 transition-all duration-500 hover:bg-primary/[0.02] ${
                index !== missions.length - 1 ? "md:border-r border-primary/10" : ""
              } border-b md:border-b-0 border-primary/10`}
            >
              <div className="w-24 h-24 rounded-full bg-white border border-primary/10 flex items-center justify-center text-primary shadow-xl shadow-primary/[0.03] transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-text leading-relaxed text-sm md:text-base max-w-xs font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 h-1 w-0 bg-accent group-hover:w-16 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

