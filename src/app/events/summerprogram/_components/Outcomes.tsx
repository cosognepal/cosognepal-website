import { cn } from "@/lib/utils";

const OUTCOMES = [
  {
    title: "A working project you built and own",
    desc: "A prototype you can keep improving by collaborating with different institutions.",
  },
  {
    title: "An internationally recognised certificate",
    desc: "A credential you can add to applications and portfolios.",
  },
  {
    title: "Mentors and a network in Nepal’s tech industry",
    desc: "Guidance and community that will help you to do something of your own in Nepal.",
  },
  {
    title: "A foundation for CS or environmental careers",
    desc: "Skills and confidence to explore future pathways in these fields.",
  },
];

export default function OutcomesSection(props: { id?: string; className?: string; title?: string }) {
  return (
    <section
      id={props.id}
      className={cn(
        "w-full",
        props.className
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 py-block md:py-section">
        <div className="rounded-2xl border border-empactathon-primary/12 bg-white/70 backdrop-blur-sm p-standard md:p-block shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-empactathon-dark">
                {props.title ?? "Where this takes you"}
              </h2>
              <p className="text-black-mid max-w-[75ch]">
                Leave with proof of skills, real work, and momentum for what’s next.
              </p>
            </div>
          </div>

          <div className="mt-standard grid gap-small md:gap-standard md:grid-cols-2">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="rounded-xl bg-white/90 border border-empactathon-primary/12 p-standard"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-[2px] h-10 w-10 rounded-xl bg-empactathon-bg-green border border-empactathon-primary/10 flex items-center justify-center">
                    <span className="text-empactathon-primary font-extrabold text-lg">✓</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-extrabold text-empactathon-dark leading-snug">
                      {o.title}
                    </div>
                    <div className="text-black-mid text-sm mt-1 leading-snug">
                      {o.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

