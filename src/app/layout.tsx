import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Researchia | PhD Behavioral Research Institute",
  description: "Advancing the frontiers of behavioral science through elite doctoral research programs and neural pattern investigations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-primary/10 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
