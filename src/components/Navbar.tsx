"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon } from "./Icon";
import {
  APP_ROUTES,
  NAV_GROUPS,
  NAV_CTA,
  type NavGroup,
} from "@/lib/routes";
import CosogLogo from "@/assets/logo.png";

function isActiveHref(pathname: string, href: string) {
  if (!href.startsWith("/")) return false;

  const baseHref = href.split("#")[0];

  if (baseHref === "/") return pathname === "/";
  if (href.includes("#")) return pathname === baseHref;
  if (baseHref === "/about") return pathname === baseHref;

  return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
}

function NavDropdown({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const groupActive = group.items.some((item) => isActiveHref(pathname, item.href));

  return (
    <li className="relative group">
      <button
        type="button"
        className={`nav-link relative flex items-center gap-1 pb-1 text-sm font-semibold uppercase tracking-[0.12em] ${
          groupActive ? "text-brand" : "text-ink"
        }`}
        aria-haspopup="true"
        aria-expanded="false"
        data-active={groupActive}
      >
        {group.label}
        <span aria-hidden className="text-xs">
          ▾
        </span>
      </button>
      <ul className="mt-2 md:mt-0 md:absolute md:left-0 md:top-full md:min-w-[16rem] md:pt-2 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:group-focus-within:opacity-100 md:group-focus-within:visible transition-[opacity,visibility,transform] duration-[var(--dur-slow)] ease-[var(--ease)] md:z-[70] md:translate-y-2 md:group-hover:translate-y-0 md:group-focus-within:translate-y-0">
        <div className="md:bg-surface md:border md:border-rule md:rounded-lg md:shadow-[0_12px_32px_-8px_rgba(46,46,46,0.12)] md:py-3 md:px-2 pl-5 md:pl-2 space-y-0.5 md:space-y-0 overflow-hidden">
          {group.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className={`block rounded-md py-2 md:px-4 md:py-3 text-[12px] md:text-sm font-semibold uppercase tracking-[0.08em] leading-snug hover:text-brand md:hover:bg-brand-wash transition-colors duration-[var(--dur-fast)] ease-[var(--ease)] ${
                  isActiveHref(pathname, item.href)
                    ? "text-brand md:bg-brand-wash"
                    : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </li>
  );
}

function NavLinkItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavGroup["items"][number];
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        className={`nav-link relative pb-1 text-sm font-semibold uppercase tracking-[0.12em] ${
          isActiveHref(pathname, item.href) ? "text-brand" : "text-ink"
        }`}
        data-active={isActiveHref(pathname, item.href)}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className="fixed top-3 left-3 z-[60] bg-surface rounded-full md:hidden h-10 w-10 flex items-center justify-center border border-rule shadow-sm"
        onClick={() => setNavActive(!navActive)}
        aria-label={navActive ? "Close menu" : "Open menu"}
      >
        {!navActive ? (
          <Icon iconName="navopen" className="h-5 w-5" />
        ) : (
          <Icon iconName="close" className="h-5 w-5" />
        )}
      </button>

      <nav
        className={`md:sticky fixed left-0 top-0 overflow-hidden md:overflow-visible z-40 w-full ${
          !navActive ? "pointer-events-none md:pointer-events-auto" : "pointer-events-auto"
        }`}
      >
        <div
          className={`${
            !navActive ? "-translate-y-full" : "translate-y-0"
          } relative w-full h-screen md:h-auto md:translate-y-0 overflow-y-auto md:overflow-visible bg-paper md:bg-paper/95 md:backdrop-blur-sm border-b ${
            scrolled
              ? "border-transparent shadow-sm md:shadow-[0_1px_3px_rgba(46,46,46,0.06),0_8px_24px_-12px_rgba(46,46,46,0.08)]"
              : "border-rule/80"
          } transition-[box-shadow,border-color] duration-[var(--dur-base)] ease-[var(--ease)]`}
        >
          <div className="max-w-content mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between md:h-[84px] py-5 md:py-0 gap-6">
            <Link
              href={APP_ROUTES.HOME}
              onClick={() => setNavActive(false)}
              className="flex items-center gap-2 shrink-0"
            >
              <Image src={CosogLogo} height={40} width={40} alt="Cosog Nepal" />
              <span className="font-display font-semibold text-ink hidden sm:inline">
                Cosog Nepal
              </span>
            </Link>

            <ul className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 pb-8 md:pb-0">
              <li>
                <Link
                  href={APP_ROUTES.HOME}
                  onClick={() => setNavActive(false)}
                  className={`nav-link relative pb-1 text-sm font-semibold uppercase tracking-[0.12em] ${
                    pathname === "/" ? "text-brand" : "text-ink"
                  }`}
                  data-active={pathname === "/"}
                >
                  Home
                </Link>
              </li>
              {NAV_GROUPS.map((group) =>
                group.items.length === 1 ? (
                  <NavLinkItem key={group.label} item={group.items[0]} pathname={pathname} onNavigate={() => setNavActive(false)} />
                ) : (
                  <NavDropdown key={group.label} group={group} pathname={pathname} onNavigate={() => setNavActive(false)} />
                )
              )}
              <NavLinkItem item={NAV_CTA} pathname={pathname} onNavigate={() => setNavActive(false)} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
