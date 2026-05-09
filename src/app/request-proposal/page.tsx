"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function RequestProposalPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    trainingInterest: "Level 1 - Behavioral Foundations",
    participants: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proposal Request:", formData);
    alert("Thank you! Your proposal request has been submitted.");
  };

  return (
    <main className="min-h-screen bg-muted">
      <Navbar />
      
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="bg-white p-8 md:p-16 rounded-[24px] shadow-xl">
            <div className="text-center mb-12">
              <h1 className="text-h2-section text-primary mb-4">Request a Corporate Proposal</h1>
              <p className="text-body text-muted-foreground">
                Provide your details below, and our team will get back to you with a customized training solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Full Name</label>
                  <Input 
                    required
                    placeholder="Enter your name" 
                    className="h-12 border-border focus:ring-accent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Company Name</label>
                  <Input 
                    required
                    placeholder="Enter your company" 
                    className="h-12 border-border"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="email@company.com" 
                    className="h-12 border-border"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Phone Number</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="+971 00 000 0000" 
                    className="h-12 border-border"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Training Interest</label>
                  <select 
                    className="w-full h-12 rounded-[6px] border border-border px-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-accent/20"
                    value={formData.trainingInterest}
                    onChange={(e) => setFormData({...formData, trainingInterest: e.target.value})}
                  >
                    <option>Level 1 - Behavioral Foundations</option>
                    <option>Level 2 - Organizational Behavior</option>
                    <option>Level 3 - Behavioral Leadership Mastery</option>
                    <option>Custom Corporate Program</option>
                    <option>Leadership Workshop</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-small font-bold text-primary">Number of Participants</label>
                  <Input 
                    required
                    type="number"
                    placeholder="e.g. 25" 
                    className="h-12 border-border"
                    value={formData.participants}
                    onChange={(e) => setFormData({...formData, participants: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-small font-bold text-primary">Additional Message</label>
                <Textarea 
                  placeholder="Tell us more about your specific needs..." 
                  className="min-h-[120px] border-border"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-14 font-bold rounded-[8px] text-[16px]">
                  Submit Proposal Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
