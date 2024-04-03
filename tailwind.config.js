/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Anta: ["Anta", "sans-serif"],
        Audiowide: ["Audiowide", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        MontserratAlternate: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        primaryBg: "#FFFFFF",
        primaryText: "#000000",
        navbarBg: "#511DC9",
        brandColor: "#32127A",
        buttonColor: "#8C00FF",
        borderColor: "#C0C0C0",
        subTitleColor: "#536878",
      },
      screens: {
        sm: "320px", //small mobile
        med: "375px", //medium mobile
        l: "425px", //large mobile
        tab: "768px", //tablets
        laptop: "1024px", //normal laptop
        xlarge: "1440px", //large laptop
        xxlarge: "2560px", //extra large(4K) screens
      },
    },
  },
  plugins: [],
};
