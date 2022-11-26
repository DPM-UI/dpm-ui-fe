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
        pastel: "#B3F8EB"
      },
      grey: {
        dark: "#4C4C4C",
        DEFAULT: "#666666"
      },
      "light-cyan": "#F5F9FA",
      white: "#FFFFFF",
      error: "#EB5757",
      success: "#3ACAAF"
    },
    container: {
      center: true,
    },
    fontFamily: {
      "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "slide-in-back-center": "slide-in-back-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      }, keyframes: {
        "slide-in-back-center": {
          "0%": {
            transform: "translateZ(600px)",
            opacity: "0"
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1"
          }
        }
      }
    },
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "994px",
      wide: "1537px",
    },
  },

  plugins: [],
};
