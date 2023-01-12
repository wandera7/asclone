/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#153462',
          200:'#432C7A',
          300:'#001253',
          400:'#00005C'
        }
      },
      fontFamily:{
        signature: ["Robot"],
      }
    },
  },
  plugins: [],
}
