import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Zap, Shield, Search, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/about-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container-max relative z-10 text-center">
          <span className="text-accent font-bold text-[14px] uppercase tracking-widest mb-4 block">
            About CBHK Certification
          </span>
          <h1 className="text-h1-hero mb-8 max-w-4xl mx-auto">
            About CBHK Certification
          </h1>
          <p className="text-body text-white/80 max-w-3xl mx-auto mb-10">
            CBHK Certification is a structured behavioral development program designed to improve accountability, leadership, and workplace performance through practical learning.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-[16px] font-bold rounded-[8px]">
            <Link href="/courses">Start Certification</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2-section text-primary mb-6">
                Our Mission: Elevating Workplace Excellence
              </h2>
              <p className="text-body text-muted-foreground mb-10">
                To provide professionals and organizations with a structured framework for behavioral excellence that translates into measurable real-world success.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Enhance Work Ethics", desc: "Build strong professional values and discipline." },
                  { title: "Increase Accountability", desc: "Encourage ownership of actions and results." },
                  { title: "Improve Responsibility", desc: "Develop consistent and reliable behavior." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 text-accent">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-[18px]">{item.title}</h4>
                      <p className="text-muted-foreground text-small">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-[24px] p-8 lg:p-12">
              <h3 className="text-h3-card text-primary mb-8 text-center">Why Choose CBHK</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Layout, title: "Framework-Based Approach", desc: "Structured learning focused on real change." },
                  { icon: Zap, title: "Practical Experience", desc: "Application-based learning scenarios." },
                  { icon: Shield, title: "Accountability Systems", desc: "Tools to track behavioral improvement." },
                  { icon: Search, title: "Proven Results", desc: "Measurable impact on individuals and teams." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-10 h-10 bg-primary/5 text-primary flex items-center justify-center rounded-[8px]">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-primary text-[16px]">{item.title}</h4>
                    <p className="text-muted-foreground text-[14px] leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
