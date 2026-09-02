import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freegen — Text to 3D in Seconds | Download Software",
  description: "Freegen is an AI-powered desktop tool that turns text prompts into production-ready 3D models and CAD meshes in seconds.",
  keywords: ["Freegen", "Text to 3D", "AI 3D Generator", "3D Modeling AI", "CAD Generator", "3D Mesh AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-[#050811] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
