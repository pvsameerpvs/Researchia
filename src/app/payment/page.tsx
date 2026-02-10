"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  CreditCard, 
  Wallet, 
  Smartphone, 
  ShieldCheck,
  Info
} from "lucide-react";
import { courses } from "@/constants/data";

export default function PaymentPage() {
  const course = courses[0]; // Just use first course for mock

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            
            <Link href={`/courses/${course.slug}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group font-medium text-sm">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Course
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Payment Info */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-slate-900">Checkout</h1>
                  <p className="text-slate-500 font-medium">Complete your enrollment by providing payment details.</p>
                </div>

                {/* Payment Methods */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Select Payment Method</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: "card", name: "Credit / Debit Card", icon: <CreditCard className="text-blue-600" size={24} />, active: true },
                      { id: "upi", name: "UPI Payment", icon: <Smartphone className="text-emerald-600" size={24} />, active: false },
                      { id: "wallet", name: "Digital Wallet", icon: <Wallet className="text-purple-600" size={24} />, active: false },
                    ].map((method) => (
                      <div 
                        key={method.id}
                        className={`p-6 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${
                          method.active 
                          ? "border-primary bg-primary/5 shadow-md shadow-primary/5" 
                          : "border-slate-100 bg-white hover:border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${method.active ? "bg-white" : "bg-slate-50 text-slate-400"}`}>
                            {method.icon}
                          </div>
                          <span className={`font-bold ${method.active ? "text-slate-900" : "text-slate-500"}`}>{method.name}</span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          method.active ? "border-primary bg-primary" : "border-slate-200"
                        }`}>
                          {method.active && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Template (Mock UI) */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-500">Card Number</label>
                      <input 
                        placeholder="0000 0000 0000 0000" 
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">Expiry Date</label>
                      <input 
                        placeholder="MM / YY" 
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">CVV</label>
                      <input 
                        placeholder="123" 
                        className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-primary transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <ShieldCheck className="text-emerald-500" size={18} />
                    <span className="text-xs text-slate-400 font-medium">Your payment is secured with 256-bit SSL encryption.</span>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28 space-y-6">
                  <Card className="rounded-[32px] overflow-hidden border-slate-200 shadow-xl shadow-slate-200/50">
                    <CardHeader className="bg-slate-50/80 p-6 border-b border-slate-100">
                      <CardTitle className="text-lg font-bold">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                      <div className="flex items-center gap-4 group">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-md">
                          <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{course.title}</h4>
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">{course.category}</span>
                        </div>
                      </div>

                      <div className="space-y-4 border-t border-b border-slate-100 py-6 text-sm">
                        <div className="flex justify-between items-center text-slate-500">
                          <span>Original Price</span>
                          <span className="line-through">${(course.price * 1.5).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500">
                          <span>Discount (50%)</span>
                          <span className="text-emerald-500 font-bold">-${(course.price * 0.5).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-500">
                          <span>Tax (VAT)</span>
                          <span>$0.00</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <span className="text-xl font-bold text-slate-900">Total Price</span>
                        <span className="text-3xl font-black text-slate-900">${course.price}</span>
                      </div>

                      <Button className="w-full h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/25">
                        Pay Now
                      </Button>

                      <div className="flex items-center justify-center gap-2 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                        <Info size={16} className="text-blue-500" />
                        <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider text-center">30-day money back guarantee</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
