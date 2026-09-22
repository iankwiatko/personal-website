import { Bot, ChevronDown, Code, Link } from "lucide-react";

import type { Project } from "../data/projects";
import { TechnologyTag } from "./TechnologyTag";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col gap-1 p-3 text-slate-100 transition-colors duration-200 sm:p-4 ${
        isExpanded ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="focus-ring group -m-2 flex shrink-0 items-center gap-2 rounded-lg p-2 text-left transition-colors duration-200 hover:bg-white/5"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          <ChevronDown
            size={16}
            className={`shrink-0 text-slate-400 transition-transform duration-200 group-hover:text-slate-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <h3 className="text-base font-semibold whitespace-nowrap text-slate-50">
            {project.title}
          </h3>
        </button>

        <p
          className={`min-w-0 flex-1 truncate text-sm text-slate-400 transition-all duration-300 ease-in-out ${
            isExpanded ? "translate-x-2 opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          {project.summary}
        </p>

        <div className="ml-auto flex flex-wrap items-center gap-1">
          {project.links.map((link) =>
            link.icon === "indev" ? (
              <span
                key={link.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-200"
              >
                <Bot size={14} />
                {link.label}
              </span>
            ) : (
              <a
                key={link.href}
                className="focus-ring inline-flex rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-slate-50"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon === "code" ? <Code size={16} /> : <Link size={16} />}
              </a>
            ),
          )}
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100 translate-y-0"
            : "grid-rows-[0fr] opacity-0 translate-y-1"
        }`}
      >
        <div className="overflow-hidden pl-6">
          <p className="pt-3 text-sm leading-7 text-slate-300">
            {project.description}
          </p>

          <div className="mt-2 flex flex-wrap gap-2 pb-1">
            {project.tech.map((tech) => (
              <TechnologyTag key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
