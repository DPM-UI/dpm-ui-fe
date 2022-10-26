/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: {
        1: "#000000",
        2: "#333333"
      },
      blue: {
        1: "#3694A3",
        2: "#23597B",
        sky: "#9AF1FF",
        baby: "#CEF8FF",
      },
      green: {
        1: "#3ACAAF",
        2: "#257E7E",
        pastel: "B3F8EB"
      },
      grey: {
        dark: "#4C4C4C",
        DEFAULT: "#66666"
      },
      "light-cyan": "#F5F9FA",
    },
    fontFamily: {

      "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],

    },
    extend: {},
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "994px",
      wide: "1537px",
    },
  },

  plugins: [],
};
