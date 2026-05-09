import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CBHK – Behavioral Excellence Certification",
  description: "Premium behavioral development programs for organizations in the UAE. Enhancing accountability, leadership, and workplace performance through structured training.",
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
