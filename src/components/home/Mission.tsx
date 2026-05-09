import { ShieldCheck, TrendingUp, Users } from "lucide-react";

const values = [
  {
    title: "Reduce Internal Conflict",
    description: "Improve communication and minimize workplace misunderstandings through structured behavioral alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Improve Leadership Effectiveness",
    description: "Strengthen leadership behavior and decision-making capabilities at all levels of your organization.",
    icon: TrendingUp,
  },
  {
    title: "Enhance Team Productivity",
    description: "Build alignment, accountability, and peak performance through evidence-based behavioral strategies.",
    icon: Users,
  },
];

export default function Mission() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-h2-section text-primary mb-6">
            Transforming Workplace Behavior for Success
          </h2>
          <p className="text-body text-muted-foreground">
            CBHK provides structured training programs that deliver measurable behavioral improvement across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-muted p-8 md:p-10 rounded-[12px] flex flex-col space-y-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/5 group"
            >
              <div className="w-14 h-14 rounded-[8px] bg-primary flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110">
                <item.icon size={28} strokeWidth={2} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-h3-card text-primary">
                  {item.title}
                </h3>
                
                <p className="text-small text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

