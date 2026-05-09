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
  { name: "About", href: "/about-cbhk-certification" },
  { name: "Courses", href: "/courses" },
  { name: "Corporate Solutions", href: "/corporate-solutions" },
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
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 h-[64px] md:h-[80px] flex items-center bg-white border-b",
        isScrolled ? "shadow-md border-border" : "border-transparent"
      )}
    >
      <div className="container-max w-full">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 transition-opacity hover:opacity-90 flex-shrink-0">
            <div className="relative w-[35px] h-[35px] md:w-[50px] md:h-[50px]">
              <Image 
                src="/logo-cbhk.png" 
                alt="CBHK Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="border-l border-border/50 pl-2 md:pl-3">
              <span className="text-[10px] md:text-[13px] font-bold text-primary leading-[1.1] md:leading-[1.2] block uppercase tracking-wider">
                Behavioral Excellence<br className="hidden md:block" /> Certification
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <div className="flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[13px] xl:text-[14px] font-bold transition-all hover:text-accent relative py-2",
                    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  {(pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
            
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white rounded-[4px] px-6 h-11 text-[13px] font-bold shadow-sm transition-all active:scale-95 flex-shrink-0"
            >
              <Link href="/request-proposal">
                Request a Proposal
              </Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-muted"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[64px] bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Content */}
      <div className={cn(
        "lg:hidden fixed top-[64px] right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out p-6",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-[15px] font-bold transition-colors py-2 border-b border-border/50",
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
            className="bg-accent hover:bg-accent/90 text-white rounded-[4px] w-full h-14 font-bold mt-4 shadow-lg"
          >
            <Link href="/request-proposal" onClick={() => setMobileMenuOpen(false)}>
              Request a Proposal
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
