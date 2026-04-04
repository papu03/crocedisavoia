/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // === CORE PALETTE (Heritage Sanctuary) ===
        "primary":                    "#552c00",
        "on-primary":                 "#ffffff",
        "primary-container":          "#704214",
        "on-primary-container":       "#fefae8",
        "secondary":                  "#52634f",
        "on-secondary":               "#ffffff",
        "secondary-container":        "#d5e8cf",
        "on-secondary-container":     "#101f10",
        "tertiary":                   "#7a5900",
        "tertiary-container":         "#644819",
        "on-tertiary-container":      "#ffdeae",
        "tertiary-fixed":             "#ffdeae",
        "tertiary-fixed-dim":         "#e8c086",
        "on-tertiary-fixed":          "#281800",

        // === SURFACE TOKENS ===
        "surface":                    "#fefae8",
        "on-surface":                 "#1d1c12",
        "surface-variant":            "#ede0d4",
        "on-surface-variant":         "#51443a",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f8f4e3",
        "surface-container":          "#f2eed8",
        "surface-container-high":     "#ece8d3",
        "surface-container-highest":  "#e6e3d2",
        "surface-dim":                "#dedaca",
        "surface-bright":             "#fefae8",
        "inverse-surface":            "#323027",
        "inverse-on-surface":         "#f5f1e0",
        "inverse-primary":            "#fbb980",

        // === OUTLINE ===
        "outline":                    "#857468",
        "outline-variant":            "#d6c3b6",

        // === ERROR ===
        "error":                      "#ba1a1a",
        "on-error":                   "#ffffff",
        "error-container":            "#ffdad6",

        // === SCRIM / SHADOW ===
        "scrim":                      "#000000",
        "shadow":                     "#000000",
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body:     ["Newsreader", "serif"],
        label:    ["Newsreader", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm:   "0.25rem",
        md:   "0.375rem",
        lg:   "0.5rem",
        xl:   "0.75rem",
        "2xl":"1rem",
        "3xl":"1.5rem",
        full: "9999px",
      },
      boxShadow: {
        sm:   "0 2px 8px rgba(81, 68, 58, 0.06)",
        DEFAULT: "0 4px 16px rgba(81, 68, 58, 0.08)",
        md:   "0 6px 20px rgba(81, 68, 58, 0.10)",
        lg:   "0 8px 30px rgba(81, 68, 58, 0.12)",
        xl:   "0 12px 40px rgba(81, 68, 58, 0.14)",
        "2xl":"0 20px 60px rgba(81, 68, 58, 0.18)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast:    "150ms",
        slow:    "500ms",
        slower:  "800ms",
        slowest: "1200ms",
      },
      transitionTimingFunction: {
        DEFAULT:   "cubic-bezier(0.4, 0, 0.2, 1)",
        peaceful:  "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};
