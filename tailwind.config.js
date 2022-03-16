module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#32a6e4",
      blue: "#74ccef",
      purple: "#c957d3",
      white: "#ffffff",
      black: "#000000",
      red: "#ff0000",
      gray: "#121212",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
