/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0908",
        bone: "#e8e2d6",
        smoke: "#8a8378",
        gold: "#c9a15c",
        blood: "#a3282a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: { widest2: "0.35em" },
    },
  },
  plugins: [],
};
