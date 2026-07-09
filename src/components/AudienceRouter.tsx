import Link from "next/link";

type AudienceRouterProps = {
  options: { label: string; href: string; external?: boolean }[];
};

export default function AudienceRouter({ options }: AudienceRouterProps) {
  const itemClass =
    "flex items-center justify-center px-5 py-4 text-center rounded-lg border border-rule bg-surface-alt text-sm font-semibold text-near-black hover:border-brand hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

  return (
    <section aria-label="Find your path" className="py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 space-y-6">
        <h2 className="font-display font-bold text-2xl text-near-black text-center">
          How do you want to get involved?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {options.map((option) =>
            option.external || option.href.startsWith("http") ? (
              <a
                key={option.href}
                href={option.href}
                target="_blank"
                rel="noreferrer"
                className={itemClass}
              >
                {option.label}
              </a>
            ) : (
              <Link key={option.href} href={option.href} className={itemClass}>
                {option.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
