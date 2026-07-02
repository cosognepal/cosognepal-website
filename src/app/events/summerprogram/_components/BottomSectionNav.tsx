const SECTION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#the-six-projects" },
  { label: "Mentors", href: "#mentors" },
  { label: "Timeline", href: "#general-timeline" },
  { label: "Sessions", href: "/sessions" },
  { label: "FAQs", href: "#faqs" },
];

export default function BottomSectionNav() {
  return (
    <nav
      aria-label="Summer camp sections"
      className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="flex items-center gap-1 rounded-xl border border-[#1B5E20]/15 bg-white px-2 py-1.5 shadow-[0_2px_8px_rgba(27,94,32,0.06)]">
        {SECTION_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium text-black-mid transition-colors duration-200 hover:text-[#1B5E20]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
