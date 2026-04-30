import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-blue-blue",
  ghost:
    "bg-transparent text-black-dark border border-black-dark/15 hover:border-black-dark/40 hover:text-black-dark",
};

const sizeStyles: Record<Size, string> = {
  md: "text-sub-para px-6 py-3",
  lg: "text-para px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    asLink?: boolean;
  };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

function isAnchor(props: AnchorProps | ButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === "string";
}

export default function Button(props: AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (isAnchor(props)) {
    const { href, asLink, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v; void _s; void _c; void _ch;

    if (asLink === false || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a className={classes} href={href} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  void _v; void _s; void _c; void _ch;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
