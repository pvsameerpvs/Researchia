import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-max text-center">
          <h1 className="text-h1-hero text-primary mb-6">Contact Us</h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to learn more about our certification programs and corporate solutions.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <h2 className="text-h2-section text-primary">Get in Touch With Us Today</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-small font-bold text-primary uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg text-muted-foreground">info@CBHKcertification.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-small font-bold text-primary uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-lg text-muted-foreground">+971 4 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-small font-bold text-primary uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg text-muted-foreground">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-xl border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Full Name" className="h-12" />
                  <Input placeholder="Email Address" type="email" className="h-12" />
                </div>
                <Input placeholder="Subject" className="h-12" />
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
                <Button className="w-full bg-primary hover:bg-primary/90 h-14 font-bold text-white">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
