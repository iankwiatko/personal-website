import { Code, Link } from "lucide-react";

import type { Project } from "../Data/projectCardData";
import { TechnologyTag } from "./TechnologyTag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="mt-5 grid gap-3">
      <div className="flex flex-col gap-3 rounded-[1.25rem] border border-white/10 bg-slate-800/70 p-5 text-slate-100">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.href}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold text-slate-300 no-underline transition duration-200 hover:-translate-y-0.5 ${
                  link.icon === "code"
                    ? "bg-slate-700/70 hover:bg-slate-600 hover:shadow-[0_8px_20px_rgba(2,6,23,0.2)]"
                    : "bg-sky-400/10 hover:bg-sky-400/20 hover:shadow-[0_8px_20px_rgba(2,6,23,0.2)]"
                }`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span>
                {link.icon === "code" ? (
                  <Code size={14} className="mt-0.5" />
                ) : (
                  <Link size={14} className="mt-0.5" />
                )}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechnologyTag key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
