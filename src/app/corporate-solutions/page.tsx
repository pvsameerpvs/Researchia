import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, MonitorPlay, Headset, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CorporateSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white relative flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/corporate-hero.png')" }}
        ></div>
        <div className="container-max relative z-10 text-center">
          <h1 className="text-h1-hero mb-8">Corporate Solutions</h1>
          <p className="text-body text-white/80 max-w-3xl mx-auto mb-10">
            CBHK Corporate Programs are designed to improve team performance, leadership effectiveness, and workplace accountability through structured behavioral training.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white h-16 px-12 text-[18px] font-bold rounded-[8px]">
            <Link href="/request-proposal">Start Proposal</Link>
          </Button>
        </div>
      </section>

      {/* Group Certification Programs */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-h2-section text-primary">Group Certification Programs</h2>
              <p className="text-body text-muted-foreground">
                Empower your teams with structured behavioral training programs focused on aligning employee behavior across departments and building an accountability culture.
              </p>
              <ul className="space-y-4">
                {[
                  "Aligning employee behavior across departments",
                  "Improving communication and collaboration",
                  "Building accountability and ownership culture"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-primary font-medium">
                    <CheckCircle2 size={20} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-small text-muted-foreground italic">
                Our programs ensure measurable behavioral improvement that directly impacts organizational performance.
              </p>
            </div>
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-black/5 group">
              <Image 
                src="/winner-about.jpg" 
                alt="Corporate Training Session" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Workshops - Learning Methods */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-h2-section text-primary mb-4">Leadership Workshops</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              We deliver training through three core learning methods to ensure maximum retention and application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "Reading", 
                desc: "Structured frameworks and practical concepts for behavioral understanding." 
              },
              { 
                icon: MonitorPlay, 
                title: "Watching", 
                desc: "Real-world case studies and scenario-based learning for visual context." 
              },
              { 
                icon: Headset, 
                title: "Listening", 
                desc: "Guided sessions, discussions, and expert-led insights for deep engagement." 
              }
            ].map((method, i) => (
              <div key={i} className="bg-white p-10 rounded-[12px] shadow-sm border border-border/50 text-center space-y-6">
                <div className="w-16 h-16 bg-primary/5 text-primary flex items-center justify-center rounded-full mx-auto">
                  <method.icon size={32} />
                </div>
                <h3 className="text-h3-card text-primary">{method.title}</h3>
                <p className="text-small text-muted-foreground">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max max-w-3xl border-2 border-primary rounded-[24px] p-12">
          <h2 className="text-h2-section text-primary mb-6">Request a Corporate Proposal</h2>
          <p className="text-body text-muted-foreground mb-10">
            Get a customized training solution tailored to your organization&apos;s needs.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white h-18 px-14 text-[20px] font-bold rounded-[8px]">
            <Link href="/request-proposal">Get Proposal</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
