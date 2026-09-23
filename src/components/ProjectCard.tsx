import { Bot, ChevronDown, Code, Link } from "lucide-react";

import type { Project } from "../data/projects";
import { TechnologyTag } from "./TechnologyTag";

type ProjectCardProps = {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
};

export function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-3 text-slate-100 transition-colors duration-200 sm:p-4 ${
        isExpanded ? "bg-white/5" : "hover:bg-white/5"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="focus-ring group -m-2 flex min-w-0 flex-1 items-center gap-2 rounded-lg p-2 text-left transition-colors duration-200 hover:bg-white/5"
          onClick={onToggle}
          aria-expanded={isExpanded}
        >
          <ChevronDown
            size={16}
            className={`shrink-0 text-slate-400 transition-transform duration-200 group-hover:text-slate-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <h3 className="min-w-0 truncate text-base leading-6 font-semibold whitespace-nowrap text-slate-50">
            {project.title}
          </h3>
        </button>

        <div className="ml-auto flex max-w-full shrink-0 flex-wrap items-center justify-end gap-0.5">
          {project.links.map((link) =>
            link.icon === "indev" ? (
              <span
                key={link.label}
                className={`inline-flex h-8 min-w-8 max-w-full shrink-0 items-center justify-center overflow-hidden rounded-full border border-violet-400/20 bg-violet-500/10 text-xs leading-none font-medium text-violet-200 transition-[gap,padding] duration-300 ease-in-out ${
                  isExpanded ? "gap-1.5 px-3" : "gap-0 px-0"
                }`}
              >
                <Bot size={16} className="shrink-0" />
                <span
                  className={`grid overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-cols-[1fr] opacity-100"
                      : "grid-cols-[0fr] opacity-0"
                  }`}
                >
                  <span className="overflow-hidden">{link.label}</span>
                </span>
              </span>
            ) : (
              <a
                key={link.href}
                className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-slate-50"
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

          <div className="mt-3 flex flex-wrap items-center gap-2 pb-1">
            {project.tech.map((tech) => (
              <TechnologyTag key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
