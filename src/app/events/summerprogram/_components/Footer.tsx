import { Icon } from "@/components/Icon";
import { Instagram } from "lucide-react";

const NAV_COLUMNS = [
  {
    title: "Home",
    links: [
      { label: "About", href: "#about" },
      { label: "Mentors", href: "#mentors" },
      { label: "General Timeline", href: "#general-timeline" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
  {
    title: "Links",
    links: [
      { label: "All Links", href: "/links" },
      { label: "Instagram", href: "https://instagram.com/cosognepal" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/cosognepal/" },
      { label: "Facebook", href: "https://www.facebook.com/Cosognepal" },
    ],
  },
  {
    title: "Other links",
    links: [
      { label: "Home page", href: "https://cosognepal.org/" },
      { label: "Programs", href: "https://cosognepal.org/programs" },
      { label: "Past events", href: "https://cosognepal.org/programs" },
      { label: "Contact", href: "https://cosognepal.org/contact" },
    ],
  }
];

export default function Footer() {
  return (
    <footer className="relative mt-section overflow-hidden rounded-t-[24px] bg-[#0a5ea9] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f74ca]/40 to-[#0a5ea9]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-standard py-block md:py-section pb-24 md:pb-28 space-y-standard">
        <div className="grid gap-standard md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">Address:</h3>
            <p className="text-sm text-white/85 max-w-[260px]">
              Kathmandu, Nepal
              <br />
              Coding for Social Good Nepal
            </p>

            <div className="space-y-2 pt-3">
              <h3 className="text-lg font-bold uppercase tracking-wide">Contact:</h3>
              <a
                href="mailto:contact@cosognepal.org"
                className="block text-sm text-white/85 hover:text-white transition-colors duration-200"
              >
                contact@cosognepal.org
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/Cosognepal"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Icon
                  iconName="facebook"
                  className="h-5 w-5 opacity-85 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
                />
              </a>
              <a
                href="https://www.instagram.com/cosognepal"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white/90 hover:text-white transition-colors duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/cosognepal/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon
                  iconName="linkedin"
                  className="h-5 w-5 opacity-85 hover:opacity-100 transition-opacity duration-200 brightness-0 invert"
                />
              </a>
            </div>
          </div>

          {NAV_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-lg font-bold uppercase tracking-wide">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/85 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative pt-5">
          <p className="text-[clamp(2rem,10vw,7.5rem)] leading-none font-extrabold text-white/15 select-none">
            Cosog Summer Camp
          </p>
          <p className="text-xs md:text-sm text-white/80 mt-2">
            © {new Date().getFullYear()} Coding for Social Good Nepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
