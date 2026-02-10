"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Lock, Github, Chrome } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] space-y-8">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 group mb-4">
            <div className="bg-primary p-2 rounded-xl text-white group-hover:scale-110 transition-transform">
              <GraduationCap size={32} />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500">Enter your credentials to access your account</p>
        </div>

        <Card className="border-slate-200 shadow-xl shadow-slate-200/50 rounded-[32px] overflow-hidden">
          <CardHeader className="space-y-1 pt-8 px-8">
            <CardTitle className="text-xl font-bold">Login</CardTitle>
            <CardDescription>
              Choose your preferred login method
            </CardDescription>
          </CardHeader>
          
          <CardContent className="px-8 pb-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-slate-200 hover:bg-slate-50 gap-2 font-medium">
                <Chrome size={18} />
                Google
              </Button>
              <Button variant="outline" className="h-12 border-slate-200 hover:bg-slate-50 gap-2 font-medium">
                <Github size={18} />
                Github
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <Input 
                    id="email" 
                    placeholder="name@example.com" 
                    className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm font-semibold text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/20">
              Sign In
            </Button>
          </CardContent>

          <CardFooter className="bg-slate-50 px-8 py-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600 w-full text-center">
              Don&apos;t have an account?{" "}
              <Link href="#" className="font-bold text-primary hover:underline transition-all">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>

        <p className="text-center text-xs text-slate-400">
          By clicking continue, you agree to our{" "}
          <Link href="#" className="underline">Terms of Service</Link> and{" "}
          <Link href="#" className="underline">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
