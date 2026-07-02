import { cn } from "@/lib/utils";

type PlaceholderAvatarProps = {
  name: string;
  className?: string;
};

const palettes = [
  "from-primary/20 to-blue-blue/30 text-primary",
  "from-empactathon-bg-green to-empactathon-primary/40 text-empactathon-dark",
  "from-accent_yellow-100 to-accent_yellow-200 text-accent_yellow-800",
];

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function getPaletteFor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash + name.charCodeAt(i)) % palettes.length;
  }
  return palettes[hash];
}

export default function PlaceholderAvatar({
  name,
  className,
}: PlaceholderAvatarProps) {
  const initials = getInitials(name) || "?";
  const palette = getPaletteFor(name);

  return (
    <div
      role="img"
      aria-label={`${name} placeholder portrait`}
      className={cn(
        "flex items-center justify-center rounded-md bg-gradient-to-br font-bold tracking-wide select-none",
        palette,
        className
      )}
    >
      <span className="text-[clamp(1.5rem,4vw,3rem)] leading-none">
        {initials}
      </span>
    </div>
  );
}
