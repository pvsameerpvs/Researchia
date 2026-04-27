"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  // { name: "Corporate Solutions", href: "/corporate-solutions" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[var(--navbar-height)] flex items-center",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center py-1 transition-opacity hover:opacity-80">
            <div className="relative w-[280px] h-[60px] md:w-[320px] md:h-[70px]">
              <Image 
                src="/logo-cbhk.png" 
                alt="CBHK - Blue Diamond Executive Curriculum" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[14px] font-bold transition-all uppercase tracking-wider relative group",
                    pathname === item.href 
                      ? "text-primary"
                      : "text-[#555] hover:text-primary"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : ""
                  )}></span>
                </Link>
              ))}
            </div>
            
            <Button 
              asChild
              className="bg-[#111] hover:bg-black text-white rounded-full px-8 py-6 text-xs font-black uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <Link href="/request-proposal">
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-primary hover:bg-primary/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-lg font-bold transition-colors uppercase",
                  pathname === item.href 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none w-full py-6 font-bold uppercase"
            >
              <Link href="/request-proposal" onClick={() => setMobileMenuOpen(false)}>
                Request a Proposal
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
