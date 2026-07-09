import Button from "@/components/ui/Button";
import type { CTA } from "@/content/types";

type CTABannerProps = {
  heading: string;
  cta: CTA;
  subtext?: string;
};

export default function CTABanner({ heading, cta, subtext }: CTABannerProps) {
  return (
    <section className="bg-brand text-white py-12 md:py-16">
      <div className="max-w-content mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-display font-bold text-xl md:text-2xl">
            {heading}
          </h2>
          {subtext && <p className="text-white/90">{subtext}</p>}
        </div>
        <Button
          href={cta.href}
          className="bg-white text-brand hover:bg-surface-alt border-white shrink-0"
          {...(cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {cta.label}
        </Button>
      </div>
    </section>
  );
}
