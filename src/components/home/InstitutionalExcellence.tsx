const stats = [
  { label: "Improved Accountability", value: "72%" },
  { label: "Reduction in Workplace Conflicts", value: "60%" },
  { label: "Enhanced Leadership Communication", value: "85%" },
  { label: "Increased Team Productivity", value: "90%" },
];

const solutions = [
  {
    title: "Group Certification Programs",
    description: "Tailored behavioral training programs for your teams to ensure alignment and peak performance.",
  },
  {
    title: "Leadership Workshops",
    description: "Executive-level development and leadership training focused on strategic influence.",
  },
  {
    title: "Train-the-Trainer Courses",
    description: "Certify and develop your internal trainers to scale behavioral excellence across your organization.",
  },
];

export default function InstitutionalExcellence() {
  return (
    <div className="bg-white">
      {/* Results Section */}
      <section className="section-padding border-b border-border">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-h2-section text-primary mb-4">
              Proven Results for Your Business
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-small font-semibold text-primary uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-h2-section text-primary mb-4">
              Corporate Training Solutions
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="p-8 border border-border rounded-[12px] hover:border-accent transition-colors group"
              >
                <h3 className="text-h3-card text-primary mb-4 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                <p className="text-small text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
