import Image from "next/image";
import type { Partner } from "@/content/types";
import Container from "@/components/ui/Container";

type LogoWallProps = {
  partners: Partner[];
};

export default function LogoWall({ partners }: LogoWallProps) {
  return (
    <section aria-label="Partners and supporters" className="py-12 md:py-16 bg-paper">
      <Container className="space-y-8">
        <h2 className="font-display font-semibold text-2xl text-ink text-center tracking-[-0.015em]">
          Partners &amp; Supporters
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => {
            const hasLogo = partner.logo && partner.logo !== "";

            const tile = (
              <div
                key={partner.id}
                className="partner-logo-tile w-36 h-36 flex items-center justify-center bg-surface rounded-lg p-4 border border-rule transition-[border-color,box-shadow,transform,background-color] duration-[var(--dur-base)] ease-[var(--ease)]"
              >
                {hasLogo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="logo-mark object-contain max-h-24 w-auto"
                  />
                ) : (
                  <span className="text-sm font-semibold text-ink-muted text-center leading-tight">
                    {partner.name}
                  </span>
                )}
              </div>
            );

            if (partner.url) {
              return (
                <a
                  key={partner.id}
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  title={partner.name}
                  className="group block"
                >
                  {tile}
                </a>
              );
            }

            return tile;
          })}
        </div>
      </Container>
    </section>
  );
}
