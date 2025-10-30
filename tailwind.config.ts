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
        // New "cool gray" dark mode palette
        background: "#18181b", // zinc-900
        foreground: "#f4f4f5", // zinc-100
        primary: "#27272a", // zinc-800
        secondary: "#3f3f46", // zinc-700
        accent: "#3b82f6", // blue-500
        "accent-foreground": "#f4f4f5", // zinc-100 (for text on accent)
      },
      cursor: {
        default: "url(/images/logos/hackprinceton_cursor.png) 8 8, auto",
      },
      fontFamily: {
        primary: ["var(--font-public-sans)", "sans-serif"],
        secondary: ["var(--font-dm-sans)", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      backgroundImage: {
        "dot-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
      },
      backgroundSize: {
        "dot-sm": "1rem 1rem",
      },
    },
  },
  plugins: [],
};
export default config;
