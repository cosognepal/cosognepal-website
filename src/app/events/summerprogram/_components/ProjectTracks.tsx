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
    problem: "Detect wildfire risk early to protect forests and communities.",
  },
  {
    emoji: "🌳",
    name: "Deforestation Watch",
    problem: "Spot forest-cover loss sooner to help protect ecosystems.",
  },
  {
    emoji: "🦏",
    name: "Endangered‑Species Tracker",
    problem: "Track sightings and habitats so conservation teams can act faster.",
  },
  {
    emoji: "💬",
    name: "Nepali Eco‑Chatbot",
    problem: "Make trusted environmental guidance accessible in Nepali.",
  },
  {
    emoji: "🍅",
    name: "Plant‑Disease Detector",
    problem: "Catch crop disease early to improve yield and farmer livelihoods.",
  },
  {
    emoji: "🌫️",
    name: "Urban Air‑Quality Alarm",
    problem: "Send alerts when air gets unsafe so people can reduce exposure.",
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
                <div className="h-[72px] w-[72px] md:h-16 md:w-16 rounded-2xl bg-empactathon-bg-green border border-empactathon-primary/10 flex items-center justify-center text-2xl md:text-3xl">
                  {t.emoji}
                </div>
                <div className="">
                  <div className="text-lg font-extrabold text-empactathon-dark">
                    {t.name}
                  </div>
                  <p className="text-black-mid/90 leading-relaxed text-[0.95rem]">
                    <span className="font-semibold text-empactathon-dark">
                      You’ll:
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

