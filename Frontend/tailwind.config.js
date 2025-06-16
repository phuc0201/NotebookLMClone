/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22262b",
        "text-color-primary": "#e4e4e7",
      },
    },
  },
  plugins: [],
};
