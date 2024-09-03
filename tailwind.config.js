const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1b1a17",
        primary: "#daa520",
        firstText: "#d8dad5",
        secondText: "#949494",
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
