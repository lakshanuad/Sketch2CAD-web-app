export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-[#f9fafb] p-6">
      
      {/* Container for content - max width for aesthetics */}
      <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-12">
        
        {/* App Icon / Logo Placeholder (Clean and geometric) */}
        <div className="w-24 h-24 bg-white border border-[#e5e7eb] rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center mb-4 transition-transform hover:scale-105 duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="w-12 h-12 text-[#2563eb]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg>
        </div>

        {/* Hero Typography */}
        <div className="space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight text-[#111827]">
            FreeGen
          </h1>
          
          <p className="text-xl text-[#4b5563] font-medium max-w-2xl mx-auto leading-relaxed">
            Generative AI for FreeCAD. Describe your model and get instant 3D geometry directly inside your local environment.
          </p>
        </div>

        {/* Download Section */}
        <div className="pt-8 w-full flex flex-col items-center gap-4">
          <a 
            href="/FreeGen-Lite.zip"
            download="FreeGen-Lite.zip"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-[#2563eb] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:-translate-y-1 active:translate-y-0"
          >
            <span className="flex items-center gap-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download for Windows
            </span>
          </a>
          
          <p className="text-sm text-[#6b7280] font-medium mt-4">
            Lite Installer • Requires Python
          </p>
        </div>

      </div>

      {/* Subtle Footer fixed to bottom */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-sm text-[#9ca3af]">
          Built for the FreeGen ecosystem.
        </p>
      </div>

    </main>
  );
}
