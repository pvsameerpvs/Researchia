import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, Award, Zap, Smile } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About EduPath</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are on a mission to democratize education and help people everywhere build the skills they need for a successful future.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-[60px] absolute -top-8 -left-8 w-full h-full -z-10 rotate-3"></div>
              <div className="aspect-square bg-emerald-500/10 rounded-[60px] absolute -bottom-8 -right-8 w-full h-full -z-10 -rotate-3"></div>
              <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white border-8 border-white aspect-square flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 bg-primary/10 text-primary rounded-2xl">
                    <Award size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Excellence in Online Education</h3>
                  <p className="text-slate-600">
                    Trusted by over 50,000 students worldwide for quality learning experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900">Our Vision for Learning</h2>
              <p className="text-slate-600 leading-relaxed">
                EduPath was founded with a simple idea: that high-quality education should be accessible to everyone, regardless of their location or background. We believe that learning is a lifelong journey, and we&apos;re here to provide the tools and support you need at every step.
              </p>
              
              <div className="space-y-4">
                {[
                  "Self-paced online courses for ultimate flexibility",
                  "Structured offline learning centers for hands-on experience",
                  "Industry-recognized certifications upon completion",
                  "Supportive community and expert mentorship"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes of Learning */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Teach</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer flexible learning options to suit your needs and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Online Learning</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Access your courses 24/7 from anywhere in the world. Our online platform features interactive video lessons, quizzes, and downloadable resources. Perfect for busy professionals and students.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Lifetime access to course materials
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Learn at your own pace
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                <Smile size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Offline Learning</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Join us at one of our physical learning centers for an immersive classroom experience. Work directly with instructors and collaborate with peers on practical workshops and projects.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Face-to-face interaction with experts
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Hands-on workshops and networking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
