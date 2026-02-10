import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Users, 
  Award, 
  Globe
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/constants/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-2/3 bg-primary/5 rounded-bl-[100px] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-blue-500/5 rounded-tr-[100px] blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold animate-in fade-in slide-in-from-bottom-2 duration-500">
                <Globe size={16} fill="currentColor" />
                <span>PhD Level Behavioral Research</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
                Decoding Human <br />
                <span className="text-primary">Behavioral Patterns</span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Advanced doctoral research focusing on physical foundations, family systems, 
                organizational dynamics, and the essence of human kindness. 
                Transforming data into psychological insights with Researchia.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="h-14 px-8 rounded-full text-base font-semibold text-slate-700 hover:bg-slate-100">
                  <Play className="mr-2 fill-primary text-primary" size={20} />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} 
                        alt="User Avatar" 
                        width={40} 
                        height={40} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                    10K+
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">10,000+</span> students enrolled this month
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative animate-in fade-in zoom-in duration-1000">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
                <Image 
                  src="/courses/web-dev.png" 
                  alt="Students Learning" 
                  width={600} 
                  height={500} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 lg:-right-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce [animation-duration:3000ms]">
                <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Certification</div>
                  <div className="text-sm font-bold text-slate-900">Official Course</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 lg:-left-12 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-pulse">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Community</div>
                  <div className="text-sm font-bold text-slate-900">Join 50k+ Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Programs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Active Research Programs</h2>
              <p className="text-slate-600 max-w-xl font-medium">
                Select from our elite doctoral curricula, each mentored by leading clinical psychologists and behavioral scientists.
              </p>
            </div>
            <Button variant="outline" asChild className="rounded-2xl border-slate-200 h-12 px-6 font-bold">
              <Link href="/courses">Full Research Directory</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Researchia? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Institutional Excellence</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              Providing the academic infrastructure required for groundbreaking behavioral discovery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Globe className="text-primary" size={32} />,
                title: "Global Lab Access",
                desc: "Engage with virtual research laboratories and longitudinal datasets from any academic district globally."
              },
              {
                icon: <Users className="text-emerald-500" size={32} />,
                title: "Doctoral Mentorship",
                desc: "Work directly with tenured professors and principal researchers with decades of clinical experience."
              },
              {
                icon: <CheckCircle2 className="text-purple-500" size={32} />,
                title: "Peer-Reviewed Content",
                desc: "Access exclusive manuscripts, neuro-anatomical mappings, and structured observational data sets."
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 pt-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[60px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)]"></div>
            <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Advance Your <br />Research Candidacy</h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                Join our elite circle of 10,000+ doctoral candidates. Access unlimited institutional resources and start your investigation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-16 px-12 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                  Apply for Candidacy
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-16 px-12 rounded-2xl font-black text-lg backdrop-blur-sm">
                  Research Prospectus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
