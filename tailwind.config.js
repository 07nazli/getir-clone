/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        0.1: "0.063rem",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      }),
      backgroundColor: (theme) => ({
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
      }),
    },
  },
  plugins: [],
};
