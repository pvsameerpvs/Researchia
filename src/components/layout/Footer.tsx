"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-primary text-white py-20 overflow-hidden">
      {/* Background Pattern Matching CTA */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #D4A437 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10">
          {/* Logo & About */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="bg-white p-3 rounded-2xl shadow-xl transition-transform group-hover:scale-105">
                <Image 
                  src="/logo-cbhk.png" 
                  alt="CBHK Logo" 
                  width={64} 
                  height={64} 
                  className="object-contain"
                />
              </div>
              <div className="space-y-1">
                <span className="text-[14px] font-black text-white uppercase tracking-[0.2em] leading-tight block">
                  Behavioral Excellence
                </span>
                <span className="text-[14px] font-black text-accent uppercase tracking-[0.2em] leading-tight block">
                  Certification
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
              The gold standard in behavioral development for modern UAE organizations. Empowering leaders through institutional expertise and measurable excellence.
            </p>
            <div className="flex gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">Inquiries</p>
                <p className="text-sm font-medium text-white/80">info@CBHKcertification.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-accent">Hotline</p>
                <p className="text-sm font-medium text-white/80">+971 4 123 4567</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/80">Institutional</h3>
            <nav className="flex flex-col gap-4">
              {["Home", "About CBHK", "Corporate Solutions", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`} 
                  className="text-white/60 hover:text-white transition-all text-sm font-medium hover:translate-x-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/80">Certifications</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/courses/level-1" className="text-white/60 hover:text-white transition-all text-sm font-medium hover:translate-x-1">Level 1 - Foundations</Link>
              <Link href="/courses/level-2" className="text-white/60 hover:text-white transition-all text-sm font-medium hover:translate-x-1">Level 2 - Organizational</Link>
              <Link href="/courses/level-3" className="text-white/60 hover:text-white transition-all text-sm font-medium hover:translate-x-1">Level 3 - Mastery</Link>
            </nav>
          </div>

          {/* Region */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-accent/80">Global HQ</h3>
            <div className="space-y-4">
              <p className="text-white/60 text-sm font-medium leading-relaxed italic">
                United Arab Emirates<br />
                Business District, Level 42<br />
                Institutional Excellence Hub
              </p>
              <div className="pt-4 flex gap-4 grayscale opacity-40">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black">FB</div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black">LN</div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black">X</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} CBHK – Behavioral Excellence Certification.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/30 hover:text-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Privacy Architecture</Link>
            <Link href="#" className="text-white/30 hover:text-accent text-[11px] font-bold uppercase tracking-widest transition-colors">Terms of Authority</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



