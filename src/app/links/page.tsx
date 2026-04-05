const APPLICATION_LINKS = [
  {
    label: "Mentor Application Link",
    href: process.env.SUMMER_PROGRAM_MENTOR_APPLICATION_LINK ?? "#",
  },
  {
    label: "Co-mentor Application Link",
    href: process.env.SUMMER_PROGRAM_CO_MENTOR_APPLICATION_LINK ?? "#",
  },
  {
    label: "Mentee application link",
    href: process.env.SUMMER_PROGRAM_MENTEE_APPLICATION_LINK ?? "#",
  },
  {
    label: "Website",
    href: process.env.SUMMER_PROGRAM_WEBSITE_LINK ?? "#",
  },
];

const isVisibleLink = (href: string) => {
  const normalized = href.trim();
  return normalized.length > 0 && normalized !== "#";
};

export default function LinksPage() {
  const visibleLinks = APPLICATION_LINKS.filter((link) => isVisibleLink(link.href));

  return (
    <main className="w-full max-w-[900px] mx-auto px-standard py-section space-y-standard">
      <header className="space-y-3 text-center">
        <h1 className="text-sub-title md:text-title font-bold text-empactathon-dark">
          Important Links
        </h1>
        <p className="text-black-mid">
          Find all official application links for the Summer Camp below.
        </p>
      </header>

      {visibleLinks.length > 0 ? (
        <section className="grid gap-4">
          {visibleLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-md border border-empactathon-primary/20 bg-white p-5 md:p-6 flex items-center justify-between gap-4 hover:border-empactathon-primary/40 hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-black-dark">{link.label}</span>
              <span className="text-sm md:text-base text-empactathon-primary font-medium">
                Open
              </span>
            </a>
          ))}
        </section>
      ) : (
        <p className="text-center text-black-mid">
          Links will be published here soon.
        </p>
      )}
    </main>
  );
}
