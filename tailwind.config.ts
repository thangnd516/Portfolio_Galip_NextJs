import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F9FC",
        "bg-alt": "#EDF3F9",
        surface: "#FFFFFF",
        ink: "#0F2A43",
        "ink-soft": "#3A5670",
        "ink-faint": "#7691A8",
        primary: "#2E6BA6",
        "primary-dark": "#1F4E7A",
        "primary-light": "#4A85BE",
        accent: "#8FC1E3",
        "accent-soft": "#DCEBF7",
        line: "#D7E4EF",
      },
      fontFamily: {
        display: ["var(--font-plex-sans)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(#D7E4EF 1px, transparent 1px), linear-gradient(90deg, #D7E4EF 1px, transparent 1px)",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35", r: "4" },
          "50%": { opacity: "1", r: "6" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 1.2s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
