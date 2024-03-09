/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        "brand-color": "#4c3398",
      }),
    },
  },
  plugins: [],
};
