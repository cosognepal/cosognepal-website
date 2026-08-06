"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Starts every forward navigation at the top of the page.
 *
 * Back/forward navigations are left alone so the browser can restore the
 * previous scroll position, and links to an anchor keep their target.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isPopNavigation = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPopNavigation.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (isPopNavigation.current) {
      isPopNavigation.current = false;
      return;
    }

    if (window.location.hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, searchParams]);

  return null;
}
