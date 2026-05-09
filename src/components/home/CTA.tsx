import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-white">
      {/* Trust Section */}
      <section className="py-24 border-t border-border bg-slate-50/50">
        <div className="container-max">
          <div className="flex flex-col items-center space-y-12">
            <div className="text-center space-y-2">
              <span className="text-accent font-black text-[11px] uppercase tracking-[0.3em]">Institutional Trust</span>
              <h3 className="text-2xl font-bold text-primary">Trusted by Global Organizations in the UAE</h3>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="text-2xl font-black text-primary tracking-tighter">EMIRATES</div>
              <div className="text-2xl font-black text-primary tracking-tighter">ETIHAD</div>
              <div className="text-2xl font-black text-primary tracking-tighter">MUBADALA</div>
              <div className="text-2xl font-black text-primary tracking-tighter">ADIA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/90 backdrop-blur-[2px]"></div>
          {/* Subtle Accent Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, #D4A437 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}></div>
        </div>
        
        <div className="container-max relative z-10 text-center space-y-10">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight">
              Elevate Your Organization&apos;s <span className="text-accent italic">Performance</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              Transform your workplace dynamics through our globally recognized behavioral certification programs.
            </p>
          </div>
          
          <div className="pt-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white h-16 px-14 text-[18px] font-black rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-[#b88a3b]"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Get in Touch With Us Today
              </Link>
            </Button>
            <p className="mt-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Join 1,200+ Certified Professionals</p>
          </div>
        </div>
      </section>
    </div>
  );
}

