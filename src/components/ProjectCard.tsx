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
      className={`flex flex-col gap-1 px-5 py-4 text-slate-100 transition-colors duration-200 ${
        isExpanded ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <div className="flex flex-wrap items-start gap-3">
        <button
          type="button"
          className="focus-ring group -m-2 flex items-center gap-2 rounded-lg p-2 text-left transition-colors duration-200 hover:bg-white/5"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
        >
          <ChevronDown
            size={18}
            className={`mt-0.5 shrink-0 text-slate-400 transition-transform duration-200 group-hover:text-slate-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </button>
        <div className="ml-auto flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              className={`project-link ${
                link.icon === "code"
                  ? "project-link--code"
                  : link.icon === "indev"
                    ? "project-link--indev"
                    : "project-link--live"
              }`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{link.label}</span>
              {link.icon === "code" ? (
                <Code size={14} className="mt-0.5" />
              ) : link.icon === "indev" ? (
                <Bot size={16} className="mt-0.5" />
              ) : (
                <Link size={14} className="mt-0.5" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
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
