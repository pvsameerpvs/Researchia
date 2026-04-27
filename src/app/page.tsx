import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import InstitutionalExcellence from "@/components/home/InstitutionalExcellence";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Mission />
      {/* <FeaturedResearch /> */}
      <InstitutionalExcellence />
      <CTA />
      <Footer />
    </main>
  );
}
