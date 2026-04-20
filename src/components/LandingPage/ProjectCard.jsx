// components/LandingPage/ProjectCard.js
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  techStack,
  slug,
  index,
}) {
  return (
    <Link href={slug || "#"} className="group relative block h-full">
      {/* Layered Shadow */}
      <div className="absolute inset-0 bg-blue-600 rounded-[2rem] translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

      {/* Card Content */}
      <div className="relative h-full p-10 bg-white border-2 border-slate-900 rounded-[2rem] z-10 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div>
          <div className="flex justify-between items-center mb-10 text-slate-400">
            <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              ID_0{index + 1}
            </span>
          </div>

          <h3 className="font-space text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase leading-none italic group-hover:not-italic transition-all duration-300">
            {title}
          </h3>

          <p className="font-space text-slate-500 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="font-mono text-[9px] font-bold text-slate-900 uppercase px-2 py-1 bg-blue-50 border border-blue-200 rounded shadow-[2px_2px_0px_#000]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
