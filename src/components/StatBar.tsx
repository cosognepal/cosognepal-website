import type { Stat } from "@/content/types";

type StatBarProps = {
  stats: Stat[];
};

export default function StatBar({ stats }: StatBarProps) {
  if (stats.length < 3 || stats.length > 4) {
    throw new Error("StatBar requires 3–4 stats");
  }

  return (
    <section
      aria-label="Our impact"
      className="w-full text-white bg-brand py-12 md:py-16"
    >
      <div className="max-w-content mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <p className="text-3xl md:text-4xl font-bold font-display">
              {stat.value}
            </p>
            <p className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
