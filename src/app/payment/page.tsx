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
    <section className="flex-grow flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-black text-foreground">Secure Payment</h1>
          {plan && (
            <p className="text-muted-foreground font-medium">
              Enrolling in <span className="text-primary font-bold">{decodeURIComponent(plan)}</span>
            </p>
          )}
          <div className="h-1 w-16 bg-border mx-auto rounded-full"></div>
        </div>

        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
          {/* Dark Header */}
          <div className="bg-foreground py-4 px-6 flex items-center justify-between">
            <h2 className="text-white font-bold flex items-center gap-2">
              <CreditCard size={20} />
              Credit Card
            </h2>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            
            {/* Card Input */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Card Information</Label>
              <div className="relative">
                <Input 
                  placeholder="0000 0000 0000 0000" 
                  className="pl-10 h-12 font-mono text-lg bg-muted/50 border-input"
                />
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                   {/* Mock Card Icons */}
                   <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-black italic">VISA</div>
                   <div className="w-8 h-5 bg-red-500 rounded flex items-center justify-center text-[8px] text-white font-black italic">MC</div>
                </div>
              </div>
            </div>

            {/* Expiry & CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Expiry</Label>
                <Input placeholder="MM / YY" className="h-12 font-mono text-center bg-muted/50 border-input" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">CVC</Label>
                <div className="relative">
                  <Input placeholder="123" className="h-12 font-mono text-center bg-muted/50 border-input" />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
                </div>
              </div>
            </div>

            {/* Payment Gateways Row */}
            <div className="flex items-center justify-center gap-4 py-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
              <span className="text-xl font-black text-blue-800 italic">PayPal</span>
              <span className="text-xl font-black text-blue-600 italic">VISA</span>
              <span className="text-xl font-black text-red-500 italic">Mastercard</span>
              <span className="text-xl font-black text-indigo-600">stripe</span>
            </div>

            {/* Submit Button */}
            <Button className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20 rounded-xl">
              Complete Purchase {price ? `- $${price}` : ""}
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck size={14} className="text-green-600" />
              <span>SSL Encrypted Transaction</span>
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
