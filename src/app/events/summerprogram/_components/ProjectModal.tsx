"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Copy } from "lucide-react";
import { Icon } from "@/components/Icon";
import PlaceholderAvatar from "@/components/ui/PlaceholderAvatar";
import { cn } from "@/lib/utils";
import type { ProjectPerson, SummerProject } from "../_data/projects";
import { scBorder, scMuted, scRadius } from "../_data/ui";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type ProjectModalProps = {
  project: SummerProject;
  /** "back" when opened over the homepage via intercepting route; "home" for direct /projects/[slug] visits */
  closeMode?: "back" | "home";
};

function PersonCard({
  person,
  label,
}: {
  person: ProjectPerson;
  label: string;
}) {
  const displayName = person.name.trim() || "To be announced";

  return (
    <div
      className={`flex flex-1 items-center gap-3 rounded-md border border-empactathon-primary/15 bg-white/60 p-3`}
    >
      {person.photo ? (
        <Image
          src={person.photo}
          alt={displayName}
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />
      ) : (
        <PlaceholderAvatar
          name={displayName}
          className="h-12 w-12 shrink-0 rounded-full text-sm"
        />
      )}
      <div className="min-w-0">
        <p className="text-xs font-medium text-empactathon-primary">{label}</p>
        <p className="text-sm font-semibold text-empactathon-dark truncate">
          {displayName}
        </p>
        {person.role && (
          <p className={`text-sm ${scMuted} truncate`}>{person.role}</p>
        )}
      </div>
    </div>
  );
}

export default function ProjectModal({
  project,
  closeMode = "back",
}: ProjectModalProps) {
  const router = useRouter();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeModal = useCallback(() => {
    document.body.style.overflow = "";

    if (closeMode === "back") {
      router.back();
      return;
    }

    router.replace("/", { scroll: false });
  }, [closeMode, router]);

  useEffect(() => {
    setMounted(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  const copyLink = async () => {
    const url = `${window.location.origin}/projects/${project.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const visibleLinks = project.links.filter((link) => link.url.trim());

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={cn(
        "project-modal-panel w-full min-h-96 bg-white/80 backdrop-blur-md fixed bottom-0 left-0 z-50",
        "[box-shadow:0px_-20px_50px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out",
        mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-40"
      )}
    >
      <div className="max-h-[85vh] overflow-y-auto overscroll-contain pb-[calc(96px+env(safe-area-inset-bottom))] md:pb-[max(16px,env(safe-area-inset-bottom))]">
        <div className="w-full max-w-[1400px] md:px-standard brk-1400:mx-auto sm:px-block px-standard">
          <div className="sticky top-3 z-10 flex justify-end gap-2 px-small pt-3">
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/85 backdrop-blur-md border border-empactathon-primary/10 shadow-sm px-3 py-2 text-xs font-medium text-empactathon-dark hover:bg-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-empactathon-primary" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy link
                </>
              )}
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              className="close cursor-pointer p-2 rounded-md bg-white/85 backdrop-blur-md border border-empactathon-primary/10 shadow-sm hover:bg-white"
              onClick={closeModal}
              aria-label="Close"
            >
              <Icon iconName="close" className="h-5 w-5 text-black-dark" />
            </button>
          </div>

          <div className="text-center md:text-left space-y-5 mt-4 pb-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <span className="text-3xl shrink-0" aria-hidden>
                {project.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <h2
                  id={titleId}
                  className="text-2xl text-black-dark font-bold leading-tight"
                >
                  {project.name}
                </h2>
                <p className={`text-primary mt-1`}>{project.hook}</p>
              </div>
            </div>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-empactathon-primary uppercase tracking-wide">
                About
              </h3>
              <p className={`text-sm ${scMuted} leading-relaxed px-5 md:px-0`}>
                {project.about}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-empactathon-primary uppercase tracking-wide">
                The Problem
              </h3>
              <p className={`text-sm ${scMuted} leading-relaxed px-5 md:px-0`}>
                {project.problem}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-empactathon-primary uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 px-5 md:px-0">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`${scRadius} ${scBorder} bg-white/60 px-2.5 py-1 text-xs text-empactathon-dark`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-empactathon-primary uppercase tracking-wide">
                Mentor &amp; Co-Mentor
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 px-5 md:px-0">
                <PersonCard person={project.mentor} label="Mentor" />
                <PersonCard person={project.coMentor} label="Co-Mentor" />
              </div>
            </section>

            {visibleLinks.length > 0 && (
              <section className="space-y-2">
                <h3 className="text-sm font-semibold text-empactathon-primary uppercase tracking-wide">
                  Links
                </h3>
                <div className="flex flex-wrap gap-2 px-5 md:px-0">
                  {visibleLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center ${scRadius} ${scBorder} bg-white/60 px-3 py-2 text-sm font-medium text-empactathon-primary hover:bg-white transition-colors`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
