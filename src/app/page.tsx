"use client";

import { useState } from "react";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const installCommands = `git clone https://github.com/tharananejan/sketch2cad.git
cd sketch2cad
pip install -r requirements.txt
python main.py`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-screen w-screen flex flex-col justify-between items-center bg-[#050811] px-12 py-6 overflow-hidden select-none">
      {/* 3D Wireframe Animated Background Canvas */}
      <ThreeBackground />

      {/* Side-by-Side Main Container */}
      <main className="relative z-20 flex-1 flex items-center justify-center w-full max-w-6xl gap-12 px-4 my-auto">
        
        {/* LEFT SIDE: Product Title, Description, Download Button */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center gap-6 pr-4">
          
          {/* Title (No Logo, with generous bottom margin to prevent text overlap) */}
          <div className="flex flex-col items-center mb-2">
            <h1 className="text-7xl lg:text-8xl font-black tracking-tight glow-text drop-shadow-[0_0_35px_rgba(0,242,254,0.3)] leading-normal py-2">
              Freegen
            </h1>
          </div>

          {/* Description */}
          <p className="text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-lg text-balance">
            Generative AI for FreeCAD. Describe your model and get instant 3D geometry directly inside your local environment.
          </p>

          {/* Download Button & Subtext */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <a
              href="/FreeGen-Lite.zip"
              download="FreeGen-Lite.zip"
              className="glow-button px-14 py-4 rounded-2xl font-bold text-slate-950 text-lg flex items-center gap-3 cursor-pointer shadow-2xl tracking-wide hover:scale-105 transition-all active:scale-95"
            >
              <svg
                className="w-6 h-6 text-slate-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download</span>
            </a>

            <span className="text-sm text-slate-400 font-medium tracking-wide">
              Lite Installer • Requires Python
            </span>
          </div>

        </div>

        {/* RIGHT SIDE: Installation Steps */}
        <div className="w-1/2 flex flex-col justify-center pl-4">
          <div className="w-full text-left rounded-2xl code-block-container p-6 font-mono text-sm relative group overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-800/80">
              <span className="text-xs text-slate-400 font-sans font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Installation Steps
              </span>
              <button
                onClick={copyToClipboard}
                className="text-xs text-slate-400 hover:text-cyan-400 transition-colors font-sans px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-cyan-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4 text-slate-200 leading-relaxed">
              <div>
                <span className="text-slate-500 select-none text-xs"># Clone the repository</span>
                <div className="text-cyan-300 font-semibold flex items-center gap-2 mt-1">
                  <span className="text-slate-600 select-none">$</span>
                  <code>git clone https://github.com/tharananejan/sketch2cad.git</code>
                </div>
              </div>

              <div>
                <span className="text-slate-500 select-none text-xs"># Navigate to the folder</span>
                <div className="text-cyan-300 font-semibold flex items-center gap-2 mt-1">
                  <span className="text-slate-600 select-none">$</span>
                  <code>cd sketch2cad</code>
                </div>
              </div>

              <div>
                <span className="text-slate-500 select-none text-xs"># Install requirements</span>
                <div className="text-cyan-300 font-semibold flex items-center gap-2 mt-1">
                  <span className="text-slate-600 select-none">$</span>
                  <code>pip install -r requirements.txt</code>
                </div>
              </div>

              <div>
                <span className="text-slate-500 select-none text-xs"># Run the application</span>
                <div className="text-cyan-300 font-semibold flex items-center gap-2 mt-1">
                  <span className="text-slate-600 select-none">$</span>
                  <code>python main.py</code>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-20 text-sm text-slate-500 font-medium tracking-wide py-2">
        © 2026 BytBloom
      </footer>
    </div>
  );
}
