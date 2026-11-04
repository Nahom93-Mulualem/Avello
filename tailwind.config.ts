import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F3EB",
        sand: "#E8DFD1",
        surface: "#FFFFFF",
        ink: "#292C27",
        "ink-soft": "#434843",
        primary: "#354B3B",
        "primary-deep": "#1F3426",
        "on-primary": "#FFFFFF",
        secondary: "#A8573A",
        "secondary-soft": "#C98262",
        "on-secondary": "#FFFFFF",
        tertiary: "#879477",
        "tertiary-tint": "#E3E8DA",
        amber: "#F0B35A",
        outline: "#C3C8C1",
        error: "#BA1A1A",
      },
      fontFamily: {
        serif: ["'Newsreader'", "Georgia", "serif"],
        sans: ["'DM Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Newsreader'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["64px", { lineHeight: "70px", letterSpacing: "-0.02em", fontWeight: "400" }],
        "display-xl-mobile": ["40px", { lineHeight: "46px", letterSpacing: "-0.015em", fontWeight: "400" }],
        "headline-lg": ["42px", { lineHeight: "50px", letterSpacing: "-0.015em", fontWeight: "400" }],
        "headline-lg-mobile": ["30px", { lineHeight: "38px", fontWeight: "400" }],
        "headline-sm": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "title-md": ["17px", { lineHeight: "24px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "25px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
      },
      borderRadius: {
        md: "12px",
        lg: "16px",
        xl: "24px",
        hero: "28px",
        full: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-desktop": "2.5rem",
        margin: "1.25rem",
        "margin-tablet": "2.5rem",
        "margin-desktop": "4rem",
        "section-gap": "6.5rem",
        "section-gap-mobile": "4rem",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        level1: "0 4px 20px -2px rgba(41, 44, 39, 0.05)",
        level2: "0 12px 32px -4px rgba(41, 44, 39, 0.10)",
        level3: "0 24px 48px -8px rgba(41, 44, 39, 0.14)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
