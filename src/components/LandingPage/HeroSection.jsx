import Image from "next/image";
import heroImage from "@/public/hero.jpg";

export default function Hero() {
  return (
    <header className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Workspace"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-5 md:px-10 flex items-center">
        <div className="w-full md:w-4/5 lg:w-3/5 text-left">
          <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block">
            The Digital Workshop
          </span>
          {/* Responsive Font Sizes: text-5xl on mobile, text-8xl on desktop */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 md:mb-8 leading-[0.85]">
            These are <br /> some{" "}
            <span className="text-blue-500 italic">mini</span> <br /> projects.
          </h1>
          <p className="text-sm md:text-xl text-slate-200 max-w-md md:max-w-xl leading-relaxed font-light">
            A curated workshop of prototypes and creative experiments built
            during my journey in modern software engineering.
          </p>
        </div>
      </div>
    </header>
  );
}
