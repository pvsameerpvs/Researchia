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
              <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-black text-slate-900">Researchia</span>
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              Advancing the frontiers of behavioral science through elite PhD research programs and doctoral certifications.
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Scholarly Links</h3>
            <ul className="space-y-4 shadow-sm p-4 rounded-xl bg-white/50">
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors font-medium">Research Directory</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">Institutional Mission</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">Academic Support</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">Research Centers</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Fields of Study</h3>
            <ul className="space-y-4">
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors font-medium">Neuroscience</Link></li>
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors font-medium">Family Systems</Link></li>
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors font-medium">Organizational Psychology</Link></li>
              <li><Link href="/courses" className="text-slate-600 hover:text-primary transition-colors font-medium">Economics & Behavior</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Institutional Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-slate-600 text-sm">Researchia HQ, 42 Scholars Row, Cambridge Academic District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span className="text-slate-600 text-sm">+1 (555) PHD-INFO</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <span className="text-slate-600 text-sm">chancellor@researchia.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Researchia Doctoral LMS. Licensed by the Global Research Authority.
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
