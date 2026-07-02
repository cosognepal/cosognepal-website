"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  PROJECTS_SECTION_SUBTITLE,
  PROJECTS_SECTION_TITLE,
  summerProjects,
} from "../_data/projects";
import { scBorder, scMuted, scRadius, scSageSurface } from "../_data/ui";

export default function ProjectsSection() {
  return (
    <section
      id="the-six-projects"
      className="scroll-mt-24 w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 space-y-6"
    >
      <div className="space-y-2 max-w-2xl">
        <h2 className="text-2xl font-bold text-empactathon-dark">
          {PROJECTS_SECTION_TITLE}
        </h2>
        <p className={`text-sm ${scMuted}`}>{PROJECTS_SECTION_SUBTITLE}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {summerProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            scroll={false}
            className={cn(
              "group flex flex-col p-6 transition-all duration-200",
              scRadius,
              scBorder,
              scSageSurface,
              "hover:border-[#1B5E20] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(27,94,32,0.08)]"
            )}
          >
            <span className="text-2xl leading-none" aria-hidden>
              {project.emoji}
            </span>
            <h3 className="mt-3 text-base font-semibold text-empactathon-dark">
              {project.name}
            </h3>
            <p className={`mt-2 flex-1 text-sm ${scMuted} leading-relaxed`}>
              {project.hook}
            </p>
            <div className="mt-5 flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-[#1B5E20] group-hover:underline shrink-0">
                Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
