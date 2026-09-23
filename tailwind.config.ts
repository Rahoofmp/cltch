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
        black: "var(--black)",
        white: "var(--white)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-bright": "var(--accent-bright)",
        muted: "var(--muted)",
        border: "var(--border)",
        surface: "var(--surface)",
        background: "var(--black)",
        foreground: "var(--white)",
        input: "var(--surface)",
        ring: "var(--accent)",
        "muted-foreground": "var(--muted)",
        "accent-foreground": "var(--white)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
