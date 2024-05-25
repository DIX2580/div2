/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        // You can add more font families here if needed
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      sky: require('tailwindcss/colors').sky, // formerly 'lightBlue'
        stone: require('tailwindcss/colors').stone, // formerly 'warmGray'
        neutral: require('tailwindcss/colors').neutral, // formerly 'trueGray'
        gray: require('tailwindcss/colors').gray, // formerly 'coolGray'
        slate: require('tailwindcss/colors').slate, // formerly 'blueGray'
    },
  },
  plugins: [],
};
