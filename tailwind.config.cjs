/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DesDarkCyan: 'hsl(180, 29%, 50%)',
        LightGrayCyanBg: 'hsl(180, 52%, 96%)',
        LightGrayCyanFb: 'hsl(180, 31%, 95%)',
        DarkGrayCyan: 'hsl(180, 8%, 52%)',
        VeryDarkGrayCyan: 'hsl(180, 14%, 20%)'
      }
    },
  },
  plugins: [],
}
