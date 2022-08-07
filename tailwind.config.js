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
        LightModeInput: 'hsl(0, 0%, 52%)',
        LightModeBackground: 'hsl(0, 0%, 98%)',
        LightModeText: 'hsl(200, 15%, 8%)',
        DarkModeElements: 'hsl(209, 23%, 22%)',
        DarkModeBackground: 'hsl(207, 26%, 17%)',
      },
    },
  },
  plugins: [],
}
