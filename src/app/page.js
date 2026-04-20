// app/page.js
import Hero from "@@/components/LandingPage/HeroSection";
import ProjectCard from "@@/components/LandingPage/ProjectCard";
import Footer from "@@/components/Footer";

export default function Home() {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "Financial management tool with real-time analytics and persistent storage logic.",
      techStack: ["Next.js", "Tailwind", "Node"],
      slug: "/expense-tracker",
    },
    {
      title: "Laugh Out Loud",
      description:
        "A random joke engine pulling from public APIs with a focus on UI responsiveness.",
      techStack: ["React", "API Routes"],
      slug: "#",
    },
    {
      title: "Code Editor",
      description:
        "In-browser live environment for building HTML/CSS components with instant previewing.",
      techStack: ["JavaScript", "HTML", "CSS"],
      slug: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f2]">
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>

      <div className="relative z-10">
        <Hero />

        <section className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-40">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b-2 border-slate-900 pb-8">
            <h2 className="font-anton text-4xl md:text-6xl uppercase tracking-tighter text-slate-900">
              The Manifest
            </h2>
            <p className="font-mono text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-4">
              VAIBHAV // MINI-LAB // 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
