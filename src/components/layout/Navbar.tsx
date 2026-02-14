"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Search, 
  GraduationCap,
  Bell,
  UserCircle,
  LogOut,
  BookOpen,
  Award
} from "lucide-react";
import { useState, useEffect } from "react";
import { isUserLoggedIn, logoutUser } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Research Programs", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md py-3 border-border shadow-sm" 
          : "bg-transparent py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black text-black">
              Researchia
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-primary",
                  pathname === item.href 
                    ? "text-primary"
                    : "text-black hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-black hover:text-primary transition-colors">
              <Search size={20} />
            </Button>
            
            {isLoggedIn && (
              <Button variant="ghost" size="icon" className="text-black hover:text-primary relative transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
              </Button>
            )}

            <div className="h-6 w-px mx-2 bg-black/20"></div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0 flex items-center justify-center overflow-hidden border transition-colors bg-muted border-border hover:border-primary/50 text-black">
                  <UserCircle className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-2xl p-2 border-border shadow-xl bg-card">
                <DropdownMenuLabel className="px-3 py-2">
                  <div className="text-sm font-bold text-foreground">Dr. Researcher</div>
                  <div className="text-xs text-muted-foreground font-medium">PhD Scholar</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {isLoggedIn ? (
                  <>
                    <DropdownMenuItem asChild className="rounded-xl cursor-not-allowed">
                      <Link href="/my-courses" className="flex items-center gap-2">
                        <BookOpen size={16} />
                        My Research
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="rounded-xl cursor-not-allowed">
                      <Link href="/certificate" className="flex items-center gap-2">
                        <Award size={16} />
                        Doctoral Certificates
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="rounded-xl text-rose-500 font-bold focus:text-rose-600 focus:bg-rose-50 cursor-pointer">
                      <LogOut size={16} className="text-rose-500" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-primary focus:text-white">
                    <Link href="/login" className="flex items-center gap-2 font-bold py-2">
                      <LogOut size={16} />
                      Scholarly Login
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "p-3 rounded-lg text-base font-bold transition-colors",
                  pathname === item.href 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-border" />
            <div className="flex flex-col gap-2 pt-2">
              {isLoggedIn ? (
                <>
                  <Button asChild variant="outline" className="justify-start h-12 rounded-xl">
                    <Link href="/my-courses">My Research</Link>
                  </Button>
                  <Button onClick={handleLogout} variant="destructive" className="justify-start h-12 rounded-xl font-bold">
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button asChild className="justify-start h-12 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/login">Scholarly Login</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
