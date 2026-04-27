"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-16">
          {/* Left Side: Logo & Description */}
          <div className="space-y-8 max-w-sm">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-xl shadow-2xl">
                <Image 
                  src="/logo-cbhk.png" 
                  alt="BHK Certification" 
                  width={200} 
                  height={60} 
                  className="object-contain h-10 md:h-12 w-auto"
                  priority
                />
              </div>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed font-light">
              Elevating workplace excellence through elite curriculum and recognized global certification.
            </p>
          </div>

          {/* Right Side: Column Based Content */}
          <div className="grid grid-cols-2 gap-x-12 md:gap-x-24 gap-y-8">
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">Company</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-white/60 hover:text-accent transition-colors font-medium">Home</Link>
                <Link href="/about" className="text-white/60 hover:text-accent transition-colors font-medium">About Us</Link>
                <Link href="/contact" className="text-white/60 hover:text-accent transition-colors font-medium">Contact</Link>
              </nav>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent">Programs</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/courses" className="text-white/60 hover:text-accent transition-colors font-medium">All Courses</Link>
                <Link href="/courses" className="text-white/60 hover:text-accent transition-colors font-medium">Certifications</Link>
                <Link href="/courses" className="text-white/60 hover:text-accent transition-colors font-medium">Corporate</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-white/40 text-sm font-medium">
            <p>© {new Date().getFullYear()} BHK Certification. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all shadow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}



