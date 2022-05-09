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
        dark: "#191b1f",
        light: "#272B31",
        primary: "#0DE782",
        secondary: "#E70D73",
        gray: "#b9c1c3",
      },
    },
  },
  plugins: [],
};
