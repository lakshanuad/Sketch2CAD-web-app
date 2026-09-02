"use client";

import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
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
              href="/FreeGen-Setup.exe"
              download="FreeGen-Setup.exe"
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
              Windows Installer (.exe) • Requires FreeCAD
            </span>
          </div>

        </div>

        {/* RIGHT SIDE: Installation Steps */}
        <div className="w-1/2 flex flex-col justify-center pl-4">
          <div className="w-full text-left rounded-2xl code-block-container p-6 relative group overflow-hidden shadow-2xl">
            <div className="flex items-center pb-4 mb-5 border-b border-slate-800/80">
              <span className="text-xs text-slate-400 font-sans font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Installation Guide
              </span>
            </div>

            <div className="space-y-5 text-slate-200">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs shadow-[0_0_12px_rgba(0,242,254,0.15)] mt-0.5">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-white text-base flex items-center gap-2">
                    Download FreeCAD
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    First, download and install <strong className="text-slate-200">FreeCAD</strong> on your computer.
                  </p>
                  <a
                    href="https://www.freecad.org/downloads.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4 pt-1 transition-colors"
                  >
                    <span>Download FreeCAD Official</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs shadow-[0_0_12px_rgba(0,242,254,0.15)] mt-0.5">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-white text-base">
                    Download Freegen
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    After that, download <strong className="text-slate-200">Freegen</strong> using the <span className="text-cyan-300 font-semibold">Download</span> button on this page.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs shadow-[0_0_12px_rgba(0,242,254,0.15)] mt-0.5">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-white text-base">
                    Click & Launch Freegen
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Run the downloaded installer and launch <strong className="text-slate-200">Freegen</strong> to start generating 3D models.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-20 text-sm text-slate-500 font-medium tracking-wide py-2">
        © 2026 ByteBloom
      </footer>
    </div>
  );
}

