/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        smartOrange: "#F15A22",
        smartGray: "#556987",
        smartBlack: "#333333",
        smartPurple: "#6563FF",
        smartBlue: "#2F80ED",
        smartGrayBg: "#F7F8F9",
        smartgraybutton: "#3A475B",
        smartFooterBg: "#1C232D",
        smartFooter: "#EEEFF4",
      },

      fontFamily: {
        urbanist: ["Urbanist", "sans - serif"],
      },
      fontSize: {
        40: "2.75rem",
        28: "1.75rem",
      },
    },
  },
  plugins: [],
};
