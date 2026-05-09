"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 md:py-24">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Logo & About */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-white p-2 rounded-lg">
                <Image 
                  src="/logo-cbhk.png" 
                  alt="CBHK Logo" 
                  width={60} 
                  height={60} 
                  className="object-contain"
                />
              </div>
              <span className="text-[14px] font-bold text-white uppercase tracking-wider leading-tight">
                Behavioral Excellence<br />Certification
              </span>
            </Link>
            <p className="text-white/60 text-small max-w-sm">
              Premium behavioral development programs for organizations in the UAE. Enhancing accountability, leadership, and workplace performance.
            </p>
            <div className="space-y-2">
              <p className="text-small font-bold text-accent">Contact Us</p>
              <p className="text-small text-white/80">info@CBHKcertification.com</p>
              <p className="text-small text-white/80">+971 4 123 4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[14px] font-bold uppercase tracking-widest text-accent">Company</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-white/60 hover:text-white transition-colors text-small">Home</Link>
              <Link href="/about-cbhk-certification" className="text-white/60 hover:text-white transition-colors text-small">About CBHK</Link>
              <Link href="/corporate-solutions" className="text-white/60 hover:text-white transition-colors text-small">Corporate Solutions</Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-small">Contact</Link>
            </nav>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-[14px] font-bold uppercase tracking-widest text-accent">Programs</h3>
            <nav className="flex flex-col gap-4">
              <Link href="/courses/level-1" className="text-white/60 hover:text-white transition-colors text-small">Level 1 - Foundations</Link>
              <Link href="/courses/level-2" className="text-white/60 hover:text-white transition-colors text-small">Level 2 - Organizational</Link>
              <Link href="/courses/level-3" className="text-white/60 hover:text-white transition-colors text-small">Level 3 - Mastery</Link>
            </nav>
          </div>

          {/* Location / Meta */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[14px] font-bold uppercase tracking-widest text-accent">Region</h3>
            <p className="text-white/60 text-small">
              United Arab Emirates<br />
              Dubai Business District<br />
              UAE Corporate Hub
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[12px] font-medium">
            © {new Date().getFullYear()} CBHK – Behavioral Excellence Certification. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-[12px] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/40 hover:text-white text-[12px] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



