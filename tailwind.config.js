/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-text-color": "var(--primary-text-color)",
        "primary-link-hover-color": "var(--primary-link-hover-color)",
      },
    },
  },
  plugins: [],
};
