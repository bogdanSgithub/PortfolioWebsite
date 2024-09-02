const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1b1a17",
        primary: "#c78e35",
        firstText: "#d8dad5",
        secondText: "#b3b5b0",
      },
    },
    fontFamily: {
      sans: [
        '"Calibre"',
        '"Inter"',
        "San Francisco",
        "SF Pro Text",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [],
};
