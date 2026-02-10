import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-xl text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold text-slate-900">EduPath</span>
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              Empowering learners worldwide with premium courses and professional certification to accelerate your career growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary hover:border-primary transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary hover:border-primary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-primary hover:border-primary transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors">Offline Learning</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Categories</h3>
            <ul className="space-y-4">
              <li><Link href="/courses?category=development" className="text-slate-600 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/courses?category=design" className="text-slate-600 hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/courses?category=business" className="text-slate-600 hover:text-primary transition-colors">Business Management</Link></li>
              <li><Link href="/courses?category=marketing" className="text-slate-600 hover:text-primary transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-slate-600 text-sm">123 Education St, Knowledge City, State 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span className="text-slate-600 text-sm">+1 (555) 000-1111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <span className="text-slate-600 text-sm">support@edupath.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} EduPath LMS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-slate-500 hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-primary">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
