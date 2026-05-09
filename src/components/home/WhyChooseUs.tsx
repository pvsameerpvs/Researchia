import Link from "next/link";
import { Button } from "@/components/ui/button";

const programs = [
  {
    level: "Level 1",
    title: "Behavioral Foundations",
    description: "Core skills for accountability, communication, and professional behavior at the individual level.",
    href: "/courses/level-1",
  },
  {
    level: "Level 2",
    title: "Organizational Behavior",
    description: "Advanced strategies for managing teams, leadership communication, and improving dynamics.",
    href: "/courses/level-2",
  },
  {
    level: "Level 3",
    title: "Behavioral Leadership Mastery",
    description: "Executive-level leadership, strategic thinking, and organizational transformation for senior leaders.",
    href: "/courses/level-3",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-h2-section text-primary mb-4">
            Our Certification Programs
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white p-8 md:p-10 rounded-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex flex-col space-y-6 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="space-y-2">
                <span className="text-accent font-bold text-[14px] uppercase tracking-widest">
                  {program.level}
                </span>
                <h3 className="text-h3-card text-primary leading-tight">
                  {program.title}
                </h3>
              </div>
              
              <p className="text-small text-muted-foreground leading-relaxed flex-grow">
                {program.description}
              </p>

              <Button 
                asChild 
                variant="link"
                className="text-primary font-bold p-0 h-auto justify-start hover:text-accent transition-colors group-hover:translate-x-2 transition-transform inline-flex items-center gap-2"
              >
                <Link href={program.href}>
                  Learn More <span>→</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
