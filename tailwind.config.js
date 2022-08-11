/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NunitoBlack: ["NunitoBlack", "sans-serif"],
        NunitoLight: ["NunitoLight", "sans-serif"],
      },
      colors: {
        LightModeInput: '#858585',
        LightModeBackground: '#FAFAFA',
        LightModeText: '#111517',
        DarkModeElements: '#333E48',
        DarkModeBackground: '#2B3945',
      },
    },
  },
  plugins: [],
}
