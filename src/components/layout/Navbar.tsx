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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border h-[var(--navbar-height)] flex items-center",
        isScrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center py-1">
            <div className="relative w-[300px] h-[65px] md:w-[400px] md:h-[80px]">
              <Image 
                src="/logo-cbhk.png" 
                alt="BHK - Blue Diamond Executive Curriculum" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-bold transition-colors uppercase tracking-tight",
                    pathname === item.href 
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/request-proposal">
                Request a Proposal
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
