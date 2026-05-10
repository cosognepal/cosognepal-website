"use client";

import { useEffect, useState } from "react";

export default function MobileStickyApply(props: { applyLink: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] transition-transform duration-200 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 bg-white/92 backdrop-blur-md border-t border-empactathon-primary/15 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        <a
          href={props.applyLink}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center rounded-md bg-empactathon-primary text-white font-extrabold uppercase tracking-wide py-3"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

