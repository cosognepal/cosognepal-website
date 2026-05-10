import { cn } from "@/lib/utils";

type Track = {
  emoji: string;
  name: string;
  problem: string;
};

const TRACKS: Track[] = [
  {
    emoji: "🔥",
    name: "Forest‑Fire Detection",
    problem: "Early warnings can reduce damage to forests and communities.",
  },
  {
    emoji: "🌳",
    name: "Deforestation Watch",
    problem: "Protect ecosystems by detecting illegal or rapid clearing sooner.",
  },
  {
    emoji: "🦏",
    name: "Endangered‑Species Tracker",
    problem: "Better data helps conservation teams act faster and smarter.",
  },
  {
    emoji: "💬",
    name: "Nepali Eco‑Chatbot",
    problem: "Access to trusted info improves awareness and real‑world action.",
  },
  {
    emoji: "🍅",
    name: "Plant‑Disease Detector",
    problem: "Early diagnosis can improve yield and farmer livelihoods.",
  },
  {
    emoji: "🌫️",
    name: "Urban Air‑Quality Alarm",
    problem: "Timely alerts help people reduce exposure to pollution.",
  },
];

export default function ProjectTracksSection(props: { id?: string; className?: string }) {
  return (
    <section
      id={props.id}
      className={cn(
        "w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0",
        props.className
      )}
    >
      <div className="rounded-2xl bg-gradient-to-br from-white to-empactathon-primary/10 border border-empactathon-primary/10 p-standard md:p-block">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-empactathon-dark">
            What you&apos;ll build
          </h2>
          <p className="text-black-mid max-w-[75ch]">
            Six project tracks that solve real environmental problems.
          </p>
        </div>

        <div className="mt-standard grid gap-small md:gap-standard md:grid-cols-2">
          {TRACKS.map((t) => (
            <div
              key={t.name}
              className="group rounded-xl bg-white/90 backdrop-blur-sm border border-empactathon-primary/12 hover:border-empactathon-primary/25 shadow-sm p-standard md:p-block transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="h-16 w-16 rounded-2xl bg-empactathon-bg-green border border-empactathon-primary/10 flex items-center justify-center text-3xl">
                  {t.emoji}
                </div>
                <div className="">
                  <div className="text-lg font-extrabold text-empactathon-dark">
                    {t.name}
                  </div>
                  <p className="text-black-mid/90 leading-relaxed">
                    <span className="font-semibold text-empactathon-dark">
                      Problem:
                    </span>{" "}
                    {t.problem}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

