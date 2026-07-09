import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded font-body font-semibold transition-[background-color,transform,box-shadow,border-color,color] duration-[var(--dur-base)] ease-[var(--ease)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-hover hover:-translate-y-px hover:shadow-[0_4px_12px_-2px_rgba(22,69,122,0.3)] active:translate-y-0 active:duration-75",
  secondary:
    "bg-transparent text-ink border border-rule hover:bg-brand-wash hover:border-brand",
};

const sizeStyles: Record<Size, string> = {
  md: "text-sm px-5 py-3",
  lg: "text-base px-8 py-4",
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
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (isAnchor(props)) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props;
    void _v;
    void _s;
    void _c;
    void _ch;

    if (href.startsWith("http") || href.startsWith("mailto:")) {
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
  void _v;
  void _s;
  void _c;
  void _ch;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
