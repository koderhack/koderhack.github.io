/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Poppins', 'sans-serif']
      },
      colors: {
        cyber: {
          bg: "#18181b",
          accent: "#00ffe7",
          neon: "#00ffe7" // niebieski neon
        }
      }
    }
  },
  plugins: []
}
