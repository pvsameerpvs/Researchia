import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedResearch from "@/components/home/FeaturedResearch";
import InstitutionalExcellence from "@/components/home/InstitutionalExcellence";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedResearch />
      <InstitutionalExcellence />
      <CTA />
      <Footer />
    </main>
  );
}
