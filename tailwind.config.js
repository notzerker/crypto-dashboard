module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1F1D19",
        light: "#312E27",
        primary: "#0E7AE8",
        secondary: "#E70D73",
        gray: "#C4BCBA",
      },
    },
  },
  plugins: [],
};
