"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");

  return (
    <section className="flex-grow flex items-center justify-center bg-muted/30 px-4 py-12 min-h-[calc(100vh-var(--navbar-height))]">
      <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in duration-700">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Secure Payment</h1>
          {plan && (
            <p className="text-muted-foreground font-medium text-lg">
              Enrolling in <span className="text-accent font-bold">{decodeURIComponent(plan)}</span>
            </p>
          )}
          <div className="h-1.5 w-16 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-primary py-5 px-8 flex items-center justify-between">
            <h2 className="text-white font-bold flex items-center gap-3">
              <CreditCard size={22} />
              Card Details
            </h2>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>

          <div className="p-8 md:p-10 space-y-8">
            
            <div className="space-y-2">
              <Label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Card Information</Label>
              <div className="relative">
                <Input 
                  placeholder="0000 0000 0000 0000" 
                  className="pl-12 h-14 font-mono text-lg bg-muted/20 border-border rounded-xl focus:ring-accent"
                />
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1.5">
                   <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-[9px] text-white font-black italic">VISA</div>
                   <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center text-[9px] text-white font-black italic">MC</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Expiry</Label>
                <Input placeholder="MM / YY" className="h-14 font-mono text-center bg-muted/20 border-border rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">CVC</Label>
                <div className="relative">
                  <Input placeholder="123" className="h-14 font-mono text-center bg-muted/20 border-border rounded-xl" />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 py-2 opacity-30">
              <span className="text-xl font-black italic">stripe</span>
              <span className="text-xl font-black italic">PayPal</span>
              <span className="text-xl font-black italic">VISA</span>
            </div>

            <Button 
              onClick={(e) => {
                const target = e.currentTarget;
                target.innerText = "Processing...";
                target.classList.add("opacity-80");
                setTimeout(() => {
                  window.location.href = "/learning/dashboard";
                }, 1000);
              }}
              className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 rounded-xl"
            >
              Complete Purchase {price ? `- $${price}` : ""}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
              <ShieldCheck size={16} className="text-green-600" />
              <span>SSL Secured via CBHK</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-grow flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div></div>}>
        <PaymentContent />
      </Suspense>
      <Footer />
    </main>
  );
}
