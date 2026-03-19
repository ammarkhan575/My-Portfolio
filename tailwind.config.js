/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: "#334155",
        muted: "#64748b",
        mist: "#f4f8fb",
        paper: "#ffffff",
        line: "#dbe4ec",
        accent: "#0f766e",
        "accent-soft": "#14b8a6",
        sun: "#f59e0b",
        "sun-soft": "#fde68a",
      },
      animation: {
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        soft: "0 20px 50px -28px rgba(15, 23, 42, 0.45)",
      },
      backgroundImage: {
        "accent-stripe":
          "linear-gradient(120deg, rgba(15,118,110,0.18), rgba(245,158,11,0.12))",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1536px",
    },
  },
  plugins: [],
};