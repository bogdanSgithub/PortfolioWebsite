const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        background: "#1b1a17",
        secondBackground: "#21201c",
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
