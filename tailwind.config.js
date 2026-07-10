/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070606",    // buio di sala
        bone: "#d6cfc0",   // avorio, luce di scena
        smoke: "#7a7264",  // testo secondario
        gold: "#9a7a33",   // ottone spento
        blood: "#701c1f",  // velluto scuro
        paper: "#d6cfc0",
        navy: "#0d1024",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        circus: ["var(--font-circus)", "serif"],
      },
      letterSpacing: { widest2: "0.35em" },
    },
  },
  plugins: [],
};
