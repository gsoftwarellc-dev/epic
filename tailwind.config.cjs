/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        epicPurple: "#7c3aed",
        epicOrange: "#f97316",
        epicGreen: "#22c55e",
        epicPink: "#ec4899",
        epicBlue: "#0ea5e9",
        cream: "#fff7ed",
        terminatorRed: "#c1121f",
        terminatorBrown: "#3b2416",
        terminatorDirt: "#7a4b2a",
      },
      boxShadow: {
        bounce: "0 18px 50px rgba(124, 58, 237, 0.18)",
        warm: "0 18px 45px rgba(249, 115, 22, 0.2)",
        terminator: "0 18px 50px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
