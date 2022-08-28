/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        sari : "#F37F17",
        yazi : "#C9C9C9",
        yazisolgun : "#A7A7A7",
        arkaplan : "#181818"
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
