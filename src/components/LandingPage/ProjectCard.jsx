// components/LandingPage/ProjectCard.js
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  techStack = [],
  slug,
  index,
}) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={slug || "#"}
      className="group relative block h-full outline-none"
    >
      {/* Shadow Layer */}
      <div
        className="absolute inset-0 bg-blue-600 rounded-[2rem] translate-x-3 translate-y-3 
                   group-hover:translate-x-1 group-hover:translate-y-1 
                   transition-transform duration-300 ease-out"
        aria-hidden="true"
      />

      {/* Card Content */}
      <div
        className="relative h-full p-8 md:p-10 bg-white border-2 border-slate-900 rounded-[2rem] z-10 
                      flex flex-col justify-between 
                      transition-all duration-300 ease-out
                      group-hover:-translate-x-1 group-hover:-translate-y-1
                      group-hover:border-blue-600"
      >
        <div>
          <div className="flex justify-between items-center mb-8 text-slate-400">
            <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase group-hover:text-blue-600 transition-colors">
              ID_{formattedIndex}
            </span>
          </div>

          <h3 className="font-space text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-[0.9] transition-colors group-hover:text-blue-600">
            {title}
          </h3>

          <p className="font-space text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="font-mono text-[10px] font-bold text-slate-900 uppercase px-2 py-1 
                           bg-white border border-slate-900 rounded 
                           shadow-[2px_2px_0px_#000] group-hover:bg-blue-50
                           transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
