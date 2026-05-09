import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-white">
      {/* Trust Section */}
      <section className="py-16 border-t border-border">
        <div className="container-max">
          <h3 className="text-center text-small font-bold text-muted-foreground uppercase tracking-[0.2em] mb-10">
            Trusted by Leading Organizations in the UAE
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo Placeholders */}
            <div className="text-xl font-bold text-primary">COMPANY ONE</div>
            <div className="text-xl font-bold text-primary">ORG TWO</div>
            <div className="text-xl font-bold text-primary">GLOBAL CORP</div>
            <div className="text-xl font-bold text-primary">UAE GROUP</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #D4A437 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        
        <div className="container-max relative z-10 text-center space-y-8">
          <h2 className="text-h2-section text-white max-w-2xl mx-auto">
            Elevate Your Organization&apos;s Performance
          </h2>
          <p className="text-body text-white/80 max-w-xl mx-auto">
            Contact us today to discuss how our behavioral certification programs can transform your workplace dynamics.
          </p>
          <div className="pt-4">
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white h-16 px-12 text-[18px] font-bold rounded-[8px] shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                Get in Touch With Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

