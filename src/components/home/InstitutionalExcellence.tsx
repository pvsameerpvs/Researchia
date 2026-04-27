"use client";

import { Globe, Users, Database, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Lab Access",
    desc: "Engage with virtual research laboratories and longitudinal datasets from any academic district globally.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Doctoral Mentorship",
    desc: "Work directly with tenured professors and principal researchers with decades of clinical experience.",
    color: "text-accent"
  },
  {
    icon: Database,
    title: "Research Infrastructure",
    desc: "Access state-of-the-art computational resources and specialized equipment tailored for behavioral discovery.",
    color: "text-primary"
  }
];

export default function InstitutionalExcellence() {
  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider">
            <ShieldCheck size={16} />
            Accredited Excellence
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary tracking-tight">
            Institutional Excellence
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light">
            Providing the academic infrastructure and scholarly community required for 
            groundbreaking discoveries in human behavior and organizational science.
          </p>
          
          <div className="h-1.5 w-24 bg-accent rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 md:p-10 bg-muted/30 rounded-2xl border border-border/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`mb-8 p-4 rounded-xl bg-white shadow-sm inline-block ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                <feature.icon size={36} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed font-medium">
                {feature.desc}
              </p>
              
              <div className="mt-8 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
