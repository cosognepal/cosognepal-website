export type DesignTokens = {
  colors: {
    ink: string;
    inkMuted: string;
    paper: string;
    surface: string;
    rule: string;
    brand: string;
    brandHover: string;
    brandWash: string;
    accent: string;
    accentWash: string;
    white: string;
  };
  fontFamily: {
    display: string;
    body: string;
  };
  fontSize: {
    sm: [string, { lineHeight: string }];
    base: [string, { lineHeight: string }];
    lg: [string, { lineHeight: string }];
    xl: [string, { lineHeight: string }];
    "2xl": [string, { lineHeight: string }];
    "3xl": [string, { lineHeight: string; letterSpacing: string }];
    display: [string, { lineHeight: string; letterSpacing: string }];
  };
  spacing: Record<
    "0" | "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12" | "16" | "20" | "24",
    string
  >;
  borderRadius: {
    DEFAULT: string;
    lg: string;
    full: string;
  };
  boxShadow: {
    sm: string;
    md: string;
    lg: string;
  };
  maxWidth: {
    content: string;
    prose: string;
    lead: string;
  };
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  motion: {
    ease: string;
    fast: string;
    base: string;
    slow: string;
  };
};
