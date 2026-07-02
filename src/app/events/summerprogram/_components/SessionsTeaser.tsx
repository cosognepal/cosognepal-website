import Link from "next/link";
import { SESSIONS_TEASER_TEXT } from "../_data/sessions";
import { scBorder, scRadius, scSageBg } from "../_data/ui";

export default function SessionsTeaser() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0">
      <div
        className={`flex max-h-[120px] items-center justify-between gap-4 ${scRadius} ${scBorder} ${scSageBg} px-5 py-4`}
      >
        <p className="text-sm text-empactathon-dark leading-snug">
          {SESSIONS_TEASER_TEXT}
        </p>
        <Link
          href="/sessions"
          className="shrink-0 text-sm font-semibold text-[#1B5E20] hover:underline whitespace-nowrap"
        >
          Watch Sessions →
        </Link>
      </div>
    </section>
  );
}
