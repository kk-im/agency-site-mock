/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        drafting: ["Drafting", "monospace"],
      },
      backgroundImage: {
        "hero-img": 'url("@/hero.png")',
      },
    },
  },
  plugins: [],
};
