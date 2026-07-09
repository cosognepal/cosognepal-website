import { FOOTER_LINKS } from "@/lib/routes";
import Link from "next/link";
import Image from "next/image";

import CosogLogo from "@/assets/logo.png";
import InstagramLogo from "@/assets/instagram_logo.svg";
import FacebookLogo from "@/assets/facebook_logo.svg";
import LinkedInLogo from "@/assets/linkedin_logo.svg";
import GmailLogo from "@/assets/gmail_logo.svg";

export default function Footer() {
  return (
    <footer className="mt-section bg-surface-alt w-full py-12 border-t border-border">
      <div className="max-w-content mx-auto px-4 flex flex-col sm:flex-row gap-8 items-start">
        <Image src={CosogLogo} width={80} height={80} alt="Cosog Nepal logo" />
        <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
          <aside className="space-y-3">
            <p className="font-semibold text-lg text-near-black">
              Coding for Social Good Nepal
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm text-muted">
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="hover:text-brand"
                >
                  {item.label}
                  {item.external && (
                    <span className="ml-1" aria-hidden>
                      ↗
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </aside>

          <aside className="flex flex-col space-y-3">
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Cosognepal"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={FacebookLogo}
                  width={28}
                  height={28}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/cosognepal"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={InstagramLogo}
                  width={28}
                  height={28}
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/cosognepal/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={LinkedInLogo}
                  width={28}
                  height={28}
                  alt="LinkedIn"
                />
              </a>
              <a
                href="mailto:contact@cosognepal.org"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={GmailLogo} width={28} height={28} alt="Email" />
              </a>
            </div>
            <p className="text-sm text-muted">contact@cosognepal.org</p>
            <p className="text-sm text-muted">
              ©2026 cosognepal.org — All rights reserved.
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
}

