/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        gradient: `linear-gradient(90deg, rgba(131, 58, 180, 0.216) 0%, rgba(253, 29, 29, 0.134) 50%, rgba(252, 176, 69, 0.245)`,
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dracula"],
  },
};
