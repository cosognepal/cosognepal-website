const SECTION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Mentors", href: "#mentors" },
  { label: "General Timeline", href: "#general-timeline" },
  { label: "FAQs", href: "#faqs" },
];

export default function BottomSectionNav() {
  return (
    <nav
      aria-label="Summer camp sections"
      className="hidden md:flex fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="flex items-center gap-2 rounded-xl border border-empactathon-primary/20 bg-white/90 backdrop-blur-md shadow-md px-3 py-2">
        {SECTION_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-block rounded-md px-4 py-2 text-sm font-semibold text-black-mid transition-colors duration-200 hover:text-empactathon-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
