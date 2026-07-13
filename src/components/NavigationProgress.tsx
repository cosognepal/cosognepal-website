"use client";

import { Loader2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  isInternalNavigationHref,
  NAVIGATION_START_EVENT,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const progressTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearProgressTimer = useCallback(() => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const beginNavigation = useCallback(() => {
    clearHideTimer();
    clearProgressTimer();
    setVisible(true);
    setIsNavigating(true);
    setProgress(12);

    progressTimerRef.current = setInterval(() => {
      setProgress((current) => {
        if (current >= 88) return current;
        return current + 4 + Math.random() * 8;
      });
    }, 220);
  }, [clearHideTimer, clearProgressTimer]);

  const completeNavigation = useCallback(() => {
    clearProgressTimer();
    setIsNavigating(false);
    setProgress(100);

    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 280);
  }, [clearHideTimer, clearProgressTimer]);

  useEffect(() => {
    completeNavigation();
  }, [pathname, search, completeNavigation]);

  useEffect(() => {
    const handleNavigationStart = () => {
      beginNavigation();
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || isModifiedClick(event)) return;

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!isInternalNavigationHref(href)) return;

      const nextUrl = new URL(href!, window.location.origin);
      const currentSearch = window.location.search.replace(/^\?/, "");

      if (
        nextUrl.pathname === pathname &&
        nextUrl.search.replace(/^\?/, "") === currentSearch
      ) {
        return;
      }

      beginNavigation();
    };

    window.addEventListener(NAVIGATION_START_EVENT, handleNavigationStart);
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      window.removeEventListener(NAVIGATION_START_EVENT, handleNavigationStart);
      document.removeEventListener("click", handleDocumentClick, true);
      clearProgressTimer();
      clearHideTimer();
    };
  }, [beginNavigation, clearHideTimer, clearProgressTimer, pathname]);

  if (!visible) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-0.5 bg-brand/15"
        aria-hidden
      >
        <div
          className="h-full bg-brand transition-[width] duration-200 ease-[var(--ease)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[85] flex items-center justify-center bg-ink/20 backdrop-blur-[2px] transition-opacity duration-200 ease-[var(--ease)] md:hidden",
          isNavigating ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={!isNavigating}
      >
        <div
          className="flex items-center gap-3 rounded-xl border border-rule bg-surface px-4 py-3 shadow-[0_12px_32px_-8px_rgba(46,46,46,0.18)]"
          role="status"
          aria-live="polite"
        >
          <Loader2 className="h-5 w-5 animate-spin text-brand" aria-hidden />
          <span className="text-sm font-semibold text-ink">Loading page…</span>
        </div>
      </div>
    </>
  );
}
