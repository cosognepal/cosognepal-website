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
import { Check, Copy, X } from "lucide-react";
import PlaceholderAvatar from "@/components/ui/PlaceholderAvatar";
import { cn } from "@/lib/utils";
import type { ProjectPerson, SummerProject } from "../_data/projects";
import { scBorder, scMuted, scRadius, scSageBg } from "../_data/ui";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type ProjectModalProps = {
  project: SummerProject;
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
    <div className={`flex flex-1 items-center gap-3 ${scRadius} ${scBorder} p-3`}>
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
        <p className="text-xs font-medium text-[#1B5E20]">{label}</p>
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

  const closeModal = useCallback(() => {
    if (closeMode === "back") {
      router.back();
      return;
    }
    router.push("/");
  }, [closeMode, router]);

  useEffect(() => {
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
    <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-4">
      <button
        type="button"
        aria-label="Close project details"
        className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "project-modal-panel relative z-10 flex w-full max-w-2xl flex-col bg-white",
          "max-h-[92vh] md:max-h-[85vh]",
          scRadius,
          "h-[100dvh] md:h-auto md:shadow-[0_8px_30px_rgba(27,94,32,0.12)]"
        )}
      >
        <div
          className={`shrink-0 ${scSageBg} border-b border-[#1B5E20]/15 px-5 py-4 md:rounded-t-xl`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0" aria-hidden>
                {project.emoji}
              </span>
              <div className="min-w-0">
                <h2
                  id={titleId}
                  className="text-lg font-semibold text-empactathon-dark leading-tight"
                >
                  {project.name}
                </h2>
                <p className={`text-sm ${scMuted} mt-0.5`}>{project.hook}</p>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className={`shrink-0 ${scRadius} ${scBorder} p-2 text-empactathon-dark hover:bg-white transition-colors`}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex-1 overflow-y-auto px-5 py-5 space-y-5">
          <div className="absolute top-4 right-5">
            <button
              type="button"
              onClick={copyLink}
              className={`inline-flex items-center gap-1.5 ${scRadius} ${scBorder} px-3 py-1.5 text-xs font-medium text-empactathon-dark hover:bg-[#D4E8C4]/30 transition-colors`}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-[#1B5E20]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy link
                </>
              )}
            </button>
          </div>

          <section className="space-y-2 pt-6">
            <h3 className="text-sm font-semibold text-[#1B5E20]">About</h3>
            <p className={`text-sm ${scMuted} leading-relaxed`}>{project.about}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-[#1B5E20]">The Problem</h3>
            <p className={`text-sm ${scMuted} leading-relaxed`}>{project.problem}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-[#1B5E20]">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`${scRadius} ${scBorder} px-2.5 py-1 text-xs text-empactathon-dark`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-[#1B5E20]">
              Mentor &amp; Co-Mentor
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <PersonCard person={project.mentor} label="Mentor" />
              <PersonCard person={project.coMentor} label="Co-Mentor" />
            </div>
          </section>

          {visibleLinks.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1B5E20]">Links</h3>
              <div className="flex flex-wrap gap-2">
                {visibleLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center ${scRadius} ${scBorder} px-3 py-2 text-sm font-medium text-[#1B5E20] hover:bg-[#D4E8C4]/30 transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes projectModalSlideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @media (max-width: 767px) {
          .project-modal-panel {
            animation: projectModalSlideUp 0.25s ease-out;
            border-radius: 0;
          }
        }
      `}</style>
    </div>
  );
}
