import { Icon } from "@/components/Icon";
import { Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cosognepal",
    icon: "instagram" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cosognepal/",
    icon: "linkedin" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Cosognepal",
    icon: "facebook" as const,
  },
];

export default function StayConnected() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 mb-section">
      <div className="rounded-md bg-gradient-to-br from-white to-empactathon-primary/20 p-standard md:p-block text-center space-y-4">
        <h2 className="text-2xl font-bold text-empactathon-dark">
          Missed this cohort?
        </h2>
        <p className="text-black-mid max-w-2xl mx-auto">
          Applications for this cohort are now closed. Follow Cosog Nepal on social
          media for future programs, events, and ways to connect with our community
          across Nepal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-empactathon-primary/25 bg-white/80 px-4 py-2.5 text-empactathon-dark font-semibold text-sm hover:bg-white hover:border-empactathon-primary/45 hover:scale-[1.02] transition-all duration-200 shadow-sm"
            >
              {social.icon === "instagram" ? (
                <Instagram className="h-4 w-4 text-empactathon-primary" />
              ) : (
                <Icon
                  iconName={social.icon}
                  className="h-4 w-4 text-empactathon-primary"
                />
              )}
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
